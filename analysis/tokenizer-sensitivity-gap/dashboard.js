const ASSET_VERSION = "20260528-offset-audit";

const response = await fetch(`./data.json?v=${ASSET_VERSION}`);
if (!response.ok) {
  throw new Error(`Failed to load tokenizer dashboard data: ${response.status} ${response.statusText}`);
}
const DATA = await response.json();

const elements = {
  summaryGrid: document.getElementById("summary-grid"),
  candidateList: document.getElementById("candidate-list"),
  notes: document.getElementById("notes"),
  gapMatrix: document.getElementById("gap-matrix"),
  selectedTitle: document.getElementById("selected-title"),
  selectedSubtitle: document.getElementById("selected-subtitle"),
  selectedScore: document.getElementById("selected-score"),
  groupGrid: document.getElementById("group-grid"),
  biggestWins: document.getElementById("biggest-wins"),
  biggestLosses: document.getElementById("biggest-losses"),
  scoreTable: document.getElementById("score-table"),
  datasetSearch: document.getElementById("dataset-search"),
  datasetSort: document.getElementById("dataset-sort"),
  datasetCount: document.getElementById("dataset-count"),
  datasetTable: document.getElementById("dataset-table"),
  bucketTable: document.getElementById("bucket-table"),
  heatmapWarning: document.getElementById("heatmap-warning"),
  heatmapTabs: document.getElementById("heatmap-tabs"),
  heatmapsWorse: document.getElementById("heatmaps-worse"),
  heatmapsBetter: document.getElementById("heatmaps-better"),
  examplesWorse: document.getElementById("examples-worse"),
  examplesBetter: document.getElementById("examples-better"),
};

const gapByModel = new Map(DATA.gaps.map((gap) => [gap.model, gap]));
const scoreByModel = new Map(DATA.scores.map((score) => [score.model, score]));
const heatmapViews = [
  { id: "segments", label: "Local spans" },
  { id: "literals", label: "Repeated literals" },
];
let selectedModel = gapByModel.has(location.hash.slice(1)) ? location.hash.slice(1) : DATA.gaps[0].model;
let selectedHeatmapView = "segments";

elements.datasetSearch.addEventListener("input", renderDatasetTable);
elements.datasetSort.addEventListener("change", renderDatasetTable);
window.addEventListener("hashchange", () => {
  const model = location.hash.slice(1);
  if (gapByModel.has(model)) {
    selectedModel = model;
    render();
  }
});

render();

function render() {
  renderSummary();
  renderCandidates();
  renderNotes();
  renderHeatmapTabs();
  renderGapMatrix();
  renderSelected();
  renderScores();
}

function renderSummary() {
  const best = DATA.gaps[0];
  const qwen = gapByModel.get("qwen3-152k");
  const tokenmonster = gapByModel.get("tokenmonster-englishcode-32k");
  const gptOss = gapByModel.get("gpt-oss-200k");
  const cards = [
    {
      label: "Best overall",
      value: formatGap(best.overall_gap_bpb),
      tone: toneForGap(best.overall_gap_bpb),
      name: best.model,
      note: `${best.wins}/${best.datasets.length} dataset slices better than llama3-128k.`,
    },
    {
      label: "Close second",
      value: formatGap(gptOss.overall_gap_bpb),
      tone: toneForGap(gptOss.overall_gap_bpb),
      name: gptOss.model,
      note: "Broadly improves Paloma and Uncheatable, with a few text-tail regressions.",
    },
    {
      label: "Qwen status",
      value: formatGap(qwen.overall_gap_bpb),
      tone: toneForGap(qwen.overall_gap_bpb),
      name: qwen.model,
      note: "Near parity overall, with code slices worse and some social/text slices better.",
    },
    {
      label: "TokenMonster patch",
      value: formatGap(tokenmonster.overall_gap_bpb),
      tone: toneForGap(tokenmonster.overall_gap_bpb),
      name: tokenmonster.model,
      note: "Byte-accounting patch flips the earlier readout: code wins remain, ordinary text loses.",
    },
  ];
  elements.summaryGrid.innerHTML = cards.map((card) => `
    <article class="summary-card">
      <div class="summary-label">${escapeHtml(card.label)}</div>
      <div class="summary-value ${card.tone}">${card.value}</div>
      <div class="summary-name">${escapeHtml(card.name)}</div>
      <div class="summary-note">${escapeHtml(card.note)}</div>
    </article>
  `).join("");
}

