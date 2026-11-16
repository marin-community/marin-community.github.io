---
title: "Repeatable log-probability scores in vLLM"
date: 2026-11-13
tags: [engineering]
description: "Snowball's log-probabilities repeated across GPU workers and fresh launches within each tested compile mode."
---

The same text and model weights can yield different token log-probabilities in a distributed vLLM serve. On one Snowball v0.1 deployment with batch invariance enabled, all 206 summed log-probabilities matched exactly across two passes. On a second Snowball checkpoint, scores matched across GPU workers and fresh launches within each tested compile mode. Switching compile modes changed the mean log-probability of a prompt by up to 0.0034 nat per token. [Repeat measurements](https://github.com/marin-community/marin/issues/10699#issuecomment-6866411632)

[Marin issue #10699](https://github.com/marin-community/marin/issues/10699)

## Why the worker matters

We sent scoring requests for fixed text and compared the model's log-probabilities for those tokens. The load balancer can send identical requests to different GPU workers even when requests arrive one at a time. Each request still uses experts distributed across the workers. In the original reduction, the order of the additions can depend on which worker serves the request. Floating-point addition rounds at each step, so changing that order can change the result.

On a four-worker Snowball serve running an earlier revision of Marin's vLLM fork, all 512 repeats pinned to the same worker matched exactly. Across workers, zero of 192 pairs matched. The fixed-root test summed expert outputs on the same designated worker for every request, then redistributed the result. With the same compiled graph loaded on each worker, all 192 cross-worker pairs matched. Marin's vLLM fork at `01911be3` uses this fixed-root reduction when batch invariance is enabled. Batch invariance is intended to keep results stable across changes in batch size and request order. [Four-worker diagnostic](https://github.com/marin-community/marin/issues/10699#issuecomment-6553220242) · [Reduction code](https://github.com/marin-community/vllm/blob/01911be34fac8715347962a8d791ca34a879e01e/vllm/distributed/device_communicators/cuda_communicator.py#L525-L531)

![On the four-worker diagnostic, 512 of 512 same-worker pairs and none of 192 cross-worker pairs matched originally. With fixed-root reduction and a shared compiled graph, 192 of 192 cross-worker pairs matched.](/assets/images/research-notes/snowball-vllm-repeatability/score-repeatability.png)

*Share of request pairs with bit-for-bit agreement in the four-worker diagnostic. The final comparison loaded the same compiled graph on each worker. [Source](https://github.com/marin-community/marin/issues/10699#issuecomment-6553220242)*

## Repeatability on eight workers

On the eight-worker Snowball v0.1 deployment, we sent the same 206 scoring requests twice with `VLLM_BATCH_INVARIANT=1` and let vLLM choose the worker. All 206 summed log-probabilities matched across passes. This was a retest of the baseline checkpoint on a different cluster from the original evaluation. [Retest data](https://github.com/marin-community/marin/blob/da6495dba4c244d2fb30dd95f7fa748a45bb4010/experiments/post_training/issue_10699_results/gate-repeat-v0.1-batch-invariant.json)

On the second checkpoint, we started four fresh eight-worker serves with batch invariance. Two used the default compile mode and two used deterministic compilation. Each launch scored the same 17 prompts on all eight workers. Every prompt's token log-probabilities matched across workers and between launches using the same mode. When we compared modes, at least one token's score differed in every prompt-worker pair. Matching the compile mode matters when comparing scores from two serves. The eight-worker tests covered up to one request in flight per worker. [Launch results](https://github.com/marin-community/marin/tree/da6495dba4c244d2fb30dd95f7fa748a45bb4010/experiments/post_training/issue_10699_results)

We first noticed the variation while scoring a fine-tune that taught Snowball to identify itself. The original baseline's mean loss on creator questions varied by 0.091 nat per token across five passes. An improvement of 0.10 could decide whether training continued. The 206-request retest measured baseline repeatability. [Identity experiment](https://github.com/marin-community/marin/issues/10695) · [Original score spread](https://github.com/marin-community/marin/issues/10699#issuecomment-6866411632)
