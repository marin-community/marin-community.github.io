#!/usr/bin/env python3
"""Generate lazy span-heatmap payloads for the perplexity-gap dashboard."""

from __future__ import annotations

import json
import os
import re
import shutil
import sys
from pathlib import Path
from typing import Any

import fsspec
import numpy as np
import pyarrow.parquet as pq


LOG2E = 1.4426950408889634

ROOT = Path(__file__).resolve().parents[1]
SPAN_ROOT = ROOT / "span-heatmaps"
SUMMARY_PATH = (
    ROOT
    / "artifacts/main_gap_all_available_diag_50eb41089_v21_stack_v2_code_v0_105/"
    / "marin_32b-vs-qwen3_32b-adf925/summary.json"
)

RUN_KEY = "main_gap_all_available_diag_50eb41089_v21_stack_v2_code_v0_105"
MODEL_A = "marin-community/marin-32b-base"
MODEL_B = "Qwen/Qwen3-32B"
COMPARISON_ID = f"{MODEL_A}__{MODEL_B}"
CORPUS = "All available diagnostic slices"
MODEL_A_SCORE_PATH = (
    "gs://marin-us-central1/analysis/model_perplexity_scores/"
    "main_gap_all_available_diag_50eb41089_v21_stack_v2_code_v0_105/"
    "marin_32b-1f7795/scored_documents.parquet"
)
MODEL_B_SCORE_PATH = (
    "gs://marin-us-central1/analysis/model_perplexity_scores/"
    "main_gap_all_available_diag_50eb41089_v21_stack_v2_code_v0_105/"
    "qwen3_32b-c2c5c8/scored_documents.parquet"
)

NUMERIC_PROMPT_ABLATION_SUBSETS = [
    "numeric_transduction/numeric_copy_increment",
    "numeric_transduction/numeric_compare_sort",
    "numeric_transduction/numeric_range_checksum_base",
    "structured_records/tabular_tsv_csv",
    "structured_records/network_ip_port_rows",
    "dense_numeric_blobs/svg_path_numeric_blobs",
    "dense_numeric_blobs/json_numeric_arrays",
    "dense_numeric_blobs/mmcif_coordinate_tables",
    "format_transforms/format_preserving_transforms",
    "chunk_boundary/chunk_boundary_stress",
]


def numeric_prompt_ablation_datasets(variant: str) -> list[str]:
    return [
        f"synthetic_numeric_format_prompt_ablation_ppl/{variant}/{subset}"
        for subset in NUMERIC_PROMPT_ABLATION_SUBSETS
    ]


def numeric_prompt_ablation_subset_datasets(variant: str, subsets: list[str]) -> list[str]:
    return [
        f"synthetic_numeric_format_prompt_ablation_ppl/{variant}/{subset}"
        for subset in subsets
    ]


