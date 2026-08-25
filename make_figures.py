"""Regenerate every data figure in the RL blog post from the W&B CSV exports.

    uv run --with pandas --with seaborn --with matplotlib python make_figures.py
"""

import numpy as np
import pandas as pd

import blog_style as S

S.setup()


def col(df, name):
    m = df[name].notna()
    return df.loc[m, "_step"], df.loc[m, name]


# ---------------------------------------------------------------- tinker
tinker = pd.read_csv("tinker_rl_baseline/history.csv")
marin = pd.read_csv("marin_rl_baseline/history.csv")
fig, ax = S.figure(3)

a = ax[0]
a.plot(*col(tinker, "test/env/all/correct"), color=S.BASELINE, label="Tinker (LoRA)")
a.plot(*col(marin, "test/env/all/correct"), color=S.OURS, label="Marin (full FT)")
a.set_xlim(0, 100); a.set_ylim(0.15, 0.50)
S.hline(a, 0.40, "0.40", side="left")
t_cross = tinker[tinker["test/env/all/correct"] >= 0.4]["_step"].iloc[0]
m_cross = marin[marin["test/env/all/correct"] >= 0.4]["_step"].iloc[0]
S.vline(a, t_cross, f"step {t_cross}", color=S.BASELINE)
S.vline(a, m_cross, f"step {m_cross}", color=S.OURS)
a.set_title("MATH-500 test accuracy"); a.set_xlabel("Step"); a.set_ylabel("Pass@1")
a.legend(loc="lower right")

a = ax[1]
a.plot(*col(marin, "env/all/format"), color=S.OURS, alpha=0.35, linewidth=1.2, label="train")
a.plot(*col(marin, "test/env/all/format"), color=S.OURS, label="test")
a.set_xlim(0, 100); a.set_ylim(0.3, 1.0)
S.hline(a, 0.80, "0.80", side="left")
f_cross = marin[marin["test/env/all/format"] >= 0.80]["_step"].iloc[0]
S.vline(a, f_cross, f"step {f_cross}", color=S.OURS)
a.set_title("Marin format accuracy"); a.set_xlabel("Step"); a.set_ylabel("Format accuracy")
a.legend(loc="lower right")

a = ax[2]
a.plot(*col(tinker, "optim/entropy"), color=S.BASELINE, label="Tinker (LoRA)")
a.plot(*col(marin, "optim/entropy"), color=S.OURS, label="Marin (full FT)")
a.set_xlim(0, 100)
a.set_title("Policy entropy"); a.set_xlabel("Step"); a.set_ylabel("Entropy")
a.legend(loc="upper right")
S.finish(fig, "tinker_comparison", ax)

# ------------------------------------------------------------ divergence
r1 = pd.read_csv("divergent_run_1/history.csv")
r2 = pd.read_csv("divergent_run_2/history.csv")
fig, ax = S.figure(2)
for a, key, title, ylab in [
    (ax[0], "inference.eval/math_full/pass_at_one", "MATH-500 test accuracy", "Pass@1"),
    (ax[1], "inference.env.math.train_correct_accuracy", "Training accuracy", "Accuracy"),
]:
    for df, lab, c in [(r1, "Run A", S.OURS), (r2, "Run B", S.OURS_2)]:
        S.smoothed(a, *col(df, key), color=c, label=lab)
    a.set_xlim(0, 145); a.set_xlabel("Step"); a.set_ylabel(ylab); a.set_title(title)
ax[0].set_ylim(0.35, 0.55)
ax[0].axvspan(40, 90, alpha=0.08, color=S.BUGGED, zorder=0)
ax[0].annotate("divergence", (65, 0.545), ha="center", va="top", fontsize=8, color=S.BUGGED)
ax[0].legend(loc="lower left"); ax[1].legend(loc="lower left")
S.finish(fig, "async_divergence", ax)

# --------------------------------------------------------------- postfix
df = pd.read_csv("async_rl_post_fix/history.csv")
x, y = col(df, "inference.eval/math_full/pass_at_one")
stable = y[x >= 10]
mean, std = stable.mean(), stable.std(ddof=0)
fig, a = S.figure(1, height=3.4)
a.plot(x, y, color=S.OURS, label="MATH-500 Pass@1")
a.fill_between([0, x.max()], mean - 2 * std, mean + 2 * std, color=S.OURS, alpha=0.08,
               label=f"mean ± 2σ (step ≥ 10)")
