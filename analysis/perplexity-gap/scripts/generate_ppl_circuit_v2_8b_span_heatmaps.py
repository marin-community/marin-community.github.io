#!/usr/bin/env python3
"""Generate span-heatmap payloads for the 8B compact PPL circuit v2 run."""

from __future__ import annotations

import json
import runpy
import shutil
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
SPAN_ROOT = ROOT / "span-heatmaps"
SUMMARY_PATH = (
    ROOT
    / "artifacts/main_gap_8b_ppl_circuit_coverage_v2_issue6070_v1/"
    / "marin_8b-vs-qwen3_8b-76a71a/summary.json"
)

RUN_KEY = "main_gap_8b_ppl_circuit_coverage_v2_issue6070_v1"
MODEL_A = "marin-community/marin-8b-base"
MODEL_B = "Qwen/Qwen3-8B-Base"
COMPARISON_ID = f"{MODEL_A}__{MODEL_B}"
CORPUS = "PPL circuit coverage v2"
MODEL_A_SCORE_PATH = (
    "gs://marin-us-central1/analysis/model_perplexity_scores/"
    "main_gap_8b_ppl_circuit_coverage_v2_issue6070_v1/"
    "marin_8b-6f7ddc/scored_documents.parquet"
)
MODEL_B_SCORE_PATH = (
    "gs://marin-us-central1/analysis/model_perplexity_scores/"
    "main_gap_8b_ppl_circuit_coverage_v2_issue6070_v1/"
    "qwen3_8b-5247ca/scored_documents.parquet"
)

PPL_V2_PREFIX = "ppl_circuit_coverage_v2/"
SETS = [
    {
        "id": "ppl_circuit_v2_8b.string_byte_transforms",
        "dir": "ppl-circuit-v2-8b-string-byte-transforms",
        "title": "PPL circuit v2 8B: string and byte transforms",
        "description": "Compact v2 supervised target-only string reversal, slicing, rotation, escaping, Unicode, and bytes-vs-chars tasks.",
        "dataset_family": "ppl_circuit_coverage_v2",
        "datasets": [
            "ppl_circuit_coverage_v2/string_byte_transforms/string_reversal",
            "ppl_circuit_coverage_v2/string_byte_transforms/string_slicing",
            "ppl_circuit_coverage_v2/string_byte_transforms/string_rotation",
            "ppl_circuit_coverage_v2/string_byte_transforms/unicode_casefolding",
            "ppl_circuit_coverage_v2/string_byte_transforms/unicode_normalization",
            "ppl_circuit_coverage_v2/string_byte_transforms/escape_unescape",
            "ppl_circuit_coverage_v2/string_byte_transforms/chars_vs_bytes",
        ],
    },
    {
        "id": "ppl_circuit_v2_8b.arithmetic_indexing",
        "dir": "ppl-circuit-v2-8b-arithmetic-indexing",
        "title": "PPL circuit v2 8B: arithmetic and indexing",
        "description": "Compact v2 supervised target-only base conversion, carry/borrow, checksum, modular arithmetic, index lookup, bracket matching, and line/column offsets.",
        "dataset_family": "ppl_circuit_coverage_v2",
        "datasets": [
            "ppl_circuit_coverage_v2/arithmetic/base_conversion",
            "ppl_circuit_coverage_v2/arithmetic/carry_addition",
            "ppl_circuit_coverage_v2/arithmetic/borrow_subtraction",
            "ppl_circuit_coverage_v2/arithmetic/digit_checksum",
            "ppl_circuit_coverage_v2/arithmetic/modular_arithmetic",
            "ppl_circuit_coverage_v2/indexing_position_tracking/all_indices",
            "ppl_circuit_coverage_v2/indexing_position_tracking/bracket_matching",
            "ppl_circuit_coverage_v2/indexing_position_tracking/character_at_index",
            "ppl_circuit_coverage_v2/indexing_position_tracking/line_column_offsets",
        ],
    },
    {
        "id": "ppl_circuit_v2_8b.format_serialization",
        "dir": "ppl-circuit-v2-8b-format-serialization",
        "title": "PPL circuit v2 8B: format style and serialization",
        "description": "Compact v2 supervised target-only CSV/TSV, JSON re-emission, Python repr containers, line wrapping, Markdown table padding, and outline indentation.",
        "dataset_family": "ppl_circuit_coverage_v2",
        "datasets": [
            "ppl_circuit_coverage_v2/structured_serialization/csv_tsv_transforms",
            "ppl_circuit_coverage_v2/structured_serialization/json_field_reemit",
            "ppl_circuit_coverage_v2/structured_serialization/python_repr_containers",
            "ppl_circuit_coverage_v2/format_style_instruction/line_wrapping",
            "ppl_circuit_coverage_v2/format_style_instruction/markdown_table_padding",
            "ppl_circuit_coverage_v2/format_style_instruction/outline_indentation",
        ],
    },
    {
        "id": "ppl_circuit_v2_8b.state_machines",
        "dir": "ppl-circuit-v2-8b-state-machines",
        "title": "PPL circuit v2 8B: state machines",
        "description": "Compact v2 supervised target-only stack push/pop plus the extended finite automata, turtle command, regex-lite, and brainfuck-lite tasks.",
        "dataset_family": "ppl_circuit_coverage_v2",
        "datasets": [
            "ppl_circuit_coverage_v2/state_machines/stack_push_pop",
            "ppl_circuit_coverage_v2/state_machines/finite_automata",
            "ppl_circuit_coverage_v2/state_machines/turtle_commands",
            "ppl_circuit_coverage_v2/state_machines/regex_lite",
            "ppl_circuit_coverage_v2/state_machines/brainfuck_lite",
        ],
    },
]