function renderCandidates() {
  elements.candidateList.innerHTML = DATA.gaps.map((gap) => {
    const isActive = gap.model === selectedModel;
    return `
      <button class="candidate-button ${isActive ? "active" : ""}" data-model="${escapeAttr(gap.model)}" type="button">
        <div class="candidate-title">
          <span>${escapeHtml(gap.model)}</span>
          <span class="${toneForGap(gap.overall_gap_bpb)}">${formatGap(gap.overall_gap_bpb)}</span>
        </div>
        <div class="candidate-subtitle">${gap.wins} wins / ${gap.losses} losses · ${formatGap(gap.paloma_gap_bpb)} Paloma</div>
      </button>
    `;
  }).join("");
  for (const button of elements.candidateList.querySelectorAll("button")) {
    button.addEventListener("click", () => {
      selectedModel = button.dataset.model;
      history.replaceState(null, "", `#${selectedModel}`);
      render();
    });
  }
}

function renderNotes() {
  elements.notes.innerHTML = DATA.notes.map((note) => `<div>${escapeHtml(note)}</div>`).join("");
}

function renderGapMatrix() {
  elements.gapMatrix.innerHTML = DATA.gaps.map((gap) => `
    <tr>
      <td class="name-cell">${escapeHtml(gap.model)}</td>
      ${metricCell(gap.overall_gap_bpb)}
      ${metricCell(gap.paloma_gap_bpb)}
      ${metricCell(gap.uncheatable_gap_bpb)}
      <td>${gap.wins} / ${gap.losses}</td>
    </tr>
  `).join("");
}

function renderSelected() {
  const gap = gapByModel.get(selectedModel);
  const score = scoreByModel.get(selectedModel);
  elements.selectedTitle.textContent = gap.model;
  elements.selectedSubtitle.textContent = DATA.models[gap.model] || gap.model;
  elements.selectedScore.className = `selected-score ${toneForGap(gap.overall_gap_bpb)}`;
  elements.selectedScore.textContent = formatGap(gap.overall_gap_bpb);
  elements.groupGrid.innerHTML = [
    ["Overall", gap.overall_gap_bpb, gap.bytes, gap.documents],
    ["Paloma", gap.paloma_gap_bpb, findGroupBytes(gap, "paloma"), findGroupDocuments(gap, "paloma")],
    ["Uncheatable", gap.uncheatable_gap_bpb, findGroupBytes(gap, "uncheatable_eval"), findGroupDocuments(gap, "uncheatable_eval")],
  ].map(([name, value, bytes, docs]) => `
    <article class="group-card">
      <div class="group-name">${name}</div>
      <div class="group-value ${toneForGap(value)}">${formatGap(value)}</div>
      <div class="group-detail">${formatBytes(bytes)} · ${formatInteger(docs)} docs</div>
    </article>
  `).join("");

  renderMoves(gap);
  renderDatasetTable();
  renderBucketTable(gap);
  renderHeatmaps(gap);
  renderExamples(gap);

  if (score) {
    document.title = `${gap.model} vs ${DATA.baseline} | Tokenizer Sensitivity d1024`;
  }
}

function renderHeatmapTabs() {
  elements.heatmapTabs.innerHTML = heatmapViews.map((view) => `
    <button class="heatmap-tab ${view.id === selectedHeatmapView ? "active" : ""}" data-view="${view.id}" type="button">
      ${escapeHtml(view.label)}
    </button>
  `).join("");
  for (const button of elements.heatmapTabs.querySelectorAll("button")) {
    button.addEventListener("click", () => {
      selectedHeatmapView = button.dataset.view;
      renderHeatmaps(gapByModel.get(selectedModel));
      renderHeatmapTabs();
    });
  }
}

function renderMoves(gap) {
  elements.biggestWins.innerHTML = gap.biggest_wins.map((row) => moveRow(row)).join("");
  elements.biggestLosses.innerHTML = gap.biggest_losses.map((row) => moveRow(row)).join("");
}

function renderScores() {
  elements.scoreTable.innerHTML = DATA.scores.map((score) => `
    <tr>
      <td class="name-cell">${escapeHtml(score.model)}</td>
      <td class="metric">${formatBpb(score.overall_bpb)}</td>
      <td class="metric">${formatBpb(score.paloma_bpb)}</td>
      <td class="metric">${formatBpb(score.uncheatable_bpb)}</td>
    </tr>
  `).join("");
}

function renderDatasetTable() {
  const gap = gapByModel.get(selectedModel);
  const query = elements.datasetSearch.value.trim().toLowerCase();
  const sort = elements.datasetSort.value;
  let rows = gap.datasets;
  if (query) {
    rows = rows.filter((row) => row.name.toLowerCase().includes(query));
  }
  rows = [...rows].sort((a, b) => compareRows(a, b, sort));
  elements.datasetCount.textContent = `${rows.length} of ${gap.datasets.length} slices shown.`;
  elements.datasetTable.innerHTML = rows.map((row) => `
    <tr>
      <td class="name-cell">${escapeHtml(row.name)}<div class="dataset-meta">${formatInteger(row.documents)} docs</div></td>
      ${metricCell(row.gap_bpb)}
      <td class="metric">${formatBpb(row.model_a_bpb)}</td>
      <td class="metric">${formatBpb(row.model_b_bpb)}</td>
      <td class="metric">${formatBytes(row.bytes)}</td>
      <td>${bar(row.gap_bpb, 0.08)}</td>
    </tr>
  `).join("");
}