SETS = [
    {
        "id": "synthetic_reasoning_ppl.connected_components",
        "dir": "connected-components",
        "title": "Synthetic reasoning: connected components",
        "description": "Native and CLRS-style connected-components examples in neutral arrow-format 5-shot ICL.",
        "dataset_family": "synthetic_reasoning_ppl",
        "datasets": [
            "synthetic_reasoning_ppl/native/connected_components",
            "synthetic_reasoning_ppl/clrs_style/clrs_connected_components",
        ],
    },
    {
        "id": "synthetic_reasoning_ppl.graph_search",
        "dir": "graph-search",
        "title": "Synthetic reasoning: BFS graph search",
        "description": "Native and CLRS-style BFS examples in neutral arrow-format 5-shot ICL.",
        "dataset_family": "synthetic_reasoning_ppl",
        "datasets": [
            "synthetic_reasoning_ppl/native/bfs_shortest_path",
            "synthetic_reasoning_ppl/clrs_style/clrs_bfs",
        ],
    },
    {
        "id": "synthetic_reasoning_ppl.arithmetic",
        "dir": "arithmetic",
        "title": "Synthetic reasoning: arithmetic",
        "description": "Arithmetic examples in neutral arrow-format 5-shot ICL, target-only scored.",
        "dataset_family": "synthetic_reasoning_ppl",
        "datasets": [
            "synthetic_reasoning_ppl/stepmath/arithmetic",
            "synthetic_reasoning_ppl/stepmath/arithmetic_5shot_icl",
        ],
    },
    {
        "id": "synthetic_reasoning_ppl.euclid_gcd",
        "dir": "euclid-gcd",
        "title": "Synthetic reasoning: Euclid GCD",
        "description": "Euclid GCD examples in neutral arrow-format 5-shot ICL, target-only scored.",
        "dataset_family": "synthetic_reasoning_ppl",
        "datasets": [
            "synthetic_reasoning_ppl/native/euclid_gcd",
            "synthetic_reasoning_ppl/native/euclid_gcd_5shot_icl",
        ],
    },
    {
        "id": "synthetic_reasoning_ppl.floyd_warshall",
        "dir": "floyd-warshall",
        "title": "Synthetic reasoning: Floyd-Warshall",
        "description": "Native and CLRS-style Floyd-Warshall examples in neutral arrow-format 5-shot ICL.",
        "dataset_family": "synthetic_reasoning_ppl",
        "datasets": [
            "synthetic_reasoning_ppl/native/floyd_warshall_apsp",
            "synthetic_reasoning_ppl/clrs_style/clrs_floyd_warshall",
        ],
    },
    {
        "id": "synthetic_numeric_format_ppl.numeric_transduction",
        "dir": "numeric-format-transduction",
        "title": "Synthetic numeric formats: numeric transduction (equals prompt)",
        "description": "Digit-heavy copy/increment, compare/sort, range/checksum, and chunk-boundary stress tests using the base-model equals prompt format.",
        "dataset_family": "synthetic_numeric_format_prompt_ablation_ppl",
        "datasets": numeric_prompt_ablation_subset_datasets(
            "equals",
            [
                "numeric_transduction/numeric_copy_increment",
                "numeric_transduction/numeric_compare_sort",
                "numeric_transduction/numeric_range_checksum_base",
                "chunk_boundary/chunk_boundary_stress",
            ],
        ),
    },
    {
        "id": "synthetic_numeric_format_ppl.structured_records",
        "dir": "numeric-format-structured-records",
        "title": "Synthetic numeric formats: structured records (equals prompt)",
        "description": "CSV/TSV rows, IP/port rows, and JSON numeric arrays using the base-model equals prompt format.",
        "dataset_family": "synthetic_numeric_format_prompt_ablation_ppl",
        "datasets": numeric_prompt_ablation_subset_datasets(
            "equals",
            [
                "structured_records/tabular_tsv_csv",
                "structured_records/network_ip_port_rows",
                "dense_numeric_blobs/json_numeric_arrays",
            ],
        ),
    },
    {
        "id": "synthetic_numeric_format_ppl.dense_numeric_blobs",
        "dir": "numeric-format-dense-blobs",
        "title": "Synthetic numeric formats: dense numeric blobs (equals prompt)",
        "description": "SVG path numeric blobs, mmCIF coordinate tables, and format-preserving numeric transforms using the base-model equals prompt format.",
        "dataset_family": "synthetic_numeric_format_prompt_ablation_ppl",
        "datasets": numeric_prompt_ablation_subset_datasets(
            "equals",
            [
                "dense_numeric_blobs/svg_path_numeric_blobs",
                "dense_numeric_blobs/mmcif_coordinate_tables",
                "format_transforms/format_preserving_transforms",
            ],
        ),
    },
    {
        "id": "synthetic_numeric_format_prompt_ablation_ppl.newline",
        "dir": "numeric-format-prompt-newline",
        "title": "Synthetic numeric prompt ablation: newline",
        "description": "Numeric-format prompt ablation using query and target separated by a bare newline.",
        "dataset_family": "synthetic_numeric_format_prompt_ablation_ppl",
        "datasets": numeric_prompt_ablation_datasets("newline"),
    },
    {
        "id": "synthetic_numeric_format_prompt_ablation_ppl.arrow",
        "dir": "numeric-format-prompt-arrow",
        "title": "Synthetic numeric prompt ablation: arrow",
        "description": "Numeric-format prompt ablation using an arrow-style query-to-target delimiter.",
        "dataset_family": "synthetic_numeric_format_prompt_ablation_ppl",
        "datasets": numeric_prompt_ablation_datasets("arrow"),
    },
    {
        "id": "synthetic_numeric_format_prompt_ablation_ppl.equals",
        "dir": "numeric-format-prompt-equals",
        "title": "Synthetic numeric prompt ablation: equals",
        "description": "Numeric-format prompt ablation using an equals-style query-to-target delimiter.",
        "dataset_family": "synthetic_numeric_format_prompt_ablation_ppl",
        "datasets": numeric_prompt_ablation_datasets("equals"),
    },
    {
        "id": "synthetic_delimiter_format_ppl.formats",
        "dir": "synthetic-delimiter-format",
        "title": "Synthetic surface forms: delimiters and tables",
        "description": "TSV/CSV, rare delimiters, table rows, fixed-width columns, and indentation/tab continuations.",
        "dataset_family": "synthetic_delimiter_format_ppl",
        "datasets": [
            "synthetic_delimiter_format_ppl/delimited_fields/tsv_next_field",
            "synthetic_delimiter_format_ppl/delimited_fields/csv_next_field",
            "synthetic_delimiter_format_ppl/delimited_fields/rare_control_delimiters",
            "synthetic_delimiter_format_ppl/table_rows/pipe_rows",
            "synthetic_delimiter_format_ppl/table_rows/fixed_width_rows",
            "synthetic_delimiter_format_ppl/table_rows/markdown_table_rows",
            "synthetic_delimiter_format_ppl/whitespace_control/aligned_space_columns",
            "synthetic_delimiter_format_ppl/whitespace_control/python_indentation_or_makefile_tabs",
        ],
    },
    {
        "id": "synthetic_identifier_encoding_ppl.identifiers",
        "dir": "synthetic-identifier-encoding",
        "title": "Synthetic surface forms: identifiers and encodings",
        "description": "Package/version strings, hashes, UUIDs, bio accessions, Base64/hex, URL escapes, and JSON byte escapes.",
        "dataset_family": "synthetic_identifier_encoding_ppl",
        "datasets": [
            "synthetic_identifier_encoding_ppl/identifier_grammars/package_names_versions",
            "synthetic_identifier_encoding_ppl/identifier_grammars/commit_hashes",
            "synthetic_identifier_encoding_ppl/identifier_grammars/uuid_build_ids",
            "synthetic_identifier_encoding_ppl/identifier_grammars/bio_accessions",
            "synthetic_identifier_encoding_ppl/identifier_grammars/mixed_case_symbolic_identifiers",
            "synthetic_identifier_encoding_ppl/encoded_text/base64_continuation",
            "synthetic_identifier_encoding_ppl/encoded_text/data_image_base64_prefixes",
            "synthetic_identifier_encoding_ppl/encoded_text/hex_dump_continuation",
            "synthetic_identifier_encoding_ppl/escaped_text/url_query_escaping",
            "synthetic_identifier_encoding_ppl/escaped_text/json_unicode_byte_escapes",
        ],
    },
    {
        "id": "synthetic_machine_records_ppl.records",
        "dir": "synthetic-machine-records",
        "title": "Synthetic surface forms: machine records",
        "description": "Service logs, tracebacks, compiler errors, CI logs, JSON app logs, and config manifests.",
        "dataset_family": "synthetic_machine_records_ppl",
        "datasets": [
            "synthetic_machine_records_ppl/service_logs/zeek_conn_http_dns",
            "synthetic_machine_records_ppl/service_logs/nginx_access_error",
            "synthetic_machine_records_ppl/service_logs/k8s_system_events",
            "synthetic_machine_records_ppl/service_logs/systemd_journal",
            "synthetic_machine_records_ppl/trace_errors/python_tracebacks",
            "synthetic_machine_records_ppl/trace_errors/compiler_errors",
            "synthetic_machine_records_ppl/ci_logs/github_actions_jobs",
            "synthetic_machine_records_ppl/structured_logs/json_application_logs",
            "synthetic_machine_records_ppl/config_manifests/package_json",
            "synthetic_machine_records_ppl/config_manifests/pyproject_toml",
            "synthetic_machine_records_ppl/config_manifests/github_actions_yaml",
            "synthetic_machine_records_ppl/config_manifests/dockerfile",
            "synthetic_machine_records_ppl/config_manifests/terraform_hcl",
            "synthetic_machine_records_ppl/config_manifests/kubernetes_yaml",
        ],
    },
    {
        "id": "synthetic_patch_diff_ppl.patch_review",
        "dir": "synthetic-patch-diff",
        "title": "Synthetic surface forms: patch and review",
        "description": "Unified diffs, file/line references, review comments, failing-test traces, commit metadata, and PR events.",
        "dataset_family": "synthetic_patch_diff_ppl",
        "datasets": [
            "synthetic_patch_diff_ppl/unified_diff_hunks",
            "synthetic_patch_diff_ppl/file_path_line_refs",
            "synthetic_patch_diff_ppl/review_comment_threads",
            "synthetic_patch_diff_ppl/failing_test_trace_to_patch",
            "synthetic_patch_diff_ppl/commit_message_metadata",
            "synthetic_patch_diff_ppl/gh_pr_event_patch",
        ],
    },
    {
        "id": "synthetic_science_markup_ppl.records_trees",
        "dir": "synthetic-science-markup",
        "title": "Synthetic surface forms: science markup and trees",
        "description": "SMILES/SDF/PDB/mmCIF/FASTA/GenBank records, BibTeX/LaTeX, XML/HTML/SVG/MathML tree closures.",
        "dataset_family": "synthetic_science_markup_ppl",
        "datasets": [
            "synthetic_science_markup_ppl/scientific_records/smiles_formula_completion",
            "synthetic_science_markup_ppl/scientific_records/sdf_record_closure",
            "synthetic_science_markup_ppl/scientific_records/pdb_atom_records",
            "synthetic_science_markup_ppl/scientific_records/mmcif_loop_completion",
            "synthetic_science_markup_ppl/scientific_records/fasta_sequence_record",
            "synthetic_science_markup_ppl/scientific_records/genbank_feature_record",
            "synthetic_science_markup_ppl/markup_bibliography/bibtex_entry_completion",
            "synthetic_science_markup_ppl/markup_bibliography/latex_table_rows",
            "synthetic_science_markup_ppl/markup_bibliography/latex_reference_closure",
            "synthetic_science_markup_ppl/tree_closure/xml_tag_closure",
            "synthetic_science_markup_ppl/tree_closure/html_entity_attribute_closure",
            "synthetic_science_markup_ppl/tree_closure/svg_group_path_closure",
            "synthetic_science_markup_ppl/tree_closure/mathml_nested_tree",
            "synthetic_science_markup_ppl/tree_closure/nested_attribute_tree",
            "synthetic_science_markup_ppl/tree_closure/entity_escaping",
        ],
    },
    {
        "id": "code.github_source",
        "dir": "github-source",
        "title": "Code: GitHub Python and C++",
        "description": "Source-code examples from the GitHub Python and C++ slices.",
        "dataset_family": "code",
        "datasets": ["uncheatable_eval/github_python", "uncheatable_eval/github_cpp"],
    },
    {
        "id": "code.verilog_formal",
        "dir": "verilog-formal",
        "title": "Code: Verilog eval prompts and solutions",
        "description": "Verilog prompt and canonical-solution slices from the formal-hardware long-tail set.",
        "dataset_family": "code",
        "datasets": [
            "long_tail_ppl_runnable/formal_hardware/verilogeval_prompt",
            "long_tail_ppl_runnable/formal_hardware/verilogeval_canonical_solution",
        ],
    },
    {
        "id": "stack_v2.json",
        "dir": "stack-v2-json",
        "title": "Stack v2: JSON",
        "description": "Stack v2 JSON rows where Qwen is sharply ahead, including serialized payloads and encoded blobs.",
        "dataset_family": "stack_v2",
        "datasets": ["long_tail_ppl/code_ecosystem/stack_v2_json"],
    },
    {
        "id": "stack_v2.assembly",
        "dir": "stack-v2-assembly",
        "title": "Stack v2: Assembly",
        "description": "Stack v2 assembly rows where Marin is often ahead on address-like and instruction-format continuations.",
        "dataset_family": "stack_v2",
        "datasets": ["long_tail_ppl/code_ecosystem/stack_v2_assembly"],
    },
    {
        "id": "stack_v2.scala_csharp",
        "dir": "stack-v2-scala-csharp",
        "title": "Stack v2: Scala and C#",
        "description": "JVM/.NET-adjacent Stack v2 slices from the v0 cut.",
        "dataset_family": "stack_v2",
        "datasets": [
            "long_tail_ppl/code_ecosystem/stack_v2_scala",
            "long_tail_ppl/code_ecosystem/stack_v2_c_sharp",
        ],
    },
    {
        "id": "stack_v2.proof_math",
        "dir": "stack-v2-proof-math",
        "title": "Stack v2: Coq and Mathematica",
        "description": "Formal proof and symbolic-math Stack v2 slices with very different surface forms.",
        "dataset_family": "stack_v2",
        "datasets": [
            "long_tail_ppl/code_ecosystem/stack_v2_coq",
            "long_tail_ppl/code_ecosystem/stack_v2_mathematica",
        ],
    },
    {
        "id": "stack_v2.specialty_formats",
        "dir": "stack-v2-specialty-formats",
        "title": "Stack v2: high-gap specialty formats",
        "description": "High-absolute-gap Stack v2 v0 slices beyond the obvious Python/TOML cases.",
        "dataset_family": "stack_v2",
        "datasets": [
            "long_tail_ppl/code_ecosystem/stack_v2_less",
            "long_tail_ppl/code_ecosystem/stack_v2_standard_ml",
            "long_tail_ppl/code_ecosystem/stack_v2_yacc",
            "long_tail_ppl/code_ecosystem/stack_v2_svelte",
        ],
    },
    {
        "id": "markup.svg_xml",
        "dir": "svg-xml",
        "title": "Markup: SVG/XML",
        "description": "SVG/XML validation and test slices.",
        "dataset_family": "raw_web_markup",
        "datasets": ["raw_web_markup/svg_stack/svg_xml_test", "raw_web_markup/svg_stack/svg_xml_val"],
    },
    {
        "id": "multilingual.fineweb2_high_gap",
        "dir": "fineweb2-high-gap",
        "title": "Multilingual: high-gap FineWeb2 languages",
        "description": "FineWeb2 language slices with large local Marin-Qwen differences.",
        "dataset_family": "fineweb2_multilingual",
        "datasets": ["fineweb2_multilingual/lit_Latn", "fineweb2_multilingual/snd_Arab"],
    },
    {
        "id": "multilingual.fineweb2_major_scripts",
        "dir": "fineweb2-major-scripts",
        "title": "Multilingual: major-script FineWeb2 samples",
        "description": "FineWeb2 Chinese/Japanese/Russian slices to inspect script-specific behavior.",
        "dataset_family": "fineweb2_multilingual",
        "datasets": [
            "fineweb2_multilingual/cmn_Hani",
            "fineweb2_multilingual/jpn_Jpan",
            "fineweb2_multilingual/rus_Cyrl",
        ],
    },
    {
        "id": "bio_chem.proteins_structures",
        "dir": "bio-chem-proteins-structures",
        "title": "Bio/Chem: proteins and structures",
        "description": "UniProt DAT and RCSB mmCIF slices where Marin trails Qwen.",
        "dataset_family": "bio_chem",
        "datasets": ["bio_chem/uniprot/uniprot_sprot_dat", "bio_chem/rcsb/rcsb_mmcif"],
    },
    {
        "id": "bio_chem.molecules",
        "dir": "bio-chem-molecules",
        "title": "Bio/Chem: molecule formats",
        "description": "PubChem and ChEMBL molecule-format slices.",
        "dataset_family": "bio_chem",
        "datasets": [
            "bio_chem/pubchem/pubchem_sdf",
            "bio_chem/chembl/chembl_sdf",
            "bio_chem/moleculenet/moleculenet_esol_smiles",
        ],
    },
    {
        "id": "paloma.social_forums",
        "dir": "paloma-social-forums",
        "title": "Paloma: social/forum text",
        "description": "Social and forum Paloma slices where Marin is generally ahead.",
        "dataset_family": "paloma",
        "datasets": ["paloma/twitterAAE_HELM_fixed", "paloma/gab", "paloma/4chan"],
    },
    {
        "id": "paloma.web_reference",
        "dir": "paloma-web-reference",
        "title": "Paloma: web/reference text",
        "description": "Wikitext, C4, and Dolma-style Paloma slices.",
        "dataset_family": "paloma",
        "datasets": ["paloma/wikitext_103", "paloma/c4_en", "paloma/dolma-v1_5"],
    },
    {
        "id": "ocr_asr.noisy_text",
        "dir": "ocr-asr-noisy-text",
        "title": "OCR/ASR: noisy text",
        "description": "OCR/ASR clean/noisy and OCR token slices where Marin is often ahead.",
        "dataset_family": "asr_ocr_noisy_ppl",
        "datasets": [
            "asr_ocr_noisy_ppl/hypr_librispeech_without_lm_test_clean/clean",
            "asr_ocr_noisy_ppl/hypr_librispeech_without_lm_test_clean/noisy",
            "raw_web_markup/ocr_vqa/ocr_tokens_validation",
        ],
    },
    {
        "id": "ocr_markup.textocr_metadata",
        "dir": "ocr-markup-textocr-metadata",
        "title": "OCR/Markup: TextOCR and metadata",
        "description": "TextOCR strings plus OCR-VQA metadata/info JSON slices.",
        "dataset_family": "raw_web_markup",
        "datasets": [
            "raw_web_markup/textocr/ocr_strings",
            "raw_web_markup/ocr_vqa/book_metadata_validation",
            "raw_web_markup/ocr_vqa/ocr_info_json_validation",
        ],
    },
    {
        "id": "github_archive.events",
        "dir": "github-archive-events",
        "title": "GitHub Archive: structured events",
        "description": "Structured GitHub Archive event payload slices.",
        "dataset_family": "gh_archive_structured_output",
        "datasets": [
            "gh_archive_structured_output/PushEvent",
            "gh_archive_structured_output/IssuesEvent",
            "gh_archive_structured_output/PullRequestEvent",
            "gh_archive_structured_output/IssueCommentEvent",
        ],
    },
    {
        "id": "diagnostic_logs.logs",
        "dir": "diagnostic-logs",
        "title": "Diagnostic logs",
        "description": "Diagnostic log slices from GHA logs, LogChunks, and LogHub.",
        "dataset_family": "diagnostic_logs",
        "datasets": [
            "diagnostic_logs/ghalogs_issue_5093_holdout",
            "diagnostic_logs/logchunks_eval",
            "diagnostic_logs/loghub_eval",
        ],
    },
    {
        "id": "web_markup.common_crawl",
        "dir": "common-crawl-markup",
        "title": "Common Crawl: WARC/WAT markup",
        "description": "Common Crawl WARC and WAT raw web markup slices.",
        "dataset_family": "raw_web_markup",
        "datasets": ["raw_web_markup/common_crawl/warc", "raw_web_markup/common_crawl/wat"],
    },
    {
        "id": "structured_text.tables",
        "dir": "structured-text-tables",
        "title": "Structured text: tables",
        "description": "Table-oriented structured-text slices restored in v14.",
        "dataset_family": "structured_text",
        "datasets": ["structured_text/totto", "structured_text/wikitablequestions", "structured_text/gittables"],
    },
    {
        "id": "eval_math.mmlu_gsm8k",
        "dir": "eval-math-mmlu-gsm8k",
        "title": "Eval/math: MMLU auxiliary and GSM8K",
        "description": "LM-eval training slices for auxiliary MMLU and GSM8K.",
        "dataset_family": "lm_eval",
        "datasets": ["lm_eval/mmlu_auxiliary_train", "lm_eval/gsm8k_train"],
    },
    {
        "id": "formal_package_network.misc",
        "dir": "formal-package-network",
        "title": "Formal/package/network formats",
        "description": "TPTP, npm registry metadata, and Zeek network-security formats.",
        "dataset_family": "structured_formats",
        "datasets": ["formal_methods/tptp", "package_metadata/npm_registry_metadata", "binary_network_security/uwf_zeek"],
    },
    {
        "id": "music_hardware.rtl_abc",
        "dir": "music-hardware-rtl-abc",
        "title": "Music/hardware: ABC and RTL",
        "description": "Irish ABC music notation and hardware RTL Verilog slices.",
        "dataset_family": "specialized_formats",
        "datasets": ["game_music/irishman_abc", "hardware_rtl/verilog_eval"],
    },
]


