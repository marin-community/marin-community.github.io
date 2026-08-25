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

Reinforcement learning (RL) builds decision-making systems that learn from experience to maximize a reward [[1]](#ref1)[[2]](#ref2). For LLMs it is a key post-training stage that was originally used to create instruction following models [[3]](#ref3)[[4]](#ref4) and more recently has been used to improve performance on verifiable tasks such as math and code [[5]](#ref5). The most prominent open-weight model owes much of its reputation to RL [[6]](#ref6), so RL was the natural next step after we pretrained a 32B model in October 2025. At the time, the open-source RL ecosystem for JAX/TPUs was nascent. Scattered work on RL agents existed, but an RL pipeline for LLMs must balance sampling, training, and weight synchronization [[7]](#ref7), and none of the existing frameworks handled preemption, which our setting requires.

<details markdown="1" style="margin: 1.5em 0;">
<summary style="font-weight: bold; font-size: 1.1em; cursor: pointer;">Prior JAX RL libraries and why we did not use them</summary>

Marin RL needed more than a PPO implementation in JAX. It needed LLM post-training rather than classic control, TPU-first execution, asynchronous actor/trainer separation, fast weight sync, high end-to-end throughput, reward/verifier logic for math and code, and checkpointing with restart on preemptible TPU jobs. One constraint shaped the design: small preemptible TPU slices and many small inference workers were far easier for us to obtain than one large stable TPU job, so we needed a loose worker-based design.

**[Tunix](https://github.com/google/tunix)** — The closest open-source match for LLM RL in JAX on TPUs. It supports PPO/GRPO-style methods, TPU execution, and checkpoint-and-resume. Its async/disaggregated components arrived incrementally through September and October 2025 and were not yet mature in fall 2025. Its disaggregated mode runs as a single tight sub-mesh TPU job rather than as loose workers on small preemptible slices. Its [multi-host training](https://tunix.readthedocs.io/en/latest/quickstart.html#quick-start-multi-node-training) requires submitting jobs through Pathways on GKE, which we cannot use.

**[Brax](https://github.com/google/brax)** — The most widely known JAX RL project, with maintained PPO/SAC/ARS training code. It targets physics simulation and classic RL environments, not LLM post-training, and does not provide the trainer/actor/reference/reward/verifier decomposition that LLM RL needs.

**[RLax](https://github.com/google-deepmind/rlax)** — DeepMind's JAX RL package of reusable primitives. It is not a full system: it provides no rollout system, async trainer/actor architecture, or TPU-native LLM post-training workflow.

**[PureJaxRL](https://github.com/luchris429/purejaxrl)** — A compact, fast end-to-end JAX PPO implementation. It is a reference codebase for standard RL environments, not LLM post-training.

**[Stoix](https://github.com/EdanToledo/Stoix)** — A JAX RL systems codebase with explicit distributed execution patterns such as Anakin and Sebulba. It remains a single-agent RL research codebase for standard RL environments.

**[Rejax](https://github.com/keraJLi/rejax)** and **[EvoRL](https://github.com/EMI-Group/evorl)** — JAX RL libraries with PPO support for standard RL training. Neither provides the async LLM rollout, training, and verifier stack we needed.

**RLAX (Apple)** ([paper](https://arxiv.org/abs/2512.06392), related repo: [AXLearn](https://github.com/apple/axlearn)) — The closest design to what we wanted: large-scale distributed RL for LLMs on TPUs with trainer/inference separation, verifiers in the loop, and attention to weight sync and preemption. As of March 2026, the paper is being withdrawn, no public RLAX repo exists, and the RL-specific components were never released.

The open JAX RL ecosystem had many PPO implementations but few libraries that addressed TPU-native LLM RL as a systems problem.

</details>

We therefore built our own async RL pipeline from scratch. Over five months (November 2025 -- March 2026), we went from synthetic baselines with synchronous training to a fully asynchronous system, fixed upstream bugs in open-source libraries along the way, and expanded to harder benchmarks such as AIME and HumanEval+. This post shares what worked, what broke, and what we learned.

## Establishing baselines with Tinker

Before building anything new, we established baselines using [Tinker](https://github.com/marin-community/marin/issues/2016), a LoRA-based RL system running on GPU. Thinking Machines found that LoRA matches full fine-tuning for RL [[8]](#ref8), so matching Tinker's results gives a reasonable baseline for our full fine-tuning pipeline.

## Sync RL: verifying correctness against the baseline

Our first milestone was to match Tinker's results with Marin's synchronous RL pipeline. Tinker uses an importance-sampling policy-gradient loss that corrects for the mismatch between the policy that sampled a response and the policy being trained. It samples several responses to the same prompt and reinforces the ones that score above the others. We started from a similar objective in Marin, then moved to an RLOO-style loss with leave-one-out advantages.

We began with Llama 3.2 1B. It performed well on synthetic tasks but poorly on GSM8K (0.04 accuracy after 200 steps). Llama 3.1 8B Instruct rose from 0.69 to 0.80 on GSM8K in a single step and from 0.26 to 0.51 on MATH in 180 steps, so we focused on Llama 3.1 8B.

Both Tinker and Marin's sync RL converged to ~0.43 accuracy on MATH, but Marin took 2x longer (80 steps vs. Tinker's 35 steps to reach 0.4).

We hypothesize that full fine-tuning disrupted the model's format-following more than LoRA did. Marin's format accuracy started at 0.47 and took ~80 steps to reach 0.80, so the model spent early training budget re-learning the response format before improving math reasoning. LoRA's low-rank updates preserve the base model's capabilities, so Tinker can improve math reasoning from the start ([WandB report](https://wandb.ai/marin-community/marin_post_training/reports/Reproducing-Tinker-MATH-RL-baseline-in-Marin--VmlldzoxNTEzNDg3Nw)). A larger sample/train log-probability divergence, since we use vLLM for inference and JAX for training, may also contribute [[9]](#ref9).

This was a milestone: reproducible RL training on TPU, confirmed across 3 independent runs.

![Tinker vs Marin comparison: test accuracy, format accuracy, and entropy]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/tinker_comparison.png)

<p style="text-align: center;"><em>Tinker (LoRA) vs. Marin (Full FT) on MATH-500. Left: both converge to ~0.43 test accuracy, but Tinker crosses 0.40 at step 29 vs. Marin at step 81 (dashed vertical lines). Center: Marin's format accuracy starts at 0.47 and takes ~80 steps to reach 0.80 (dashed lines), suggesting full fine-tuning disrupted format-following. Right: entropy is similar between both runs, ruling out exploration differences as the cause. (<a href="https://wandb.ai/marin-community/marin_post_training/reports/Reproducing-Tinker-MATH-RL-baseline-in-Marin--VmlldzoxNTEzNDg3Nw">WandB report</a>)</em></p>

## Async RL: speeding up RL by decoupling training and inference

![Async RL decouples training and inference]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/sync_vs_async_rl.png)

<p style="text-align: center;"><em>Sync RL runs each stage sequentially; Async RL runs the trainer (Levanter) and actor (vLLM) concurrently with weights synced via Arrow Flight.</em></p>

Synchronous RL was a simple first step, but each stage (generate, train, eval) completes sequentially, which limits throughput. Prior work shows that an async RL system can be performant [[7]](#ref7), so that was our next goal.

In December, we built an asynchronous pipeline in which the trainer (Levanter) and actor (vLLM) run concurrently, with model weights synchronized via [Arrow Flight](https://arrow.apache.org/docs/format/Flight.html). This required two infrastructure changes:

- **Weight sync**: On-policy RL assumes the actor samples with the trainer's current weights, so async RL must push updated weights to rollout workers frequently. At LLM scale each sync moves tens of GB. A slow sync either stalls rollout generation or leaves workers sampling from stale policies. Converting weights to bfloat16 before transfer ([PR #2388](https://github.com/marin-community/marin/pull/2388)) halved the transfer from 32GB to 16GB and cut transfer time from 29s to 14s.
- **In-flight updates**: If the actor pauses for every weight update, inference remains on the critical path, and the trainer must trade off stale policies against idle inference time. Background weight-sync threads remove this tradeoff. Rollout workers wait only for the first weights, then continue sampling while newer weights transfer and hot-reload in the background ([PR #2325](https://github.com/marin-community/marin/pull/2325)).


The result: async RL matched sync RL quality (0.26 to 0.50 on MATH-500 in 10 steps) with a **1.21x speedup**:

| Metric | [Sync RL](https://github.com/marin-community/marin/issues/2022#issuecomment-3559259447) ([wandb](https://wandb.ai/marin-community/marin_post_training/runs/math500--20251120-083448)) | [Async RL](https://github.com/marin-community/marin/pull/2392#issuecomment-3781596530) ([wandb](https://wandb.ai/marin-community/marin_post_training/runs/llama-3.1-8bi-math-lr=2e-6-bs=1024-20260121-145333-train)) |
|---|---|---|
| **Avg iteration time** | 3.71 min | 3.07 min |
| **Iterations/minute** | 0.269 | 0.326 |
| **Median iteration** | 3.48 min | 3.02 min |
| **Min interval** | 3.07 min | 2.40 min |
| **Max interval** | 5.63 min | 3.82 min |

## Tracking down a mysterious divergence

Two identical async RL runs diverged after dozens of steps. One peaked at 0.514 accuracy. The other peaked at 0.482 and then collapsed to 0.36. Training metrics (loss, KL, rewards) agreed between the runs. The divergence appeared only at inference time. ([WandB report](https://wandb.ai/marin-community/marin_post_training/reports/Async-RL-with-in-flight-updates-is-nondeterministic-with-vastly-different-test-results-and-policy-behavior-across-runs--VmlldzoxNTQzMzg5NA))

![Two async RL runs with identical configs diverged wildly]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/async_divergence.png)

<p style="text-align: center;"><em>Two identical async RL runs diverge on eval accuracy (left, red shaded region) while train accuracy remains indistinguishable (right). Bottom row shows EMA smoothing (α=0.7) to make the divergence clearer. The bug only affected sampling at inference time. (<a href="https://wandb.ai/marin-community/marin_post_training/reports/Async-RL-with-in-flight-updates-is-nondeterministic-with-vastly-different-test-results-and-policy-behavior-across-runs--VmlldzoxNTQzMzg5NA">WandB report</a>)</em></p>

We investigated three candidate causes ([#2260](https://github.com/marin-community/marin/pull/2260)):

1. **Token limit?** Truncating outputs to match Tinker's `max_tokens=512` left accuracy far above Tinker's. Not the cause.
2. **Temperature?** Running Tinker with `temp=0.0` instead of `1.0` raised accuracy from 0.294 to 0.442. This was the key clue.
3. **TPU vs. GPU?** Running vLLM with `temp=0` and `temp=1` on both platforms revealed the root cause. On GPU, accuracy dropped from 42.1% to 28.3% as expected. On TPU, it was 40.9% vs. 41.7%: **no difference**.

**vLLM on TPU was silently ignoring temperature.** All prior async RL evaluations had been effectively greedy.

We traced the bug to `input_batch.py` in the [tpu-inference](https://github.com/vllm-project/vllm/tree/main/vllm) codebase:

```python
top_k = sampling_params.top_k
if top_k <= 0 or top_k >= vocab_size:
    top_k = 1  # BUG: forces greedy!
```

vLLM's docs specify that `top_k=-1` means "consider all tokens," but this code converted `-1` to `1`, selecting only the highest-probability token regardless of temperature. We filed a bug report ([tpu-inference #1386](https://github.com/vllm-project/tpu-inference/issues/1386)) and proposed a fix, which was merged.

This bug explains the nondeterminism. Under greedy sampling, small floating-point differences in logit ordering break ties differently across runs, and these deviations compound over dozens of RL steps. Separately, we caught a [loss normalization regression](https://github.com/marin-community/marin/pull/2039#issuecomment-3764238643): switching the DAPO loss from global token normalization to per-example normalization overweighted short responses relative to long reasoning chains and cost 13% accuracy.

After both fixes, MATH-500 accuracy converged to 0.46 (+/-0.02) over 186 steps ([WandB run](https://wandb.ai/marin-community/marin_post_training/runs/llama-3.1-8bi-math-lr=2e-6-bs=1024-20260117-110441-rollout-0)):

![Post-fix async RL: stable convergence over 186 steps]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/postfix_stability.png)

<p style="text-align: center;"><em>After fixing the vLLM top-k bug and loss normalization regression, MATH-500 Pass@1 reaches 0.46 within 10 steps and remains stable (mean=0.45, ±2σ=0.028) over 186 steps of training.</em></p>

## Longer runs: 500 steps with preemption

The 186-step run above was the longest we had completed. Our other experiments (Code-R1, AIME) destabilized around step 240, and no run had yet survived a TPU preemption. In March we migrated the pipeline to Marin's new [Iris](https://github.com/marin-community/marin/pull/3960) scheduler, which provides an in-cluster coordinator, checkpoint-based resume, and per-phase watchdogs. We then ran three identical 500-step MATH-500 runs on Llama 3.1 8B Instruct (RLOO, no KL term) ([run 1](https://wandb.ai/marin-community/marin_iris_rl_debug/runs/iris-rl-e4ms2-500-train), [run 2](https://wandb.ai/marin-community/marin_iris_rl_debug/runs/iris-rl-e4ms2-500-clean-nodelprevtmp-train), [run 3](https://wandb.ai/marin-community/marin_iris_rl_debug/runs/llama-3.1-8bi-math500-exec-20260331-061041-train)).

![Three 500-step MATH-500 runs: eval and train accuracy]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/iris_500step_decay.png)

<p style="text-align: center;"><em>Three identical 500-step runs (thin: raw, bold: EMA). Left: held-out MATH-500 Pass@1 peaks at 0.51--0.53 between steps 76 and 247, then drifts down to 0.43--0.45 by step 500. Right: training accuracy peaks at 0.71--0.78 around step 250--360 and also declines. Runs 2 and 3 were preempted twice and once, respectively, and resumed from checkpoint. The resumes are not visible in the curves.</em></p>

We draw three conclusions:

- **Preemption recovery works.** Two of the three runs were preempted mid-training and resumed from the latest checkpoint with no discontinuity in the curves. Run 1 died at step 469 on a checkpoint write failure. We now keep the previous temporary checkpoint until the new one lands.
- **Without KL, MATH-500 accuracy drifts rather than collapses.** All three runs peak near 0.50 and lose ~5 points over the next 300 steps. Training accuracy also declines, so the policy is degrading rather than overfitting. Code-R1 and AIME showed the same pattern. KL regularization is therefore our top priority.
- **Runs agree.** After the fixes in the previous section, the three runs track within ~2 points of each other for 500 steps. All three use seed 0, so this measures reproducibility, not seed robustness.

Throughput also improved. On the same TPU v5 slice, batch size, and ~60s forward/backward, median wall-clock per training step dropped from 171s in the January run to 94--103s, and weight-transfer serve time fell from 26s to 8s.

## Expanding to new models and benchmarks

### Qwen 2.5 support

Qwen 2.5 is widely used for post-training [[11]](#ref11). Supporting it in the RL pipeline ([PR #2446](https://github.com/marin-community/marin/pull/2446), [PR #2456](https://github.com/marin-community/marin/pull/2456), [PR #2458](https://github.com/marin-community/marin/pull/2458)) required solving three issues:
the model wasn't registered in tpu-inference (forcing a slow PyTorch fallback),
the weight sync crashed due to different `q_proj` reshape logic,
and Qwen's padded vocabulary (152064 tokens for hardware alignment) conflicted with Levanter's automatic vocab resizing.

With Qwen 2.5 supported, we moved to a harder task, AIME, where prior work shows Qwen 2.5 is a stronger base model [[11]](#ref11).

### AIME25: harder math

MATH-500 validated the pipeline, but modern models saturate it. We therefore moved to AIME, the benchmark used by OLMo 3, GLM 4.7, and DeepSeek.

AIME has only 30 questions, so a single question shifts Pass@1 by 3%. To reduce evaluation noise, we implemented a combinatorial Pass@k estimator (following the approach from Codex [[12]](#ref12), [lighteval](https://github.com/huggingface/lighteval), and DeepMath [[13]](#ref13)) and increasing the eval sample size K per task to 32 ([PR #2493](https://github.com/marin-community/marin/pull/2493)).

Training Qwen 2.5 7B on [DeepMath-103K](https://huggingface.co/datasets/PRIME-RL/DeepMath-103K) showed steady Pass@16 gains (reaching 0.40) but Pass@1 remained near zero after 40 steps ([PR #2441](https://github.com/marin-community/marin/pull/2441)).
We hypothesize that Pass@16 must cross a threshold before Pass@1 improves, and that longer training is needed to reach it.

![AIME25 RL training results]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/deepmath_103k.png)

<p style="text-align: center;"><em>AIME25 training: Pass@16 steadily improves to 0.40, but Pass@1 remains far from the 0.175 target due to high evaluation variance.</em></p>

### HumanEval+: code

Code is the domain with the most practical value, and its verifiers are more complex than math's. Our initial accuracy was falsely ~100% because the evaluation environment executed test scripts without invoking the validation function.

After fixing the eval, we reproduced Code-R1's results [[10]](#ref10) by training Qwen 2.5 7B Instruct with RL on 2K LeetCode questions ([PR #2286](https://github.com/marin-community/marin/pull/2286)).
HumanEval+ improved from 0.80 to 0.84 in 264 steps, matching Code-R1's reported 0.848 ([wandb run](https://wandb.ai/marin-community/marin_post_training/runs/qwen2.5-7bi-1m-code-r1-lr=5e-7-20260112-231710-rollout-0)). Pass@1 destabilized after 240 steps, likely because we omitted the KL term used in Code-R1 [[10]](#ref10).

![Code-R1: bugged vs fixed eval on HumanEval+]({{ site.baseurl }}/assets/images/posts/async-rl-from-scratch/code_r1_combined.png)

<p style="text-align: center;"><em>Left: bugged verifier falsely showed ~100% accuracy. Right: after fixing the eval, HumanEval+ Pass@1 improves from 0.80 to 0.84, closely matching Code-R1's reported 0.848 (dashed line). Pass@1 destabilizes after ~240 steps.</em></p>

## What's next

We are now shifting from RL to SFT for the next Marin model release. Future work for RL includes:

- **KL regularization**: Code-R1, AIME, and three 500-step MATH-500 runs all peak and then degrade after ~250 steps without a KL term. Preemption recovery and 500-step runs now work. The remaining stability problem is the objective.
- **Dynamic batching**: AIME25 sequences are 10x longer than MATH-500 sequences. Grouping samples by sequence length (Karmarkar-Karp) reduces padding waste.
- **AIME25 Pass@1 convergence**: Closing the gap between Pass@16 (improving) and Pass@1 (stalled) through better baseline prompt alignment and extended training.

## Five lessons from building an RL pipeline from scratch

1. **Establish baselines first.** The Tinker baselines saved weeks of debugging by validating our sync RL pipeline before we built the async one.
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