function renderBucketTable(gap) {
  const rows = [...gap.pattern_buckets].sort((a, b) => Math.abs(b.gap_bpb) - Math.abs(a.gap_bpb));
  elements.bucketTable.innerHTML = rows.map((row) => `
    <tr>
      <td class="name-cell">${escapeHtml(row.name)}<div class="dataset-meta">${formatInteger(row.documents)} labeled spans</div></td>
      ${metricCell(row.gap_bpb)}
      <td class="metric">${formatBpb(row.model_a_bpb)}</td>
      <td class="metric">${formatBpb(row.model_b_bpb)}</td>
      <td class="metric">${formatBytes(row.bytes)}</td>
      <td>${bar(row.gap_bpb, 0.06)}</td>
    </tr>
  `).join("");
}

function renderExamples(gap) {
  const localAttributionInvalid = hasInvalidLocalAttribution(gap);
  elements.examplesWorse.innerHTML = exampleCards(gap.examples.model_a_worse || [], localAttributionInvalid);
  elements.examplesBetter.innerHTML = exampleCards(gap.examples.model_b_worse || [], localAttributionInvalid);
}

function renderHeatmaps(gap) {
  if (hasInvalidLocalAttribution(gap)) {
    elements.heatmapWarning.hidden = false;
    elements.heatmapWarning.innerHTML = `
      TokenMonster local heatmaps are disabled. An offset audit of the saved
      <code>scored_documents.parquet</code> found that TokenMonster token byte spans are shifted relative to the decoded source text
      around capcode / marker behavior. The aggregate and dataset-level BPB rows above are still useful, but local span and literal
      attribution for TokenMonster needs a scorer fix or token-level losses saved in a new artifact.
    `;
    elements.heatmapTabs.hidden = true;
    elements.heatmapsWorse.innerHTML = `<div class="dataset-meta">Disabled for TokenMonster until byte-offset attribution is regenerated.</div>`;
    elements.heatmapsBetter.innerHTML = `<div class="dataset-meta">Disabled for TokenMonster until byte-offset attribution is regenerated.</div>`;
    return;
  }
  elements.heatmapWarning.hidden = true;
  elements.heatmapTabs.hidden = false;
  const key = selectedHeatmapView === "literals" ? "top_literals" : "top_segments";
  elements.heatmapsWorse.innerHTML = heatmapCards(gap[key]?.model_a_worse || [], selectedHeatmapView, "bad");
  elements.heatmapsBetter.innerHTML = heatmapCards(gap[key]?.model_b_worse || [], selectedHeatmapView, "good");
}

function hasInvalidLocalAttribution(gap) {
  return gap.model === "tokenmonster-englishcode-32k";
}

function moveRow(row) {
  return `
    <div class="move-row">
      <div class="move-top">
        <div class="move-name">${escapeHtml(row.name)}</div>
        <div class="move-gap ${toneForGap(row.gap_bpb)}">${formatGap(row.gap_bpb)}</div>
      </div>
      ${bar(row.gap_bpb, 0.08, "mini-bar")}
      <div class="dataset-meta">${formatBpb(row.model_a_bpb)} vs ${formatBpb(row.model_b_bpb)} BPB · ${formatBytes(row.bytes)}</div>
    </div>
  `;
}

function exampleCards(rows, localAttributionInvalid = false) {
  if (!rows.length) {
    return `<div class="dataset-meta">No examples in this bucket.</div>`;
  }
  return rows.slice(0, 5).map((row) => `
    <article class="example-card">
      <div class="example-title">
        <span>${escapeHtml(row.dataset || "unknown dataset")}</span>
        <span class="${toneForGap(row.gap_bpb)}">${formatGap(row.gap_bpb)}</span>
      </div>
      <div class="example-meta">
        ${escapeHtml(row.shard || "unknown shard")} · row ${formatInteger(row.row_index)}${localAttributionInvalid ? " · document gap only" : ` · worst bucket ${escapeHtml(row.worst_bucket || "n/a")}`}
      </div>
      <pre class="example-preview">${escapeHtml(row.preview || "")}</pre>
    </article>
  `).join("");
}

function heatmapCards(rows, view, tone) {
  if (!rows.length) {
    return `<div class="dataset-meta">No heatmap rows in this bucket.</div>`;
  }
  return rows.slice(0, 8).map((row) => {
    const gap = row.gap_bpb;
    const alpha = Math.min(0.18 + Math.abs(gap) / 3, 0.78).toFixed(3);
    if (view === "literals") {
      return literalHeatmapCard(row, tone, alpha);
    }
    return segmentHeatmapCard(row, tone, alpha);
  }).join("");
}

