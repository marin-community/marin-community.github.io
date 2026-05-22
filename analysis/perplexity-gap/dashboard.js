const ASSET_VERSION = '20260522-v32-booksum-lima';
const response = await fetch(`./data.json?v=${ASSET_VERSION}`);
if (!response.ok) {
  throw new Error(`Failed to load dashboard data: ${response.status} ${response.statusText}`);
}
const DATA = await response.json();
let SPAN_HEATMAP_INDEX = null;
let DOCUMENT_SAMPLE_INDEX = null;
const SPAN_HEATMAP_STATE = {
  openSetIds: new Set(),
  manifests: new Map(),
  examples: new Map(),
  loading: new Set(),
  errors: new Map(),
};
const DOCUMENT_SAMPLE_STATE = {
  openSetIds: new Set(),
  payloads: new Map(),
  loading: new Set(),
  errors: new Map(),
};
try {
  const heatmapResponse = await fetch(`./span-heatmaps/manifest.json?v=${ASSET_VERSION}`);
  if (heatmapResponse.ok) {
    SPAN_HEATMAP_INDEX = await heatmapResponse.json();
  }
} catch {
  SPAN_HEATMAP_INDEX = null;
}
try {
  const sampleResponse = await fetch(`./document-samples/manifest.json?v=${ASSET_VERSION}`);
  if (sampleResponse.ok) {
    DOCUMENT_SAMPLE_INDEX = await sampleResponse.json();
  }
} catch {
  DOCUMENT_SAMPLE_INDEX = null;
}

