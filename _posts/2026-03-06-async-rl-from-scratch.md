---
layout: post
title: "Async RL from Scratch on TPUs"
authors:
- Kevin Li, Ahmed Ahmed, Christopher Chou, Russell Power, Romain Yon, David Hall, Percy Liang
date: 2026-03-06
categories: blog
---

Reinforcement learning (RL) is a key post-training stage for boosting model performance on verifiable tasks like math and code. When we started exploring RL at Marin, the open-source RL ecosystem on TPUs was still in its infancy---so we decided to build our own pipeline from scratch. Over four months (November 2025 -- February 2026), we went from first baselines to a fully asynchronous training system, fixing critical upstream bugs along the way and expanding to harder benchmarks like AIME and HumanEval+. This post shares the journey---what worked, what broke, and what we learned.

## Establishing baselines with Tinker

Before building anything new, we established baselines using [Tinker](https://github.com/marin-community/marin/issues/2016), a LoRA-based RL system running on GPU.
These baselines told us what to expect and saved weeks of debugging later.

One early finding: **model choice matters more than algorithm tuning**.
Llama 1B completely failed GSM8K (0.04 accuracy after 200 steps) but solved addition perfectly.
Meanwhile, Llama 8B Instruct jumped from 0.69 to 0.80 on GSM8K in a single step and improved from 0.26 to 0.51 on MATH in 180 steps.
This gave us confidence to focus engineering effort on the 8B model.

## Sync RL: verifying correctness against the baseline

Our first milestone was matching Tinker's results with Marin's own synchronous RL pipeline---full fine-tuning on TPU with REINFORCE and sum loss.
Both systems converged to ~0.43 accuracy on MATH, though Marin took about 2x longer (80 steps vs. Tinker's 35 steps to reach 0.4).

The convergence gap came down to differences in early exploration behavior:
Tinker's loss started 4x higher and was far more volatile, leading to more aggressive early exploration that helped the model learn the response format sooner.
Other contributing factors included LoRA vs. full fine-tuning requiring different learning rates, and subtle differences in sample/train log-probability divergence.

Still, this was a major milestone: deterministic, reproducible RL training on TPU, confirmed across 3 independent runs.

![Marin Sync RL matches Tinker test accuracy but converges 2x slower]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/tinker.png)

<p style="text-align: center;"><em>Marin Sync RL vs. Tinker on MATH-500. Both converge to ~0.43, but Tinker gets there in half the steps. (<a href="https://wandb.ai/marin-community/marin_post_training/reports/Reproducing-Tinker-MATH-RL-baseline-in-Marin--VmlldzoxNTEzNDg3Nw">WandB report</a>)</em></p>

## Async RL: speeding up RL by decoupling training and inference

![Async RL decouples training and inference]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/sync_vs_async_rl.png)

<p style="text-align: center;"><em>Sync RL runs each stage sequentially; Async RL runs the trainer (Levanter) and actor (vLLM) concurrently with weights synced via Arrow Flight.</em></p>

