---
layout: post
title: "Async RL from Scratch on TPUs"
authors:
- Ahmed Ahmed*, Kevin Li*, Christopher Chou&dagger;, Russell Power, Romain Yon, David Hall, Percy Liang
author_notes:
- "* Equal contribution."
- "&dagger; Work done while at Stanford."
date: 2026-05-21
categories: blog
---

Reinforcement learning (RL) builds decision-making systems that learn from experience to maximize a reward [[1]](#ref1)[[2]](#ref2). For LLMs it is a key post-training stage that was originally used to create instruction following models [[3]](#ref3)[[4]](#ref4) and more recently has been used to improve performance on verifiable tasks such as math and code [[5]](#ref5). The most prominent open-weight model owes much of its reputation to RL [[6]](#ref6), so RL was the natural next step after we pretrained a 32B model in October 2025. At the time, the open-source RL ecosystem for JAX/TPUs was nascent. Scattered work on RL agents existed, but an RL pipeline for LLMs must balance sampling, training, and weight synchronization [[7]](#ref7), and none of the existing frameworks handled preemption, which our setting requires. In this post we describe how we built a performant RL pipeline for JAX on TPUs, including the intermediate results, bugs, and missteps along the way. 

<details markdown="1" style="margin: 1.5em 0;">
<summary style="font-weight: bold; font-size: 1.1em; cursor: pointer;">Prior JAX RL libraries and why we did not use them</summary>

RL for Marin needed more than sync PPO/GRPO implementation in JAX. We wanted TPU-first execution, asynchronous actor/trainer separation, fast weight sync, high end-to-end throughput, reward/verifier logic for math and code, and checkpointing with restart on preemptible TPU jobs. Our design was constrained by the nature of TPUs on TRC: small preemptible TPU slices and many small inference workers were far easier for us to obtain than one large stable TPU job, so we needed a loose worker-based design.

**[Tunix](https://github.com/google/tunix)** — The closest open-source match for LLM RL in JAX on TPUs. It supports PPO/GRPO-style methods, TPU execution, and checkpoint-and-resume. Its async/disaggregated components arrived incrementally through September and October 2025 and were not yet mature in fall 2025. Its disaggregated mode runs as a single tight sub-mesh TPU job rather than as loose workers on small preemptible slices. Its [multi-host training](https://tunix.readthedocs.io/en/latest/quickstart.html#quick-start-multi-node-training) requires submitting jobs through Pathways on GKE, which we cannot use.

**[Brax](https://github.com/google/brax)** — The most widely known JAX RL project, with maintained PPO/SAC/ARS training code. It targets physics simulation and classic RL environments, not LLM post-training, and does not provide the trainer/actor/reference/reward/verifier decomposition that LLM RL needs.

**[RLax](https://github.com/google-deepmind/rlax)** — DeepMind's JAX RL package of reusable primitives. It is not a full system: it provides no rollout system, async trainer/actor architecture, or TPU-native LLM post-training workflow.

**[PureJaxRL](https://github.com/luchris429/purejaxrl)** — A compact, fast end-to-end JAX PPO implementation. It is a reference codebase for standard RL environments, not LLM post-training.

**[Stoix](https://github.com/EdanToledo/Stoix)** — A JAX RL systems codebase with explicit distributed execution patterns such as Anakin and Sebulba. It remains a single-agent RL research codebase for standard RL environments.

**[Rejax](https://github.com/keraJLi/rejax)** and **[EvoRL](https://github.com/EMI-Group/evorl)** — JAX RL libraries with PPO support for standard RL training. Neither provides the async LLM rollout, training, and verifier stack we needed.

**RLAX (Apple)** ([paper](https://arxiv.org/abs/2512.06392), related repo: [AXLearn](https://github.com/apple/axlearn)) — The closest design to what we wanted: large-scale distributed RL for LLMs on TPUs with trainer/inference separation, verifiers in the loop, and attention to weight sync and preemption. As of March 2026, the paper is being withdrawn, no public RLAX repo exists, and the RL-specific components were never released.

The open JAX RL ecosystem had many PPO implementations but few libraries that addressed TPU-native LLM RL as a systems problem.

</details>

We therefore built our own async RL pipeline from scratch. Over five months (November 2025 -- March 2026), we went from synthetic baselines with synchronous training to a fully asynchronous system, fixed upstream bugs in open-source libraries along the way, and expanded to harder benchmarks such as AIME and HumanEval+.

## Establishing baselines with Tinker

Before building anything new, we established baselines using [Tinker](https://github.com/marin-community/marin/issues/2016), a LoRA-based RL system running on GPUs. Thinking Machines found that LoRA matches full fine-tuning for RL [[8]](#ref8), so matching Tinker's results would give us a reasonable baseline for our full fine-tuning pipeline.

## Sync RL: verifying correctness against the baseline

Our first milestone was to match Tinker's results with Marin's synchronous RL pipeline. Tinker uses an importance-sampling policy-gradient loss that corrects for the mismatch between the policy that sampled a response and the policy being trained. It samples several responses to the same prompt and reinforces the ones that score above the others. We started from a similar objective in Marin, then moved to an RLOO-style loss with leave-one-out advantages.

We began with Llama 3.2 1B. It performed well on synthetic tasks (i.e. three digit addition/multiplication) but poorly on GSM8K, reaching only 0.04 accuracy after 200 steps. Llama 3.1 8B Instruct rose from 0.69 to 0.80 on GSM8K in a single step and from 0.26 to 0.51 on MATH in 180 steps, so we focused on Llama 3.1 8B.

Both Tinker and Marin's sync RL converged to ~0.43 accuracy on MATH, but Marin took 2x longer (80 steps vs. Tinker's 35 steps to reach 0.4).

We hypothesize that full fine-tuning disrupted the model's format-following more than LoRA. Marin's format accuracy started at 0.47 and took ~80 steps to reach 0.80, so the model spent early training budget re-learning the response format before improving math reasoning. LoRA's low-rank updates preserve the base model's capabilities, so Tinker can improve math reasoning from the start ([WandB report](https://wandb.ai/marin-community/marin_post_training/reports/Reproducing-Tinker-MATH-RL-baseline-in-Marin--VmlldzoxNTEzNDg3Nw)). A larger sample/train log-probability divergence, since we use vLLM for inference and JAX for training, may have also contributed [[9]](#ref9).

Regardless, this was a milestone: We now had reproducible RL training on TPU, confirmed across 3 independent runs.

![Tinker vs Marin comparison: test accuracy, format accuracy, and entropy]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/tinker_comparison.png)

<p style="text-align: center;"><em>Tinker (LoRA) vs. Marin (Full FT) on MATH-500. Left: both converge to ~0.43 test accuracy, but Tinker crosses 0.40 at step 29 vs. Marin at step 81 (dashed vertical lines). Center: Marin's format accuracy starts at 0.47 and takes ~80 steps to reach 0.80 (dashed lines), suggesting full fine-tuning disrupted format-following. Right: entropy is similar between both runs, ruling out exploration differences as the cause. (<a href="https://wandb.ai/marin-community/marin_post_training/reports/Reproducing-Tinker-MATH-RL-baseline-in-Marin--VmlldzoxNTEzNDg3Nw">WandB report</a>)</em></p>

## Async RL: speeding up RL by decoupling training and inference

![Async RL decouples training and inference]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/sync_vs_async_rl.png)

<p style="text-align: center;"><em>Sync RL runs each stage sequentially. Async RL runs the trainer (Levanter) and actor (vLLM) concurrently with weights synced via Arrow Flight.</em></p>

Synchronous RL was a simple first step, but each stage (generate, train, eval) completes sequentially, which limits throughput. At this point prior work clearly showed that an async RL system can be performant [[7]](#ref7), so that was our next goal.

In December, we built an asynchronous pipeline in which the trainer (Levanter) and actor (vLLM) run concurrently, with model weights synchronized via [Arrow Flight](https://arrow.apache.org/docs/format/Flight.html). This required two infrastructure changes:

- **Weight sync**: On-policy RL assumes the actor samples with the trainer's current weights, so async RL must push updated weights to rollout workers frequently. At LLM scale each sync moves tens of GB. A slow sync either stalls rollout generation or leaves workers sampling from stale policies. Converting weights to bfloat16 before transfer ([PR #2388](https://github.com/marin-community/marin/pull/2388)) halved the transfer from 32GB to 16GB and cut transfer time from 29s to 14s.
- **In-flight updates**: If the actor pauses for every weight update, inference remains on the critical path and the trainer must trade off stale policies against idle inference time. Background weight-sync threads remove this tradeoff. We configured rollout workers to wait only for the first weights, then continue sampling while newer weights transfer and hot-reload in the background ([PR #2325](https://github.com/marin-community/marin/pull/2325)).


The result: async RL matched sync RL quality (0.26 to 0.50 on MATH-500 in 10 steps) with a **1.21x speedup**:

| Metric | [Sync RL](https://github.com/marin-community/marin/issues/2022#issuecomment-3559259447) ([wandb](https://wandb.ai/marin-community/marin_post_training/runs/math500--20251120-083448)) | [Async RL](https://github.com/marin-community/marin/pull/2392#issuecomment-3781596530) ([wandb](https://wandb.ai/marin-community/marin_post_training/runs/llama-3.1-8bi-math-lr=2e-6-bs=1024-20260121-145333-train)) |
|---|---|---|
| **Avg iteration time** | 3.71 min | 3.07 min |
| **Iterations/minute** | 0.269 | 0.326 |
| **Median iteration** | 3.48 min | 3.02 min |
| **Min interval** | 3.07 min | 2.40 min |
| **Max interval** | 5.63 min | 3.82 min |

## Tracking down a mysterious divergence

Unfortunately, we started noticing divergences when moving to async RL. We first noticed two identical async RL runs (i.e. same training config and seed) diverged after dozens of steps. One run peaked at 0.514 accuracy, but the other peaked at 0.482 and then collapsed to 0.36. Confusingly, we found that training metrics (loss, KL, rewards) agreed between the runs, and the divergence appeared only at inference time when we evaluated. ([WandB report](https://wandb.ai/marin-community/marin_post_training/reports/Async-RL-with-in-flight-updates-is-nondeterministic-with-vastly-different-test-results-and-policy-behavior-across-runs--VmlldzoxNTQzMzg5NA))

![Two async RL runs with identical configs diverged wildly]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/async_divergence.png)

<p style="text-align: center;"><em>Two identical async RL runs diverge on eval accuracy (left, shaded region) while train accuracy remains indistinguishable (right). Thin lines are raw values and bold lines are EMA-smoothed. The bug only affected sampling at inference time. (<a href="https://wandb.ai/marin-community/marin_post_training/reports/Async-RL-with-in-flight-updates-is-nondeterministic-with-vastly-different-test-results-and-policy-behavior-across-runs--VmlldzoxNTQzMzg5NA">WandB report</a>)</em></p>

We investigated three candidate causes ([#2260](https://github.com/marin-community/marin/pull/2260)):

1. **Token limit?** Truncating outputs to match Tinker's `max_tokens=512` left accuracy far above Tinker's, but did not fix divergence.
2. **Temperature?** Running Tinker with `temp=0.0` instead of `1.0` raised accuracy from 0.294 to 0.442. This was a strong hint, though we did not immediately find the root cause.
3. **TPU vs. GPU?** Running vLLM with `temp=0` and `temp=1` on both platforms finally revealed the bug. On GPU, accuracy dropped from 42.1% to 28.3% as expected. On TPU, it was 40.9% vs. 41.7%: **no difference**.

**vLLM on TPU was silently ignoring temperature.** All prior async RL evaluations had been effectively greedy.

We traced the bug to `input_batch.py` in the [tpu-inference](https://github.com/vllm-project/vllm/tree/main/vllm) codebase:

```python
top_k = sampling_params.top_k
if top_k <= 0 or top_k >= vocab_size:
    top_k = 1  # BUG: forces greedy!
```

vLLM's docs specify that `top_k=-1` means "consider all tokens," but the tpu-inference library converted `-1` to `1`, selecting only the highest-probability token regardless of temperature! We filed a bug report ([tpu-inference #1386](https://github.com/vllm-project/tpu-inference/issues/1386)) and proposed a fix, which was merged.

This bug also provided a possible explanation for the nondeterminism we observed: We believe that under greedy sampling, small floating-point differences in logit ordering break ties differently across runs. 

Separately, we caught a [loss normalization regression](https://github.com/marin-community/marin/pull/2039#issuecomment-3764238643): switching the DAPO loss from global token normalization to per-example normalization overweighted short responses relative to long reasoning chains and cost 13% accuracy.

After both fixes, MATH-500 accuracy converged to 0.46 (+/-0.02) over 186 steps ([WandB run](https://wandb.ai/marin-community/marin_post_training/runs/llama-3.1-8bi-math-lr=2e-6-bs=1024-20260117-110441-rollout-0)):

![Post-fix async RL: stable convergence over 186 steps]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/postfix_stability.png)

<p style="text-align: center;"><em>After fixing the vLLM top-k bug and loss normalization regression, MATH-500 Pass@1 reaches 0.46 within 10 steps and remains stable (mean=0.45, ±2σ=0.028) over 186 steps of training.</em></p>

## Longer runs: 500 steps with preemption

By February, the 186-step run above was the longest we had completed. Our other experiments (Code-R1, AIME) had destabilized around step 240, and no run had yet survived a TPU preemption, so we did not know whether the pipeline could train for longer. In March we migrated the pipeline to Marin's new [Iris](https://github.com/marin-community/marin/pull/3960) scheduler, which gave us an in-cluster coordinator, checkpoint-based resume, and per-phase watchdogs (i.e. a timeout on each phase of a rollout step, so that a hang is reported instead of stalling the run). We then ran three identical 500-step MATH-500 runs (i.e. same config and seed) on Llama 3.1 8B Instruct with RLOO and no KL term ([run 1](https://wandb.ai/marin-community/marin_iris_rl_debug/runs/iris-rl-e4ms2-500-train), [run 2](https://wandb.ai/marin-community/marin_iris_rl_debug/runs/iris-rl-e4ms2-500-clean-nodelprevtmp-train), [run 3](https://wandb.ai/marin-community/marin_iris_rl_debug/runs/llama-3.1-8bi-math500-exec-20260331-061041-train)).

![Three 500-step MATH-500 runs: eval and train accuracy]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/iris_500step_decay.png)

<p style="text-align: center;"><em>Three identical 500-step runs (thin: raw, bold: EMA-smoothed). The dashed line marks the end of the previous longest run. Left: held-out MATH-500 Pass@1 peaks at 0.51--0.53 between steps 76 and 247, then drifts down to 0.43--0.45 by step 500. Right: training accuracy peaks at 0.71--0.78 around step 250--360 and also declines. Runs 2 and 3 were preempted twice and once, respectively, and resumed from checkpoint. The resumes are not visible in the curves.</em></p>

We learned three things from these runs:

- **Preemption recovery works.** Two of the three runs were preempted mid-training. Both resumed from the latest checkpoint, and we cannot find the resume point in the curves. Run 1 did not survive, but not because of a preemption: it died at step 469 when a checkpoint write failed after the previous temporary checkpoint had already been deleted. We now keep the previous temporary checkpoint until the new one lands.
- **Without KL, MATH-500 accuracy drifts rather than collapses.** All three runs peaked near 0.50 and then lost ~5 points over the next 300 steps. At first we suspected overfitting, but training accuracy declined as well, so the policy was getting worse on its own training set rather than memorizing it. We had seen the same pattern on Code-R1 and AIME. Seeing it a third time, across three runs, is what moved KL regularization to the top of our list.
- **Why doesn't the same seed give the same training curve?** After the fixes in the previous section, the three runs track within ~2 points of each other for 500 steps, which is the noise floor of a 500-problem eval (σ ≈ 0.02). They are not identical, however, even though all three use seed 0, and the usual expectation is that a fixed seed reproduces the training curve. Levanter training on TPU is bitwise reproducible on fixed hardware, and our earlier runs resume across preemption without any change in trajectory, so we did not expect same-seed runs to differ. The trainer, then, was not the source of the variation, which left the rollout side. We later discovered that vLLM on TPU silently ignored per-request sampling seeds, so every rollout worker was sampling from an unseeded generator ([PR #5256](https://github.com/marin-community/marin/pull/5256) later added an engine-level seed). With in-flight updates, the weight version behind each rollout also depends on wall-clock timing, which each preemption perturbs further. However, the trainer/inference importance-sampling ratio averaged 0.94--0.96 in all three runs and did not drift over 500 steps. This ratio compares the probability the trainer assigns to a sampled token with the probability vLLM assigned when sampling it. A value near 1 means the two policies agree. A weight-sync bug, a stale policy, or a kernel mismatch between JAX and vLLM would push it away from 1, and typically further as training progresses. We hypothesize that the variation between runs comes from sampling rather than from a numeric mismatch between the trainer and the inference engine.

Throughput also improved along the way. On the same TPU v5 slice, with the same batch size and the same ~60s forward/backward, median wall-clock per training step dropped from 171s in the January run to 94--103s, and weight-transfer serve time fell from 26s to 8s.

## Expanding to new models and benchmarks

### Qwen 2.5 support

Qwen 2.5 is widely used for post-training, and prior work had shown it to be a stronger base model than Llama for AIME-style math [[11]](#ref11), so we wanted it in the pipeline. Supporting it ([PR #2446](https://github.com/marin-community/marin/pull/2446), [PR #2456](https://github.com/marin-community/marin/pull/2456), [PR #2458](https://github.com/marin-community/marin/pull/2458)) turned out to require three fixes. First, the model was not registered in tpu-inference, which silently fell back to a slow PyTorch path. Second, the weight sync crashed because Qwen reshapes `q_proj` differently from Llama. Third, Qwen pads its vocabulary to 152064 tokens for hardware alignment, which conflicted with Levanter's automatic vocab resizing. With these fixed, we moved to AIME.

### AIME25: harder math

MATH-500 had validated the pipeline, but modern models saturate it, so we moved to AIME, the benchmark used by OLMo 3, GLM 4.7, and DeepSeek.

AIME turned out to be hard to evaluate before it was hard to train on. It has only 30 questions, so a single question shifts Pass@1 by 3%, and our first estimates of Pass@k (i.e. the probability that at least one of k samples is correct) were too noisy to read. To reduce this noise we implemented a combinatorial Pass@k estimator (following Codex [[12]](#ref12), [lighteval](https://github.com/huggingface/lighteval), and DeepMath [[13]](#ref13)) and increased the eval sample size K per task to 32 ([PR #2493](https://github.com/marin-community/marin/pull/2493)).

We then trained Qwen 2.5 7B on [DeepMath-103K](https://huggingface.co/datasets/PRIME-RL/DeepMath-103K). Pass@16 improved steadily and reached 0.40, but Pass@1 remained near zero after 40 steps ([PR #2441](https://github.com/marin-community/marin/pull/2441)). We hypothesize that Pass@16 must cross some threshold before Pass@1 starts to improve, and that longer training would be needed to reach it.

![AIME25 RL training results]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/deepmath_103k.png)

<p style="text-align: center;"><em>AIME25 training: Pass@16 steadily improves to 0.40, but Pass@1 remains far from the 0.175 target due to high evaluation variance.</em></p>

### HumanEval+: code

Math was a convenient test bed, but code is the domain with the most practical value, and its verifiers are more complex: a response is correct only if the generated code passes a test suite, so the evaluation environment has to execute that code. Our first code run looked too good to be true. Accuracy climbed to ~100% within 26 steps, and when we looked closer we found that the evaluation environment executed the test scripts without ever invoking the validation function.

After fixing the eval, we reproduced Code-R1's results [[10]](#ref10) by training Qwen 2.5 7B Instruct with RL on 2K LeetCode questions ([PR #2286](https://github.com/marin-community/marin/pull/2286)). HumanEval+ improved from 0.80 to 0.84 in 264 steps, matching Code-R1's reported 0.848 ([wandb run](https://wandb.ai/marin-community/marin_post_training/runs/qwen2.5-7bi-1m-code-r1-lr=5e-7-20260112-231710-rollout-0)). Pass@1 then destabilized after 240 steps. We believe this is because we omitted the KL term that Code-R1 uses [[10]](#ref10).

![Code-R1: bugged vs fixed eval on HumanEval+]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/code_r1_combined.png)

<p style="text-align: center;"><em>Left: bugged verifier falsely showed ~100% accuracy. Right: after fixing the eval, HumanEval+ Pass@1 improves from 0.80 to 0.84, closely matching Code-R1's reported 0.848 (dashed line). Pass@1 destabilizes after ~240 steps.</em></p>

## What's next

At this point we are shifting from RL to SFT for the next Marin model release. Three things are at the top of the list when we return to RL:

- **KL regularization**: Code-R1, AIME, and the three 500-step MATH-500 runs all peaked and then degraded after ~250 steps without a KL term. Now that preemption recovery and 500-step runs work, the remaining stability problem is the objective itself.
- **Dynamic batching**: AIME25 responses are 10x longer than MATH-500 responses, so padding every batch to its longest sequence wastes most of the batch. Grouping samples by sequence length (with the Karmarkar-Karp partitioning algorithm) would reduce that waste.
- **AIME25 Pass@1 convergence**: Pass@16 is improving while Pass@1 is stalled. We plan to close the gap with prompts better aligned to the base model and with longer training.

## Five lessons from building an RL pipeline from scratch

1. **Establish baselines first.** The Tinker baselines saved us weeks of debugging by letting us validate the sync RL pipeline before we built the async one.
2. **Base model choice > algorithm tuning.** Llama 1B failed GSM8K while Llama 8B solved it in 1 step. Mid-training and pretraining matter, and we will explore them further.
3. **Verify your environments end-to-end.** Code-R1 and MATH baselines caught verifier and prompt bugs that would have silently corrupted results, such as the code evaluator that reported ~100% accuracy without invoking the validation function.
4. **Evaluation needs care.** On AIME25, a single question shifts Pass@1 by 3%. Subsampling k trials from a pool of 16 has high variance for small k. A combinatorial estimator over all 16 trials ([PR #2493](https://github.com/marin-community/marin/pull/2493)) is more stable than subsampling. Different prompt formatters for MATH-500 also change results, so the formatter must be fixed across comparisons.
5. **Infrastructure is most of the battle.** The best-performing RL algorithms today are simple variants of the policy gradient. Managing memory, logging, weight sync, and dependencies correctly and efficiently is the harder problem.

## Acknowledgements

We gratefully acknowledge Google's TPU Research Cloud (TRC) program for providing the TPU resources that made this work possible.

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
