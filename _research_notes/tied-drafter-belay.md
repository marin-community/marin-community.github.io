---
title: Eight experts reached lower loss sooner on Belay
date: 2026-10-24
description: Four-expert updates were cheaper per step, but ordinary eight-expert training reached lower held-out loss sooner in all twelve paired comparisons.
tags:
  - modeling
---

On Belay, ordinary eight-expert pre-training reached lower held-out loss in less time than a tied drafter in all twelve paired comparisons. Belay is a mixture-of-experts model with about 1B stored parameters. The drafter trains a copy of Belay with four routed experts per token and proposes the resulting weights for the eight-expert model. In the comparison of 12,288 ordinary updates against 16,384 draft updates, the draft run took 16.1% more measured execution time at the median. [Paired measurements](https://storage.googleapis.com/marin-public/benfeuer/tied-drafter-belay/2026.10.24/measurements/crossover16k-measured-comparison.json)

[Marin experiment #10654](https://github.com/marin-community/marin/issues/10654) · [Archived experiment code](https://github.com/marin-community/marin/pull/10653)

## Approach

The drafter starts with a copy of Belay's weights and optimizer state. It keeps all 512 routed experts per layer, along with the shared expert. For each token, it uses the router's four highest-scoring experts instead of the usual eight and rescales their contributions to preserve the total routing weight. It trains with ordinary backpropagation. Using fewer experts per token cuts computation in both the forward and backward passes. We call the drafter *tied* because each parameter in the copy maps directly to the corresponding parameter in the full model.

A block of draft updates produces one candidate checkpoint for the eight-expert model. We use eight-expert forward passes to compare the starting and candidate weights on the same reserved batch. The candidate passes if its loss drops by more than both `1e-6` nats per token and twice the range across three evaluations of the starting checkpoint.

For each pair, we started both branches from the same checkpoint, fed them the same training batches up to their shared update count, and timed both on the same eight H100s. We paired three independently trained starting checkpoints with the same four data windows. We evaluated both branches with eight routed experts per token on four held-out batches reserved separately from the acceptance check. [Experiment protocol](https://storage.googleapis.com/marin-public/benfeuer/tied-drafter-belay/2026.10.24/crossover-k4-16384-v1.json)

## Results

All twelve final drafts passed the acceptance check. At 16,384 updates, the draft also took about 13% less measured time than ordinary training for the same number of steps. After 12,288 updates, ordinary training's held-out loss was already 0.0075 nats per token lower on average than the draft's final loss. [Acceptance and matched-update results](https://storage.googleapis.com/marin-public/benfeuer/tied-drafter-belay/2026.10.24/measurements/crossover16k-efficiency.json)

![A plot of measured time against held-out loss reduction. Each of the twelve eight-expert endpoints is to the left of and above its paired four-expert endpoint.](/assets/images/research-notes/tied-drafter-belay/paired-endpoints.png)

*Loss reduction is measured from the starting checkpoint, so higher is better. Each line connects an ordinary checkpoint after 12,288 updates and a draft checkpoint after 16,384 updates from the same starting checkpoint and data window. Time covers update execution on eight H100s and, for the draft, the initial copy and one loss check each for the starting and proposed weights. Restore, compilation, data loading, repeat loss checks and other research diagnostics were tracked separately. [Figure data](https://storage.googleapis.com/marin-public/benfeuer/tied-drafter-belay/2026.10.24/measurements/crossover16k-measured-comparison.json)*

A draft could pass by improving on its starting checkpoint. The endpoint comparison priced that improvement against what ordinary training achieved in less time. Both branches inherited the original learning-rate schedule and spent most of their updates at its minimum learning rate. We timed one proposal with verification at the end and stopped testing this recipe after the 16,384-update runs. [Decision record](https://github.com/marin-community/marin/issues/10654#conclusion)
