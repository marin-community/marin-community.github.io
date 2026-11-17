---
title: "Sharing expert banks reduced parameters and raised loss"
date: 2026-08-10
description: "Grug models trained with expert banks shared across layers, trading fewer parameters for higher held-out loss at four widths."
tags: [modeling]
---

We trained Grug mixture-of-experts models with routed expert weights shared across several layers. At hidden width 1280, sharing removed 43.7% of the model's parameters and raised final Paloma loss from 2.89986 to 2.92965. That loss gap is equivalent to about 0.35 compute doublings, or 27% more compute, under the baseline scaling model. Across all four tested widths, sharing reduced parameter count and increased held-out loss. [Final width-1280 comparison](https://github.com/marin-community/marin/issues/8032#issuecomment-5249559525)

[Marin experiment #8032](https://github.com/marin-community/marin/issues/8032)

## Approach

A routed expert bank contains the feed-forward networks that a layer's router selects for each token. The usual Grug model gives every layer its own bank. In the shared model, several layers read and update the same bank. Attention, routers, normalization, and the always-active feed-forward paths keep their own weights in each layer.

For example, six layers with bank IDs `0,1,1,1,1,2` use three distinct banks. The four middle layers share bank 1, but each still chooses its own experts for its own inputs. Sharing saves stored parameters while each layer continues to execute an expert computation. [Architecture and four-width results](https://github.com/marin-community/marin/issues/8032#completed-architecture-result)

Gradients from all layers using a bank accumulate into that bank. The plotted runs kept the original expert learning rate without dividing it by the number of uses. A smaller-width learning-rate ablation favored that setting, so the result is scoped to this optimizer recipe.

Within each width, the control and shared model used the same training budget. At width 1280, both trained for 14,315 updates and 15.01 billion tokens from seed 0. The control had 13 banks. The treatment kept the first two and last two layers independent and shared banks within two groups in the middle, leaving seven banks in total. [Matched run record](https://github.com/marin-community/marin/issues/8032#issuecomment-5249559525)

## Results

![Four model widths show expert-parameter reductions from 37.5% to 50% and positive Paloma loss gaps from about 0.029 to 0.038.](/assets/images/research-notes/sharing-expert-banks/parameter-loss-tradeoff.png)

*Each point compares a shared model with its same-width control, using the original unscaled expert learning rate. Parameter savings count routed expert weights. Paloma macro loss gives each held-out text dataset equal weight. Each pair used one seed. [Source table](https://github.com/marin-community/marin/issues/8032#completed-architecture-result)*

At width 1280, whole-model parameter count fell from 8.64 billion to 4.86 billion. Routed-expert parameters fell 46.15%. All 256 experts remained active in each layer over the final measurement window, and routing overflow was zero. Those measurements show that the shared architecture could train at the tested sizes.

The baseline scaling fit says that each doubling of compute removes about 6.3% of the loss above a fitted 1.6-nat floor. This follows from `L(C) = 1.6 + A * C^(-0.0941)`: doubling C multiplies the excess loss by `2^(-0.0941)`, approximately 0.937. We use the fit from the [compute-optimal sweeps in #6074](https://github.com/marin-community/marin/issues/6074), fitting A to each matched untied control.

At width 1280, the control loss of 2.900 is about 1.300 nats above the floor. Removing 6.3% of that excess buys about 0.082 nats per compute doubling. At width 512, the higher control loss of 3.586 leaves 1.986 nats above the floor, so the same fractional improvement buys about 0.125 nats. The absolute gain per doubling shrinks as loss falls. Across these widths, the sharing penalties correspond to about 0.26–0.35 compute doublings.

| Width | Loss increase (nats/token) | Nats gained per doubling | Compute-equivalent penalty |
| ---: | ---: | ---: | ---: |
| 512 | 0.0382 | 0.125 | 1.22× |
| 768 | 0.0285 | 0.105 | 1.20× |
| 1024 | 0.0308 | 0.091 | 1.25× |
| 1280 | 0.0298 | 0.082 | 1.27× |

The last column is `((L_shared - 1.6) / (L_control - 1.6))^(1/0.0941)`. It expresses the loss gap as extra compute needed to offset the penalty if the shared family follows the same exponent and loss floor. At width 1280, the gap amounts to about 0.35 compute doublings, or 27% more compute. As a cross-check, the matched untied width-1024 and width-1280 controls improve by 0.1393 nats over a 2.98× budget increase: 0.088 nats per doubling. Interpolating that slope puts the same penalty at 1.26× compute. [Matched losses](https://github.com/marin-community/marin/issues/8032#completed-architecture-result) · [Registered compute budgets](https://github.com/marin-community/marin/blob/34cad234df/experiments/grug/moe/launch_tied_experts.py)

These estimates describe position on a model family's compute-optimal scaling curve. The original fit used an earlier recipe; the [July baseline check](https://github.com/marin-community/marin/issues/6882#issuecomment-4883010409) supported reusing it as an approximation. They do not establish that training a fixed shared model longer would close the gap.

The throughput comparison was 126,778 versus 128,826 tokens per second. Dividing the 1.016× measured throughput by the 1.27× compute-equivalent penalty gives an estimated effective speed of 0.80× under the same scaling assumptions. Reaching a common quality target was not timed directly. We retained expert sharing as a compression result and stopped this architecture sweep. [Final measurements and decision](https://github.com/marin-community/marin/issues/8032#issuecomment-5249559525)