def file_slug(text: str) -> str:
    text = text.replace("/", "-")
    text = re.sub(r"[^A-Za-z0-9._-]+", "-", text)
    text = re.sub(r"-+", "-", text).strip("-")
    return text[:110]


def display_title(title: str) -> str:
    prefixes = (
        "Synthetic reasoning: ",
        "Code: ",
        "Markup: ",
        "Multilingual: ",
        "Bio/Chem: ",
        "Paloma: ",
        "OCR/ASR: ",
        "OCR/Markup: ",
        "GitHub Archive: ",
        "Common Crawl: ",
        "Structured text: ",
        "Eval/math: ",
        "Music/hardware: ",
        "Synthetic numeric formats: ",
        "Synthetic numeric prompt ablation: ",
        "Synthetic surface forms: ",
        "Stack v2: ",
    )
    for prefix in prefixes:
        if title.startswith(prefix):
            return title[len(prefix) :]
    return title


def score_span(row: dict[str, Any]) -> tuple[int, int]:
    start = int(row.get("score_byte_start") or 0)
    end = int(row.get("score_byte_end") or row.get("num_bytes") or len(row["per_byte_loss"]))
    return start, end


def masked_losses(row: dict[str, Any]) -> np.ndarray:
    arr = np.asarray(row["per_byte_loss"], dtype=np.float64)
    start, end = score_span(row)
    out = np.zeros_like(arr)
    out[start:end] = arr[start:end]
    return out


