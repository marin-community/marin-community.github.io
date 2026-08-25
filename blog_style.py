"""Shared style for the RL blog figures.

All figures are rendered at the same width (COL_W inches) so that text is the
same size on the page regardless of how many panels a figure has.
"""

import matplotlib.pyplot as plt
import seaborn as sns

# Semantic palette (Okabe-Ito / seaborn "colorblind"). Use the same meaning
# for the same color in every figure.
OURS = "#0072B2"       # Marin / our run
OURS_2 = "#009E73"     # second Marin run (same config)
OURS_3 = "#CC79A7"     # third Marin run
BASELINE = "#E69F00"   # external baseline (Tinker, reported numbers)
BUGGED = "#D55E00"     # a run measured with a broken evaluator
REF = "#6e6e6e"        # reference lines and annotations

COL_W = 9.0            # figure width in inches
DPI = 200
OUT = "assets/images/posts/async-rl-from-scratch"


def setup():
    sns.set_theme(style="whitegrid", font_scale=1.0)
    plt.rcParams.update({
        "font.size": 10,
        "axes.titlesize": 11,
        "axes.labelsize": 10,
        "legend.fontsize": 9,
        "xtick.labelsize": 9,
        "ytick.labelsize": 9,
        "axes.grid": True,
        "grid.color": "#e6e6e6",
        "grid.linewidth": 0.6,
        "axes.edgecolor": "#bbbbbb",
        "axes.linewidth": 0.8,
        "legend.frameon": False,
        "lines.linewidth": 1.8,
    })


def figure(ncols=1, height=None):
    """One row of `ncols` panels at the shared column width."""
    if height is None:
        height = {1: 3.8, 2: 3.4, 3: 3.0}[ncols]
    fig, axes = plt.subplots(1, ncols, figsize=(COL_W, height))
    return fig, axes


def hline(ax, y, label, x=None, side="right", va="bottom"):
    """Dashed reference line with an inline label."""
    ax.axhline(y, color=REF, linestyle="--", linewidth=1, alpha=0.8, zorder=1)
    if x is None:
        x = ax.get_xlim()[1] if side == "right" else ax.get_xlim()[0]
    ha = "right" if side == "right" else "left"
    ax.annotate(label, (x, y), xytext=(-3 if side == "right" else 3, 3),
                textcoords="offset points", ha=ha, va=va, fontsize=8, color=REF)


def vline(ax, x, label, y=None, color=REF):
    """Dashed vertical marker with a label near the top."""
    ax.axvline(x, color=color, linestyle="--", linewidth=1, alpha=0.8, zorder=1)
    if y is None:
        y = ax.get_ylim()[1]
    ax.annotate(label, (x, y), xytext=(3, -3), textcoords="offset points",
                ha="left", va="top", fontsize=8, color=color)


def ema(series, alpha=0.5):
    return series.ewm(alpha=alpha, adjust=False).mean()


def smoothed(ax, x, y, color, label=None, alpha=0.5):
    """Bold EMA over a faint raw trace."""
    ax.plot(x, y, color=color, linewidth=0.8, alpha=0.25)
    ax.plot(x, ema(y, alpha), color=color, linewidth=2.0, label=label)


def finish(fig, name, axes=None):
    if axes is not None:
        for ax in (axes if hasattr(axes, "__iter__") else [axes]):
            sns.despine(ax=ax)
    fig.tight_layout(w_pad=2.0)
    path = f"{OUT}/{name}.png"
    fig.savefig(path, dpi=DPI, bbox_inches="tight", facecolor="white")
    plt.close(fig)
    print("saved", path)
