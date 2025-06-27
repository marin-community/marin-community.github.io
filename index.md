# Marin

Marin is an open lab for building foundation models---together.
We're training powerful models from scratch, and sharing and programmatically documenting every step:
the code, the data, the experiments, the mistakes...all in real-time.
We invite anyone who shares our vision of open science and open-source to join and contribute,
whether you want to try out a new architecture, training algorithm, dataset,
evaluation...there is a lot to do!

News (2025-05-19): Read our [announcement](/blog/2025/05/19/announcement/)!

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
1. Experiment 935: How does z-loss impact loss?<br>
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
4. Experiment 1290: Which optimizers actually outperform AdamW?<br>
   [[issue](https://github.com/marin-community/marin/issues/1290),
    [PR](https://github.com/marin-community/marin/pull/1293),
    [code](https://github.com/WhenWen/marin/tree/kaiyue/optimizers/marin/optimizer_sweep),
    [execution](https://marin.community/data-browser/experiment/?path=gs%3A//marin-eu-west4/experiments/exp725_adamwsweep_520M_1-e70fba.json),
    [WandB](https://wandb.ai/marin-community/marin/reports/Fantastic-Optimizers-and-Where-to-Find-Them--VmlldzoxMjgzMzQ2NQ)]
5. Experiment 1183: Are MoEs really better than dense models?<br>
   [[issue](https://github.com/marin-community/marin/issues/1183),
    [PR](https://github.com/marin-community/marin/pull/1270),
    [code](https://github.com/marin-community/marin/blob/main/experiments/exp1183_olmoe.py),
    [execution](https://marin.community/data-browser/experiment/?path=gs%3A%2F%2Fmarin-us-west4%2Fexperiments%2Fexp1183_olmoe-f9d291.json),
    [WandB](https://api.wandb.ai/links/marin-community/qi3u8nx7)]
6. Experiment 702: How should you train on rare task-relevant data?<br>
   [[issue](https://github.com/marin-community/marin/issues/702),
    [PR](https://github.com/marin-community/marin/pull/1297),
    [code](https://github.com/marin-community/marin/tree/main/experiments/two_stage),
    [execution](https://marin.community/data-browser/view/?paths=%5B%22gs%3A%2F%2Fmarin-us-central2%2Fexperiments%2Fjoint_ptft-3b3709.json%22%5D),
    [WandB](https://wandb.ai/stanford-mercury/suhas-two-stage/reports/Two-stage-training-main-results-5-18---VmlldzoxMjgzNTg3MA?accessToken=2mbamb7vwfbaj8205ga8yojvyg471v3jkftrcwinp7vl4lnqfan3exsg7qs3scnx)]

## Models 🌐

We trained some models in Marin:
1. [Marin-8B-Base (deeper-starling)](https://huggingface.co/marin-community/marin-8b-base)
   [[issue](https://github.com/marin-community/marin/issues/600),
    [code](https://github.com/marin-community/marin/blob/main/experiments/tootsie/exp600_tootsie.py),
    [execution](https://marin.community/data-browser/experiment/?path=gs%3A//marin-us-central2/experiments/exp600_tootsie-4699e2.json),
    [WandB](https://wandb.ai/marin-community/marin/reports/Tootsie-8B---VmlldzoxMTY3MzU3OA)]:
    Beats Llama 3.1 8B base on 14/19 standard benchmarks!
    Read more in our [retrospective](https://marin.readthedocs.io/en/latest/reports/marin-8b-retro/).
2. [Marin-8B-Instruct (deeper-starling-05-15)](https://huggingface.co/marin-community/marin-8b-instruct)
   [[execution](https://marin.community/data-browser/experiment/?path=gs%3A%2F%2Fmarin-us-central2%2Fexperiments%2FexpPH_starling_sft-d4db6c.json)]:
   Try it out on
   [Together AI](https://api.together.ai/playground/v2/chat/marin-community/marin-8b-instruct)!
3. Marin-32B-Base
   [[issue](https://github.com/marin-community/marin/issues/1295),
    [execution](http://marin.community/data-browser/experiment/?path=gs%3A//marin-us-central2/experiments/exp859_big_tootsies-e9092f.json)]:
    It is still training!  You can watch it live on [WandB](https://wandb.ai/marin-community/marin/reports/Marin-32B-WIP--VmlldzoxMzM3OTExOA)🍿!

## Speedrun 🏃

Have a new architecture or training procedure that you think is more efficient?
Participate in the [Marin speedrun](https://marin.community/speedrun) competition
(inspired by the [nanogpt speedrun](https://github.com/KellerJordan/modded-nanogpt?tab=readme-ov-file#world-record-history)),
pick your compute budget,
and create the fastest method to train a model to a certain quality!
Here's an [example submission](https://github.com/marin-community/marin/blob/main/experiments/speedrun/llama_75m_adamax/llama_75m_adamax.py).
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
We also benefit immensely from the broader open ecosystem, who have released numerous tools and datasets.
