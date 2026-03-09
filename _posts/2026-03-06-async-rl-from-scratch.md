---
layout: post
title: "Async RL from Scratch on TPUs"
authors:
- Kevin Li, Ahmed Ahmed, Christopher Chou, Russell Power, Romain Yon, David Hall, Percy Liang
date: 2026-03-06
categories: blog
---

Reinforcement learning (RL) is a powerful paradigm with a rich history that builds decision making systems which learn from experience to maximize a reward [[1]](#ref1)[[2]](#ref2). For LLMs it is a key post-training stage that was originally used to create instruction following models [[3]](#ref3)[[4]](#ref4) and more recently has seen a lot of interest for boosting model performance on verifiable tasks like math and code [[5]](#ref5). The most famous open-weight model arguably gained its notoriety due to its performance after RL [[6]](#ref6), so it was a natural next step for us after we successfully pretrained a 32B model in October 2025. Unfortunately at the time the open-source RL ecosystem for Jax/TPUs was nascent. There was some scattered work on RL agents, but building a robust RL pipeline for LLMs is quite involved, requiring balancing sampling, training and weight synchronization with many decisions [[7]](#ref7). None of the existing frameworks gracefully handled pre-emption which is critical for our setting.

<details>
<summary>For the curious, here are prior RL repos and why we didn't use them</summary>

To build Marin RL, we needed more than "a PPO implementation in JAX." We needed LLM post-training rather than classic control, TPU-first execution, asynchronous actor/trainer separation, fast weight sync, high end-to-end throughput, custom reward/verifier logic for math and code, and checkpointing with restart on preemptible TPU jobs. One important constraint: it was much easier for us to use smaller preemptible TPU slices and many small inference workers than to reserve one large stable TPU job, which pushed us toward a looser worker-based design.

Stars below are GitHub stars as of March 9, 2026.

**[Tunix](https://github.com/google/tunix)** (~2.2k stars) — The closest open-source match to "LLM RL in JAX on TPUs." It supports PPO/GRPO-style methods, TPU execution, and checkpoint-and-resume. However, the async/disaggregated pieces only arrived incrementally through late September and October 2025, and in fall 2025 it did not yet look like a mature async RL base. Its disaggregated mode is also a fairly tight sub-mesh TPU job, whereas we wanted a looser worker-based async design with smaller preemptible slices.

**[Brax](https://github.com/google/brax)** (~3.1k stars) — Probably the most widely known JAX RL project with maintained PPO/SAC/ARS training code. However, it is fundamentally centered on physics simulation and classic RL environments, not LLM post-training. It does not provide the trainer/actor/reference/reward/verifier decomposition needed for LLM RL.

**[RLax](https://github.com/google-deepmind/rlax)** (~1.4k stars) — A canonical DeepMind JAX RL package with reusable building blocks. Useful primitives, but not a full system—it does not provide a rollout system, async trainer/actor architecture, or TPU-native LLM post-training workflow.

**[PureJaxRL](https://github.com/luchris429/purejaxrl)** (~1.0k stars) — Fast end-to-end JAX with PPO and a strong reference for compact high-performance JAX RL loops. But it presents itself more as a research/reference codebase built around standard RL environments, not LLM post-training.

**[Stoix](https://github.com/EdanToledo/Stoix)** (~400 stars) — One of the more serious JAX RL systems codebases, with explicit distributed execution patterns like Anakin and Sebulba. Interesting systems inspiration, but still a single-agent RL research codebase centered on standard RL environments.

**[Rejax](https://github.com/keraJLi/rejax)** & **[EvoRL](https://github.com/EMI-Group/evorl)** (~260-270 stars each) — Real JAX RL libraries with PPO support, but both are much closer to standard RL training than LLM post-training. Neither provides the async LLM rollout + training + verifier stack we needed.

**RLAX (Apple)** ([paper](https://arxiv.org/abs/2512.06392), related repo: [AXLearn](https://github.com/apple/axlearn)) — On paper, this was the closest to what we wanted: large-scale distributed RL for LLMs on TPUs with trainer/inference separation, verifiers in the loop, and attention to weight sync and preemption. But as of March 2026, the paper is being withdrawn, there is no public RLAX repo, and the RL-specific pieces were never publicly released. It showed the problem was real, but the solution never materialized as usable open source.

The key takeaway: the open JAX RL ecosystem had many PPO implementations, but very few libraries that actually addressed TPU-native LLM RL as a systems problem.

</details>

We therefore decided to build our own Async RL pipeline from scratch. Over four months (November 2025 -- February 2026), we went from simple synthetic baselines with synchronized training to a fully asynchronous training system, fixing critical upstream bugs in open-source libraries along the way and expanding to harder benchmarks like AIME and HumanEval+. In the spirit of open development, this post shares the journey---what worked, what broke, and what we learned.

## Establishing baselines with Tinker

Before building anything new, we established baselines using [Tinker](https://github.com/marin-community/marin/issues/2016), a LoRA-based RL system running on GPU. Thankfully the folks at Thinking Machines did their due dilligence and found Lora matched full-tuning, so even though we weren't using Lora we knew matching their results should lead us to a reasonable baseline [[8]](#ref8)

We ran RL experiments over the following tasks:

- synthethic addition [more clearly define what this task is]
- GSM8K
- MATH500

(this is kind of obvious to RL practitioners and probably doesn't add much, we can just skip to interesting results)
One early finding: **model choice matters more than algorithm tuning**.
Llama 1B completely failed GSM8K (0.04 accuracy after 200 steps) but solved addition perfectly.
Meanwhile, Llama 8B Instruct jumped from 0.69 to 0.80 on GSM8K in a single step and improved from 0.26 to 0.51 on MATH in 180 steps.
This gave us confidence to focus engineering effort on the 8B model.

## Sync RL: verifying correctness against the baseline

Our first milestone was matching Tinker's results with Marin's own synchronous RL pipeline. Tinker exposes an importance-sampling policy-gradient loss that corrects for mismatch between the policy used to sample responses and the one used to train on them.
In practice, it samples several responses to the same prompt and reinforces the ones that do better than the others. We started from a similar objective in Marin, then moved to an RLOO-style loss with leave-one-out advantages.

We began with Llama 3.2 1B. We found it performed well on the synthethic experiment, but quite poorly on GSM8k (0.04 accuracy after 200 steps). Meanwhile, Llama 8B Instruct jumped from 0.69 to 0.80 on GSM8K in a single step and improved from 0.26 to 0.51 on MATH in 180 steps, so we focused our efforts on Llama 3.1 8B where we could expand substantial gains through RL.

Both Tinker and Marin's Sync RL converged to ~0.43 accuracy on MATH, though Marin took about 2x longer (80 steps vs. Tinker's 35 steps to reach 0.4).

[[AMA: Do we have evidence / an experiment for this? Seems very speculative, we can say it's a hypothesis but is there an experiment we can link?]]
The convergence gap came down to differences in early exploration behavior:
Tinker's loss started 4x higher and was far more volatile, leading to more aggressive early exploration that helped the model learn the response format sooner.

[[ AMA: I changed the mistmatch thing because tinker also acknowledges mismatch between inference and training but we probably have higher mistmatch because they figure out determinisitc generation. Also should lora vs full-tuning be a factor if we tuned our learning rate well?]]
Other contributing factors likely included LoRA vs. full fine-tuning requiring different learning rates we had to do, and a potentially larger mismatch in sample/train log-probability divergence as we are using vllm for inference and JAX for training [[9]](#ref9).
[[AMA: I took out 'deterministic' because we're still not exactly determinisitc due to mistmatch]]
Still, this was a major milestone: a sucessful reproducible RL training on TPU, confirmed across 3 independent runs.

![Marin Sync RL matches Tinker test accuracy but converges 2x slower]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/tinker.png)

<p style="text-align: center;"><em>Marin Sync RL vs. Tinker on MATH-500. Both converge to ~0.43, but Tinker gets there in half the steps. (<a href="https://wandb.ai/marin-community/marin_post_training/reports/Reproducing-Tinker-MATH-RL-baseline-in-Marin--VmlldzoxNTEzNDg3Nw">WandB report</a>)</em></p>

## Async RL: speeding up RL by decoupling training and inference

![Async RL decouples training and inference]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/sync_vs_async_rl.png)

<p style="text-align: center;"><em>Sync RL runs each stage sequentially; Async RL runs the trainer (Levanter) and actor (vLLM) concurrently with weights synced via Arrow Flight.</em></p>

Synchronous RL was a good simple first step. Unfortunately, it is quite slow as each stage  of (generate, train, eval) completes sequentially which seriously hinders throughput. We know from prior work it is possible to build a performant Async RL system [[7]](#ref7) so that was our next goal. 

In December, we built an asynchronous pipeline where the trainer (Levanter) and actor (vLLM) run concurrently, with model weights synchronized via [Arrow Flight](https://arrow.apache.org/docs/format/Flight.html). This transition required solving several infrastructure challenges:

[AMA: Kevin are there more PRs for weight sync that show other issues we ran into? this is the part of the code I understand the least TBD so could use your help here]
- **Weight sync**: On-policy RL works best when the actor is sampling with weights close to the trainer's current policy, so we need to push updated weights to rollout workers frequently. At LLM scale this is hard because each sync moves tens of GB, and if it is too slow you either stall rollout generation waiting for fresh weights or keep sampling from stale policies.
    We were able to improve this by added bfloat16 conversion ([PR #2388](https://github.com/marin-community/marin/pull/2388)), cutting transfer bandwidth  in half from 32GB to 16GB and transfer time from 29s to 14s.
- **In-flight updates**: In an async setup, the trainer wants to publish new weights frequently, but if the actor pauses to wait for every update then inference still becomes part of the critical path. That creates a bad tradeoff between stale policies and idle inference time. We fixed this by adding background weight-sync threads, so rollout workers wait only for the first weights and then continue sampling while newer weights are transferred and hot-reloaded in the background ([PR #2325](https://github.com/marin-community/marin/pull/2325)).
[ AMA: this isn't really an RL thing... I would remove this it's more of an idiosyncracy of the fact we're using Ray which is crappy, we should take this out]
- **Resource contention**: Coordinator actors deadlocked on CPU allocation---fixed by setting `num_cpus=0` ([PR #2350](https://github.com/marin-community/marin/pull/2350)).


The result: async RL matched sync RL quality (0.26 to 0.50 on MATH-500 in 10 steps) with a **1.21x speedup**:

| Metric | [Sync RL](https://github.com/marin-community/marin/issues/2022#issuecomment-3559259447) ([wandb](https://wandb.ai/marin-community/marin_post_training/runs/math500--20251120-083448)) | [Async RL](https://github.com/marin-community/marin/pull/2392#issuecomment-3781596530) ([wandb](https://wandb.ai/marin-community/marin_post_training/runs/llama-3.1-8bi-math-lr=2e-6-bs=1024-20260121-145333-train)) |
|---|---|---|
| **Avg iteration time** | 3.71 min | 3.07 min |
| **Iterations/minute** | 0.269 | 0.326 |
| **Median iteration** | 3.48 min | 3.02 min |
| **Min interval** | 3.07 min | 2.40 min |
| **Max interval** | 5.63 min | 3.82 min |

## Tracking down a mysterious divergence

Despite our initial success, we noticed something was wrong as training progressed. Two identical async RL runs diverged wildly after dozens of steps---one peaked at 0.514 accuracy, the other at only 0.482 before collapsing to 0.36. Training metrics (loss, KL, rewards) were consistent between runs. The divergence appeared only at inference time. ([WandB report](https://wandb.ai/marin-community/marin_post_training/reports/Async-RL-with-in-flight-updates-is-nondeterministic-with-vastly-different-test-results-and-policy-behavior-across-runs--VmlldzoxNTQzMzg5NA))

![Two async RL runs with identical configs diverged wildly]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/async_divergence.png)

<p style="text-align: center;"><em>2 async RL runs with identical configs diverged wildly after a few steps</em></p>

We systematically debugged the discrepancy, investigating the following culprits ([#2260](https://github.com/marin-community/marin/pull/2260)):

1. **Token limit?** Truncating outputs to match Tinker's `max_tokens=512` still left accuracy far above Tinker's. Not the cause.
2. **Temperature?** Running Tinker with `temp=0.0` instead of `1.0` jumped accuracy from 0.294 to 0.442---a 51% improvement. Key clue.
3. **TPU vs GPU?** Running vLLM with `temp=0` and `temp=1` on both platforms revealed the root cause: on GPU, accuracy dropped from 42.1% to 28.3% as expected, but on TPU: 40.9% vs 41.7%---**no difference at all**.

After a tireless search, we found the root cause **vLLM on TPU was silently ignoring temperature.** All prior async RL evaluations had been effectively greedy!

We traced the bug to `input_batch.py` in the [tpu-inference](https://github.com/vllm-project/vllm/tree/main/vllm) codebase:

```python
top_k = sampling_params.top_k
if top_k <= 0 or top_k >= vocab_size:
    top_k = 1  # BUG: forces greedy!
```

vLLM's docs specify that `top_k=-1` means "consider all tokens," but this code converted `-1` to `1`, selecting only the highest-probability token regardless of temperature. We filed a bug report ([tpu-inference #1386](https://github.com/vllm-project/tpu-inference/issues/1386)) which suggested a fix that got merged.

[AMA: do we have an example of the runs being stable after this? right now we're just saying 'trust me bro' would be nice to show a plot pre fix and post fix!]
This single bug explained the nondeterminism: tiny sampling differences under greedy sampling, amplified over dozens of RL steps, caused the runs to diverge. 




## Expanding to new models and benchmarks

### Qwen 2.5 support

Qwen 2.5 is very popular in the community for post-training [[11]](#ref11), so we began an effort to integrate it. Supporting Qwen 2.5 in the RL pipeline ([PR #2446](https://github.com/marin-community/marin/pull/2446), [PR #2456](https://github.com/marin-community/marin/pull/2456), [PR #2458](https://github.com/marin-community/marin/pull/2458)) required solving three issues:
the model wasn't registered in tpu-inference (forcing a slow PyTorch fallback),
the weight sync crashed due to different `q_proj` reshape logic,
and Qwen's padded vocabulary (152064 tokens for hardware alignment) conflicted with Levanter's automatic vocab resizing.

After resolving these issues, we had both a working RL pipeline and support for Qwen 2.5, which we believed was a stronger base model for AIME-style math as validated by prior work [[11]](#ref11). That let us move on to a more ambitious task: AIME.

### AIME25: harder math

MATH-500 is becoming saturated for modern models, so we moved to AIME25---the benchmark used by OLMo 3, GLM 4.7, and DeepSeek.
But AIME has only 30 questions, making evaluation extremely noisy: a single question difference shifts Pass@1 by 3%.

We addressed this by implementing a robust combinatorial Pass@k estimator (following the approach from Codex [[12]](#ref12), [lighteval](https://github.com/huggingface/lighteval), and DeepMath [[13]](#ref13)) and increasing the eval sample size K per task to 32 ([PR #2493](https://github.com/marin-community/marin/pull/2493)).

Training Qwen 2.5 7B on [DeepMath-103K](https://huggingface.co/datasets/PRIME-RL/DeepMath-103K) showed steady Pass@16 gains (reaching 0.40) but Pass@1 remained near zero after 40 steps ([PR #2441](https://github.com/marin-community/marin/pull/2441)).
[AMA do we have more concrete metrics to back this up? we should be clear when we have a hypothesis / when we are conjecturing
This suggests longer training may help---the model is learning but hasn't yet concentrated probability mass on correct solutions.

![AIME25 RL training results]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/deepmath_103k.jpg)

<p style="text-align: center;"><em>AIME25 training: Pass@16 steadily improves to 0.40, but Pass@1 remains far from the 0.175 target due to high evaluation variance.</em></p>

### HumanEval+: code

While math is an excellent playground for testing RL, code is the domain that brings the most productivity to the real world and also brings much more complexity from the real world to our RL environments. One important lesson learned while expanding Marin RL to code is to always double-check the verifier logic. Our initial accuracy was falsely ~100% because the evaluation environment executed test scripts without invoking the validation function.

![Code-R1 reproduced: HumanEval+ improved from 0.80 to 0.84]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/code_r1_fluke.jpg)

After fixing the eval, we reproduced Code-R1's results [[10]](#ref10) by training Qwen 2.5 7B Instruct with RL on 2K LeetCode questions ([PR #2286](https://github.com/marin-community/marin/pull/2286)).
HumanEval+ improved from 0.80 to 0.84 in 264 steps, closely matching Code-R1's reported 0.848 ([wandb run](https://wandb.ai/marin-community/marin_post_training/runs/qwen2.5-7bi-1m-code-r1-lr=5e-7-20260112-231710-rollout-0)). One remaining issue is we observe pass@1 started to destablize after 240 steps. This is likely because we omitted the kl divergence used in Code-R1 [[10]](#ref10).

![Code-R1 reproduced: HumanEval+ improved from 0.80 to 0.84]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/code_r1.png)

<p style="text-align: center;"><em>Code-R1 reproduction results. Marin closely matches the original paper's improvements on HumanEval+ after 264 steps.</em></p>

## What's next

For now, we are shifting our focus from RL to SFT in preparation for the next Marin model release. Future work for RL include:

- **RL infra stability for longer runs**: Both Code-R1 and AIME training destabilize after ~240 steps. We need KL regularization, pre-emption recovery, and longer training without OOM crashes.
- **Dynamic batching**: AIME25 sequences are 10x longer than MATH-500. Grouping samples by sequence length (using the Karmarkar-Karp algorithm) will minimize padding waste.
- **AIME25 Pass@1 convergence**: Closing the gap between Pass@16 (improving) and Pass@1 (stalled) through better baseline prompt alignment and extended training.

## Five lessons from building an RL pipeline from scratch

1. **Establish baselines first.** As much as we would have loved to zero-shot an Async RL pipeline, we are grateful for Tinker as the baselines saved weeks of debugging by helpiung us sanity check our Sync RL pipeline.
2. **Base model choice > algorithm tuning.** Llama 1B failed GSM8K while Llama 8B solved it in 1 step. This highlights the importance of mid-training / pre-training which we will further explore
3. **Reproduce before innovating.** Code-R1 and MATH baselines caught subtle environment and prompt bugs. [AMA This is kind of the same as point one]
4. **Evaluation needs care.** AIME25's 30 questions require multi-seed evals and careful estimators [AMA say more about this, what were we doing before? how does the new estimator make things better] [we should add a note about different prompt formatters for math 500!].
5. **Infrastructure is most of the battle.** The most performant RL algorithms today are quite simple iterations of the policy gradient. On the other hand, managing memory, logging, weight sync, and dependencies correctly and efficiently is a non-trivial systems challenge.

## Acknowledgements

Thanks to Ahmed for reviewing numerous RL PRs including loss improvements, weight transfer, Qwen support, logging, and codebase cleanup.
Thanks to Chris for getting in-flight weight sync working, integrating vLLM into the RL framework, porting the MATH environment from sync to async RL, and building vLLM cluster templates.
Thanks to Russell for laying out the infra for the RL effort and reviewing the CPU allocation fix PR that unblocked RL training.
Thanks to Romain for driving forward the RL PR and suggesting to break it down into more manageable sub-PRs.
Thanks to David for reviewing the bf16 weight transfer optimization PR and for giving numerous pointers and guidance during weekly meetings.
And thanks to Percy for helping set goals and milestones for RL to keep us on course.

## Cited Works

<a id="ref1"></a>
[1] Sutton, R.S. and Barto, A.G. (2018). [Reinforcement Learning: An Introduction](http://incompleteideas.net/book/the-book-2nd.html), 2nd Edition. MIT Press.

<a id="ref2"></a>
[2] Silver, D., Huang, A., Maddison, C. et al. (2016). [Mastering the game of Go with deep neural networks and tree search](https://www.nature.com/articles/nature16961). Nature, 529(7587), 484-489.

<a id="ref3"></a>
[3] Bai, Y., Kadavath, S., Kundu, S. et al. (2022). [Constitutional AI: Harmlessness from AI Feedback](https://arxiv.org/abs/2212.08073). arXiv:2212.08073.

<a id="ref4"></a>
[4] Ouyang, L., Wu, J., Jiang, X. et al. (2022). [Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155). NeurIPS 2022. arXiv:2203.02155.

<a id="ref5"></a>
[5] OpenAI (2024). [OpenAI o1 System Card](https://arxiv.org/abs/2412.16720). arXiv:2412.16720.

<a id="ref6"></a>
[6] DeepSeek-AI et al. (2025). [DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning](https://arxiv.org/abs/2501.12948). arXiv:2501.12948.

<a id="ref7"></a>
[7] Mistral AI et al. (2025). [Magistral](https://arxiv.org/abs/2506.10910). arXiv:2506.10910.

<a id="ref8"></a>
[8] Thinking Machines Lab (2025). [LoRA Without Regret](https://thinkingmachines.ai/blog/lora/).

<a id="ref9"></a>
[9] Zheng, C. et al. (2025). [Defeating the Training-Inference Mismatch via FP16](https://arxiv.org/abs/2510.26788). arXiv:2510.26788.

<a id="ref10"></a>
[10] Liu, J. et al. (2025). [Code-R1: Reproducing R1 for Code with Reliable Rewards](https://github.com/ganler/code-r1).

<a id="ref11"></a>
[11] Liu, Z., Chen, Z., Li, J. et al. (2025). [Understanding R1-Zero-Like Training: A Critical Perspective (Dr. GRPO)](https://arxiv.org/abs/2503.20783). COLM 2025. arXiv:2503.20783.

<a id="ref12"></a>
[12] Chen, M., Tworek, J., Jun, H. et al. (2021). [Evaluating Large Language Models Trained on Code](https://arxiv.org/abs/2107.03374). arXiv:2107.03374.

<a id="ref13"></a>
[13] He, Z. et al. (2025). [DeepMath-103K: A Large-Scale, Challenging, Decontaminated, and Verifiable Mathematical Dataset for Advancing Reasoning](https://arxiv.org/abs/2504.11456). arXiv:2504.11456.