HELPERS = runpy.run_path(str(Path(__file__).with_name("generate_span_heatmaps.py")))
read_selected = HELPERS["read_selected"]
chosen_rows = HELPERS["chosen_rows"]
build_example = HELPERS["build_example"]
display_title = HELPERS["display_title"]
label_for_base = HELPERS["label_for"]


def label_for(dataset: str, family: str) -> str:
    if dataset.startswith(PPL_V2_PREFIX):
        return dataset[len(PPL_V2_PREFIX) :]
    return label_for_base(dataset, family)


def replace_index_sets(index_path: Path, new_sets: list[dict[str, Any]]) -> None:
    index = json.loads(index_path.read_text())
    new_ids = {entry["id"] for entry in new_sets}
    index["sets"] = [entry for entry in index["sets"] if entry["id"] not in new_ids]
    index["sets"].extend(new_sets)
    index_path.write_text(json.dumps(index, indent=2) + "\n")


def main() -> None:
    summary = json.loads(SUMMARY_PATH.read_text())
    datasets_by_name = {row["name"]: row for row in summary["datasets"]}
    selected_datasets = sorted({dataset for set_cfg in SETS for dataset in set_cfg["datasets"]})
    missing = sorted(dataset for dataset in selected_datasets if dataset not in datasets_by_name)
    if missing:
        raise SystemExit(f"missing datasets: {missing}")

    model_a_rows = read_selected(MODEL_A_SCORE_PATH, selected_datasets)
    model_b_rows = read_selected(MODEL_B_SCORE_PATH, selected_datasets)

    index_sets = []
    for set_cfg in SETS:
        set_dir = SPAN_ROOT / set_cfg["dir"]
        if set_dir.exists():
            shutil.rmtree(set_dir)
        example_dir = set_dir / "examples"
        example_dir.mkdir(parents=True, exist_ok=True)

        examples = []
        payload_bytes = 0
        for dataset in set_cfg["datasets"]:
            for top_row in chosen_rows(summary, dataset, model_a_rows, model_b_rows):
                entry, size = build_example(
                    model_a_rows=model_a_rows,
                    model_b_rows=model_b_rows,
                    dataset=dataset,
                    top_row=top_row,
                    label=label_for(dataset, set_cfg["dataset_family"]),
                    example_dir=example_dir,
                )
                examples.append(entry)
                payload_bytes += size

        total_bytes = sum(datasets_by_name[dataset]["bytes"] for dataset in set_cfg["datasets"])
        total_delta = sum(datasets_by_name[dataset]["delta_bits"] for dataset in set_cfg["datasets"])
        aggregate_gap = total_delta / total_bytes if total_bytes else 0.0
        description = (
            set_cfg["description"]
            + " Token losses are smeared uniformly over token byte spans before the Marin-Qwen gap is computed."
        )
        manifest = {
            "schema_version": 1,
            "id": set_cfg["id"],
            "title": f"{display_title(set_cfg['title'])} span heatmap",
            "description": description,
            "corpus": CORPUS,
            "dataset_family": set_cfg["dataset_family"],
            "comparison_id": COMPARISON_ID,
            "model_a": MODEL_A,
            "model_b": MODEL_B,
            "run_key": RUN_KEY,
            "score_paths": {"marin": MODEL_A_SCORE_PATH, "qwen": MODEL_B_SCORE_PATH},
            "examples": examples,
        }
        (set_dir / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")
        manifest_size = (set_dir / "manifest.json").stat().st_size
        index_sets.append(
            {
                "id": set_cfg["id"],
                "title": set_cfg["title"],
                "description": description,
                "corpus": CORPUS,
                "dataset_family": set_cfg["dataset_family"],
                "datasets": set_cfg["datasets"],
                "comparison_id": COMPARISON_ID,
                "model_a": MODEL_A,
                "model_b": MODEL_B,
                "run_key": RUN_KEY,
                "manifest": f"{set_cfg['dir']}/manifest.json",
                "example_count": len(examples),
                "text_bytes": sum(example["bytes"] for example in examples),
                "payload_bytes": payload_bytes + manifest_size,
                "aggregate_gap_bpb": aggregate_gap,
            }
        )
        print(f"{set_cfg['id']}: {len(examples)} examples, aggregate {aggregate_gap:.4f}", flush=True)

    replace_index_sets(SPAN_ROOT / "manifest.json", index_sets)
    print(f"wrote {len(index_sets)} compact v2 8B heatmap sets", flush=True)


if __name__ == "__main__":
    main()