function segmentHeatmapCard(row, tone, alpha) {
  const preview = row.doc_preview || "";
  const text = row.text || "";
  return `
    <article class="heatmap-card">
      <div class="heatmap-title">
        <span>${escapeHtml(row.dataset || "unknown dataset")}</span>
        <span class="${toneForGap(row.gap_bpb)}">${formatGap(row.gap_bpb)}</span>
      </div>
      <div class="example-meta">${escapeHtml(row.bucket || "unknown bucket")} · ${formatBytes(row.bytes)}</div>
      <pre class="heatmap-preview">${highlightText(preview, text, tone, alpha)}</pre>
      <div class="segment-chip">${escapeHtml(text)}</div>
    </article>
  `;
}

function literalHeatmapCard(row, tone, alpha) {
  const preview = row.example_doc_preview || "";
  const text = row.name || "";
  return `
    <article class="heatmap-card">
      <div class="heatmap-title">
        <span>${escapeHtml(row.example_dataset || "unknown dataset")}</span>
        <span class="${toneForGap(row.gap_bpb)}">${formatGap(row.gap_bpb)}</span>
      </div>
      <div class="example-meta">${escapeHtml(row.bucket || "unknown bucket")} · ${formatInteger(row.documents)} hits · ${formatBytes(row.bytes)}</div>
      <pre class="heatmap-preview">${highlightText(preview, text, tone, alpha)}</pre>
      <div class="segment-chip">${escapeHtml(text)}</div>
      <div class="token-boundaries">
        <div>candidate: ${escapeHtml(row.model_a_token_boundaries || "n/a")}</div>
        <div>baseline: ${escapeHtml(row.model_b_token_boundaries || "n/a")}</div>
      </div>
    </article>
  `;
}

function highlightText(preview, target, tone, alpha) {
  const safePreview = escapeHtml(preview);
  const normalizedTarget = String(target || "").replaceAll("…", "");
  if (!normalizedTarget) {
    return safePreview;
  }
  const escapedTarget = escapeHtml(normalizedTarget);
  const exactIndex = safePreview.indexOf(escapedTarget);
  if (exactIndex >= 0) {
    return `${safePreview.slice(0, exactIndex)}<span class="heatmap-target ${tone}" style="--heat-alpha:${alpha}">${escapedTarget}</span>${safePreview.slice(exactIndex + escapedTarget.length)}`;
  }
  const compactTarget = escapedTarget.trim();
  if (compactTarget.length >= 4) {
    const compactIndex = safePreview.indexOf(compactTarget);
    if (compactIndex >= 0) {
      return `${safePreview.slice(0, compactIndex)}<span class="heatmap-target ${tone}" style="--heat-alpha:${alpha}">${compactTarget}</span>${safePreview.slice(compactIndex + compactTarget.length)}`;
    }
  }
  return safePreview;
}

function metricCell(value) {
  return `<td class="metric ${toneForGap(value)}">${formatGap(value)}</td>`;
}

function compareRows(a, b, sort) {
  if (sort === "gap") {
    return a.gap_bpb - b.gap_bpb;
  }
  if (sort === "name") {
    return a.name.localeCompare(b.name);
  }
  return Math.abs(b.gap_bpb) - Math.abs(a.gap_bpb);
}

function findGroupBytes(gap, name) {
  return gap.dataset_groups.find((group) => group.name === name)?.bytes ?? gap.bytes;
}

function findGroupDocuments(gap, name) {
  return gap.dataset_groups.find((group) => group.name === name)?.documents ?? gap.documents;
}

function bar(value, scale = 0.08, className = "bar") {
  const clipped = Math.min(Math.abs(value) / scale, 1) * 50;
  const direction = value < 0 ? "negative" : "positive";
  return `
    <div class="${className}" aria-label="${formatGap(value)}">
      <div class="bar-fill ${direction}" style="width:${clipped.toFixed(2)}%"></div>
    </div>
  `;
}

function toneForGap(value) {
  if (value < -0.00005) {
    return "good";
  }
  if (value > 0.00005) {
    return "bad";
  }
  return "neutral";
}

function formatGap(value) {
  if (!Number.isFinite(value)) {
    return "n/a";
  }
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(5)}`;
}

function formatBpb(value) {
  if (!Number.isFinite(value)) {
    return "n/a";
  }
  return value.toFixed(5);
}

function formatBytes(value) {
  if (!Number.isFinite(value)) {
    return "n/a";
  }
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(2)} MB`;
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1)} KB`;
  }
  return `${value} B`;
}

function formatInteger(value) {
  if (!Number.isFinite(value)) {
    return "n/a";
  }
  return new Intl.NumberFormat("en-US").format(value);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}