const SPOTLIGHTS = [
      {
            "name": "uncheatable_eval/github_cpp",
            "short": "github_cpp",
            "note": "Clear recurring code gap on raw C++ source files.",
            "tone": "bad",
            "gaps": {
                  "llama": 0.034924537614389836,
                  "qwen": 0.07224996807911695
            }
      },
      {
            "name": "uncheatable_eval/github_python",
            "short": "github_python",
            "note": "Same story on Python source files.",
            "tone": "bad",
            "gaps": {
                  "llama": 0.027409487917845095,
                  "qwen": 0.07219752363326244
            }
      },
      {
            "name": "paloma/dolma_100_programing_languages",
            "short": "programming_languages",
            "note": "Programming-language prose is still weak, not only code files.",
            "tone": "bad",
            "gaps": {
                  "llama": 0.021027777396655036,
                  "qwen": 0.028772923526405928
            }
      },
      {
            "name": "uncheatable_eval/bbc_news",
            "short": "bbc_news",
            "note": "Ordinary edited prose looks fine in both finalized 8B base comparisons.",
            "tone": "good",
            "gaps": {
                  "llama": -0.0038389594395726893,
                  "qwen": -0.04249281299459753
            }
      },
      {
            "name": "uncheatable_eval/arxiv_physics",
            "short": "arxiv_physics",
            "note": "Scientific prose is near parity or slightly Marin-favored.",
            "tone": "good",
            "gaps": {
                  "llama": -0.008227043817857832,
                  "qwen": -0.0035725971737801034
            }
      },
      {
            "name": "paloma/m2d2_s2orc_unsplit",
            "short": "m2d2_s2orc_unsplit",
            "note": "Long-form paper text is basically fine in the finalized 8B base runs.",
            "tone": "good",
            "gaps": {
                  "llama": -0.010820141978060156,
                  "qwen": -0.003826353889077392
            }
      }
];

    const primaryViews = [
      { id: 'gaps', label: 'Gaps' },
      { id: 'examples', label: 'Example Documents' },
      { id: 'heatmaps', label: 'Span Heatmap Samples' },
    ];

    const views = [
      { id: 'headline_groups', label: 'Corpus Groups' },
      { id: 'top_datasets', label: 'Dataset Slices' },
      { id: 'pattern_buckets', label: 'Span Types' },
    ];
    const sorts = [
      { id: 'abs', label: 'Sort by |gap|' },
      { id: 'gap', label: 'Sort by gap' },
      { id: 'name', label: 'Sort by name' },
    ];

    const GITHUB_REPO = 'https://github.com/marin-community/marin';
    const DATASET_LINKS = {
      paloma: 'https://huggingface.co/datasets/allenai/paloma',
      uncheatable: 'https://github.com/Jellyfish042/uncheatable_eval',
      fineweb2: 'https://huggingface.co/datasets/HuggingFaceFW/fineweb-2',
      svgStack: 'https://huggingface.co/datasets/starvector/svg-stack',
      commonCrawl: 'https://commoncrawl.org/',
      ghArchive: 'https://www.gharchive.org/',
      loghub: 'https://github.com/logpai/loghub',
      sweBench: 'https://www.swebench.com/',
      paws: 'https://github.com/google-research-datasets/paws',
      flores: 'https://github.com/facebookresearch/flores',
      mmlu: 'https://huggingface.co/datasets/cais/mmlu',
      gsm8k: 'https://huggingface.co/datasets/openai/gsm8k',
      gitTables: 'https://huggingface.co/datasets/target-benchmark/gittables-corpus',
      webDataCommons: 'https://webdatacommons.org/webtables/englishTables.html',
      npmRegistry: 'https://registry.npmjs.org/',
      librispeech: 'https://www.openslr.org/12',
      uniprot: 'https://www.ebi.ac.uk/uniprot/download-center',
      pubchem: 'https://pubchem.ncbi.nlm.nih.gov/docs/downloads',
      rnacentral: 'https://ftp.ebi.ac.uk/pub/databases/RNAcentral/current_release/sequences',
      refseq: 'https://www.ncbi.nlm.nih.gov/refseq/',
      chembl: 'https://www.ebi.ac.uk/chembl/',
      moleculenet: 'https://deepchemdata.s3-us-west-1.amazonaws.com/datasets',
      coqgym: 'https://github.com/princeton-vl/CoqGym',
      smtlib: 'https://smt-lib.org/benchmarks.shtml',
      tptp: 'https://www.tptp.org/',
      dimacs: 'https://satcompetition.github.io/2022/benchmarks.html',
      verilogEval: 'https://github.com/NVlabs/verilog-eval',
      rtlRepo: 'https://github.com/AUCOHL/RTL-Repo',
      rtlCoder: 'https://github.com/hkust-zhiyao/RTL-Coder',
      irishman: 'https://huggingface.co/datasets/sander-wood/irishman',
      melodyhub: 'https://huggingface.co/datasets/sander-wood/melodyhub',
      lichess: 'https://huggingface.co/datasets/Icannos/lichess_games',
      stackV2: 'https://huggingface.co/datasets/bigcode/the-stack-v2',
    };

    const kindLabels = {
      base: 'Base raw',
      multilingual: 'Multilingual raw',
      long_tail: 'Runnable long tail',
      delta: 'Common Crawl + game/music',
      followup: 'Follow-up slices',
      wave2: 'Wave 2 slices',
      all_available: 'All available diagnostic slices',
      mcqa_fever: 'MCQA + FEVER validation',
      long_context: 'Long-context 32k',
    };

    const CODE_TAKEAWAY_BUCKETS = [
      {
        label: 'SVG/XML markup',
        matches: (name) =>
          name.startsWith('raw_web_markup/svg_stack/') ||
          name.startsWith('long_tail_ppl_runnable/web_markup_image_text/svg_stack'),
      },
      {
        label: 'GitHub source',
        matches: (name) => name.startsWith('uncheatable_eval/github'),
      },
      {
        label: 'GH Archive events',
        matches: (name) => name.startsWith('gh_archive_structured_output/'),
      },
      {
        label: 'Programming-language mix',
        matches: (name) => name === 'paloma/dolma_100_programing_languages',
      },
      {
        label: 'Stack v2 code ecosystem',
        matches: (name) => name.startsWith('long_tail_ppl/code_ecosystem'),
      },
      {
        label: 'Hardware / Verilog',
        matches: (name) =>
          name.startsWith('hardware_rtl/') ||
          name.startsWith('long_tail_ppl_runnable/formal_hardware/'),
      },
      {
        label: 'Package metadata',
        matches: (name) => name.startsWith('package_metadata/npm_registry_metadata'),
      },
    ];

    const CODE_TAG_EXACT_NAMES = new Set([
      'source:svg_stack',
      'formal_hardware',
      'package_metadata',
      'code_ecosystem',
      'paloma/dolma_100_programing_languages',
    ]);
    const CODE_TAG_PREFIXES = [
      'raw_web_markup/svg_stack',
      'long_tail_ppl_runnable/web_markup_image_text/svg_stack',
      'uncheatable_eval/github',
      'gh_archive_structured_output',
      'hardware_rtl',
      'long_tail_ppl_runnable/formal_hardware',
      'package_metadata/npm_registry_metadata',
      'long_tail_ppl/code_ecosystem',
    ];

    const DATASET_ALIAS_PREFIXES = ['issue:', 'epic:', 'source:', 'surface:', 'split:', 'family:', 'task:', 'renderer:', 'seed_range:', 'crawl:'];
    const DATASET_WRAPPER_PREFIXES = ['long_tail_ppl/', 'long_tail_ppl_runnable/'];

    function corpusLabel(run) {
      return kindLabels[run.kind] ?? run.subtitle;
    }

    function issueUrl(number) {
      return `${GITHUB_REPO}/issues/${number}`;
    }

    function prUrl(number) {
      return `${GITHUB_REPO}/pull/${number}`;
    }

    function pushRef(refs, label, url, kind) {
      if (!url) return;
      if (refs.some((ref) => ref.label === label && ref.url === url)) return;
      refs.push({ label, url, kind });
    }

    function refsHtml(refs) {
      if (!refs.length) return '';
      return `<div class="name-refs">${refs.map((ref) => `<a class="ref-link ${ref.kind}" href="${ref.url}" target="_blank" rel="noopener noreferrer">${ref.label}</a>`).join('')}</div>`;
    }

    function isCodeSubsetName(name) {
      return CODE_TAG_EXACT_NAMES.has(name) || CODE_TAG_PREFIXES.some((prefix) => name.startsWith(prefix));
    }

    function tagsHtml(tags) {
      if (!tags?.length) return '';
      return `<div class="name-tags">${tags.map((tag) => `<span class="row-tag ${tag}">${tag}</span>`).join('')}</div>`;
    }

    function decorateRow(row) {
      const refs = [];
      const tags = [];
      let displayName = row.name;
      const name = row.name;

      if (isCodeSubsetName(name)) tags.push('code');

      if (row.corpus === 'Base raw') {
        pushRef(refs, 'issue #4961', issueUrl(4961), 'issue');
      }
      if (row.corpus === 'Multilingual raw') {
        pushRef(refs, 'epic #5005', issueUrl(5005), 'issue');
        pushRef(refs, 'PR #5008', prUrl(5008), 'issue');
        pushRef(refs, 'FineWeb2', DATASET_LINKS.fineweb2, 'dataset');
      }
      if (row.corpus === 'Runnable long tail' || row.corpus === 'Wave 2 slices') {
        pushRef(refs, 'epic #5005', issueUrl(5005), 'issue');
      }

      if (name === 'paloma' || name.startsWith('paloma/')) {
        pushRef(refs, 'issue #4961', issueUrl(4961), 'issue');
        pushRef(refs, 'Paloma', DATASET_LINKS.paloma, 'dataset');
      }
      if (name === 'uncheatable_eval' || name.startsWith('uncheatable_eval/')) {
        pushRef(refs, 'issue #4961', issueUrl(4961), 'issue');
        pushRef(refs, 'Uncheatable Eval', DATASET_LINKS.uncheatable, 'dataset');
      }
      if (name === 'fineweb2_multilingual' || name.startsWith('fineweb2_multilingual')) {
        pushRef(refs, 'PR #5008', prUrl(5008), 'issue');
        pushRef(refs, 'FineWeb2', DATASET_LINKS.fineweb2, 'dataset');
      }

      if (name === 'issue:5056') displayName = 'raw_web_markup';
      if (name.startsWith('crawl:')) displayName = `common crawl: ${name.slice('crawl:'.length)}`;
      if (name === 'source:svg_stack') displayName = 'raw_web source: svg_stack';
      if (name === 'source:common_crawl') displayName = 'raw_web source: common_crawl';
      if (name === 'surface:svg_xml') displayName = 'raw_web surface: svg_xml';
      if (name === 'split:test') displayName = 'raw_web_markup split: test';
      if (name === 'split:val') displayName = 'raw_web_markup split: val';
      if (name === 'split:validation') displayName = 'game_music split: validation';
      if (name === 'issue:5060') displayName = 'formal_methods + hardware_rtl';
      if (name === 'issue:5052') displayName = 'synthetic_reasoning_ppl';
      if (name === 'epic:5005') displayName = 'wave2 materialized slices';
      if (name === 'issue:5053') displayName = 'lm_eval_bridge';
      if (name === 'issue:5059') displayName = 'structured_text';
      if (name === 'issue:5061') displayName = 'package_metadata';
      if (name === 'issue:5254') displayName = 'Stack v2 code ecosystem';
      if (name === 'code_ecosystem') displayName = 'Stack v2 code ecosystem';
      if (name === 'issue:5825') displayName = 'long-context validation';
      if (name === 'epic:5819') displayName = 'AA surrogate coverage';
      if (name === 'long_context') displayName = 'long-context 32k';
      if (name === 'kind:raw_long_doc') displayName = 'long-context raw documents';
      if (name === 'kind:supervised_qa') displayName = 'long-context supervised QA';
      if (name.startsWith('long_context/')) {
        displayName = `Long context: ${name.slice('long_context/'.length)}`;
      }
      if (name.startsWith('long_tail_ppl/code_ecosystem/stack_v2_')) {
        displayName = `Stack v2: ${name.slice('long_tail_ppl/code_ecosystem/stack_v2_'.length)}`;
      }
      if (name.startsWith('family:')) displayName = `synthetic family: ${name.slice('family:'.length)}`;
      if (name.startsWith('task:')) displayName = `synthetic task: ${name.slice('task:'.length)}`;
      if (name.startsWith('renderer:')) displayName = `synthetic renderer: ${name.slice('renderer:'.length)}`;
      if (name.startsWith('seed_range:')) displayName = `synthetic seed range: ${name.slice('seed_range:'.length)}`;

      const isSvgRawWebRow =
        (name === 'raw_web_markup' && row.corpus !== 'Common Crawl + game/music') ||
        name === 'issue:5056' ||
        name === 'source:svg_stack' ||
        name === 'surface:svg_xml' ||
        name === 'split:test' ||
        name === 'split:val' ||
        name.startsWith('raw_web_markup/svg_stack');
      const isCommonCrawlRow =
        (name === 'raw_web_markup' && row.corpus === 'Common Crawl + game/music') ||
        name === 'source:common_crawl' ||
        name.startsWith('crawl:') ||
        name.startsWith('raw_web_markup/common_crawl_') ||
        name.startsWith('raw_web_markup/common_crawl/');

      if (isSvgRawWebRow) {
        pushRef(refs, 'issue #5056', issueUrl(5056), 'issue');
        pushRef(refs, 'svg-stack', DATASET_LINKS.svgStack, 'dataset');
      }
      if (isCommonCrawlRow) {
        pushRef(refs, 'issue #5056', issueUrl(5056), 'issue');
        pushRef(refs, 'issue #5192', issueUrl(5192), 'issue');
        pushRef(refs, 'Common Crawl', DATASET_LINKS.commonCrawl, 'dataset');
      }

      if (
        name === 'synthetic_reasoning_ppl' ||
        name.startsWith('synthetic_reasoning_ppl/') ||
        name === 'issue:5052' ||
        name.startsWith('family:') ||
        name.startsWith('task:') ||
        name.startsWith('renderer:') ||
        name.startsWith('seed_range:')
      ) {
        pushRef(refs, 'issue #5052', issueUrl(5052), 'issue');
      }

      if (name === 'bio_chem' || name.startsWith('bio_chem/')) {
        pushRef(refs, 'issue #5058', issueUrl(5058), 'issue');
      }
      if (name.startsWith('bio_chem/uniprot')) pushRef(refs, 'UniProt', DATASET_LINKS.uniprot, 'dataset');
      if (name.startsWith('bio_chem/pubchem')) pushRef(refs, 'PubChem', DATASET_LINKS.pubchem, 'dataset');
      if (name.startsWith('bio_chem/rnacentral')) pushRef(refs, 'RNAcentral', DATASET_LINKS.rnacentral, 'dataset');
      if (name.startsWith('bio_chem/refseq')) pushRef(refs, 'RefSeq', DATASET_LINKS.refseq, 'dataset');
      if (name.startsWith('bio_chem/chembl')) pushRef(refs, 'ChEMBL', DATASET_LINKS.chembl, 'dataset');
      if (name.startsWith('bio_chem/moleculenet')) pushRef(refs, 'MoleculeNet', DATASET_LINKS.moleculenet, 'dataset');

      if (name === 'formal_methods' || name.startsWith('formal_methods/') || name === 'hardware_rtl' || name.startsWith('hardware_rtl/') || name === 'issue:5060') {
        pushRef(refs, 'issue #5060', issueUrl(5060), 'issue');
      }
      if (name.includes('coqgym')) pushRef(refs, 'CoqGym', DATASET_LINKS.coqgym, 'dataset');
      if (name.includes('smt_lib')) pushRef(refs, 'SMT-LIB', DATASET_LINKS.smtlib, 'dataset');
      if (name.includes('tptp')) pushRef(refs, 'TPTP', DATASET_LINKS.tptp, 'dataset');
      if (name.includes('dimacs_cnf')) pushRef(refs, 'DIMACS CNF', DATASET_LINKS.dimacs, 'dataset');
      if (name.includes('verilog_eval') || name.includes('verilogeval')) pushRef(refs, 'VerilogEval', DATASET_LINKS.verilogEval, 'dataset');
      if (name.includes('rtl_repo')) pushRef(refs, 'RTL-Repo', DATASET_LINKS.rtlRepo, 'dataset');
      if (name.includes('rtl_coder')) pushRef(refs, 'RTL-Coder', DATASET_LINKS.rtlCoder, 'dataset');

      if (
        name === 'game_music' ||
        name.includes('/game_music') ||
        name.includes('irishman_abc') ||
        name.includes('melodyhub_abc_input') ||
        name.includes('lichess_pgn_2013_') ||
        name === 'split:validation'
      ) {
        pushRef(refs, 'issue #5062', issueUrl(5062), 'issue');
      }
      if (name.includes('irishman_abc')) pushRef(refs, 'IrishMAN', DATASET_LINKS.irishman, 'dataset');
      if (name.includes('melodyhub_abc_input')) pushRef(refs, 'MelodyHub', DATASET_LINKS.melodyhub, 'dataset');
      if (name.includes('lichess_pgn_2013_')) pushRef(refs, 'Lichess Games', DATASET_LINKS.lichess, 'dataset');

      if (name === 'lm_eval' || name.startsWith('lm_eval/')) {
        pushRef(refs, 'issue #5053', issueUrl(5053), 'issue');
      }
      if (name.includes('mmlu')) pushRef(refs, 'MMLU', DATASET_LINKS.mmlu, 'dataset');
      if (name.includes('gsm8k')) pushRef(refs, 'GSM8K', DATASET_LINKS.gsm8k, 'dataset');

      if (name === 'structured_text' || name.startsWith('structured_text/') || name === 'issue:5059') {
        pushRef(refs, 'issue #5059', issueUrl(5059), 'issue');
      }
      if (name.includes('gittables')) pushRef(refs, 'GitTables', DATASET_LINKS.gitTables, 'dataset');
      if (name.includes('web_data_commons')) pushRef(refs, 'WebDataCommons', DATASET_LINKS.webDataCommons, 'dataset');

      if (name === 'package_metadata' || name.startsWith('package_metadata/') || name === 'issue:5061') {
        pushRef(refs, 'issue #5061', issueUrl(5061), 'issue');
      }
      if (name.includes('npm_registry_metadata')) pushRef(refs, 'npm registry', DATASET_LINKS.npmRegistry, 'dataset');
      if (name === 'code_ecosystem' || name === 'issue:5254' || name.startsWith('long_tail_ppl/code_ecosystem')) {
        pushRef(refs, 'issue #5254', issueUrl(5254), 'issue');
        pushRef(refs, 'The Stack v2', DATASET_LINKS.stackV2, 'dataset');
      }
      if (name === 'long_context' || name === 'issue:5825' || name === 'epic:5819' || name.startsWith('long_context/')) {
        pushRef(refs, 'issue #5825', issueUrl(5825), 'issue');
      }

      if (name === 'gh_archive_structured_output' || name.startsWith('gh_archive_structured_output/')) {
        pushRef(refs, 'issue #5098', issueUrl(5098), 'issue');
        pushRef(refs, 'GH Archive', DATASET_LINKS.ghArchive, 'dataset');
      }
      if (name === 'diagnostic_logs' || name.startsWith('diagnostic_logs')) {
        pushRef(refs, 'issue #5093', issueUrl(5093), 'issue');
        pushRef(refs, 'issue #5121', issueUrl(5121), 'issue');
        pushRef(refs, 'LogHub', DATASET_LINKS.loghub, 'dataset');
      }
      if (name === 'diff_patch' || name.startsWith('diff_patch')) {
        pushRef(refs, 'issue #5095', issueUrl(5095), 'issue');
      }
      if (name.includes('swe_bench')) pushRef(refs, 'SWE-bench', DATASET_LINKS.sweBench, 'dataset');
      if (name === 'paired_robustness_ppl' || name.startsWith('paired_robustness_ppl')) {
        pushRef(refs, 'issue #5096', issueUrl(5096), 'issue');
      }
      if (name.includes('paws_labeled_final') || name.includes('/paraphrase')) pushRef(refs, 'PAWS', DATASET_LINKS.paws, 'dataset');
      if (name.includes('flores_eng_deu') || name.includes('/translation')) pushRef(refs, 'FLORES', DATASET_LINKS.flores, 'dataset');
      if (name === 'asr_ocr_noisy_ppl' || name.startsWith('asr_ocr_noisy_ppl')) {
        pushRef(refs, 'issue #5097', issueUrl(5097), 'issue');
      }
      if (name.includes('librispeech')) pushRef(refs, 'LibriSpeech', DATASET_LINKS.librispeech, 'dataset');

      return {
        ...row,
        displayName,
        refs,
        tags,
      };
    }

    function withCorpus(run, rows) {
      return rows.map((row) => ({
        ...row,
        corpus: corpusLabel(run),
      })).map(decorateRow);
    }

    function withCorpusDocuments(run, rows, direction) {
      return rows.map((row) => {
        const decorated = decorateRow({
          name: row.dataset,
          corpus: corpusLabel(run),
          bytes: row.bytes,
          documents: 1,
          delta_bits: row.delta_bits,
          gap_bpb: row.gap_bpb,
          model_a_bpb: row.model_a_bpb,
          model_b_bpb: row.model_b_bpb,
        });
        return {
          ...row,
          corpus: corpusLabel(run),
          direction,
          displayName: decorated.displayName,
          refs: decorated.refs,
          tags: decorated.tags,
          exampleKey: [corpusLabel(run), row.dataset, row.shard, row.row_index, direction].join('|'),
        };
      });
    }

    function topDocumentsForDirection(run, direction) {
      const globalRows = run.top_documents?.[direction] ?? [];
      const byDataset = run.top_documents_by_dataset?.[direction] ?? {};
      return [
        ...globalRows,
        ...Object.values(byDataset).flat(),
      ];
    }

    function extremeRow(rows, mode) {
      if (!rows.length) return null;
      if (mode === 'max') return rows.reduce((best, row) => row.gap_bpb > best.gap_bpb ? row : best);
      return rows.reduce((best, row) => row.gap_bpb < best.gap_bpb ? row : best);
    }

    function isDatasetAliasRow(name) {
      return DATASET_ALIAS_PREFIXES.some((prefix) => name.startsWith(prefix));
    }

    function datasetRowSignature(row) {
      return [
        row.corpus,
        row.bytes,
        row.documents,
        row.delta_bits,
        row.gap_bpb,
        row.model_a_bpb,
        row.model_b_bpb,
      ].join('|');
    }

    function datasetRowPreference(row) {
      let score = 0;
      if (isDatasetAliasRow(row.name)) score -= 100;
      if (DATASET_WRAPPER_PREFIXES.some((prefix) => row.name.startsWith(prefix))) score -= 20;
      score += (row.name.match(/\//g) ?? []).length * 5;
      score += (row.refs ?? []).filter((ref) => ref.kind === 'dataset').length * 2;
      score -= row.name.length / 1000;
      return score;
    }

    function canonicalDatasetRows(rows) {
      const grouped = new Map();
      for (const row of rows) {
        const signature = datasetRowSignature(row);
        const existing = grouped.get(signature);
        if (!existing || datasetRowPreference(row) > datasetRowPreference(existing)) {
          grouped.set(signature, row);
        }
      }
      return [...grouped.values()];
    }

    function canonicalExampleRows(rows) {
      const grouped = new Map();
      for (const row of rows) {
        const existing = grouped.get(row.exampleKey);
        const score = Math.abs(row.worst_gap_bpb ?? row.gap_bpb);
        if (!existing || score > Math.abs(existing.worst_gap_bpb ?? existing.gap_bpb)) {
          grouped.set(row.exampleKey, row);
        }
      }
      return [...grouped.values()];
    }

    function exampleScore(row) {
      return Math.abs(row.worst_gap_bpb ?? row.gap_bpb);
    }

    function diversifiedExamples(rows, limit) {
      const sorted = [...rows].sort((a, b) => exampleScore(b) - exampleScore(a));
      const picked = [];
      const seenDatasets = new Set();
      for (const row of sorted) {
        if (picked.length >= limit) break;
        if (seenDatasets.has(row.dataset)) continue;
        picked.push(row);
        seenDatasets.add(row.dataset);
      }
      for (const row of sorted) {
        if (picked.length >= limit) break;
        if (picked.includes(row)) continue;
        picked.push(row);
      }
      return picked;
    }

    function buildComparisons(runs) {
      const order = [];
      const grouped = new Map();
      for (const run of runs) {
        const key = `${run.model_a}__${run.model_b}`;
        if (!grouped.has(key)) {
          grouped.set(key, {
            id: key,
            title: run.title,
            model_a: run.model_a,
            model_b: run.model_b,
            runs: [],
          });
          order.push(key);
        }
        grouped.get(key).runs.push(run);
      }
      return order.map((key) => {
        const comparison = grouped.get(key);
        const headlineRows = canonicalDatasetRows(comparison.runs.flatMap((run) => withCorpus(run, run.headline_groups)));
        const datasetRows = canonicalDatasetRows(comparison.runs.flatMap((run) => withCorpus(run, run.top_datasets)));
        const patternRows = comparison.runs.flatMap((run) => withCorpus(run, run.pattern_buckets));
        const positiveDocs = canonicalExampleRows(
          comparison.runs.flatMap((run) => withCorpusDocuments(run, topDocumentsForDirection(run, 'model_a_worse'), 'model_a_worse'))
        );
        const negativeDocs = canonicalExampleRows(
          comparison.runs.flatMap((run) => withCorpusDocuments(run, topDocumentsForDirection(run, 'model_b_worse'), 'model_b_worse'))
        );
        return {
          ...comparison,
          corpora: comparison.runs.map((run) => corpusLabel(run)),
          rows: {
            headline_groups: headlineRows,
            top_datasets: datasetRows,
            pattern_buckets: patternRows,
          },
          exampleDocs: {
            model_a_worse: positiveDocs,
            model_b_worse: negativeDocs,
          },
          cards: {
            worst_group: extremeRow(headlineRows, 'max'),
            best_group: extremeRow(headlineRows, 'min'),
            worst_pattern: extremeRow(patternRows, 'max'),
            best_pattern: extremeRow(patternRows, 'min'),
          },
        };
      });
    }

    const COMPARISONS = buildComparisons(DATA.runs);

    let state = {
      comparisonId: COMPARISONS[0].id,
      section: 'gaps',
      view: 'headline_groups',
      sort: 'abs',
      query: '',
      hideMultilingual: false,
      selectedHeatmapId: null,
      selectedDocumentSetId: null,
    };
    let applyingHashState = false;
    let pendingAnchorScrollId = null;

    const byId = (id) => document.getElementById(id);

    function domAnchorId(prefix, value) {
      return `${prefix}-${String(value ?? '').replace(/[^A-Za-z0-9_-]+/g, '-')}`;
    }

    function requestAnchorScroll(elementId) {
      pendingAnchorScrollId = elementId;
    }

    function consumeAnchorScroll() {
      if (!pendingAnchorScrollId) return;
      const elementId = pendingAnchorScrollId;
      pendingAnchorScrollId = null;
      requestAnimationFrame(() => {
        byId(elementId)?.scrollIntoView({ block: 'start' });
      });
    }

    function validPrimarySection(value) {
      return primaryViews.some((view) => view.id === value);
    }

    function validView(value) {
      return views.some((view) => view.id === value);
    }

    function validSort(value) {
      return sorts.some((sort) => sort.id === value);
    }

    function validComparison(value) {
      return COMPARISONS.some((comparison) => comparison.id === value);
    }

    function validHeatmapSet(value) {
      return Boolean(value) && (SPAN_HEATMAP_INDEX?.sets ?? []).some((setEntry) => setEntry.id === value);
    }

    function validDocumentSet(value) {
      return Boolean(value) && (DOCUMENT_SAMPLE_INDEX?.sets ?? []).some((setEntry) => setEntry.id === value);
    }

    function readHashParams() {
      const rawHash = window.location.hash.replace(/^#/, '');
      return new URLSearchParams(rawHash.startsWith('!') ? rawHash.slice(1) : rawHash);
    }

    function applyHashState() {
      const params = readHashParams();
      const comparisonId = params.get('comparison');
      if (validComparison(comparisonId)) state.comparisonId = comparisonId;

      const section = params.get('tab') ?? params.get('section');
      if (validPrimarySection(section)) state.section = section;

      const view = params.get('view');
      if (validView(view)) state.view = view;

      const sort = params.get('sort');
      if (validSort(sort)) state.sort = sort;

      state.query = params.get('q') ?? '';
      state.hideMultilingual = ['1', 'true', 'yes'].includes(String(params.get('hideMultilingual') ?? '').toLowerCase());

      const heatmapId = params.get('heatmap');
      if (validHeatmapSet(heatmapId)) {
        state.section = 'heatmaps';
        state.selectedHeatmapId = heatmapId;
        SPAN_HEATMAP_STATE.openSetIds.clear();
        SPAN_HEATMAP_STATE.openSetIds.add(heatmapId);
        requestAnchorScroll(domAnchorId('heatmap', heatmapId));
      }

      const documentSetId = params.get('document') ?? params.get('sample');
      if (validDocumentSet(documentSetId)) {
        state.section = 'examples';
        state.selectedDocumentSetId = documentSetId;
        DOCUMENT_SAMPLE_STATE.openSetIds.clear();
        DOCUMENT_SAMPLE_STATE.openSetIds.add(documentSetId);
        requestAnchorScroll(domAnchorId('document-sample', documentSetId));
      }
    }

    function buildHash() {
      const params = new URLSearchParams();
      if (state.comparisonId !== COMPARISONS[0].id) params.set('comparison', state.comparisonId);
      if (state.section !== 'gaps' || state.selectedHeatmapId || state.selectedDocumentSetId) {
        params.set('tab', state.section);
      }
      if (state.section === 'gaps') {
        if (state.view !== 'headline_groups') params.set('view', state.view);
        if (state.sort !== 'abs') params.set('sort', state.sort);
        if (state.query) params.set('q', state.query);
      }
      if (state.hideMultilingual) params.set('hideMultilingual', '1');
      if (state.section === 'heatmaps' && state.selectedHeatmapId) {
        params.set('heatmap', state.selectedHeatmapId);
      }
      if (state.section === 'examples' && state.selectedDocumentSetId) {
        params.set('document', state.selectedDocumentSetId);
      }
      const serialized = params.toString();
      return serialized ? `#${serialized}` : '';
    }

    function syncHash() {
      if (applyingHashState) return;
      const nextHash = buildHash();
      const nextUrl = `${window.location.pathname}${window.location.search}${nextHash}`;
      const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      if (nextUrl !== currentUrl) {
        window.history.replaceState(null, '', nextUrl);
      }
    }

    function fmtGap(value) {
      const sign = value >= 0 ? '+' : '';
      return `${sign}${value.toFixed(3)} bpb`;
    }

    function fmtInt(value) {
      return new Intl.NumberFormat('en-US').format(value);
    }

    function fmtBytes(value) {
      if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)} MB`;
      if (value >= 1_000) return `${(value / 1_000).toFixed(1)} KB`;
      return `${fmtInt(value)} B`;
    }

    function weightedSummary(rows) {
      const bytes = rows.reduce((sum, row) => sum + row.bytes, 0);
      const documents = rows.reduce((sum, row) => sum + row.documents, 0);
      const deltaBits = rows.reduce((sum, row) => sum + row.delta_bits, 0);
      return {
        bytes,
        documents,
        gap_bpb: bytes ? deltaBits / bytes : 0,
      };
    }

    function codeRows(rows) {
      return canonicalDatasetRows(rows.filter((row) => CODE_TAKEAWAY_BUCKETS.some((bucket) => bucket.matches(row.name))));
    }

    function stackV2SliceRows(rows) {
      return rows
        .filter((row) => row.name.startsWith('long_tail_ppl/code_ecosystem/stack_v2_'))
        .sort((a, b) => Math.abs(b.gap_bpb) - Math.abs(a.gap_bpb));
    }

    function stackV2SliceRow(row) {
      const cls = row.gap_bpb >= 0 ? 'bad' : 'good';
      return `<div class="stack-slice-row">
        <div class="stack-slice-name">${escapeHtml(row.displayName ?? row.name)}</div>
        <div class="stack-slice-gap ${cls}">${fmtGap(row.gap_bpb)}</div>
        <div class="stack-slice-meta">Marin ${row.model_a_bpb.toFixed(3)} | Qwen ${row.model_b_bpb.toFixed(3)} | ${fmtBytes(row.bytes)}</div>
      </div>`;
    }

    function renderCodeTakeaway(comparison) {
      const node = byId('code-takeaway');
      const rows = codeRows(comparison.rows.top_datasets);
      if (!rows.length) {
        node.hidden = true;
        node.innerHTML = '';
        return;
      }
      node.hidden = false;
      const hasAllAvailableRun = comparison.runs.some((run) => run.kind === 'all_available');
      const total = weightedSummary(rows);
      const isBehind = total.gap_bpb >= 0;
      const bucketCards = CODE_TAKEAWAY_BUCKETS.map((bucket) => {
        const bucketRows = rows.filter((row) => bucket.matches(row.name));
        if (!bucketRows.length) return '';
        const summary = weightedSummary(bucketRows);
        const cls = summary.gap_bpb >= 0 ? 'bad' : 'good';
        return `<div class="bucket-card">
          <div class="bucket-name">${bucket.label}</div>
          <div class="bucket-gap ${cls}">${fmtGap(summary.gap_bpb)}</div>
          <div class="bucket-meta">${fmtInt(bucketRows.length)} row(s) | ${fmtBytes(summary.bytes)} | ${fmtInt(summary.documents)} docs</div>
        </div>`;
      }).join('');
      const stackRows = stackV2SliceRows(comparison.rows.top_datasets);
      const stackBreakout = stackRows.length ? `
        <div class="stack-slices">
          <div class="stack-slices-heading">
            <div>
              <div class="stack-slices-title">Stack v2 language slices</div>
              <div class="stack-slices-note">#5254 v0 105-slice cut; sorted by absolute gap.</div>
            </div>
            <button class="inline-link-button" type="button" data-stack-filter>Open in dataset table</button>
          </div>
          <div class="stack-slice-grid">${stackRows.map(stackV2SliceRow).join('')}</div>
        </div>` : '';
      node.innerHTML = `
        <div class="takeaway-top">
          <div>
            <div class="takeaway-label">Code / code-adjacent</div>
            <div class="takeaway-value ${isBehind ? 'bad' : 'good'}">${fmtGap(total.gap_bpb)}</div>
            <div class="takeaway-meta">${fmtInt(rows.length)} de-duplicated row(s) | ${fmtBytes(total.bytes)} | ${fmtInt(total.documents)} docs</div>
          </div>
          <p class="takeaway-copy">
            Marin is ${isBehind ? 'still behind' : 'ahead'} on the focused code and code-adjacent subset for this comparison. ${hasAllAvailableRun ? 'In the 32B run, the largest gap is on SVG/XML markup;' : 'The largest gap is on SVG/XML markup;'} GitHub source and GH Archive structured-output rows are also comparator-favored, while hardware/Verilog is close to parity.
          </p>
        </div>
        <div class="takeaway-buckets">${bucketCards}</div>
        ${stackBreakout}`;
      node.querySelector('[data-stack-filter]')?.addEventListener('click', () => {
        state.view = 'top_datasets';
        state.query = 'stack_v2';
        render();
      });
    }

    function card(label, row, cls) {
      if (!row) return `<div class="card"><div class="label">${label}</div><div class="name">n/a</div></div>`;
      return `<div class="card">
        <div class="label">${label}</div>
        <div class="name">${row.displayName ?? row.name}</div>
        <div class="subname">${row.corpus}</div>
        ${tagsHtml(row.tags)}
        ${refsHtml(row.refs ?? [])}
        <div class="value ${cls}">${fmtGap(row.gap_bpb)}</div>
      </div>`;
    }

    function miniBar(value, scale) {
      const width = `${Math.max(2, Math.round(Math.abs(value) / scale * 50))}%`;
      const fillClass = value >= 0 ? 'positive' : 'negative';
      return `<div class="mini-track"><div class="mini-fill ${fillClass}" style="width:${width}"></div></div>`;
    }

    function escapeHtml(value) {
      return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function diffAlpha(value) {
      const magnitude = Math.abs(value ?? 0);
      const alpha = Math.min(0.68, 0.18 + (1 - Math.exp(-magnitude / 1.75)) * 0.44);
      return alpha.toFixed(2);
    }

    function diffClass(value) {
      return value >= 0 ? 'diff-worse' : 'diff-better';
    }

    function highlightText(text, focus, value) {
      const source = String(text ?? '');
      const needle = focus ? String(focus) : '';
      const cssClass = diffClass(value);
      const alpha = diffAlpha(value);
      if (!needle) return escapeHtml(source);
      const start = source.indexOf(needle);
      if (start === -1) return escapeHtml(source);
      const end = start + needle.length;
      return `${escapeHtml(source.slice(0, start))}<span class="diff-span ${cssClass}" style="--diff-alpha:${alpha}">${escapeHtml(source.slice(start, end))}</span>${escapeHtml(source.slice(end))}`;
    }

    function examplePreviewHtml(example) {
      const preview = example.preview ?? '';
      const focus = example.worst_text ?? '';
      const value = example.worst_gap_bpb ?? example.gap_bpb;
      return highlightText(preview, focus, value);
    }

    function exampleFocusHtml(example) {
      if (!example.worst_text) return '';
      const value = example.worst_gap_bpb ?? example.gap_bpb;
      const bucket = example.worst_bucket ? `<span class="example-chip">${escapeHtml(example.worst_bucket)}</span>` : '';
      return `<div class="example-focus"><span class="focus-label">Focus:</span>${highlightText(example.worst_text, example.worst_text, value)} ${bucket}</div>`;
    }

    function exampleCardHtml(example) {
      const localGap = example.worst_gap_bpb ?? example.gap_bpb;
      const gapClass = localGap >= 0 ? 'bad' : 'good';
      return `<div class="example-card">
        <div class="example-top">
          <div>
            <div class="example-name">${example.displayName ?? example.dataset}</div>
            <div class="example-metrics">
              <span class="example-chip">${example.corpus}</span>
              <span class="example-chip">${fmtInt(example.bytes)} bytes</span>
              ${example.tags?.includes('code') ? '<span class="example-chip tag-code">code</span>' : ''}
              <span class="example-gap ${gapClass}">${fmtGap(example.gap_bpb)}</span>
            </div>
          </div>
        </div>
        ${refsHtml(example.refs ?? [])}
        <div class="example-preview">${examplePreviewHtml(example)}</div>
        ${exampleFocusHtml(example)}
      </div>`;
    }

    function heatmapGlyph(ch) {
      if (ch === ' ') return '\u00b7';
      if (ch === '\t') return '\u21e5';
      if (ch === '\n') return '\u21b5';
      return ch;
    }

    const HEATMAP_GAP_DEADBAND_BPB = 0.025;
    const HEATMAP_LOW_LOSS_BPB = 0.025;

    function heatmapEffectiveGap(gap, marin, qwen) {
      if (Math.max(Math.abs(marin), Math.abs(qwen)) < HEATMAP_LOW_LOSS_BPB) return 0;
      if (Math.abs(gap) < HEATMAP_GAP_DEADBAND_BPB) return 0;
      return gap;
    }

    function heatmapAlpha(value, maxAbs) {
      if (!maxAbs) return '0.00';
      const visibleMagnitude = Math.max(0, Math.abs(value) - HEATMAP_GAP_DEADBAND_BPB);
      const visibleMax = Math.max(HEATMAP_GAP_DEADBAND_BPB, maxAbs - HEATMAP_GAP_DEADBAND_BPB);
      const magnitude = Math.min(1, visibleMagnitude / visibleMax);
      return (0.10 + magnitude * 0.58).toFixed(2);
    }

    function heatmapCharHtml(example, chars, index, maxAbs, scoredRange) {
      const ch = chars[index];
      const gap = example.gap_bpb_by_char[index] ?? 0;
      const marin = example.marin_bpb_by_char[index] ?? 0;
      const qwen = example.qwen_bpb_by_char[index] ?? 0;
      const effectiveGap = heatmapEffectiveGap(gap, marin, qwen);
      const title = `Marin ${marin.toFixed(3)} bpb | Qwen ${qwen.toFixed(3)} bpb | gap ${fmtGap(gap)}`;
      const lineBreak = ch === '\n' ? '\n' : '';
      const glyph = escapeHtml(heatmapGlyph(ch));
      const roleClass = index >= scoredRange.charStart && index < scoredRange.charEnd ? 'heatmap-char-target' : 'heatmap-char-input';
      if (!effectiveGap) {
        return `<span class="heatmap-char heatmap-char-neutral ${roleClass}" title="${escapeHtml(title)}">${glyph}</span>${lineBreak}`;
      }
      const hue = effectiveGap >= 0 ? 12 : 212;
      const alpha = heatmapAlpha(effectiveGap, maxAbs);
      return `<span class="heatmap-char ${roleClass}" title="${escapeHtml(title)}" style="background: hsla(${hue}, 92%, 58%, ${alpha})">${glyph}</span>${lineBreak}`;
    }

    const HEATMAP_TEXT_ENCODER = new TextEncoder();

    function heatmapCharByteOffsets(text) {
      const offsets = [0];
      for (const ch of text) {
        offsets.push(offsets[offsets.length - 1] + HEATMAP_TEXT_ENCODER.encode(ch).length);
      }
      return offsets;
    }

    function heatmapScoredCharRange(example) {
      const offsets = heatmapCharByteOffsets(example.text);
      const scoreStart = Number(example.score_byte_start ?? 0);
      const scoreEnd = Number(example.score_byte_end ?? offsets[offsets.length - 1]);
      let charStart = 0;
      while (charStart < offsets.length - 1 && offsets[charStart + 1] <= scoreStart) charStart += 1;
      let charEnd = charStart;
      while (charEnd < offsets.length - 1 && offsets[charEnd] < scoreEnd) charEnd += 1;
      return { offsets, charStart, charEnd, scoreStart, scoreEnd };
    }

    function heatmapTextHtml(example, maxAbs) {
      const chars = Array.from(example.text);
      const scoredRange = heatmapScoredCharRange(example);
      let html = '';
      for (let index = 0; index < chars.length; index += 1) {
        html += heatmapCharHtml(example, chars, index, maxAbs, scoredRange);
      }
      return html;
    }

    function heatmapWeightedBpb(values, offsets, charStart, charEnd) {
      let bytes = 0;
      let weighted = 0;
      for (let index = charStart; index < charEnd; index += 1) {
        const charBytes = offsets[index + 1] - offsets[index];
        bytes += charBytes;
        weighted += charBytes * Number(values[index] ?? 0);
      }
      return bytes ? { bytes, bpb: weighted / bytes } : null;
    }

    function heatmapTargetSplit(example) {
      const { offsets, charStart, charEnd } = heatmapScoredCharRange(example);
      if (charStart >= charEnd) return null;
      const firstEnd = Math.min(charStart + 1, charEnd);
      const firstMarin = heatmapWeightedBpb(example.marin_bpb_by_char, offsets, charStart, firstEnd);
      const firstQwen = heatmapWeightedBpb(example.qwen_bpb_by_char, offsets, charStart, firstEnd);
      const restMarin = heatmapWeightedBpb(example.marin_bpb_by_char, offsets, firstEnd, charEnd);
      const restQwen = heatmapWeightedBpb(example.qwen_bpb_by_char, offsets, firstEnd, charEnd);
      const metric = (marin, qwen) => marin && qwen ? {
        bytes: marin.bytes,
        marin_bpb: marin.bpb,
        qwen_bpb: qwen.bpb,
        gap_bpb: marin.bpb - qwen.bpb,
      } : null;
      return { first: metric(firstMarin, firstQwen), rest: metric(restMarin, restQwen) };
    }

    function heatmapSplitMetric(label, metric) {
      if (!metric) return '';
      const gapClass = metric.gap_bpb >= 0 ? 'bad' : 'good';
      const title = `${label}: ${fmtInt(metric.bytes)} byte${metric.bytes === 1 ? '' : 's'} | Marin ${metric.marin_bpb.toFixed(3)} bpb | Qwen ${metric.qwen_bpb.toFixed(3)} bpb`;
      return `<span class="heatmap-metric ${gapClass}" title="${escapeHtml(title)}">${escapeHtml(label)} ${fmtGap(metric.gap_bpb)}</span>`;
    }

    function heatmapManifestBase(manifestPath) {
      const parts = String(manifestPath ?? '').split('/');
      parts.pop();
      return `./span-heatmaps/${parts.length ? `${parts.join('/')}/` : ''}`;
    }

    async function loadSpanHeatmapSet(setEntry) {
      const setId = setEntry.id;
      if (SPAN_HEATMAP_STATE.examples.has(setId) || SPAN_HEATMAP_STATE.loading.has(setId)) return;
      SPAN_HEATMAP_STATE.loading.add(setId);
      SPAN_HEATMAP_STATE.errors.delete(setId);
      render();
      try {
        let manifest = SPAN_HEATMAP_STATE.manifests.get(setId);
        if (!manifest) {
          const manifestResponse = await fetch(`./span-heatmaps/${setEntry.manifest}?v=${ASSET_VERSION}`);
          if (!manifestResponse.ok) {
            throw new Error(`Failed to load ${setEntry.manifest}: ${manifestResponse.status} ${manifestResponse.statusText}`);
          }
          manifest = await manifestResponse.json();
          SPAN_HEATMAP_STATE.manifests.set(setId, manifest);
        }
        const basePath = heatmapManifestBase(setEntry.manifest);
        const examples = await Promise.all(
          manifest.examples.map(async (entry) => {
            const response = await fetch(`${basePath}${entry.payload}?v=${ASSET_VERSION}`);
            if (!response.ok) {
              throw new Error(`Failed to load ${entry.payload}: ${response.status} ${response.statusText}`);
            }
            return response.json();
          })
        );
        SPAN_HEATMAP_STATE.examples.set(setId, examples);
      } catch (error) {
        SPAN_HEATMAP_STATE.errors.set(setId, error instanceof Error ? error.message : String(error));
      } finally {
        SPAN_HEATMAP_STATE.loading.delete(setId);
        render();
      }
    }

    function heatmapPlaceholderCard(entry) {
      const gapClass = entry.gap_bpb >= 0 ? 'bad' : 'good';
      return `<div class="heatmap-card">
        <div class="heatmap-top">
          <div>
            <div class="heatmap-name">${escapeHtml(entry.label)} row ${fmtInt(entry.row_index)}</div>
            <div class="heatmap-metrics">
              <span class="heatmap-metric">${fmtInt(entry.bytes)} bytes</span>
              <span class="heatmap-metric">Marin ${entry.marin_bpb.toFixed(3)} bpb</span>
              <span class="heatmap-metric">Qwen ${entry.qwen_bpb.toFixed(3)} bpb</span>
              <span class="heatmap-metric ${gapClass}">${fmtGap(entry.gap_bpb)}</span>
            </div>
          </div>
        </div>
      </div>`;
    }

    function heatmapCard(example, maxAbs) {
      const gapClass = example.gap_bpb >= 0 ? 'bad' : 'good';
      const split = heatmapTargetSplit(example);
      const chars = heatmapTextHtml(example, maxAbs);
      return `<div class="heatmap-card">
        <div class="heatmap-top">
          <div>
            <div class="heatmap-name">${escapeHtml(example.label)} row ${fmtInt(example.row_index)}</div>
            <div class="heatmap-metrics">
              <span class="heatmap-metric">${fmtInt(example.bytes)} bytes</span>
              <span class="heatmap-metric">Marin ${example.marin_bpb.toFixed(3)} bpb</span>
              <span class="heatmap-metric">Qwen ${example.qwen_bpb.toFixed(3)} bpb</span>
              <span class="heatmap-metric ${gapClass}">${fmtGap(example.gap_bpb)}</span>
              ${split ? heatmapSplitMetric('first char', split.first) : ''}
              ${split ? heatmapSplitMetric('rest target', split.rest) : ''}
            </div>
          </div>
        </div>
        <div class="heatmap-text">${chars}</div>
      </div>`;
    }

    function heatmapMaxAbs(loadedExamples) {
      let maxAbs = HEATMAP_GAP_DEADBAND_BPB;
      if (!loadedExamples) return maxAbs;
      for (const example of loadedExamples) {
        for (let index = 0; index < example.gap_bpb_by_char.length; index += 1) {
          const marin = example.marin_bpb_by_char[index] ?? 0;
          const qwen = example.qwen_bpb_by_char[index] ?? 0;
          const effectiveGap = Math.abs(heatmapEffectiveGap(example.gap_bpb_by_char[index], marin, qwen));
          if (effectiveGap > maxAbs) maxAbs = effectiveGap;
        }
      }
      return maxAbs;
    }

    function renderHeatmapSet(setEntry) {
      const setId = setEntry.id;
      const isOpen = SPAN_HEATMAP_STATE.openSetIds.has(setId);
      const loadedExamples = SPAN_HEATMAP_STATE.examples.get(setId);
      const manifest = SPAN_HEATMAP_STATE.manifests.get(setId);
      const loading = SPAN_HEATMAP_STATE.loading.has(setId);
      const error = SPAN_HEATMAP_STATE.errors.get(setId);
      const maxAbs = heatmapMaxAbs(loadedExamples);
      const cards = loadedExamples
        ? loadedExamples.map((example) => heatmapCard(example, maxAbs)).join('')
        : (manifest?.examples ?? []).map(heatmapPlaceholderCard).join('');
      const status = error
        ? `<div class="example-empty">Could not load heatmap payload: ${escapeHtml(error)}</div>`
        : (!loadedExamples ? `<div class="example-empty">${loading ? 'Loading heatmap samples...' : 'Open this corpus sample to lazily load its manifest and per-character payloads.'}</div>` : '');
      const gapClass = setEntry.aggregate_gap_bpb >= 0 ? 'bad' : 'good';
      return `<div class="heatmap-set ${isOpen ? 'open' : ''}" id="${escapeHtml(domAnchorId('heatmap', setId))}" data-heatmap-set-id="${escapeHtml(setId)}">
        <button class="heatmap-set-summary" type="button" data-heatmap-set-id="${escapeHtml(setId)}" aria-expanded="${isOpen ? 'true' : 'false'}">
          <span class="heatmap-set-title">${escapeHtml(setEntry.title)}</span>
          <span class="heatmap-set-meta">
            <span>${fmtInt(setEntry.example_count)} samples</span>
            <span>${fmtBytes(setEntry.text_bytes)}</span>
            <span class="${gapClass}">${fmtGap(setEntry.aggregate_gap_bpb)}</span>
          </span>
        </button>
        ${isOpen ? `<div class="section-note">${escapeHtml(setEntry.description ?? '')}</div>
        <div class="heatmap-panel">
          <div class="heatmap-legend">
            <div><span class="heatmap-swatch" style="background:hsla(212,92%,58%,0.55)"></span>Marin lower bpb</div>
            <div><span class="heatmap-swatch" style="background:hsla(12,92%,58%,0.55)"></span>Qwen lower bpb</div>
            <div>Near-zero loss or gap is left neutral.</div>
            <div><span class="heatmap-target-legend">target</span> underlined scored target</div>
            <div>Hover any character for per-character bpb.</div>
          </div>
          ${status}
          <div class="heatmap-grid">${cards}</div>
        </div>
        ` : ''}
      </div>`;
    }

    function renderSpanHeatmap(comparison) {
      const node = byId('span-heatmap');
      const setEntries = (SPAN_HEATMAP_INDEX?.sets ?? []).filter((setEntry) =>
        comparison.model_a === setEntry.model_a && comparison.model_b === setEntry.model_b
      );
      if (!setEntries.length) {
        node.hidden = true;
        node.innerHTML = '';
        return;
      }
      node.hidden = false;
      node.innerHTML = `
        <div class="section-heading"><span class="section-title">${escapeHtml(SPAN_HEATMAP_INDEX.title ?? 'Span heatmap samples')}</span></div>
        <div class="section-note">${escapeHtml(SPAN_HEATMAP_INDEX.description ?? '')}</div>
        <div class="heatmap-set-list">${setEntries.map(renderHeatmapSet).join('')}</div>`;
      node.querySelectorAll('button[data-heatmap-set-id]').forEach((button) => {
        button.onclick = () => {
          const setId = button.dataset.heatmapSetId;
          const setEntry = setEntries.find((entry) => entry.id === setId);
          if (!setEntry) return;
          if (SPAN_HEATMAP_STATE.openSetIds.has(setId)) {
            SPAN_HEATMAP_STATE.openSetIds.delete(setId);
            if (state.selectedHeatmapId === setId) state.selectedHeatmapId = null;
            renderSpanHeatmap(comparison);
          } else {
            SPAN_HEATMAP_STATE.openSetIds.add(setId);
            state.selectedHeatmapId = setId;
            requestAnchorScroll(domAnchorId('heatmap', setId));
            renderSpanHeatmap(comparison);
            loadSpanHeatmapSet(setEntry);
          }
          syncHash();
        };
      });
      setEntries
        .filter((setEntry) =>
          SPAN_HEATMAP_STATE.openSetIds.has(setEntry.id) &&
          !SPAN_HEATMAP_STATE.examples.has(setEntry.id) &&
          !SPAN_HEATMAP_STATE.loading.has(setEntry.id)
        )
        .forEach((setEntry) => setTimeout(() => loadSpanHeatmapSet(setEntry), 0));
      consumeAnchorScroll();
    }

    function datasetSliceCardHtml(row) {
      const gapClass = row.gap_bpb >= 0 ? 'bad' : 'good';
      return `<div class="example-card">
        <div class="example-top">
          <div>
            <div class="example-name">${row.displayName ?? row.name}</div>
            <div class="example-metrics">
              <span class="example-chip">${row.corpus}</span>
              <span class="example-chip">${fmtBytes(row.bytes)}</span>
              <span class="example-chip">${fmtInt(row.documents)} docs</span>
              ${row.tags?.includes('code') ? '<span class="example-chip tag-code">code</span>' : ''}
              <span class="example-gap ${gapClass}">${fmtGap(row.gap_bpb)}</span>
            </div>
          </div>
        </div>
        ${refsHtml(row.refs ?? [])}
      </div>`;
    }

    function isMultilingualRow(row) {
      const key = String(row.name ?? row.dataset ?? '').toLowerCase();
      return row.corpus === 'Multilingual raw' || key === 'fineweb2_multilingual' || key.startsWith('fineweb2_multilingual/');
    }

    function fallbackExampleRows(comparison, direction, limit) {
      const rows = visibleRows(comparison.rows.top_datasets);
      const filtered = rows.filter((row) => direction === 'model_a_worse' ? row.gap_bpb > 0 : row.gap_bpb < 0);
      filtered.sort((a, b) => direction === 'model_a_worse' ? b.gap_bpb - a.gap_bpb : a.gap_bpb - b.gap_bpb);
      return filtered.slice(0, limit);
    }

    function documentSampleSetsForComparison(comparison) {
      return (DOCUMENT_SAMPLE_INDEX?.sets ?? []).filter((setEntry) =>
        setEntry.comparison_id === comparison.id ||
        (comparison.model_a === setEntry.model_a && comparison.model_b === setEntry.model_b)
      );
    }

    async function loadDocumentSampleSet(setEntry) {
      const setId = setEntry.id;
      if (DOCUMENT_SAMPLE_STATE.payloads.has(setId) || DOCUMENT_SAMPLE_STATE.loading.has(setId)) return;
      DOCUMENT_SAMPLE_STATE.loading.add(setId);
      DOCUMENT_SAMPLE_STATE.errors.delete(setId);
      render();
      try {
        const response = await fetch(`./document-samples/${setEntry.payload}?v=${ASSET_VERSION}`);
        if (!response.ok) {
          throw new Error(`Failed to load ${setEntry.payload}: ${response.status} ${response.statusText}`);
        }
        DOCUMENT_SAMPLE_STATE.payloads.set(setId, await response.json());
      } catch (error) {
        DOCUMENT_SAMPLE_STATE.errors.set(setId, error instanceof Error ? error.message : String(error));
      } finally {
        DOCUMENT_SAMPLE_STATE.loading.delete(setId);
        render();
      }
    }

    function normalizeDocumentSample(row, setEntry, direction) {
      const dataset = row.dataset ?? row.name ?? setEntry.title;
      const corpus = row.corpus ?? setEntry.corpus ?? setEntry.title;
      const gapBpb = row.gap_bpb ?? (
        row.model_a_bpb != null && row.model_b_bpb != null ? row.model_a_bpb - row.model_b_bpb : 0
      );
      const decorated = decorateRow({
        name: dataset,
        corpus,
        bytes: row.bytes ?? row.text_bytes ?? String(row.preview ?? '').length,
        documents: 1,
        delta_bits: row.delta_bits ?? gapBpb * (row.bytes ?? 0),
        gap_bpb: gapBpb,
        model_a_bpb: row.model_a_bpb,
        model_b_bpb: row.model_b_bpb,
      });
      return {
        ...row,
        dataset,
        corpus,
        direction,
        bytes: row.bytes ?? row.text_bytes ?? String(row.preview ?? '').length,
        gap_bpb: gapBpb,
        displayName: row.displayName ?? decorated.displayName,
        refs: row.refs ?? decorated.refs,
        tags: row.tags ?? decorated.tags,
      };
    }

    function payloadRowsForDirection(payload, direction) {
      const rows = [];
      if (Array.isArray(payload.examples)) {
        rows.push(...payload.examples.filter((row) => (row.direction ?? direction) === direction));
      } else if (Array.isArray(payload.examples?.[direction])) {
        rows.push(...payload.examples[direction]);
      }
      if (Array.isArray(payload.top_documents?.[direction])) {
        rows.push(...payload.top_documents[direction]);
      }
      const byDataset = payload.top_documents_by_dataset?.[direction];
      if (byDataset && typeof byDataset === 'object') {
        rows.push(...Object.values(byDataset).flat());
      }
      return rows;
    }

    function normalizedPayloadExamples(payload, setEntry) {
      const grouped = { model_a_worse: [], model_b_worse: [] };
      for (const direction of Object.keys(grouped)) {
        const seen = new Set();
        grouped[direction] = payloadRowsForDirection(payload, direction)
          .map((row) => normalizeDocumentSample(row, setEntry, row.direction ?? direction))
          .filter((row) => {
            const key = [row.direction, row.dataset, row.shard, row.row_index, row.preview].join('|');
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
          });
      }
      return grouped;
    }

    function exampleColumnsHtml(losing, winning, losingDocs, winningDocs) {
      const visibleExample = (row) => !state.hideMultilingual || !isMultilingualRow(row);
      const column = (title, kicker, rows, tone, cardHtml) => `<div class="example-column ${tone}">
        <div class="example-header">
          <div class="example-title">${title}</div>
          <div class="example-kicker">${kicker}</div>
        </div>
        <div class="example-list">${rows.length ? rows.map(cardHtml).join('') : '<div class="example-empty">No examples for the current filter.</div>'}</div>
      </div>`;
      return [
        column('Marin Behind', losingDocs ? 'largest local positive gaps' : 'highest positive dataset slices', losing.filter(visibleExample), 'bad', losingDocs ? exampleCardHtml : datasetSliceCardHtml),
        column('Marin Ahead', winningDocs ? 'largest local negative gaps' : 'highest negative dataset slices', winning.filter(visibleExample), 'good', winningDocs ? exampleCardHtml : datasetSliceCardHtml),
      ].join('');
    }

    function renderFallbackExamples(comparison) {
      const visibleExample = (row) => !state.hideMultilingual || !isMultilingualRow(row);
      const losingDocs = diversifiedExamples(comparison.exampleDocs.model_a_worse.filter(visibleExample), 4);
      const winningDocs = diversifiedExamples(comparison.exampleDocs.model_b_worse.filter(visibleExample), 4);
      const losing = losingDocs.length ? losingDocs : fallbackExampleRows(comparison, 'model_a_worse', 4);
      const winning = winningDocs.length ? winningDocs : fallbackExampleRows(comparison, 'model_b_worse', 4);
      byId('examples').innerHTML = `<div class="example-grid">${exampleColumnsHtml(losing, winning, Boolean(losingDocs.length), Boolean(winningDocs.length))}</div>`;
    }

    function renderDocumentSampleSet(setEntry) {
      const setId = setEntry.id;
      const isOpen = DOCUMENT_SAMPLE_STATE.openSetIds.has(setId);
      const payload = DOCUMENT_SAMPLE_STATE.payloads.get(setId);
      const loading = DOCUMENT_SAMPLE_STATE.loading.has(setId);
      const error = DOCUMENT_SAMPLE_STATE.errors.get(setId);
      const gapClass = (setEntry.aggregate_gap_bpb ?? 0) >= 0 ? 'bad' : 'good';
      let body = '';
      if (isOpen) {
        const status = error
          ? `<div class="example-empty">Could not load document payload: ${escapeHtml(error)}</div>`
          : (!payload ? `<div class="example-empty">${loading ? 'Loading document samples...' : 'Open this corpus sample to lazily load its document payload.'}</div>` : '');
        const columns = payload
          ? (() => {
            const grouped = normalizedPayloadExamples(payload, setEntry);
            const losing = diversifiedExamples(grouped.model_a_worse, 10);
            const winning = diversifiedExamples(grouped.model_b_worse, 10);
            return `<div class="example-grid">${exampleColumnsHtml(losing, winning, true, true)}</div>`;
          })()
          : '';
        body = `<div class="document-set-body">
          <div class="section-note">${escapeHtml(setEntry.description ?? '')}</div>
          ${status}
          ${columns}
        </div>`;
      }
      return `<div class="document-set ${isOpen ? 'open' : ''}" id="${escapeHtml(domAnchorId('document-sample', setId))}" data-document-set-id="${escapeHtml(setId)}">
        <button class="document-set-summary" type="button" data-document-set-id="${escapeHtml(setId)}" aria-expanded="${isOpen ? 'true' : 'false'}">
          <span class="document-set-title">${escapeHtml(setEntry.title)}</span>
          <span class="document-set-meta">
            <span>${fmtInt(setEntry.example_count ?? 0)} samples</span>
            <span>${fmtInt(setEntry.dataset_count ?? 0)} datasets</span>
            ${setEntry.text_bytes ? `<span>${fmtBytes(setEntry.text_bytes)}</span>` : ''}
            ${Number.isFinite(setEntry.aggregate_gap_bpb) ? `<span class="${gapClass}">${fmtGap(setEntry.aggregate_gap_bpb)}</span>` : ''}
          </span>
        </button>
        ${body}
      </div>`;
    }

    function renderDocumentSamples(comparison) {
      const setEntries = documentSampleSetsForComparison(comparison);
      const node = byId('examples');
      if (!setEntries.length) {
        renderFallbackExamples(comparison);
        return;
      }
      node.innerHTML = setEntries.map(renderDocumentSampleSet).join('');
      node.querySelectorAll('button[data-document-set-id]').forEach((button) => {
        button.onclick = () => {
          const setId = button.dataset.documentSetId;
          const setEntry = setEntries.find((entry) => entry.id === setId);
          if (!setEntry) return;
          if (DOCUMENT_SAMPLE_STATE.openSetIds.has(setId)) {
            DOCUMENT_SAMPLE_STATE.openSetIds.delete(setId);
            if (state.selectedDocumentSetId === setId) state.selectedDocumentSetId = null;
            renderDocumentSamples(comparison);
          } else {
            DOCUMENT_SAMPLE_STATE.openSetIds.add(setId);
            state.selectedDocumentSetId = setId;
            requestAnchorScroll(domAnchorId('document-sample', setId));
            renderDocumentSamples(comparison);
            loadDocumentSampleSet(setEntry);
          }
          syncHash();
        };
      });
      setEntries
        .filter((setEntry) =>
          DOCUMENT_SAMPLE_STATE.openSetIds.has(setEntry.id) &&
          !DOCUMENT_SAMPLE_STATE.payloads.has(setEntry.id) &&
          !DOCUMENT_SAMPLE_STATE.loading.has(setEntry.id)
        )
        .forEach((setEntry) => setTimeout(() => loadDocumentSampleSet(setEntry), 0));
      consumeAnchorScroll();
    }

    function renderSpotlights(comparison) {
      const section = byId('spotlights').closest('.spotlight-section');
      const showSpotlights = !comparison.runs.some((run) => run.kind === 'all_available');
      section.hidden = !showSpotlights;
      if (!showSpotlights) {
        byId('spotlights').innerHTML = '';
        return;
      }
      const maxAbs = Math.max(...SPOTLIGHTS.flatMap((spot) => [Math.abs(spot.gaps.llama), Math.abs(spot.gaps.qwen)]), 0.001);
      byId('spotlights').innerHTML = SPOTLIGHTS.map((spot) => `
        <div class="spotlight-card ${spot.tone}">
          <div class="spotlight-top">
            <div class="spotlight-name">${spot.short}</div>
            <div class="spotlight-tag">${spot.tone === 'bad' ? 'weakness' : 'looks ok'}</div>
          </div>
          <div class="spotlight-note">${spot.note}</div>
          <div class="spotline">
            <div class="spotline-label">Llama</div>
            ${miniBar(spot.gaps.llama, maxAbs)}
            <div class="spotline-gap">${fmtGap(spot.gaps.llama)}</div>
          </div>
          <div class="spotline">
            <div class="spotline-label">Qwen</div>
            ${miniBar(spot.gaps.qwen, maxAbs)}
            <div class="spotline-gap">${fmtGap(spot.gaps.qwen)}</div>
          </div>
        </div>
      `).join('');
    }

    function sortedRows(rows) {
      const out = [...rows];
      if (state.query) {
        const q = state.query.toLowerCase();
        rows = out.filter((row) =>
          row.name.toLowerCase().includes(q) ||
          (row.displayName ?? row.name).toLowerCase().includes(q) ||
          row.corpus.toLowerCase().includes(q) ||
          (row.tags ?? []).some((tag) => tag.toLowerCase().includes(q))
        );
      } else {
        rows = out;
      }
      if (state.sort === 'abs') rows.sort((a, b) => Math.abs(b.gap_bpb) - Math.abs(a.gap_bpb));
      if (state.sort === 'gap') rows.sort((a, b) => b.gap_bpb - a.gap_bpb);
      if (state.sort === 'name') rows.sort((a, b) => a.name.localeCompare(b.name));
      return rows;
    }

    function visibleRows(rows) {
      if (!state.hideMultilingual) return rows;
      return rows.filter((row) => !isMultilingualRow(row));
    }

    function renderRows(rows, showCorpusColumn) {
      const tbody = byId('rows');
      byId('table-headings').innerHTML = `
        ${showCorpusColumn ? '<th>Corpus</th>' : ''}
        <th>Name</th>
        <th>Gap</th>
        <th>Bar</th>
        <th>Bytes</th>
        <th>Docs</th>`;
      if (!rows.length) {
        tbody.innerHTML = `<tr><td colspan="${showCorpusColumn ? 6 : 5}">No rows match the current filter.</td></tr>`;
        return;
      }
      const maxAbs = Math.max(...rows.map((row) => Math.abs(row.gap_bpb)), 0.001);
      tbody.innerHTML = rows.map((row) => {
        const width = `${Math.max(2, Math.round(Math.abs(row.gap_bpb) / maxAbs * 50))}%`;
        const fillClass = row.gap_bpb >= 0 ? 'positive' : 'negative';
        return `<tr>
          ${showCorpusColumn ? `<td class="name corpus-col">${row.corpus}</td>` : ''}
          <td class="name"><div class="name-main">${row.displayName ?? row.name}</div>${tagsHtml(row.tags)}${refsHtml(row.refs ?? [])}</td>
          <td class="metric">${fmtGap(row.gap_bpb)}</td>
          <td class="barcell"><div class="bar-track"><div class="bar-fill ${fillClass}" style="width:${width}"></div></div></td>
          <td class="bytes">${fmtInt(row.bytes)}</td>
          <td class="docs">${fmtInt(row.documents)}</td>
        </tr>`;
      }).join('');
    }

    function renderComparisonList() {
      byId('comparison-list').innerHTML = COMPARISONS.map((comparison) => `
        <button class="comparison-btn ${comparison.id === state.comparisonId ? 'active' : ''}" data-comparison-id="${comparison.id}">
          <div class="title">${comparison.title}</div>
          <div class="subtitle">${comparison.corpora.join(' | ')}</div>
        </button>
      `).join('');
      document.querySelectorAll('[data-comparison-id]').forEach((node) => node.onclick = () => {
        state.comparisonId = node.dataset.comparisonId;
        state.selectedHeatmapId = null;
        state.selectedDocumentSetId = null;
        SPAN_HEATMAP_STATE.openSetIds.clear();
        DOCUMENT_SAMPLE_STATE.openSetIds.clear();
        render();
      });
    }

    function renderPrimaryTabs() {
      byId('primary-tabs').innerHTML = primaryViews.map((view) => `<button class="primary-tab ${view.id === state.section ? 'active' : ''}" data-section="${view.id}">${view.label}</button>`).join('');
      document.querySelectorAll('[data-section]').forEach((node) => node.onclick = () => {
        state.section = node.dataset.section;
        render();
      });
    }

    function renderTabs() {
      byId('tabs').innerHTML = views.map((view) => `<button class="tab ${view.id === state.view ? 'active' : ''}" data-view="${view.id}">${view.label}</button>`).join('');
      document.querySelectorAll('[data-view]').forEach((node) => node.onclick = () => {
        state.view = node.dataset.view;
        render();
      });
    }

    function renderSorts() {
      byId('sorts').innerHTML = sorts.map((sort) => `<button class="sort ${sort.id === state.sort ? 'active' : ''}" data-sort="${sort.id}">${sort.label}</button>`).join('');
      document.querySelectorAll('[data-sort]').forEach((node) => node.onclick = () => {
        state.sort = node.dataset.sort;
        render();
      });
    }

    function render() {
      renderComparisonList();
      renderPrimaryTabs();
      renderTabs();
      renderSorts();
      const comparison = COMPARISONS.find((entry) => entry.id === state.comparisonId);
      const visibleCorpora = comparison.corpora.filter((corpus) => !state.hideMultilingual || corpus !== 'Multilingual raw');
      const visibleHeadlineRows = visibleRows(comparison.rows.headline_groups);
      const visiblePatternRows = visibleRows(comparison.rows.pattern_buckets);
      byId('run-title').textContent = comparison.title;
      byId('run-subtitle').textContent = `Merged across ${visibleCorpora.join(' | ')}${state.hideMultilingual ? ' (multilingual hidden)' : ''}`;
      byId('chip-model-a').textContent = `model_a: ${comparison.model_a}`;
      byId('chip-model-b').textContent = `model_b: ${comparison.model_b}`;
      byId('panel-gaps').hidden = state.section !== 'gaps';
      byId('panel-examples').hidden = state.section !== 'examples';
      byId('panel-heatmaps').hidden = state.section !== 'heatmaps';
      if (state.section === 'gaps') {
        renderSpotlights(comparison);
        byId('cards').innerHTML = [
          card('Worst group', extremeRow(visibleHeadlineRows, 'max'), 'bad'),
          card('Best group', extremeRow(visibleHeadlineRows, 'min'), 'good'),
          card('Worst pattern', extremeRow(visiblePatternRows, 'max'), 'bad'),
          card('Best pattern', extremeRow(visiblePatternRows, 'min'), 'good'),
        ].join('');
        renderCodeTakeaway(comparison);
        const rows = sortedRows(visibleRows(comparison.rows[state.view]));
        const showCorpusColumn = new Set(rows.map((row) => row.corpus)).size > 1;
        renderRows(rows, showCorpusColumn);
        byId('foot').innerHTML = `${DATA.note}<br>Showing ${rows.length} row(s) for ${views.find(v => v.id === state.view).label.toLowerCase()} in ${comparison.title}${state.hideMultilingual ? ' with multilingual hidden' : ''}.`;
        byId('search').value = state.query;
      } else if (state.section === 'examples') {
        renderDocumentSamples(comparison);
      } else if (state.section === 'heatmaps') {
        renderSpanHeatmap(comparison);
      }
      byId('toggle-multilingual').checked = state.hideMultilingual;
      byId('toggle-multilingual-examples').checked = state.hideMultilingual;
      syncHash();
    }

    byId('search').addEventListener('input', (event) => {
      state.query = event.target.value.trim();
      render();
    });

    byId('toggle-multilingual').addEventListener('change', (event) => {
      state.hideMultilingual = event.target.checked;
      render();
    });

    byId('toggle-multilingual-examples').addEventListener('change', (event) => {
      state.hideMultilingual = event.target.checked;
      render();
    });

    window.addEventListener('hashchange', () => {
      applyingHashState = true;
      try {
        applyHashState();
        render();
      } finally {
        applyingHashState = false;
      }
    });

    applyHashState();
    render();