def char_offsets(text: str) -> list[int]:
    offsets = [0]
    running = 0
    for ch in text:
        running += len(ch.encode("utf-8"))
        offsets.append(running)
    return offsets


def char_bpb(text: str, losses: np.ndarray) -> list[float]:
    offsets = char_offsets(text)
    return [
        0.0 if end <= start else round(float(losses[start:end].sum() * LOG2E / (end - start)), 4)
        for start, end in zip(offsets, offsets[1:])
    ]


def scored_bytes(row: dict[str, Any]) -> int:
    start, end = score_span(row)
    return max(0, end - start)


def doc_bpb(row: dict[str, Any]) -> float:
    start, end = score_span(row)
    denom = max(0, end - start)
    arr = np.asarray(row["per_byte_loss"], dtype=np.float64)
    return 0.0 if denom <= 0 else float(arr[start:end].sum() * LOG2E / denom)


def label_for(dataset: str, family: str) -> str:
    prefixes = (
        family + "/",
        "synthetic_reasoning_ppl/",
        "synthetic_numeric_format_ppl/",
        "synthetic_numeric_format_prompt_ablation_ppl/",
        "synthetic_delimiter_format_ppl/",
        "synthetic_identifier_encoding_ppl/",
        "synthetic_machine_records_ppl/",
        "synthetic_patch_diff_ppl/",
        "synthetic_science_markup_ppl/",
        "fineweb2_multilingual/",
        "uncheatable_eval/",
        "raw_web_markup/",
        "long_tail_ppl_runnable/",
        "long_tail_ppl/code_ecosystem/stack_v2_",
        "gh_archive_structured_output/",
        "diagnostic_logs/",
        "structured_text/",
        "lm_eval/",
        "bio_chem/",
        "paloma/",
    )
    for prefix in prefixes:
        if dataset.startswith(prefix):
            return dataset[len(prefix) :]
    return dataset


