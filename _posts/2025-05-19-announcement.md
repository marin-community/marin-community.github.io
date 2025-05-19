---
layout: post
title: "Introducing Marin: An Open Lab"
authors:
- David Hall
- Ahmed Ahmed, Chris Chou, Abhinav Garg, Rohith Kuditipudi, Will Held, Nikil Ravi, Herumb Shandilya, Jason Wang
- Jason Bolton, Siddharth Karamcheti, Suhas Kotha, Tony Lee, Nelson Liu, Joel Niklaus, Ashwin Ramaswami, Kamyar Salahi, Kaiyue Wen, Chi Heem Wong, Sherry Yang, Ivan Zhou
- Percy Liang
date: 2025-05-19
categories: blog
---

Open-source *software* is a marvelous success story:
It powers the world's digital infrastructure.
It allows anyone in the world to contribute based on merit.
It leads to greater innovation, collaboration, and security.

In contrast, truly open-source AI is lagging behind.
We have open-weight models (e.g., Llama, DeepSeek, Gemma), sometimes mistakenly called open-source models,
but the code and data (recipe) used to produce the model are not released.
There has been a movement over the last few years to build [open-source](https://opensource.org/ai/open-source-ai-definition) models.
For the last few years, we have been inspired by the efforts of
[Eleuther AI](https://www.eleuther.ai/),
[Allen Institute for AI](https://allenai.org/),
[Hugging Face](https://huggingface.co/),
[BigScience](https://bigscience.huggingface.co/),
[BigCode](https://www.bigcode-project.org/),
[DataComp-LM](https://www.datacomp.ai/dclm/),
[MAP-Neo](https://map-neo.github.io/),
[LLM360](https://www.llm360.ai/).
These teams not only release the model weights,
but also the code and data used to produce the model,
so that others can build their own models.
Marin wouldn't exist without this vibrant open-source ecosystem.

![Marin]({{ site.baseurl }}/assets/images/posts/announcement-open.png)

We would like to go one step further.  In open-source software, it is easy for
anyone to download the code, extend it, and contribute back to the community.
This is because over the last two decades, the community has developed mature
tools: versioned code hosting (e.g., GitHub), continuous integration, and
governance strategies.  Such infrastructure doesn't exist for the development of
foundation models.  You can't train locally, and you can't just log into someone
else's H100 cluster.

### A new form of openness

Marin is an **open lab**, a lab in which the research and development of models
is completely transparent.  We leverage GitHub to organize the open lab's
efforts, drawing as much infrastructure as we can from open-source software.
Here's how it works:

1. GitHub issues are used to track experiments (on the wishlist, currently running, or completed)---see an [example](https://github.com/marin-community/marin/issues/1183).
These GitHub issues serve as form of mini-[preregistration](https://en.wikipedia.org/wiki/Preregistration_(science)),
which declares the hypotheses and goals upfront.

2. If you want to run an experiment, you submit a pull request (PR) with what concretely needs to be executed.
Not only does the [Marin codebase](https://github.com/marin-community/marin/)
contain our training and data processing code, **experiments are also declared
in code** (see [an
example](https://github.com/marin-community/marin/blob/main/experiments/exp1183_olmoe.py)).

3. The PR can be reviewed by anyone (in the spirit of
[OpenReview](https://openreview.net/) for papers).
The community can have a lively debate about experimental design.
Because it's code, everything is there.

4. Once the PR is approved, the experiment will be launched.
 You can see the execution live
([example](https://marin.community/data-browser/experiment/?path=gs%3A%2F%2Fmarin-us-west4%2Fexperiments%2Fexp1183_olmoe-f9d291.json)),
with links to [WandB](https://wandb.ai/marin-community/marin/reports/MoE-vs-Dense-1b--VmlldzoxMjgzMzI4OQ).

This is a new way to do research that's more scientific and more inclusive.
All mistakes (and we all make them) and negative results are in the open and normalized.
There is no cherry picking.
There is no incomplete specifications.
Everything is reproducible, declared in code, and open to the community to see.

![Marin]({{ site.baseurl }}/assets/images/posts/announcement-flow.png)

### Experiments and models

Having built the infrastructure for the open lab, what do we use it for?  We are
driven by the fundamental research question: **how do we build the best model
with a fixed resource budget**?  Here, "best" captures some notion of accuracy,
and "resources" captures both compute and data (human labor).

There is both a tension and synergy between scientific understanding and
engineering the best model.  This is reflected in a bifurcation in our
experiments:

1. We performed **controlled** small-scale ablation experiments that aimed to
understand one small piece of the puzzle.  For example, we investigated
different [architectures](https://github.com/marin-community/marin/issues/1183),
[optimizers](https://github.com/marin-community/marin/issues/1290), [quality
classifiers](https://github.com/marin-community/marin/issues/1290),
[regularization methods](https://github.com/marin-community/marin/issues/935),
and so on.  We built new datasets using improved [HTML to
text](https://marin.readthedocs.io/en/latest/reports/markdownified-datasets/)
and started doing crawling.  We fit [scaling laws](https://github.com/marin-community/marin/issues/780).
These experiments have the ethos of the [Stanford Building Language Models from Scratch (CS336)](https://cs336.stanford.edu) class,
which tries to take everything apart.

2. We performed a few **YOLO** runs which eventually led to our best models.  We
documented our journey in the [Marin 8B
retrospective](https://marin.readthedocs.io/en/latest/reports/marin-8b-retro/),
which is reminiscent of the [OPT
logbook](https://github.com/facebookresearch/metaseq/blob/main/projects/OPT/chronicles/OPT175B_Logbook.pdf),
though thankfully we didn't have to deal with as many hardware issues.  There
were bugs along the way, new revelations about datasets, learning rates,
regularization, but we just adjusted our training and kept on going.  Once in a
while, we would be mystified and peel off to do controlled experiments
([example](https://github.com/marin-community/marin/issues/950)).

In the end, we ended up training [Marin 8B Base (deeper-starling)](https://huggingface.co/marin-community/marin-8b-base/tree/deeper-starling),
with a Llama architecture (dense Transformer) for 12.7T tokens (see the [full execution](https://marin.community/data-browser/experiment/?path=gs%3A//marin-us-central2/experiments/exp600_tootsie-4699e2.json)).
On **14 out of 19 standard benchmarks (MMLU, HellaSwag, GPQA, etc.), Marin 8B Base outperforms Llama 3.1 8B Base** (see [full results](https://marin.readthedocs.io/en/latest/reports/marin-8b-retro/#base-model-results)).

We also performed supervised fine-tuning (SFT) of Marin 8B Base for ~5B tokens to produce [Marin 8B Instruct (deeper-starling-05-15)](https://huggingface.co/marin-community/marin-8b-instruct/tree/deeper-starling-05-15).
We outperform OLMo 2, but still fall short of [Llama 3.1 fine-tuned on Tulu](https://arxiv.org/abs/2411.15124)---see [results](https://marin.readthedocs.io/en/latest/reports/marin-8b-retro/#sft-evals) here.
Considering that we have only done SFT and not yet done any reinforcement learning from feedback (RLHF),
we are optimistic that we can improve the instruct model substantially.

But don't take our word for it---try out these models yourself!
You can download them from Hugging Face or use the [Together API](https://www.together.ai/models/marin-8b-instruct).
Please provide feedback either by submitting a [GitHub issue](https://github.com/marin-community/marin/issues/new/choose) or posting in our [Discord](https://discord.gg/J9CTk7pqcM).
Or you can try fixing it yourself at our [Datashop](https://marin.readthedocs.io/en/latest/tutorials/datashop/).

## Speedrun for the AI researcher 🏃

As an open-source project, anyone can contribute in any way to Marin.
However, to add structure to these contributions, we lean on **leaderboards**.
Most AI leaderboards are about benchmarking the final model, system, or product.
However, since we want to incentivize algorithmic innovation,
we must set up the leaderboard appropriately.

Here, we take inspiration from the [nanogpt speedrun](https://github.com/KellerJordan/modded-nanogpt?tab=readme-ov-file#world-record-history),
which solicited submissions from the community to "train a neural network to ≤3.28 validation loss on FineWeb using 8x NVIDIA H100s";
the current record is just under 3 minutes.
However, it is well known that some ideas work well only at small scales, so it's not clear which of these ideas matter at larger scale.
The [Marin Speedrun](https://marin.community/speedrun/) differs in one key way: It accepts submissions for multiple compute budgets.
This allows people to come in with whatever compute budget is available to them.
We also encourage people to try a scaling suite of different compute budgets,
so that we will eventually be able to assess a method based on how well it scales (what is the slope?)
rather than how good it is at any one scale.

While the dataset is fixed, you are encouraged to try out new architectures, optimizers, etc.
Initially, you will be required to use your own compute.
However, capacity permitting, we will offer those who have submitted promising methods free compute to scale.

Look at this [example submission](https://github.com/marin-community/marin/blob/main/experiments/speedrun/llama_75m_fineweb_edu_adamax/llama_75m_fineweb_edu_adamax.py)
and get started [here](https://marin.readthedocs.io/en/latest/tutorials/submitting-speedrun/)!

## Datashop for the domain expert 🛠️

Language models can in principle do anything, but in practice they have holes (especially for an 8B model).
The most effective way to fill these holes is to curate relevant data.
We have set up [Datashop](https://marin.readthedocs.io/en/latest/tutorials/datashop/),
where you can upload a dataset or craft a prompt to curate a relevant dataset for your task.
Like before, you must write down your experiment fully in Python,
so that it can be reviewed.
Here is an [example](https://github.com/marin-community/marin/issues/963) of how Datashop can be used.
Datashop is a great way for domain experts, who might not necessarily have AI background,
to contribute to making the model better.
More specifically:
1. You specify a prompt describing the type of data you want to select (e.g., [FineMath example](https://github.com/marin-community/marin/blob/91b86a710664bed75c61e109c740852c4dcf60ad/experiments/exp963_cascade_finemath.py#L13)).
2. We then prompt an LM (e.g., Llama 3 70B) to classify a modest number of documents.
3. We use the documents that the LM deems adhering to your criterion as positive examples to train a fast linear or BERT classifier.
4. We then run this classifier on the entire dataset to choose the final set of documents ([examples](https://marin.community/data-browser/view/?paths=%5B%22gs%3A%2F%2Fmarin-us-east1%2Fdocuments%2Fquality_filtering%2Fdatashop%2Fdatashop-dclm-pretraining-subset-finemath-cascade-phase-2-f42d44%2Flocal-shard_0_of_10%2Fshard_00000000_processed.jsonl.zst%22%5D)) (negatives are just drawn from the background dataset).
5. Once you have the dataset, you can train a model on it!

See the full [execution](https://marin.community/data-browser/experiment?path=gs%3A%2F%2Fmarin-us-east1%2Fexperiments%2Fexp963_cascade_finemath-fa55e6.json).

![Datashop]({{ site.baseurl }}/assets/images/posts/announcement-datashop-diagram.png)

## Future

The future of AI should be open-source in the strongest sense: researchers and developers alike
should be able to not just use AI, but to contribute directly back to it.
We have built Marin, the infrastructure, to allow this to happen.
Of course training foundation models requires significant resources,
and building communities is hard.
Nonetheless, we must try.
We have benefited greatly from an open Internet,
open-source software, Wikipedia, and many assets in the public domain,
and at one point these were also crazy ideas that were more likely to fail than to succeed.

This is the beginning of the Marin journey.
There is so much to do: we'd like to
[try efficient linear attention architectures](https://github.com/marin-community/marin/issues/1313),
[add long context support](https://github.com/marin-community/marin/issues/1314),
support more languages, support multimodality, enhance reasoning with RL-based post-training, and much more.
Come join us and let us deepen our scientific understanding and build the best models together!

# Acknowledgements

So many people and organizations supported Marin, to whom we are greatly indebted:
- First, we would like to thank Zak Stone and the [Google TPU Research Cloud (TRC)](https://sites.research.google/trc/) team.  Nearly all of the compute used for Marin comes from TRC.  This project might not have even gotten started without their support.
- The Google JAX team, especially Roy Frostig, Sharad Vikram, Matthew Johnson, Yash Katariya, and Skye Wanderman-Milne, and Allen Wang from the TPU team helped us make good use of our TPUs.
- The Anyscale team, especially Robert Nishihara and Richard Liaw, helped us with Ray, which Marin builds on.
- This work originated from the Stanford Center for Research on Foundation Models (CRFM) and the Human-Centered AI Institute (HAI). We are grateful for the their support and fostering the belief that academia has an important role to play in the era of foundation models.
- We would like to thank Matthew Ding, Kevin Klyman, Russell Power, and Cathy Zhou for their contributions to the project.
- We would also like to thank the many people, including members of the Stanford AI Lab and Stanford NLP group, who have given advice and contributed valuable discussions.
- Finally, we would like to give a big shoutout to the open-source community, without which Marin would simply be impossible.  Organizations such as [EleutherAI](https://www.eleuther.ai/), [Hugging Face](https://huggingface.co), [Allen Institute for AI (AI2)](https://allenai.org/), [LLM360](https://www.llm360.ai/), and [MAP-Neo](https://map-neo.github.io/), and many others, have been hugely inspirational in paving the way towards truly open-source foundation models.  They have released tools and datasets that have directly benefited Marin, and we can only hope to give back to the community through our efforts.