Synchronous RL is simple but slow---each stage (generate, train, eval) waits for the previous one.
In December, we built an asynchronous pipeline where the trainer (Levanter) and actor (vLLM) run concurrently, with model weights synchronized via [Arrow Flight](https://arrow.apache.org/docs/format/Flight.html).

The transition required solving several infrastructure challenges:

- **Weight sync**: Arrow Flight transfers model weights from trainer to actor. We added bfloat16 conversion ([PR #2388](https://github.com/marin-community/marin/pull/2388)), cutting transfer bandwidth from 32GB to 16GB and transfer time from 29s to 14s.
- **In-flight updates**: Background weight sync threads prevent blocking rollouts ([PR #2325](https://github.com/marin-community/marin/pull/2325)).
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

But something was wrong. Two identical async RL runs diverged wildly after dozens of steps---one peaked at 0.514 accuracy, the other at only 0.482 before collapsing to 0.36. Training metrics (loss, KL, rewards) were consistent between runs. The divergence appeared only at inference time. ([WandB report](https://wandb.ai/marin-community/marin_post_training/reports/Async-RL-with-in-flight-updates-is-nondeterministic-with-vastly-different-test-results-and-policy-behavior-across-runs--VmlldzoxNTQzMzg5NA))

![Two async RL runs with identical configs diverged wildly]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/async_divergence.png)

<p style="text-align: center;"><em>2 async RL runs with identical configs diverged wildly after a few steps</em></p>

We systematically debugged the discrepancy ([#2260](https://github.com/marin-community/marin/pull/2260)):

1. **Token limit?** Truncating outputs to match Tinker's `max_tokens=512` still left accuracy far above Tinker's. Not the cause.
2. **Temperature?** Running Tinker with `temp=0.0` instead of `1.0` jumped accuracy from 0.294 to 0.442---a 51% improvement. Key clue.
3. **TPU vs GPU?** Running vLLM with `temp=0` and `temp=1` on both platforms revealed the root cause: on GPU, accuracy dropped from 42.1% to 28.3% as expected. On TPU: 40.9% vs 41.7%---**no difference at all**.

**Diagnosis: vLLM on TPU was silently ignoring temperature.** All prior async RL evaluations had been effectively greedy.

We traced the bug to `input_batch.py` in the [tpu-inference](https://github.com/vllm-project/vllm/tree/main/vllm) codebase:

```python
top_k = sampling_params.top_k
if top_k <= 0 or top_k >= vocab_size:
    top_k = 1  # BUG: forces greedy!
```

vLLM's docs specify that `top_k=-1` means "consider all tokens," but this code converted `-1` to `1`, selecting only the highest-probability token regardless of temperature. We filed a bug report ([tpu-inference #1386](https://github.com/vllm-project/tpu-inference/issues/1386)) which suggested a fix that got merged.

This single bug explained the nondeterminism: tiny sampling differences under greedy sampling, amplified over dozens of RL steps, caused the runs to diverge.


## Expanding to new models and benchmarks

### Qwen 2.5 support

Supporting Qwen 2.5 in the RL pipeline ([PR #2446](https://github.com/marin-community/marin/pull/2446), [PR #2456](https://github.com/marin-community/marin/pull/2456), [PR #2458](https://github.com/marin-community/marin/pull/2458)) required solving three issues:
the model wasn't registered in tpu-inference (forcing a slow PyTorch fallback),
the weight sync crashed due to different `q_proj` reshape logic,
and Qwen's padded vocabulary (152064 tokens for hardware alignment) conflicted with Levanter's automatic vocab resizing.

### AIME25: harder math

MATH-500 is becoming saturated for modern models, so we moved to AIME25---the benchmark used by OLMo 3, GLM 4.7, and DeepSeek.
But AIME has only 30 questions, making evaluation extremely noisy: a single question difference shifts Pass@1 by 3%.

We addressed this by implementing a robust combinatorial Pass@k estimator (following the approach from Codex, lighteval, and DeepMath) and increasing the eval sample size K per task to 32 ([PR #2493](https://github.com/marin-community/marin/pull/2493)).

Training Qwen 2.5 7B on [DeepMath-103K](https://huggingface.co/datasets/PRIME-RL/DeepMath-103K) showed steady Pass@16 gains (reaching 0.40) but Pass@1 remained near zero after 40 steps ([PR #2441](https://github.com/marin-community/marin/pull/2441)).
This suggests longer training may help---the model is learning but hasn't yet concentrated probability mass on correct solutions.

![AIME25 RL training results]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/deepmath_103k.jpg)

<p style="text-align: center;"><em>AIME25 training: Pass@16 steadily improves to 0.40, but Pass@1 remains far from the 0.175 target due to high evaluation variance.</em></p>

### HumanEval+: code

While math is an excellent playground for testing RL, code is the domain that brings the most productivity to the real world and also brings much more complexity from the real world to our RL environments. One important lesson learned while expanding Marin RL to code is to always double-check the verifier logic. Our initial accuracy was falsely ~100% because the evaluation environment executed test scripts without invoking the validation function.

![Code-R1 reproduced: HumanEval+ improved from 0.80 to 0.84]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/code_r1_fluke.jpg)

After fixing the eval, we reproduced Code-R1's results by training Qwen 2.5 7B Instruct with RL on 2K LeetCode questions ([PR #2286](https://github.com/marin-community/marin/pull/2286)).
HumanEval+ improved from 0.80 to 0.84 in 264 steps, closely matching Code-R1's reported 0.848 ([wandb run](https://wandb.ai/marin-community/marin_post_training/runs/qwen2.5-7bi-1m-code-r1-lr=5e-7-20260112-231710-rollout-0)). One remaining issue is we observe pass@1 started to destablize after 240 steps. This is likely because we omitted the kl divergence used in Code-R1.

![Code-R1 reproduced: HumanEval+ improved from 0.80 to 0.84]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/code_r1.png)

<p style="text-align: center;"><em>Code-R1 reproduction results. Marin closely matches the original paper's improvements on HumanEval+ after 264 steps.</em></p>

## What's next

For now, we are shifting our focus from RL to SFT in preparation for the next Marin model release. Future work for RL include:

- **RL infra stability for longer runs**: Both Code-R1 and AIME training destabilize after ~240 steps. We need KL regularization, pre-emption recovery, and longer training without OOM crashes.
- **Dynamic batching**: AIME25 sequences are 10x longer than MATH-500. Grouping samples by sequence length (using the Karmarkar-Karp algorithm) will minimize padding waste.
- **AIME25 Pass@1 convergence**: Closing the gap between Pass@16 (improving) and Pass@1 (stalled) through better baseline prompt alignment and extended training.

## Five lessons from building an RL pipeline from scratch

1. **Establish baselines first.** Tinker baselines saved weeks of debugging by telling us what to expect.
2. **Base model choice > algorithm tuning.** Llama 1B failed GSM8K while Llama 8B solved it in 1 step.
3. **Reproduce before innovating.** Code-R1 and MATH baselines caught subtle environment and prompt bugs.
4. **Evaluation needs care.** AIME25's 30 questions require multi-seed evals and careful estimators.
5. **Infrastructure is half the battle.** Memory, logging, weight sync, and dependencies required constant attention.

## Acknowledgements

Thanks to Ahmed for reviewing numerous RL PRs including loss improvements, weight transfer, Qwen support, logging, and codebase cleanup.
Thanks to Chris for getting in-flight weight sync working, integrating vLLM into the RL framework, porting the MATH environment from sync to async RL, and building vLLM cluster templates.
Thanks to Russell for laying out the infra for the RL effort and reviewing the CPU allocation fix PR that unblocked RL training.
Thanks to Romain for driving forward the RL PR and suggesting to break it down into more manageable sub-PRs.
Thanks to David for reviewing the bf16 weight transfer optimization PR and for giving numerous pointers and guidance during weekly meetings.
And thanks to Percy for helping set goals and milestones for RL to keep us on course.