def read_selected(path: str, selected_datasets: list[str]) -> dict[tuple[str, str, int], dict[str, Any]]:
    print(f"reading {path}", flush=True)
    columns = [
        "dataset_name",
        "shard_name",
        "row_index",
        "text",
        "per_byte_loss",
        "num_bytes",
        "score_byte_start",
        "score_byte_end",
    ]
    with fsspec.open(path, "rb") as f:
        table = pq.read_table(f, columns=columns, filters=[("dataset_name", "in", selected_datasets)])
    rows = {
        (str(row["dataset_name"]), str(row["shard_name"]), int(row["row_index"])): row for row in table.to_pylist()
    }
    print(f" rows {len(rows)}", flush=True)
    return rows


def get_row(rows: dict[tuple[str, str, int], dict[str, Any]], dataset: str, shard: str, row_index: int) -> dict[str, Any]:
    key = (dataset, shard, row_index)
    if key in rows:
        return rows[key]
    matches = [row for (ds, _shard, idx), row in rows.items() if ds == dataset and idx == row_index]
    if not matches:
        raise KeyError(f"Could not find {dataset} shard={shard} row={row_index}")
    return matches[0]


def chosen_rows(
    summary: dict[str, Any],
    dataset: str,
    model_a_rows: dict[tuple[str, str, int], dict[str, Any]],
    model_b_rows: dict[tuple[str, str, int], dict[str, Any]],
) -> list[dict[str, Any]]:
    top_by_dataset = summary.get("top_documents_by_dataset", {})
    rows = []
    seen = set()
    for direction in ("model_a_worse", "model_b_worse"):
        direction_rows = list((top_by_dataset.get(direction, {}) or {}).get(dataset, []))
        if direction_rows:
            row = direction_rows[0]
            key = (row.get("shard"), row.get("row_index"))
            if key not in seen:
                rows.append(row)
                seen.add(key)
    if len(rows) < 2:
        for direction in ("model_a_worse", "model_b_worse"):
            for row in (top_by_dataset.get(direction, {}) or {}).get(dataset, []):
                key = (row.get("shard"), row.get("row_index"))
                if key not in seen:
                    rows.append(row)
                    seen.add(key)
                    break
            if len(rows) >= 2:
                break
    if rows:
        return rows[:2]

    candidates = []
    for key, model_a_row in model_a_rows.items():
        row_dataset, shard, row_index = key
        if row_dataset != dataset or key not in model_b_rows:
            continue
        gap_bpb = doc_bpb(model_a_row) - doc_bpb(model_b_rows[key])
        candidates.append({"shard": shard, "row_index": row_index, "gap_bpb": gap_bpb})
    if not candidates:
        return []

    most_model_a_worse = max(candidates, key=lambda row: row["gap_bpb"])
    most_model_b_worse = min(candidates, key=lambda row: row["gap_bpb"])
    if (most_model_a_worse["shard"], most_model_a_worse["row_index"]) == (
        most_model_b_worse["shard"],
        most_model_b_worse["row_index"],
    ):
        return [most_model_a_worse]
    return [most_model_a_worse, most_model_b_worse]


