---
title: "Distributing full-matrix EMA-Gram eigensolves across TPUs"
date: 2026-11-14
description: "A 924-update Delphi comparison led us to adopt whole-matrix eigensolve sharding, with faster training updates on a larger TPU mesh and mixed early validation loss."
---

We distributed the eigensolves in [quarter-power EMA-Gram][ema-gram] across TPUs to shorten training runs. In a [single-seed comparison][comparison] on the [447M-parameter Delphi recipe][delphi], mean training update time fell from 38.75 seconds in the [replicated run][replicated-run] on four TPU v4 devices to 3.70 seconds in the [matrix-sharded run][matrix-run] on sixteen. C4 English loss was close at the shared evaluation, while Penn Treebank loss was higher. We [adopted the matrix layout as the working baseline][adoption] for the training sweep after this 924-update comparison, which measured the layout and TPU mesh changes together.

[Marin issue #10784](https://github.com/marin-community/marin/issues/10784) · [Logbook issue #20](https://github.com/marin-community/marin-logbooks/issues/20)

## Background

For each linear weight, EMA-Gram keeps two exponential moving averages of gradient products. The left Gram averages the gradient matrix times its transpose. The right Gram averages the product in the reverse order. The two Grams track relationships among rows and among columns of the gradient. At each update the optimizer rescales the Grams and uses their inverse quarter powers to shape the direction of the weight update. To get those powers, it decomposes each full Gram into eigenvectors and eigenvalues, adds a small regularizer to the eigenvalues, raises them to −1/4, and reconstructs the matrix.

Computing the spectral powers took 20.26 seconds at the median in an [optimizer diagnostic on TPU v5e][diagnostic]. That timing covers normalization, eigendecomposition, and reconstruction. The full quarter-power optimizer update took 20.84 seconds in the same diagnostic.

## Approach

With the replicated layout, each device solves the same set of Gram matrices. The [matrix layout][implementation] uses the fact that each solve needs only one layer’s Gram. Take the left Grams from two layers. One TPU gets the entire first Gram, and a second TPU gets the entire second Gram. They solve the two matrices in parallel, then gather the eigenvalues and eigenvectors. Each TPU normalizes the input Grams before the solves and reconstructs the full powers after the gather. The right Grams follow the same path.

![With replication both TPUs solve both full left Grams. With matrix sharding, one TPU solves layer 1’s Gram and the other solves layer 2’s. The devices gather the eigenpairs before reconstructing the powers.][layout-figure]

*The two matrices are the left Grams of layers 1 and 2. Both layouts replicate normalization and reconstruction.*

## Results

In a [saved-state optimizer diagnostic][saved-state], switching layouts changed the update directions even with the same Grams and momentum. The relative Frobenius differences ranged from 0.56% to 0.66%. We used the training prefix as a regression check for the new setup, pairing training losses at each update and comparing held-out losses at the one evaluation the runs shared.

The matrix run started from scratch and stopped after 924 updates on the original 7,630-update learning-rate schedule. Both runs used the [same configured data mixture, model, precision, and optimizer hyperparameters][run-config], seed 0 for initialization and data order, and a global batch of eight sequences of 4,096 tokens. Byte-for-byte identity of the initial weights and cached data remains unverified.

Over training step labels 800–899, the observed mean was 38.75 seconds per update with replication and 3.70 with matrix sharding, a 10.47× difference between the two deployments. The training compilations we observed in the matrix run preceded this window. The warmup status of the historical run could not be verified.

![The mean update took 38.75 seconds with replication on four TPU v4 devices and 3.70 seconds with matrix sharding on sixteen. At the shared evaluation, sharded minus replicated loss was −0.0046 nats on C4 English, +0.0065 for PALOMA macro loss, and +0.2017 on Penn Treebank.][results-figure]

*Timing means cover 100 logged updates per run. Validation differences come from the single shared evaluation at step label 762. [Timing window and full loss breakdown][comparison].*

At that evaluation, C4 English loss moved from 5.6753 to 5.6707 nats. Macro loss across the [Paloma benchmark][paloma] rose by 0.0065 nats, and loss on its Penn Treebank subset rose from 7.4611 to 7.6628 nats. Across the 924 matched training losses, sharded minus replicated loss averaged −0.0008 nats. The largest absolute gap was 0.0898 nats. Loss agreement over the full schedule and across seeds remains untested.

[ema-gram]: https://github.com/marin-community/marin-logbooks/blob/91d18dd15886088e0d2cfc3cf04b2aaf2c392675/experiments/ema_gram/README.md#update-and-fixed-controls
[comparison]: https://github.com/marin-community/marin-logbooks/blob/ec09cba1f400d8bb887f8aa4a9c22dda6c42b4c2/logbooks/20-ema-gram-polar/prefix-train-comparison.json
[delphi]: https://marin.readthedocs.io/en/latest/reproducibility/delphi-seed-repeats/
[replicated-run]: https://wandb.ai/marin-community/marin/runs/ema-gram-pilot-3e18-a0.25-seed0-a473c0b6d69b-2026.10.30.23-d8755c4b4082
[matrix-run]: https://wandb.ai/marin-community/marin/runs/ema-gram-pilot-3e18-a0.25-seed0-a473c0b6d69b-2026.11.04.01-69f6f3e74da5
[diagnostic]: https://github.com/marin-community/marin-logbooks/blob/14e9a9b2f94e1413cf6c0c60621c7041ea8a4057/logbooks/20-ema-gram-polar/notebook-archive-20261101-03.md#2026-11-02-2103-utc--v5e-baseline-completed
[adoption]: https://github.com/marin-community/marin-logbooks/issues/20#issuecomment-6620719851
[saved-state]: https://github.com/marin-community/marin-logbooks/blob/23b582c69ef6dc5742a32d280477dfdba8b4ef76/logbooks/20-ema-gram-polar/saved-state-check-summary.json
[run-config]: https://github.com/marin-community/marin-logbooks/blob/ec09cba1f400d8bb887f8aa4a9c22dda6c42b4c2/logbooks/20-ema-gram-polar/prefix-train-config-validation.json
[paloma]: https://arxiv.org/abs/2312.10523
[implementation]: https://github.com/marin-community/marin-logbooks/blob/b70f04f9958358a4dc92bac987956c27209797fa/lib/levanter/src/levanter/optim/ema_gram.py#L60-L113
[layout-figure]: /assets/images/research-notes/sharding-ema-gram-eigensolves/eigensolve-layout.png
[results-figure]: /assets/images/research-notes/sharding-ema-gram-eigensolves/timing-and-loss.png