a.set_xlim(0, x.max()); a.set_ylim(0.2, 0.55)
S.hline(a, mean + 2 * std, f"mean {mean:.2f} ± {2*std:.3f} (2σ)", side="left", va="bottom")
a.lines[-1].set_visible(False)  # label only; the band already shows the bounds
a.axhline(mean, color=S.REF, linestyle="--", linewidth=1, alpha=0.8)
a.set_xlabel("Step"); a.set_ylabel("Pass@1")
a.legend(loc="lower right")
S.finish(fig, "postfix_stability", a)

# -------------------------------------------------------------- 500 step
runs = [("e4ms2-500", "Run 1 (crashed at step 469)", S.OURS),
        ("clean-500", "Run 2 (500 steps, 2 preemptions)", S.OURS_2),
        ("exec-500", "Run 3 (500 steps, 1 preemption)", S.OURS_3)]
fig, ax = S.figure(2)
for k, lab, c in runs:
    d = pd.read_csv(f"iris_500step/{k}.csv")
    e = d.dropna(subset=["eval_pass1"]); t = d.dropna(subset=["train_acc"])
    S.smoothed(ax[0], e.step, e.eval_pass1, c, lab, alpha=0.3)
    S.smoothed(ax[1], t.step, t.train_acc, c, lab, alpha=0.3)
ax[0].set_ylim(0.2, 0.56); ax[1].set_ylim(0.3, 0.85)
for a in ax:
    a.set_xlim(0, 520); a.set_xlabel("Step")
S.vline(ax[0], 186, "previous longest run", y=0.555)
ax[0].set_title("MATH-500 test accuracy"); ax[0].set_ylabel("Pass@1")
ax[1].set_title("Training accuracy"); ax[1].set_ylabel("Accuracy")
ax[0].legend(loc="lower right"); ax[1].legend(loc="lower right")
S.finish(fig, "iris_500step_decay", ax)

# -------------------------------------------------------------- deepmath
df = pd.read_csv("deepmath_rollout/history.csv")
fig, a = S.figure(1, height=3.6)
a.plot(*col(df, "inference.eval/deepmath_103k/pass_at_16"), color=S.OURS, marker="o",
       markersize=3.5, label="Pass@16")
a.plot(*col(df, "inference.eval/deepmath_103k/pass_at_one"), color=S.OURS_2, marker="s",
       markersize=3.5, label="Pass@1")
a.set_xlim(0, df["_step"].max() + 1); a.set_ylim(-0.01, 0.45)
S.hline(a, 0.175, "Pass@1 target 0.175", side="right")
a.set_xlabel("Step"); a.set_ylabel("AIME25 Pass@k")
a.legend(loc="upper left")
S.finish(fig, "deepmath_103k", a)

# --------------------------------------------------------------- code r1
fluke = pd.read_csv("code_r1_fluke/history.csv")
fixed = pd.read_csv("code_r1_fixed/history.csv")
key = "inference.eval/code_r1/pass_at_one"
fig, ax = S.figure(2)
a = ax[0]
a.plot(*col(fluke, key), color=S.BUGGED, marker="o", markersize=3)
a.set_xlim(0, 27); a.set_ylim(0.35, 1.05)
S.hline(a, 1.0, "100% (verifier never ran)", side="left", va="bottom")
a.set_title("Bugged verifier"); a.set_xlabel("Step"); a.set_ylabel("HumanEval+ Pass@1")
a = ax[1]
x, y = col(fixed, key)
a.plot(x, y, color=S.OURS, marker="o", markersize=3)
a.set_xlim(0, x.max() + 5); a.set_ylim(0.75, 0.86)
S.hline(a, 0.848, "Code-R1 reported 0.848", side="right")
a.set_title("Fixed verifier"); a.set_xlabel("Step"); a.set_ylabel("HumanEval+ Pass@1")
S.finish(fig, "code_r1_combined", ax)