def build_example(
    *,
    model_a_rows: dict[tuple[str, str, int], dict[str, Any]],
    model_b_rows: dict[tuple[str, str, int], dict[str, Any]],
    dataset: str,
    top_row: dict[str, Any],
    label: str,
    example_dir: Path,
) -> tuple[dict[str, Any], int]:
    shard = str(top_row.get("shard", "0"))
    row_index = int(top_row["row_index"])
    a = get_row(model_a_rows, dataset, shard, row_index)
    b = get_row(model_b_rows, dataset, shard, row_index)
    if a["text"] != b["text"]:
        raise ValueError(f"Text mismatch for {dataset} row {row_index}")

    text = a["text"]
    a_losses = masked_losses(a)
    b_losses = masked_losses(b)
    a_by_char = char_bpb(text, a_losses)
    b_by_char = char_bpb(text, b_losses)
    gap_by_char = [round(x - y, 4) for x, y in zip(a_by_char, b_by_char, strict=True)]
    marin_bpb = doc_bpb(a)
    qwen_bpb = doc_bpb(b)
    gap_bpb = marin_bpb - qwen_bpb
    if abs(gap_bpb - float(top_row["gap_bpb"])) > 5e-4:
        raise ValueError(f"Gap mismatch for {dataset} row {row_index}: heatmap {gap_bpb} vs report {top_row['gap_bpb']}")

    score_start, score_end = score_span(a)
    shard_slug = file_slug(str(a["shard_name"]))[-48:]
    payload_name = f"{file_slug(label)}-{shard_slug}-row-{row_index}.json"
    payload = {
        "dataset": dataset,
        "label": label,
        "row_index": row_index,
        "shard": str(a["shard_name"]),
        "bytes": scored_bytes(a),
        "score_byte_start": score_start,
        "score_byte_end": score_end,
        "marin_bpb": round(marin_bpb, 4),
        "qwen_bpb": round(qwen_bpb, 4),
        "gap_bpb": round(gap_bpb, 4),
        "text": text,
        "marin_bpb_by_char": a_by_char,
        "qwen_bpb_by_char": b_by_char,
        "gap_bpb_by_char": gap_by_char,
    }
    path = example_dir / payload_name
    path.write_text(json.dumps(payload, separators=(",", ":")) + "\n")
    entry = {
        key: payload[key]
        for key in [
            "dataset",
            "label",
            "row_index",
            "shard",
            "bytes",
            "score_byte_start",
            "score_byte_end",
            "marin_bpb",
            "qwen_bpb",
            "gap_bpb",
        ]
    }
    entry["payload"] = f"examples/{payload_name}"
    return entry, path.stat().st_size


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
        manifest = {
            "schema_version": 1,
            "id": set_cfg["id"],
            "title": f"{display_title(set_cfg['title'])} span heatmap",
            "description": set_cfg["description"]
            + " Token losses are smeared uniformly over token byte spans before the Marin-Qwen gap is computed.",
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
                "description": set_cfg["description"]
                + " Token losses are smeared uniformly over token byte spans before the Marin-Qwen gap is computed.",
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

    index = {
        "schema_version": 1,
        "title": "Span Heatmap Samples",
        "description": (
            "Small per-corpus samples for localized Marin-Qwen bpb comparison. The dashboard loads only this index "
            "at startup; each corpus sample manifest and its per-character payloads are fetched only when opened."
        ),
        "sets": index_sets,
    }
    (SPAN_ROOT / "manifest.json").write_text(json.dumps(index, indent=2) + "\n")
    print(f"wrote {len(index_sets)} heatmap sets", flush=True)


if __name__ == "__main__":
    main()
    sys.stdout.flush()
    os._exit(0)
