# Marin

Marin is an open lab for building foundation models---together.
We're training powerful models from scratch, and sharing and programmatically documenting every step:
the code, the data, the experiments, the mistakes...all in real-time.
We invite anyone who shares our vision of open science and open-source to join and contribute,
whether you want to try out a new architecture, training algorithm, dataset,
evaluation...there is a lot to do!

Want to jump in?  [Install](https://marin.readthedocs.io/en/latest/tutorials/installation/) the Marin code and
[run your first experiment](https://marin.readthedocs.io/en/latest/tutorials/first-experiment/)!

## Experiments 🧪

Building a foundation model requires countless experiments trying out endless variants of algorithms and datasets.
All the experiments we're doing are captured as [GitHub issues](https://github.com/marin-community/marin/issues?q=is%3Aissue%20label%3Aexperiment) (here is a [summary](https://marin.readthedocs.io/en/latest/reports/)).

Here's the lifecycle of an [experiment](https://marin.readthedocs.io/en/latest/explanations/experiments/):
1. A GitHub **issue** is created to preregister the experiment (hypotheses, goal).
2. A **pull request** is created with **code** that reproduces the experiment.
3. Code defines a provenance graph which is **executed**; results are summarized in a **WandB** report.

Some examples:
1. Experiment 934: How does z-loss impact loss?<br>
   [[issue](https://github.com/marin-community/marin/issues/935),
    [PR](https://github.com/marin-community/marin/pull/941),
    [code](https://github.com/marin-community/marin/blob/main/experiments/exp934_zloss.py),
    [execution](https://marin.community/data-browser/experiment?path=gs%3A%2F%2Fmarin-us-central2%2Fexperiments%2Fexp934_zloss-68c8ed.json),
    [WandB](https://wandb.ai/marin-community/marin/reports/ZLoss-vs-Not-1-4B--VmlldzoxMjEzMzA1NA)]
2. Experiment 950: How does pretraining learning rate impact SFT?<br>
   [[issue](https://github.com/marin-community/marin/issues/950),
    [PR](https://github.com/marin-community/marin/pull/952),
    [code](https://github.com/marin-community/marin/blob/main/experiments/exp950_sft_amenability.py),
    [execution](https://marin.community/data-browser/experiment?path=gs%3A%2F%2Fmarin-us-central2%2Fexperiments%2Fexp950_sft_amenability-050465.json),
    [WandB](https://wandb.ai/marin-community/marin/reports/How-does-Learning-Rate-Schedule-Impact-SFT---VmlldzoxMjgyNDkyOQ)]
3. Experiment 163: Is BERT a better quality filter than fastText?<br>
   [[issue](https://github.com/marin-community/marin/issues/163),
    [PR](https://github.com/marin-community/marin/pull/1298),
    [code](https://github.com/marin-community/marin/blob/main/experiments/exp163_bert.py),
    [execution](https://marin.community/data-browser/experiment/?path=gs%3A//marin-us-central2/experiments/exp163_bert-d29862.json),
    [WandB](https://wandb.ai/marin-community/marin/reports/Experiment-163-Fasttext-vs-BERT--VmlldzoxMjgyOTk0OQ)]

## Models 🌐

We trained some models in Marin:
1. [Marin-8B-Base (deeper-starling)](https://huggingface.co/marin-community/marin-8b-base)
   [[issue](https://github.com/marin-community/marin/issues/600),
    [code](https://github.com/marin-community/marin/blob/main/experiments/tootsie/exp600_tootsie.py),
    [execution](https://marin.community/data-browser/experiment/?path=gs%3A//marin-us-central2/experiments/exp600_tootsie-1f6fa2.json),
    [WandB](https://wandb.ai/marin-community/marin/reports/Tootsie-8B---VmlldzoxMTY3MzU3OA)]:
    Beats Llama 3.1 8B base on 14/19 standard benchmarks!
    Read more in our [retrospective](TODO).
2. [Marin-8B-Instruct (deeper-starling-05-15)](https://huggingface.co/marin-community/marin-8b-instruct)
   [[execution](https://marin.community/data-browser/experiment/?path=gs%3A%2F%2Fmarin-us-central2%2Fexperiments%2FexpPH_starling_sft-d4db6c.json)]:
   Try it out on
   [Together AI](https://www.together.ai/models/marin-8b-instruct) and
   [Hugging Face](https://huggingface.co/spaces/WillHeld/marin-8b-instruct-ChatUI)!
3. Marin-32B-Base
   [[issue](https://github.com/marin-community/marin/issues/1295),
    [execution](http://marin.community/data-browser/experiment/?path=gs%3A//marin-us-central2/experiments/exp859_big_tootsies-e9092f.json)]:
    It is still training!  You can watch it live on [WandB](https://wandb.ai/marin-community/marin/runs/llama-32b-tootsie-2?nw=nwuserdlwh)🍿!

## Speedrun 🏃

Have a new architecture or training procedure that you think is more efficient?
Participate in the [Marin speedrun](https://marin.community/speedrun) competition
(inspired by the [nanogpt speedrun](https://github.com/KellerJordan/modded-nanogpt?tab=readme-ov-file#world-record-history)),
pick your compute budget,
and create the fastest method to train a model to a certain quality!
We will offer free compute to scale up top performers.
Get started [here](https://marin.readthedocs.io/en/latest/tutorials/submitting-speedrun/).

## Datashop 🛠️

Want to add new capabilities to the Marin models?
Visit our [datashop](https://marin.readthedocs.io/en/latest/tutorials/datashop/), where you can upload a dataset or craft a prompt to curate a relevant dataset for your task.

For example, we used Llama 3 70B to filter for mathematical educational data (like [FineMath](https://huggingface.co/datasets/HuggingFaceTB/finemath)).
   [[issue](https://github.com/marin-community/marin/issues/963),
    [PR](https://github.com/marin-community/marin/pull/1135),
    [code](https://github.com/marin-community/marin/blob/91b86a710664bed75c61e109c740852c4dcf60ad/experiments/exp963_cascade_finemath.py),
    [execution](https://marin.community/data-browser/experiment?path=gs%3A%2F%2Fmarin-us-east1%2Fexperiments%2Fexp963_cascade_finemath-fa55e6.json)]

## Acknowledgements

Marin wouldn't be possible without the generous support of the [Google TPU Research Cloud program](https://sites.research.google/trc/about/).
We also benefit immensely from the broader open ecosystem, who have released numerous tools and datasets, including
[AI2](https://allenai.org), [Hugging Face](https://huggingface.co/), [NVIDIA](https://www.nvidia.com/en-us/research/), etc.
