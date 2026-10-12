(function () {
  function appendText(selection, className, text) {
    return selection.append('div').attr('class', className).text(text || 'Not packaged');
  }

  function appendMatchedText(selection, text, matched) {
    var paragraph = selection.append('p').attr('class', 'd3-decon-text');
    if (!text) {
      paragraph.attr('class', 'd3-decon-text is-pending').text('A publishable matched excerpt is not packaged.');
      return;
    }
    var start = matched ? text.indexOf(matched) : -1;
    if (start < 0) {
      paragraph.text(text);
      return;
    }
    paragraph.append('span').text(text.slice(0, start));
    paragraph.append('mark').text(text.slice(start, start + matched.length));
    paragraph.append('span').text(text.slice(start + matched.length));
  }

  function formatCount(value) {
    return new Intl.NumberFormat('en').format(value);
  }

  function appendCount(selection, value, prefix) {
    var compact = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 2 }).format(value);
    var exact = (prefix || '') + formatCount(value);
    return appendText(selection, 'd3-decon-value', (prefix || '') + compact)
      .attr('title', exact)
      .attr('aria-label', exact);
  }

  function renderCorpus(root, payload) {
    if (!payload.corpus) return;
    appendText(root, 'd3-decon-section-title', 'Exact production result');
    var result = root.append('div').attr('class', 'd3-decon-result');
    var tokens = result.append('div').attr('class', 'd3-decon-result-primary');
    appendCount(tokens, payload.corpus.tokens_removed);
    appendText(tokens, 'd3-decon-result-unit', 'tokens removed');
    appendText(
      tokens,
      'd3-decon-result-share',
      ((payload.corpus.tokens_removed / payload.corpus.deduplicated_tokens) * 100).toFixed(3) + '% of deduplicated tokens'
    );
    var documents = result.append('div').attr('class', 'd3-decon-result-secondary');
    appendCount(documents, payload.corpus.documents_removed);
    appendText(documents, 'd3-decon-result-unit', 'documents removed');
    appendText(
      documents,
      'd3-decon-result-share',
      ((payload.corpus.documents_removed / payload.corpus.deduplicated_documents) * 100).toFixed(3) + '% of deduplicated documents'
    );
    appendText(
      root,
      'd3-decon-transition-note',
      '23.12T deduplicated tokens → 23.11T decontaminated tokens'
    );
  }

  function renderGate(root, payload) {
    var gate = root.append('div').attr('class', 'd3-decon-gate');
    appendText(gate, 'd3-decon-gate-title', 'Publication stops here');
    appendText(gate, 'd3-decon-gate-copy', 'The current policy needs both audit cases. Neither is packaged.');
    var slots = gate.append('div').attr('class', 'd3-decon-gate-slots');
    (payload.current_policy_evidence || []).forEach(function (item) {
      var slot = slots.append('div').attr('class', 'd3-decon-gate-slot is-' + item.status);
      appendText(slot, 'd3-decon-label', 'Current-policy ' + item.label);
      appendText(slot, 'd3-decon-value', item.status);
    });
  }

  function renderCase(root, payload, item, index) {
    root.selectAll('.d3-decon-case').remove();
    var panel = root.append('div')
      .attr('class', 'd3-decon-case')
      .attr('role', 'tabpanel')
      .attr('id', 'decon-panel-' + item.case_id)
      .attr('aria-labelledby', 'decon-tab-' + item.case_id)
      .attr('tabindex', '0');
    appendText(panel, 'd3-decon-kicker', item.audit_label + ' · ' + item.policy_label);
    var texts = panel.append('div').attr('class', 'd3-decon-text-grid');
    var evaluation = texts.append('section');
    appendText(evaluation, 'd3-decon-label', 'Evaluation item · ' + (item.evaluation_item_id || 'pending'));
    appendMatchedText(evaluation, item.evaluation_text, item.matched_text);
    var document = texts.append('section');
    appendText(document, 'd3-decon-label', 'Normalized document · ' + (item.document_source_id || 'pending'));
    appendMatchedText(document, item.document_text, item.matched_text);
    var facts = panel.append('div').attr('class', 'd3-decon-facts');
    appendText(
      facts,
      'd3-decon-label',
      payload.metadata.ngram_words + '-word window · threshold ' + payload.metadata.threshold_operator + ' ' + payload.metadata.threshold +
        ' · max overlap ' + (item.max_overlap == null ? 'not packaged' : item.max_overlap.toFixed(2))
    );
    appendText(panel, 'd3-decon-reason', 'Why this matters: ' + item.reason);
  }

  function renderDecontamination(el, payload) {
    var root = d3.select(el).append('div').attr('class', 'd3-decon');
    renderCorpus(root, payload);
    renderGate(root, payload);
    var history = root.append('details').attr('class', 'd3-decon-history');
    history.append('summary').text('Inspect the historical audit example');
    appendText(history, 'd3-decon-note', 'Historical example only—not current-policy validation');
    var tabs = history.append('div')
      .attr('class', 'd3-decon-tabs')
      .attr('role', 'tablist')
      .attr('aria-label', 'Decontamination audit cases');
    var buttons = [];
    function selectCase(index, focus) {
      buttons.forEach(function (button, buttonIndex) {
        button
          .attr('aria-selected', buttonIndex === index ? 'true' : 'false')
          .attr('tabindex', buttonIndex === index ? '0' : '-1');
      });
      renderCase(history, payload, payload.cases[index], index);
      if (focus) buttons[index].node().focus();
    }
    payload.cases.forEach(function (item, index) {
      var button = tabs.append('button')
        .attr('type', 'button')
        .attr('role', 'tab')
        .attr('id', 'decon-tab-' + item.case_id)
        .attr('aria-controls', 'decon-panel-' + item.case_id)
        .attr('aria-selected', index === 0 ? 'true' : 'false')
        .attr('tabindex', index === 0 ? '0' : '-1')
        .text(item.audit_label)
        .on('click', function () {
          selectCase(index, false);
        })
        .on('keydown', function (event) {
          var next = index;
          if (event.key === 'ArrowRight') next = (index + 1) % payload.cases.length;
          if (event.key === 'ArrowLeft') next = (index - 1 + payload.cases.length) % payload.cases.length;
          if (event.key === 'Home') next = 0;
          if (event.key === 'End') next = payload.cases.length - 1;
          if (next !== index) {
            event.preventDefault();
            selectCase(next, true);
          }
        });
      buttons.push(button);
    });
    selectCase(0, false);
  }

  var DATA_LOOP_COLORS = {
    ink: '#1f1e1b',
    paper: '#f1e8df',
    blue: '#385c8f',
    teal: '#388f8d',
    gold: '#8f6b38',
    red: '#8f3839',
    berry: '#8f386d'
  };
  var DATA_LOOP_QUALITY_OPACITIES = [.3, .475, .65, .825, 1];

  function compact(value, digits) {
    return new Intl.NumberFormat('en', {
      notation: 'compact',
      maximumFractionDigits: digits == null ? 2 : digits
    }).format(value);
  }

  function formatSwarmTooltip(point) {
    var percent = new Intl.NumberFormat('en', {
      style: 'percent',
      maximumFractionDigits: 1
    });
    function bucketLines(title, buckets) {
      return [title].concat(buckets.map(function (bucket, index) {
        return (index + 1) + '. ' + bucket.topic_label + ' · Q' + bucket.quality_band + ' — ' + percent.format(bucket.weight);
      }));
    }
    return [point.run_id + ' · ' + point.group]
      .concat(bucketLines('Pretraining', point.pretraining_top_buckets))
      .concat(bucketLines('Cooldown', point.cooldown_top_buckets))
      .join('\n');
  }

  function ribbonHorizontal(x0, y0, h0, x1, y1, h1) {
    var middle = (x0 + x1) / 2;
    return [
      'M', x0, ',', y0,
      'C', middle, ',', y0, ' ', middle, ',', y1, ' ', x1, ',', y1,
      'L', x1, ',', y1 + h1,
      'C', middle, ',', y1 + h1, ' ', middle, ',', y0 + h0, ' ', x0, ',', y0 + h0,
      'Z'
    ].join('');
  }

  function ribbonVertical(x0, y0, w0, x1, y1, w1) {
    var middle = (y0 + y1) / 2;
    return [
      'M', x0, ',', y0,
      'C', x0, ',', middle, ' ', x1, ',', middle, ' ', x1, ',', y1,
      'L', x1 + w1, ',', y1,
      'C', x1 + w1, ',', middle, ' ', x0 + w0, ',', middle, ' ', x0 + w0, ',', y0,
      'Z'
    ].join('');
  }

  function svgText(svg, x, y, text, className, anchor) {
    return svg.append('text')
      .attr('x', x)
      .attr('y', y)
      .attr('class', className || null)
      .attr('text-anchor', anchor || 'start')
      .text(text);
  }

  function addTitle(selection, text) {
    selection.attr('data-tooltip', text);
    selection.append('title').text(text);
    return selection;
  }

  function activateFigureTooltips(el) {
    var tooltip = d3.select(el).append('div').attr('class', 'd3-loop-tooltip');
    function move(event) {
      var bounds = el.getBoundingClientRect();
      var left = event.clientX - bounds.left + 14;
      var pointerY = event.clientY - bounds.top;
      var tooltipWidth = tooltip.node().offsetWidth || 220;
      var tooltipHeight = tooltip.node().offsetHeight || 140;
      var top = pointerY + tooltipHeight + 22 > el.clientHeight
        ? pointerY - tooltipHeight - 14
        : pointerY + 14;
      tooltip
        .style('left', Math.max(8, Math.min(left, el.clientWidth - tooltipWidth - 8)) + 'px')
        .style('top', Math.max(8, top) + 'px');
    }
    d3.select(el).selectAll('[data-tooltip]')
      .on('pointerenter.tooltip', function (event) {
        d3.select(this).classed('is-hovered', true);
        tooltip.text(this.getAttribute('data-tooltip')).classed('is-visible', true);
        move(event);
      })
      .on('pointermove.tooltip', move)
      .on('pointerleave.tooltip', function () {
        d3.select(this).classed('is-hovered', false);
        tooltip.classed('is-visible', false);
      });
  }

  function dataLoopStages(payload) {
    var stages = {};
    payload.stages.forEach(function (stage) { stages[stage.stage_id] = stage; });
    return stages;
  }

  function renderSwarmPlot(svg, stage, box) {
    var visiblePoints = stage.pca_points.filter(function (point) { return !point.pca_outlier; });
    var xExtent = d3.extent(visiblePoints, function (point) { return point.pc1; });
    var yExtent = d3.extent(visiblePoints, function (point) { return point.pc2; });
    var xPadding = (xExtent[1] - xExtent[0]) * .05;
    var yPadding = (yExtent[1] - yExtent[0]) * .05;
    var xScale = d3.scaleLinear()
      .domain([xExtent[0] - xPadding, xExtent[1] + xPadding])
      .range([box.x, box.x + box.width]);
    var yScale = d3.scaleLinear()
      .domain([yExtent[0] - yPadding, yExtent[1] + yPadding])
      .range([box.y + box.height, box.y]);
    svg.selectAll(null)
      .data(visiblePoints)
      .enter()
      .append('circle')
      .attr('cx', function (point) { return xScale(point.pc1); })
      .attr('cy', function (point) { return yScale(point.pc2); })
      .attr('r', 1.7)
      .attr('class', 'd3-loop-swarm-point')
      .each(function (point) {
        addTitle(d3.select(this), formatSwarmTooltip(point));
      });
  }

  function renderDataLoopDesktop(el, payload) {
    var stages = dataLoopStages(payload);
    var raw = stages.raw;
    var dedup = stages.deduplicated;
    var curated = stages.decontaminated;
    var routed = stages.routed;
    var swarm = stages.proxy_swarm;
    var weights = stages.choose_weights;
    var width = 1000;
    var height = 532;
    var top = 112;
    var maxFlow = 190;
    var nodeWidth = 28;
    var scale = maxFlow / raw.tokens;
    var rawHeight = raw.tokens * scale;
    var dedupHeight = dedup.tokens * scale;
    var curatedHeight = curated.tokens * scale;
    var duplicateHeight = rawHeight - dedupHeight;
    var overlapHeight = dedupHeight - curatedHeight;
    var xs = [24, 230, 448];
    var svg = d3.select(el).append('svg')
      .attr('viewBox', '0 32 ' + width + ' ' + (height - 32))
      .attr('role', 'img')
      .attr('aria-label', 'Token flow through normalization, deduplication, decontamination, 40 topics, five quality bands, a proxy-model swarm, and 200 sampling weights.');

    addTitle(svg.append('path')
      .attr('d', ribbonHorizontal(xs[0] + nodeWidth, top, dedupHeight, xs[1], top, dedupHeight))
      .attr('fill', 'rgba(56,92,143,.58)'), compact(dedup.tokens) + ' tokens retained after deduplication');
    addTitle(svg.append('path')
      .attr('d', ribbonHorizontal(xs[0] + nodeWidth, top + dedupHeight, duplicateHeight, 205, 340, duplicateHeight))
      .attr('fill', 'rgba(143,56,57,.78)'), compact(raw.tokens - dedup.tokens) + ' duplicate tokens removed');
    addTitle(svg.append('path')
      .attr('d', ribbonHorizontal(xs[1] + nodeWidth, top, curatedHeight, xs[2], top, curatedHeight))
      .attr('fill', 'rgba(56,92,143,.58)'), compact(curated.tokens) + ' tokens retained after decontamination');
    addTitle(svg.append('path')
      .attr('d', ribbonHorizontal(xs[1] + nodeWidth, top + curatedHeight, overlapHeight, 430, 370, Math.max(overlapHeight, .35)))
      .attr('fill', DATA_LOOP_COLORS.red), compact(dedup.tokens - curated.tokens) + ' benchmark-overlap tokens removed');
    var nodes = [
      { x: xs[0], y: top, h: rawHeight, color: DATA_LOOP_COLORS.blue, label: 'NORMALIZED', value: compact(raw.tokens), detail: compact(raw.documents) + ' documents' },
      { x: xs[1], y: top, h: dedupHeight, color: DATA_LOOP_COLORS.blue, label: 'DEDUPED', value: compact(dedup.tokens), detail: compact(dedup.documents) + ' documents' },
      { x: xs[2], y: top, h: curatedHeight, color: DATA_LOOP_COLORS.blue, label: 'DECONTAMINATED', value: compact(curated.tokens), detail: compact(curated.documents) + ' documents' }
    ];
    nodes.forEach(function (node) {
      addTitle(svg.append('rect')
        .attr('x', node.x)
        .attr('y', node.y)
        .attr('width', nodeWidth)
        .attr('height', node.h)
        .attr('fill', node.color)
        .attr('class', 'd3-loop-node'), node.label + ': ' + node.value + '; ' + node.detail);
      svgText(svg, node.x, 86, node.label, 'd3-loop-label');
      svgText(svg, node.x, 104, node.value, 'd3-loop-value');
    });

    var topics = routed.topics.slice().sort(function (a, b) { return b.token_count - a.token_count; });
    var qualityOpacities = DATA_LOOP_QUALITY_OPACITIES;
    var topicX = 615;
    var fanTop = 88;
    var fanGap = 1.5;
    var sourceY = top;
    var targetY = fanTop;
    topics.forEach(function (topic) {
      var topicHeight = topic.token_count * scale;
      addTitle(svg.append('path')
        .attr('d', ribbonHorizontal(xs[2] + nodeWidth, sourceY, topicHeight, topicX, targetY, topicHeight))
        .attr('fill', 'rgba(56,92,143,.34)'), topic.topic_label + ': ' + compact(topic.token_count) + ' tokens');
      addTitle(svg.append('rect')
        .attr('x', topicX).attr('y', targetY).attr('width', nodeWidth).attr('height', topicHeight)
        .attr('fill', DATA_LOOP_COLORS.blue).attr('class', 'd3-loop-cell'), topic.topic_label + ': ' + compact(topic.token_count) + ' tokens');
      sourceY += topicHeight;
      targetY += topicHeight + fanGap;
    });
    svgText(svg, topicX, 50, routed.topic_count + ' TOPICS', 'd3-loop-label');
    var qualityTotals = d3.range(routed.quality_count).map(function (quality) {
      return d3.sum(topics, function (topic) { return topic.quality_tokens[quality]; });
    });
    var qualityBarX = 735;
    var qualityBarY = 130;
    var qualityBarWidth = 235;
    var qualityBarHeight = 40;
    var arrowX = qualityBarX + qualityBarWidth / 2;
    var qualityOffset = qualityBarX;
    var qualityCenters = [];
    svgText(svg, qualityBarX, 86, routed.quality_count + ' QUALITY BANDS · ' + routed.bucket_count + ' BUCKETS', 'd3-loop-label');
    svgText(svg, qualityBarX, 105, 'aggregate token share across all topics', 'd3-loop-note');
    qualityTotals.forEach(function (tokenCount, quality) {
      var segmentWidth = tokenCount / curated.tokens * qualityBarWidth;
      qualityCenters.push(qualityOffset + segmentWidth / 2);
      addTitle(svg.append('rect')
        .attr('x', qualityOffset).attr('y', qualityBarY).attr('width', segmentWidth).attr('height', qualityBarHeight)
        .attr('fill', DATA_LOOP_COLORS.teal).attr('fill-opacity', qualityOpacities[quality]).attr('class', 'd3-loop-cell'), 'Quality ' + quality + ': ' + compact(tokenCount) + ' tokens');
      qualityOffset += segmentWidth;
    });
    svgText(svg, qualityCenters[0], 192, 'Lowest', 'd3-loop-quality-end', 'middle');
    svgText(svg, qualityCenters[qualityCenters.length - 1], 192, 'Highest', 'd3-loop-quality-end', 'middle');
    svg.append('line').attr('x1', topicX + nodeWidth + 13).attr('x2', qualityBarX - 13).attr('y1', qualityBarY + qualityBarHeight / 2).attr('y2', qualityBarY + qualityBarHeight / 2).attr('class', 'd3-loop-process-line');
    svg.append('path').attr('d', 'M' + (qualityBarX - 11) + ',' + (qualityBarY + qualityBarHeight / 2) + 'l-7,-5v10Z').attr('class', 'd3-loop-arrowhead');

    addTitle(svg.append('rect')
      .attr('x', 205).attr('y', 340).attr('width', nodeWidth)
      .attr('height', Math.max(duplicateHeight, 5)).attr('fill', DATA_LOOP_COLORS.red)
      .attr('class', 'd3-loop-node'), compact(raw.tokens - dedup.tokens) + ' duplicate tokens removed');
    svgText(svg, 245, 347, 'DUPLICATES', 'd3-loop-label');
    svgText(svg, 245, 366, compact(raw.tokens - dedup.tokens) + ' tokens', 'd3-loop-value');
    addTitle(svg.append('line')
      .attr('x1', 430).attr('x2', 456).attr('y1', 370).attr('y2', 370)
      .attr('class', 'd3-loop-overlap'), compact(dedup.tokens - curated.tokens) + ' benchmark-overlap tokens removed');
    svgText(svg, 470, 360, 'BENCHMARK OVERLAP', 'd3-loop-label');
    svgText(svg, 470, 379, compact(dedup.tokens - curated.tokens) + ' tokens', 'd3-loop-value');

    svg.append('line').attr('x1', arrowX).attr('x2', arrowX).attr('y1', 205).attr('y2', 219).attr('class', 'd3-loop-process-line');
    svg.append('path').attr('d', 'M' + arrowX + ',227l-6,-9h12Z').attr('class', 'd3-loop-arrowhead');
    svgText(svg, 655, 210, 'MIXTURE SWARM', 'd3-loop-label');
    svgText(svg, 655, 228, 'Nearby runs use similar weights', 'd3-loop-note');
    renderSwarmPlot(svg, swarm, { x: 655, y: 242, width: 315, height: 130 });
    svgText(svg, 655, 400, 'OPTIMIZATION CRITERION', 'd3-loop-label');
    svgText(svg, 655, 422, 'Minimize predicted low-noise mean BPB', 'd3-loop-note');
    svg.append('line').attr('x1', arrowX).attr('x2', arrowX).attr('y1', 435).attr('y2', 449).attr('class', 'd3-loop-process-line d3-loop-decision-line');
    svg.append('path').attr('d', 'M' + arrowX + ',457l-6,-9h12Z').attr('class', 'd3-loop-arrowhead d3-loop-decision-arrowhead');
    svgText(svg, 742, 480, 'CHOOSE ' + weights.weight_count + ' WEIGHTS', 'd3-loop-label d3-loop-decision');
    svgText(svg, 742, 501, 'One weight per bucket', 'd3-loop-note');
  }

  function renderDataLoopMobile(el, payload) {
    var stages = dataLoopStages(payload);
    var raw = stages.raw;
    var dedup = stages.deduplicated;
    var curated = stages.decontaminated;
    var routed = stages.routed;
    var swarm = stages.proxy_swarm;
    var weights = stages.choose_weights;
    var width = 360;
    var height = 860;
    var left = 18;
    var maxFlow = 250;
    var nodeHeight = 16;
    var scale = maxFlow / raw.tokens;
    var widths = [raw.tokens * scale, dedup.tokens * scale, curated.tokens * scale];
    var ys = [52, 164, 276];
    var svg = d3.select(el).append('svg')
      .attr('viewBox', '0 24 ' + width + ' ' + (height - 24))
      .attr('role', 'img')
      .attr('aria-label', 'Token flow through corpus curation and mixture learning.');
    var colors = [DATA_LOOP_COLORS.blue, DATA_LOOP_COLORS.blue, DATA_LOOP_COLORS.blue];
    var labels = ['NORMALIZED', 'DEDUPED', 'DECONTAMINATED'];
    var values = [compact(raw.tokens), compact(dedup.tokens), compact(curated.tokens)];
    for (var index = 0; index < 3; index += 1) {
      addTitle(svg.append('rect')
        .attr('x', left).attr('y', ys[index]).attr('width', widths[index]).attr('height', nodeHeight)
        .attr('fill', colors[index]).attr('class', 'd3-loop-node'), labels[index] + ': ' + values[index]);
    }
    addTitle(svg.append('path')
      .attr('d', ribbonVertical(left, ys[0] + nodeHeight, widths[1], left, ys[1], widths[1]))
      .attr('fill', 'rgba(56,92,143,.62)'), compact(dedup.tokens) + ' tokens retained after deduplication');
    var duplicateWidth = widths[0] - widths[1];
    addTitle(svg.append('path')
      .attr('d', ribbonVertical(left + widths[1], ys[0] + nodeHeight, duplicateWidth, 308, ys[1], Math.max(duplicateWidth, 2)))
      .attr('fill', 'rgba(143,56,57,.78)'), compact(raw.tokens - dedup.tokens) + ' duplicate tokens removed');
    svg.append('rect').attr('x', 308).attr('y', ys[1]).attr('width', Math.max(duplicateWidth, 2)).attr('height', nodeHeight).attr('fill', DATA_LOOP_COLORS.red).attr('class', 'd3-loop-node');
    svgText(svg, 345, ys[1] + 30, 'DUPLICATES', 'd3-loop-label', 'end');
    svgText(svg, 345, ys[1] + 50, compact(raw.tokens - dedup.tokens), 'd3-loop-value', 'end');
    addTitle(svg.append('path')
      .attr('d', ribbonVertical(left, ys[1] + nodeHeight, widths[2], left, ys[2], widths[2]))
      .attr('fill', 'rgba(56,92,143,.62)'), compact(curated.tokens) + ' tokens retained after decontamination');
    addTitle(svg.append('path')
      .attr('d', ribbonVertical(left + widths[2], ys[1] + nodeHeight, Math.max(widths[1] - widths[2], .2), 330, ys[2], .5))
      .attr('fill', DATA_LOOP_COLORS.red), compact(dedup.tokens - curated.tokens) + ' benchmark-overlap tokens removed');
    svg.append('line').attr('x1', 329).attr('x2', 345).attr('y1', ys[2]).attr('y2', ys[2]).attr('class', 'd3-loop-overlap');
    svgText(svg, 345, ys[2] + 38, 'BENCHMARK', 'd3-loop-label', 'end');
    svgText(svg, 345, ys[2] + 56, 'OVERLAP', 'd3-loop-label', 'end');
    svgText(svg, 345, ys[2] + 76, compact(dedup.tokens - curated.tokens), 'd3-loop-value', 'end');
    labels.forEach(function (label, index) {
      svgText(svg, left, ys[index] - 7, label, 'd3-loop-label');
      svgText(svg, left + widths[index], ys[index] - 7, values[index], 'd3-loop-value', 'end');
    });
    var topics = routed.topics.slice().sort(function (a, b) { return b.token_count - a.token_count; });
    var qualityOpacities = DATA_LOOP_QUALITY_OPACITIES;
    var topicY = 378;
    var qualityY = 448;
    var fanGap = .5;
    var fanScale = (widths[2] - fanGap * (topics.length - 1)) / curated.tokens;
    var sourceX = left;
    var targetX = left;
    topics.forEach(function (topic) {
      var sourceWidth = topic.token_count * scale;
      var targetWidth = topic.token_count * fanScale;
      addTitle(svg.append('path')
        .attr('d', ribbonVertical(sourceX, ys[2] + nodeHeight, sourceWidth, targetX, topicY, targetWidth))
        .attr('fill', 'rgba(56,92,143,.34)'), topic.topic_label + ': ' + compact(topic.token_count) + ' tokens');
      addTitle(svg.append('rect')
        .attr('x', targetX).attr('y', topicY).attr('width', targetWidth).attr('height', nodeHeight)
        .attr('fill', DATA_LOOP_COLORS.blue).attr('class', 'd3-loop-cell'), topic.topic_label + ': ' + compact(topic.token_count) + ' tokens');
      sourceX += sourceWidth;
      targetX += targetWidth + fanGap;
    });
    svgText(svg, left, topicY - 10, routed.topic_count + ' TOPICS', 'd3-loop-label');
    var qualityTotals = d3.range(routed.quality_count).map(function (quality) {
      return d3.sum(topics, function (topic) { return topic.quality_tokens[quality]; });
    });
    svgText(svg, left, qualityY - 30, routed.quality_count + ' BANDS × ' + routed.topic_count + ' TOPICS = ' + routed.bucket_count + ' BUCKETS', 'd3-loop-label');
    svgText(svg, left, qualityY - 8, 'aggregate token share across all topics', 'd3-loop-value');
    var qualityOffset = left;
    var qualityCenters = [];
    qualityTotals.forEach(function (tokenCount, quality) {
      var segmentWidth = tokenCount / curated.tokens * widths[2];
      qualityCenters.push(qualityOffset + segmentWidth / 2);
      addTitle(svg.append('rect')
        .attr('x', qualityOffset).attr('y', qualityY).attr('width', segmentWidth).attr('height', 24)
        .attr('fill', DATA_LOOP_COLORS.teal).attr('fill-opacity', qualityOpacities[quality]).attr('class', 'd3-loop-cell'), 'Quality ' + quality + ': ' + compact(tokenCount) + ' tokens');
      qualityOffset += segmentWidth;
    });
    svgText(svg, qualityCenters[0], qualityY + 40, 'Lowest', 'd3-loop-quality-end', 'middle');
    svgText(svg, qualityCenters[qualityCenters.length - 1], qualityY + 40, 'Highest', 'd3-loop-quality-end', 'middle');
    svg.append('line').attr('x1', left + widths[2] + 8).attr('x2', left + widths[2] + 8).attr('y1', topicY + nodeHeight).attr('y2', qualityY - 6).attr('class', 'd3-loop-process-line');
    svg.append('path').attr('d', 'M' + (left + widths[2] + 8) + ',' + qualityY + 'l-5,-8h10Z').attr('class', 'd3-loop-arrowhead');

    svg.append('path').attr('d', 'M' + (left + widths[2] + 8) + ',' + (qualityY + 24) + 'V' + (qualityY + 65) + 'H330V520').attr('class', 'd3-loop-process-line');
    svg.append('path').attr('d', 'M330,528l-5,-8h10Z').attr('class', 'd3-loop-arrowhead');
    svgText(svg, left, 540, 'MIXTURE SWARM', 'd3-loop-label');
    svgText(svg, left, 556, 'Nearby runs use similar weights', 'd3-loop-note');
    renderSwarmPlot(svg, swarm, { x: left, y: 565, width: 310, height: 125 });
    svgText(svg, left, 720, 'OPTIMIZATION CRITERION', 'd3-loop-label');
    svgText(svg, left, 740, 'Minimize predicted', 'd3-loop-note');
    svgText(svg, left, 758, 'low-noise mean BPB', 'd3-loop-note');
    svg.append('line').attr('x1', 80).attr('x2', 80).attr('y1', 770).attr('y2', 784).attr('class', 'd3-loop-process-line d3-loop-decision-line');
    svg.append('path').attr('d', 'M80,792l-6,-9h12Z').attr('class', 'd3-loop-arrowhead d3-loop-decision-arrowhead');
    svgText(svg, 98, 824, 'CHOOSE ' + weights.weight_count + ' WEIGHTS', 'd3-loop-label d3-loop-decision');
    svgText(svg, 98, 844, 'One weight per bucket', 'd3-loop-note');
  }

  function renderDataLoop(el, payload) {
    d3.select(el).attr('class', 'd3-figure d3-data-loop').selectAll('*').remove();
    if (el.clientWidth < 620) renderDataLoopMobile(el, payload);
    else renderDataLoopDesktop(el, payload);
    activateFigureTooltips(el);
  }

  function renderBucketGrid(el, payload) {
    var root = d3.select(el).attr('class', 'd3-figure d3-bucket-grid');
    root.selectAll('*').remove();
    var total = d3.sum(payload.cells, function (c) { return c.available_tokens; });
    var topics = Array.from(d3.group(payload.cells, function (c) { return c.domain; }), function (entry) {
      return { name: entry[0], cells: entry[1].slice().sort(function (a, b) { return a.quality - b.quality; }),
        tokens: d3.sum(entry[1], function (c) { return c.available_tokens; }) };
    });
    var maximum = d3.max(payload.cells, function (c) { return c.available_tokens / total; });
    var color = d3.scaleLinear().domain([0, maximum]).range([DATA_LOOP_COLORS.paper, DATA_LOOP_COLORS.blue]);
    function percent(tokens) {
      var share = tokens / total * 100;
      return share > 0 && share < 0.01 ? '<0.01%' : share.toFixed(2) + '%';
    }
    var key = root.append('div').attr('class', 'd3-bucket-grid-key');
    key.append('span').text('Share of all tokens');
    key.append('span').text('0%');
    key.append('span').attr('class', 'd3-bucket-grid-ramp').attr('aria-hidden', 'true');
    key.append('span').text((maximum * 100).toFixed(2) + '%');
    var scroll = root.append('div').attr('class', 'd3-bucket-grid-scroll')
      .attr('tabindex', 0).attr('role', 'region').attr('aria-label', 'Topic and quality grid; scroll to explore all topics');
    var table = scroll.append('table');
    table.append('caption').attr('class', 'd3-bucket-grid-sr')
      .text('Percentage of all available tokens in each topic-quality bucket, before mixture reweighting.');
    var header = table.append('thead').append('tr');
    header.append('th').attr('scope', 'col').text('Topic');
    ['Q0 · Lowest', 'Q1', 'Q2', 'Q3', 'Q4 · Highest', 'All quality'].forEach(function (name) {
      header.append('th').attr('scope', 'col').attr('title', name).text(el.clientWidth < 320 ? name.replace(' · Lowest', '').replace(' · Highest', '').replace('All quality', 'Total') : name);
    });
    var body = table.append('tbody');
    function draw() {
      topics.sort(function (a, b) { return d3.ascending(a.name, b.name); });
      body.selectAll('*').remove();
      topics.forEach(function (topic) {
        var row = body.append('tr');
        row.append('th').attr('scope', 'row').text(topic.name);
        topic.cells.forEach(function (cell) {
          var description = topic.name + ' · Q' + cell.quality + ' · ' + percent(cell.available_tokens) +
            ' of all tokens · ' + formatCount(cell.available_tokens) + ' tokens';
          var button = row.append('td').append('button').attr('type', 'button')
            .style('background-color', color(cell.available_tokens / total))
            .style('color', cell.available_tokens / total > maximum * 0.55 ? '#fff' : '#34271e')
            .attr('aria-label', description).attr('title', description).text(percent(cell.available_tokens));
          button.on('mouseenter focus click', function () {
            body.selectAll('button').classed('is-selected', false);
            button.classed('is-selected', true);
          });
        });
        row.append('td').attr('class', 'd3-bucket-grid-total').text(percent(topic.tokens));
      });
    }
    var footer = table.append('tfoot').append('tr');
    footer.append('th').attr('scope', 'row').text('All topics');
    d3.range(5).forEach(function (q) {
      footer.append('td').text(percent(d3.sum(payload.cells.filter(function (c) { return c.quality === q; }),
        function (c) { return c.available_tokens; })));
    });
    footer.append('td').text('100%');
    draw();

  }

  function renderUncheatableCorrelations(el, payload) {
    var root = d3.select(el).attr('class', 'd3-figure d3-uncheatable-correlations');
    root.selectAll('*').remove();
    var controls = root.append('div').attr('class', 'd3-topic-quality-controls d3-correlation-controls');
    var controlId = 'd3-correlation-subset-' + document.querySelectorAll('.d3-uncheatable-correlations').length;
    controls.append('label').attr('for', controlId).text('UncheatableEval subset');
    var select = controls.append('select')
      .attr('id', controlId)
      .attr('aria-label', 'Choose an UncheatableEval subset');
    select.selectAll('option').data(payload.subsets).enter().append('option')
      .attr('value', function (subset) { return subset.id; })
      .text(function (subset) { return subset.label; });
    var summary = controls.append('div').attr('class', 'd3-correlation-summary');
    var scroll = root.append('div').attr('class', 'd3-correlation-scroll');
    var phases = [
      { id: 'pretraining', label: 'PRETRAINING' },
      { id: 'cooldown', label: 'COOLDOWN' }
    ];
    var domains = Array.from(new Set(payload.buckets.map(function (bucket) { return bucket.domain; })));
    var mobile = el.clientWidth < 620;
    root.classed('is-mobile', mobile);
    var phaseSelect;
    if (mobile) {
      controls.append('label').attr('for', controlId + '-phase').text('Training phase');
      phaseSelect = controls.append('select').attr('id', controlId + '-phase');
      phaseSelect.selectAll('option').data(phases).enter().append('option')
        .attr('value', function (phase) { return phase.id; })
        .text(function (phase) { return phase.label === 'PRETRAINING' ? 'Pretraining' : 'Cooldown'; });
      phaseSelect.on('change', function () { draw(select.property('value')); });
    }

    var maxCorrelation = d3.max(payload.subsets, function (subset) {
      return d3.max(phases, function (phase) {
        return d3.max(payload.correlations[subset.id][phase.id], function (value) {
          return value == null ? 0 : Math.abs(value);
        });
      });
    });
    maxCorrelation = Math.ceil(maxCorrelation * 10) / 10;
    var key = root.insert('div', '.d3-correlation-scroll').attr('class', 'd3-correlation-key');
    key.append('div').attr('class', 'd3-correlation-key-ramp');
    var keyTicks = key.append('div').attr('class', 'd3-correlation-key-ticks');
    keyTicks.append('span').text('−' + maxCorrelation.toFixed(1) + ' · lower BPB');
    keyTicks.append('span').text('0');
    keyTicks.append('span').text('+' + maxCorrelation.toFixed(1) + ' · higher BPB');
    var invariantKey = key.append('div').attr('class', 'd3-correlation-invariant-key');
    invariantKey.append('span').attr('class', 'd3-correlation-invariant-swatch');
    invariantKey.append('span').text('weight did not vary');

    function draw(subsetId) {
      scroll.selectAll('*').remove();
      var subset = payload.subsets.find(function (item) { return item.id === subsetId; });
      var rows = [];
      phases.forEach(function (phase) {
        payload.buckets.forEach(function (bucket, index) {
          rows.push({
            phase: phase.id,
            phase_label: phase.label,
            bucket_id: bucket.bucket_id,
            domain: bucket.domain,
            quality: bucket.quality,
            correlation: payload.correlations[subsetId][phase.id][index]
          });
        });
      });
      var variedRows = rows.filter(function (row) { return row.correlation != null; });
      var strongestBetter = variedRows.reduce(function (best, row) {
        return !best || row.correlation < best.correlation ? row : best;
      }, null);
      var strongestWorse = variedRows.reduce(function (best, row) {
        return !best || row.correlation > best.correlation ? row : best;
      }, null);
      summary.text('Strongest negative association: ' + strongestBetter.domain +
        ' Q' + strongestBetter.quality + ' (ρ=' +
        d3.format('+.2f')(strongestBetter.correlation) + ') · strongest positive: ' +
        strongestWorse.domain + ' Q' + strongestWorse.quality + ' (ρ=' +
        d3.format('+.2f')(strongestWorse.correlation) + ')');

      if (mobile) {
        var phaseId = phaseSelect.property('value');
        var table = scroll.append('table').attr('class', 'd3-correlation-mobile-table');
        var header = table.append('thead').append('tr');
        header.append('th').attr('scope', 'col').text('Topic');
        d3.range(5).forEach(function (q) { header.append('th').attr('scope', 'col').text('Q' + q); });
        var body = table.append('tbody');
        var mobileColour = d3.scaleLinear().domain([-maxCorrelation, 0, maxCorrelation])
          .range([DATA_LOOP_COLORS.blue, DATA_LOOP_COLORS.paper, DATA_LOOP_COLORS.red]).clamp(true);
        domains.forEach(function (domain) {
          var tr = body.append('tr');
          tr.append('th').attr('scope', 'row').text(domain);
          rows.filter(function (row) { return row.phase === phaseId && row.domain === domain; })
            .sort(function (a, b) { return a.quality - b.quality; }).forEach(function (row) {
              var description = row.domain + ' · Q' + row.quality + ' · ' + row.phase_label + ' · ' +
                (row.correlation == null ? 'weight did not vary' : 'ρ = ' + d3.format('+.3f')(row.correlation));
              tr.append('td').append('button').attr('type', 'button').attr('aria-label', description)
                .attr('data-tooltip', description)
                .style('background', row.correlation == null ? '#c9c3ba' : mobileColour(row.correlation))
                .style('color', Math.abs(row.correlation || 0) > maxCorrelation * .6 ? '#fff' : '#1f1e1b')
                .text(row.correlation == null ? '—' : d3.format('.2f')(row.correlation));
            });
        });
        root.selectAll('.d3-loop-tooltip').remove();
        activateFigureTooltips(el);
        return;
      }
      var width = 840;
      var rowHeight = 18;
      var margin = { top: 78, right: 28, bottom: 72, left: 245 };
      var height = margin.top + domains.length * rowHeight + margin.bottom;
      var panelGap = 54;
      var panelWidth = (width - margin.left - margin.right - panelGap) / 2;
      var x = d3.scaleBand().domain([0, 1, 2, 3, 4]).range([0, panelWidth]).padding(0.08);
      var y = d3.scaleBand().domain(domains).range([margin.top, height - margin.bottom]).padding(0.08);
      var colour = d3.scaleLinear()
        .domain([-maxCorrelation, 0, maxCorrelation])
        .range([DATA_LOOP_COLORS.blue, DATA_LOOP_COLORS.paper, DATA_LOOP_COLORS.red])
        .clamp(true);
      var svg = scroll.append('svg')
        .attr('viewBox', '0 0 ' + width + ' ' + height)
        .attr('role', 'img')
        .attr('aria-label', 'Correlation between each domain-quality bucket weight and ' +
          subset.label + ' bits per byte across ' + payload.run_count + ' proxy runs.');
      svg.append('title').text('Bucket-weight correlations for ' + subset.label);

      svgText(svg, margin.left - 12, 66, 'DOMAIN ↓', 'd3-correlation-axis-title', 'end');

      svg.selectAll('.d3-correlation-row-label').data(domains).enter().append('text')
        .attr('class', 'd3-correlation-row-label')
        .attr('x', margin.left - 12)
        .attr('y', function (domain) { return y(domain) + y.bandwidth() / 2; })
        .attr('dy', '0.34em').attr('text-anchor', 'end')
        .text(function (domain) { return domain; });

      phases.forEach(function (phase, phaseIndex) {
        var panelX = margin.left + phaseIndex * (panelWidth + panelGap);
        svg.append('text').attr('class', 'd3-correlation-panel-title')
          .attr('x', panelX + panelWidth / 2).attr('y', 24)
          .attr('text-anchor', 'middle').text(phase.label);
        svgText(svg, panelX, 39, 'QUALITY BAND →', 'd3-correlation-axis-title');
        svg.selectAll('.d3-correlation-quality-' + phase.id)
          .data([0, 1, 2, 3, 4]).enter().append('text')
          .attr('class', 'd3-correlation-quality-label')
          .attr('x', function (quality) { return panelX + x(quality) + x.bandwidth() / 2; })
          .attr('y', 53).attr('text-anchor', 'middle')
          .text(function (quality) { return 'Q' + quality; });
        var guides = svg.append('g').attr('class', 'd3-correlation-guides');
        var cells = svg.selectAll('.d3-correlation-cell-' + phase.id)
          .data(rows.filter(function (row) { return row.phase === phase.id; }))
          .enter().append('rect')
          .attr('class', 'd3-correlation-cell')
          .attr('x', function (row) { return panelX + x(row.quality); })
          .attr('y', function (row) { return y(row.domain); })
          .attr('width', x.bandwidth()).attr('height', y.bandwidth())
          .attr('tabindex', '-1')
          .attr('role', 'img')
          .attr('aria-label', function (row) {
            return row.domain + ', quality ' + row.quality + ', ' + row.phase_label.toLowerCase() + ', ' +
              (row.correlation == null ? 'weight did not vary' : 'Spearman rho ' + d3.format('+.3f')(row.correlation));
          })
          .attr('fill', function (row) {
            return row.correlation == null ? '#c9c3ba' : colour(row.correlation);
          })
          .attr('data-tooltip', function (row) {
            if (row.correlation == null) {
              return row.domain + ' · Q' + row.quality + '\n' +
                row.phase_label.toLowerCase() + '\nweight did not vary across the swarm';
            }
            var association = row.correlation < 0 ? 'more weight ↔ lower (better) BPB' : 'more weight ↔ higher (worse) BPB';
            return row.domain + ' · Q' + row.quality + '\n' + row.phase_label.toLowerCase() +
              '\nSpearman ρ = ' + d3.format('+.3f')(row.correlation) + '\n' + association;
          })
          .on('pointerenter focus', function (_, row) {
            guides.selectAll('*').remove();
            guides.append('line')
              .attr('x1', panelX).attr('x2', panelX + panelWidth)
              .attr('y1', y(row.domain) + y.bandwidth() / 2).attr('y2', y(row.domain) + y.bandwidth() / 2);
            guides.append('line')
              .attr('x1', panelX + x(row.quality) + x.bandwidth() / 2).attr('x2', panelX + x(row.quality) + x.bandwidth() / 2)
              .attr('y1', margin.top).attr('y2', height - margin.bottom);
          })
          .on('pointerleave blur', function () { guides.selectAll('*').remove(); });
        var cellNodes = cells.nodes();
        if (cellNodes.length) cellNodes[0].setAttribute('tabindex', '0');
        cells.on('keydown', function (event) {
          var current = cellNodes.indexOf(this);
          var target = current;
          if (event.key === 'ArrowRight' || event.key === 'ArrowDown') target = Math.min(cellNodes.length - 1, current + 1);
          if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') target = Math.max(0, current - 1);
          if (target !== current) {
            event.preventDefault();
            cellNodes[current].setAttribute('tabindex', '-1');
            cellNodes[target].setAttribute('tabindex', '0');
            cellNodes[target].focus();
          }
        });
      });

      root.selectAll('.d3-loop-tooltip').remove();
      activateFigureTooltips(el);
    }

    select.on('change', function () { draw(this.value); });
    draw(payload.subsets[0].id);
  }

  function renderCatalogHeavyTail(el, payload) {
    var root = d3.select(el).attr('class', 'd3-figure d3-catalog-heavy-tail');
    root.selectAll('*').remove();
    var rows = payload.rows;
    var mobile = el.clientWidth < 620;
    root.classed('is-mobile', mobile);
    var width = Math.max(mobile ? 340 : 620, el.clientWidth || 0);
    var height = mobile ? 500 : 460;
    var margin = mobile
      ? { top: 48, right: 50, bottom: 62, left: 58 }
      : { top: 50, right: 64, bottom: 58, left: 66 };
    var chartFloor = 50000;
    var plotBottom = height - margin.bottom;
    var plotRight = width - margin.right;
    var x = d3.scaleBand()
      .domain(rows.map(function (row) { return row.rank; }))
      .range([margin.left, plotRight])
      .paddingInner(0);
    var y = d3.scaleLog()
      .domain([chartFloor, 1e13])
      .range([plotBottom, margin.top]);
    var shareY = d3.scaleLinear()
      .domain([0, 1.04])
      .range([plotBottom, margin.top]);
    var rank80 = rows.find(function (row) { return row.cumulative_share >= 0.8; });
    var svg = root.append('svg')
      .attr('viewBox', '0 0 ' + width + ' ' + height)
      .attr('role', 'img')
      .attr('aria-label', 'Raw catalog datasets span nearly eight orders of magnitude; bars show all ' + rows.length + ' logical datasets ranked by token count.');
    svg.append('title').text('Raw catalog datasets ranked by token count');

    var tokenTicks = [1e5, 1e7, 1e9, 1e11, 1e13];
    var tokenLabels = ['100k', '10M', '1B', '100B', '10T'];
    var leftAxis = d3.axisLeft(y)
      .tickValues(tokenTicks)
      .tickFormat(function (_, index) { return tokenLabels[index]; })
      .tickSize(-(plotRight - margin.left));
    svg.append('g')
      .attr('class', 'd3-catalog-axis d3-catalog-grid')
      .attr('transform', 'translate(' + margin.left + ',0)')
      .call(leftAxis);
    svg.append('g')
      .attr('class', 'd3-catalog-axis')
      .attr('transform', 'translate(' + plotRight + ',0)')
      .call(d3.axisRight(shareY)
        .tickValues([0, 0.5, 0.8, 1])
        .tickFormat(d3.format('.0%')));
    svg.append('g')
      .attr('class', 'd3-catalog-axis')
      .attr('transform', 'translate(0,' + plotBottom + ')')
      .call(d3.axisBottom(x).tickValues([1, 50, 100, 152].filter(function (rank) {
        return x.domain().includes(rank);
      })).tickSizeOuter(0));

    var count = new Intl.NumberFormat('en');
    var percent = new Intl.NumberFormat('en', { style: 'percent', maximumFractionDigits: 2 });
    svg.selectAll('.d3-catalog-bar')
      .data(rows)
      .enter()
      .append('rect')
      .attr('class', 'd3-catalog-bar')
      .attr('x', function (row) { return x(row.rank); })
      .attr('y', function (row) { return y(row.token_count); })
      .attr('width', x.bandwidth())
      .attr('height', function (row) { return y(chartFloor) - y(row.token_count); })
      .attr('fill', DATA_LOOP_COLORS.blue)
      .attr('fill-opacity', 0.86)
      .attr('tabindex', '0')
      .attr('role', 'link')
      .attr('aria-label', function (row) { return 'Open source data for ' + row.source_name; })
      .on('click', function (event, row) {
        window.open(row.source_url, '_blank', 'noopener,noreferrer');
      })
      .on('keydown', function (event, row) {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        window.open(row.source_url, '_blank', 'noopener,noreferrer');
      })
      .each(function (row) {
        addTitle(d3.select(this), [
          row.source_name + ' · ' + row.domain,
          compact(row.token_count) + ' tokens · ' + percent.format(row.share) + ' of catalog'
        ].join('\n'));
      });

    var centerX = function (row) { return x(row.rank) + x.bandwidth() / 2; };
    svg.append('path')
      .datum(rows)
      .attr('class', 'd3-catalog-share-line')
      .attr('d', d3.line()
        .x(centerX)
        .y(function (row) { return shareY(row.cumulative_share); })
        .curve(d3.curveMonotoneX));
    svg.selectAll('.d3-catalog-share-point')
      .data([rank80])
      .enter()
      .append('circle')
      .attr('class', 'd3-catalog-share-point')
      .attr('cx', centerX)
      .attr('cy', function (row) { return shareY(row.cumulative_share); })
      .attr('r', 5);

    function callout(row, headline, dx, dy) {
      var startX = centerX(row);
      var startY = shareY(row.cumulative_share);
      var labelX = Math.min(plotRight - (mobile ? 155 : 160), startX + dx);
      var labelY = startY + dy;
      svg.append('line')
        .attr('class', 'd3-catalog-callout-line')
        .attr('x1', startX + 6)
        .attr('y1', startY)
        .attr('x2', labelX - 8)
        .attr('y2', labelY - 4);
      var label = svg.append('text')
        .attr('class', 'd3-catalog-callout')
        .attr('x', labelX)
        .attr('y', labelY);
      label.append('tspan').attr('class', 'd3-catalog-callout-head').text(headline);
      label.append('tspan').attr('x', labelX).attr('dy', '1.25em').text('of all raw tokens');
    }
    callout(rank80, rank80.rank + ' datasets supply 80%', mobile ? 100 : 126, -20);

    svgText(svg, margin.left, margin.top - 22, 'TOKENS · LOG SCALE', 'd3-catalog-axis-title is-token');
    svgText(svg, plotRight, margin.top - (mobile ? 7 : 22), 'CUMULATIVE TOKEN SHARE', 'd3-catalog-axis-title', 'end');
    svgText(svg, (margin.left + plotRight) / 2, height - 13, 'DATASETS · LARGEST TO SMALLEST', 'd3-catalog-x-title', 'middle');
    activateFigureTooltips(el);
  }

  function dedupReason(comparison) {
    var percent = d3.format('.0%');
    var decimal = d3.format('.2f');
    if (comparison.reason === 'accepted') {
      return 'Accepted · ' + percent(comparison.member_containment) + ' member containment · Jaccard ' + decimal(comparison.jaccard);
    }
    if (comparison.reason === 'member_longer') {
      return 'Rejected · selected record is longer than the candidate (' + formatCount(comparison.member_chars) + ' vs ' + formatCount(comparison.representative_chars) + ' characters)';
    }
    if (comparison.reason === 'containment_below_threshold') {
      return 'Rejected · ' + formatCount(comparison.member_unique_ngrams) + ' of ' + formatCount(comparison.member_ngrams) + ' distinct 3-grams absent; requires 0 absent';
    }
    if (comparison.reason === 'too_many_member_unique') {
      return 'Rejected · ' + formatCount(comparison.member_unique_ngrams) + ' of ' + formatCount(comparison.member_ngrams) + ' distinct 3-grams absent; requires 0 absent';
    }
    if (comparison.reason === 'saturated_token_sequence_not_contained') {
      return 'Rejected · repeated 3-grams; normalized token sequence not contained';
    }
    if (comparison.reason === 'under_tokenized_char_jaccard_below_threshold') {
      return 'Rejected · character Jaccard ' + decimal(comparison.char_jaccard) + ', required 0.90';
    }
    if (comparison.reason === 'local_token_sequence_differs') {
      return 'Rejected · a local representative requires the same normalized token sequence';
    }
    if (comparison.reason === 'local_line_count_ratio_below_threshold') {
      return 'Rejected · line-count ratio ' + decimal(comparison.local_line_count_ratio) + ', required 0.80';
    }
    return comparison.reason.replaceAll('_', ' ');
  }

  function dedupEvidenceSummary(comparison) {
    var evidence = comparison.evidence;
    if (evidence.kind === 'member_ngram_absent') {
      if (evidence.unmatched_member_tokens) {
        if (evidence.unmatched_representative_tokens) {
          return 'Largest aligned edit · ' + formatCount(evidence.unmatched_member_tokens) + ' selected-record words align with ' + formatCount(evidence.unmatched_representative_tokens) + ' different candidate words.';
        }
        return 'Largest aligned edit · ' + formatCount(evidence.unmatched_member_tokens) + ' selected-record words are absent at this point in the candidate.';
      }
      return 'One example of the ' + formatCount(comparison.member_unique_ngrams) + ' missing 3-word spans:';
    }
    if (evidence.kind === 'member_character_ngram_absent') return 'This highlighted 5-character span never appears in the candidate record.';
    if (evidence.kind === 'token_sequence_difference') return 'These are the first spans where the word sequences diverge.';
    if (evidence.kind === 'character_layout_difference') return 'The words match, but these raw characters differ.';
    return evidence.summary;
  }

  function dedupEvidenceContext(value, before) {
    var context = value || '';
    var limit = 62;
    if (context.length <= limit) return context;
    if (before) return '…' + context.slice(-(limit - 1)).replace(/^…/, '');
    return context.slice(0, limit - 1).replace(/…$/, '') + '…';
  }

  function renderDedupClusters(el, payload) {
    var root = d3.select(el).attr('class', 'd3-figure d3-dedup');
    root.selectAll('*').remove();
    var selected = 0;
    var rejectionModes = [
      {
        reason: 'containment_below_threshold',
        label: 'Missing content',
        description: 'The candidate lacks part of the selected record.'
      },
      {
        reason: 'member_longer',
        label: 'Longer record',
        description: 'The directional gate will not fold a longer record into a shorter one.'
      },
      {
        reason: 'local_token_sequence_differs',
        label: 'Sequence differs',
        description: 'A fallback candidate requires the same normalized word sequence.'
      },
      {
        reason: 'saturated_token_sequence_not_contained',
        label: 'Repeated text',
        description: 'The 3-gram set passes, but the ordered sequence is not present.'
      }
    ];
    var rejectedComparisons = payload.clusters.flatMap(function (cluster, clusterIndex) {
      return cluster.comparisons.filter(function (comparison) { return !comparison.accepted; }).map(function (comparison) {
        return { clusterIndex: clusterIndex, comparison: comparison };
      });
    });
    rejectionModes.forEach(function (mode) {
      mode.examples = rejectedComparisons.filter(function (example) { return example.comparison.reason === mode.reason; });
      if (mode.reason === 'containment_below_threshold') {
        var repairedExamples = mode.examples.filter(function (example) {
          return payload.clusters[example.clusterIndex].comparisons.some(function (comparison) {
            return comparison.member_key === example.comparison.member_key && comparison.accepted;
          });
        });
        var candidateExamples = repairedExamples.length ? repairedExamples : mode.examples;
        candidateExamples.sort(function (left, right) {
          var leftRegion = left.comparison.evidence.unmatched_member_tokens || left.comparison.member_unique_ngrams;
          var rightRegion = right.comparison.evidence.unmatched_member_tokens || right.comparison.member_unique_ngrams;
          return rightRegion - leftRegion;
        });
        mode.example = candidateExamples[0];
      }
      else {
        mode.examples.sort(function (left, right) {
          var leftMetric = mode.reason === 'member_longer'
            ? left.comparison.member_chars - left.comparison.representative_chars
            : left.comparison.jaccard;
          var rightMetric = mode.reason === 'member_longer'
            ? right.comparison.member_chars - right.comparison.representative_chars
            : right.comparison.jaccard;
          return leftMetric - rightMetric;
        });
        mode.example = mode.examples[Math.floor(mode.examples.length / 2)];
      }
    });
    var toolbar = root.append('div').attr('class', 'd3-dedup-toolbar').attr('aria-label', 'Audit cluster carousel');
    var previous = toolbar.append('button').attr('type', 'button').text('Previous');
    var status = toolbar.append('div').attr('class', 'd3-dedup-status').attr('aria-live', 'polite');
    var next = toolbar.append('button').attr('type', 'button').text('Next');
    var summary = root.append('div').attr('class', 'd3-dedup-summary');
    var graph = root.append('div').attr('class', 'd3-dedup-graph');
    var modes = root.insert('section', '.d3-dedup-toolbar').attr('class', 'd3-dedup-modes').attr('aria-labelledby', 'dedup-rejection-modes');
    appendText(modes, 'd3-dedup-modes-title', 'Four ways a candidate link breaks').attr('id', 'dedup-rejection-modes');
    appendText(modes, 'd3-dedup-modes-note', 'Counts are rejected comparisons, not documents. Choose a rule to inspect one representative case.');
    var modeButtons = modes.append('div').attr('class', 'd3-dedup-mode-list').selectAll('button')
      .data(rejectionModes.filter(function (mode) { return mode.examples.length; }))
      .enter()
      .append('button')
      .attr('type', 'button')
      .on('click', function (_, mode) {
        select(mode.example.clusterIndex, mode.example.comparison.member_key, mode.reason);
      });
    modeButtons.each(function (mode) {
      var button = d3.select(this);
      appendText(button, 'd3-dedup-mode-count', formatCount(mode.examples.length));
      appendText(button, 'd3-dedup-mode-label', mode.label);
      appendText(button, 'd3-dedup-mode-description', mode.description);
    });
    var inspector = root.append('div').attr('class', 'd3-dedup-inspector');

    function inspect(cluster, member, memberIndex) {
      inspector.selectAll('*').remove();
      var related = cluster.comparisons.filter(function (comparison) { return comparison.member_key === member.member_key; });
      var rejected = related.filter(function (comparison) { return !comparison.accepted; });
      appendText(inspector, 'd3-dedup-inspector-kicker', 'Record ' + (memberIndex + 1) + ' · ' + member.source_name);
      var decision = member.decision.replaceAll('_', ' ');
      if (member.decision === 'retained_no_match' && rejected.length) {
        decision = 'Kept after ' + rejected.length + ' rejected ' + (rejected.length === 1 ? 'comparison' : 'comparisons');
      }
      appendText(inspector, 'd3-dedup-inspector-title', decision);
      appendText(inspector, 'd3-dedup-inspector-meta', compact(member.text_tokens) + ' tokens · ' + compact(member.text_chars) + ' characters');
      if (related.length) {
        var list = inspector.append('ol').attr('class', 'd3-dedup-comparisons');
        related.forEach(function (comparison) {
          var target = cluster.members.find(function (candidate) { return candidate.member_key === comparison.representative_key; });
          var item = list.append('li').attr('class', comparison.accepted ? 'is-accepted' : 'is-rejected');
          var candidateKind = comparison.representative_kind === 'local_representative' ? 'Fallback candidate' : 'Primary candidate';
          appendText(item, 'd3-dedup-comparison-title', candidateKind);
          appendText(item, 'd3-dedup-comparison-reason', dedupReason(comparison));
          if (!comparison.accepted && comparison.evidence) {
            var evidenceKind = comparison.evidence.kind;
            var evidence = item.append('div').attr('class', 'd3-dedup-evidence is-' + evidenceKind);
            appendText(evidence, 'd3-dedup-evidence-summary', dedupEvidenceSummary(comparison));
            var snippets;
            function appendEvidenceSnippet(label, snippet) {
              if (!snippet) return;
              if (!snippets) snippets = evidence.append('div').attr('class', 'd3-dedup-evidence-snippets');
              var block = snippets.append('div').attr('class', 'd3-dedup-evidence-snippet');
              appendText(block, 'd3-dedup-evidence-label', label);
              var text = block.append('p');
              text.append('span').text(dedupEvidenceContext(snippet.before, true));
              if (snippet.highlight) {
                var highlight = snippet.highlight;
                if (!highlight.trim()) {
                  var spaces = (highlight.match(/ /g) || []).length;
                  var tabs = (highlight.match(/\t/g) || []).length;
                  var lineBreaks = (highlight.match(/\r\n|\r|\n/g) || []).length;
                  var whitespace = [];
                  if (spaces) whitespace.push(spaces + (spaces === 1 ? ' space' : ' spaces'));
                  if (tabs) whitespace.push(tabs + (tabs === 1 ? ' tab' : ' tabs'));
                  if (lineBreaks) whitespace.push(lineBreaks + (lineBreaks === 1 ? ' line break' : ' line breaks'));
                  highlight = '[' + whitespace.join(', ') + ']';
                }
                text.append('mark').text(highlight);
              }
              else text.append('span').attr('class', 'd3-dedup-no-span').text('[no corresponding span]');
              text.append('span').text(dedupEvidenceContext(snippet.after, false));
            }
            function appendEvidenceAbsence(label) {
              if (!snippets) snippets = evidence.append('div').attr('class', 'd3-dedup-evidence-snippets');
              var block = snippets.append('div').attr('class', 'd3-dedup-evidence-snippet is-absence');
              appendText(block, 'd3-dedup-evidence-label', label);
              appendText(block, 'd3-dedup-no-span', 'No matching region');
            }
            if (evidenceKind === 'member_ngram_absent') {
              var containment = evidence.append('div').attr('class', 'd3-dedup-containment');
              appendText(containment, 'd3-dedup-measure-label', formatCount(comparison.shared_ngrams) + ' shared · ' + formatCount(comparison.member_unique_ngrams) + ' absent');
              var containmentTrack = containment.append('div').attr('class', 'd3-dedup-measure-track');
              containmentTrack.append('span').attr('class', 'is-shared').style('width', (100 * comparison.member_containment) + '%');
              containmentTrack.append('span').attr('class', 'is-absent').style('width', (100 * (1 - comparison.member_containment)) + '%');
              appendEvidenceSnippet('Selected record · largest edit', comparison.evidence.member);
              if (comparison.evidence.representative) appendEvidenceSnippet('Candidate · same alignment', comparison.evidence.representative);
              else appendEvidenceAbsence('Candidate · same alignment');
            }
            else if (evidenceKind === 'length_gate') {
              var maximumChars = Math.max(comparison.evidence.member_chars, comparison.evidence.representative_chars);
              var lengths = evidence.append('div').attr('class', 'd3-dedup-lengths');
              [
                { label: 'Selected record', value: comparison.evidence.member_chars, className: 'is-selected' },
                { label: 'Candidate record', value: comparison.evidence.representative_chars, className: 'is-candidate' }
              ].forEach(function (row) {
                var lengthRow = lengths.append('div').attr('class', 'd3-dedup-length-row ' + row.className);
                appendText(lengthRow, 'd3-dedup-measure-label', row.label + ' · ' + formatCount(row.value) + ' characters');
                lengthRow.append('div').attr('class', 'd3-dedup-measure-track').append('span').style('width', (100 * row.value / maximumChars) + '%');
              });
              appendText(lengths, 'd3-dedup-length-difference', '+' + formatCount(comparison.evidence.difference_chars) + ' characters');
            }
            else if (evidenceKind === 'normalized_sequence_not_contained') {
              var checks = evidence.append('div').attr('class', 'd3-dedup-checks');
              var setCheck = checks.append('div').attr('class', 'd3-dedup-check is-passed');
              appendText(setCheck, 'd3-dedup-evidence-label', '3-gram set check');
              appendText(setCheck, 'd3-dedup-check-result', 'Pass · 100% contained');
              var sequenceCheck = checks.append('div').attr('class', 'd3-dedup-check is-rejected');
              appendText(sequenceCheck, 'd3-dedup-evidence-label', 'Ordered token search');
              appendText(sequenceCheck, 'd3-dedup-check-result', 'No contiguous match');
            }
            else {
              appendEvidenceSnippet('Selected record', comparison.evidence.member);
              if (comparison.evidence.representative) appendEvidenceSnippet('Candidate record', comparison.evidence.representative);
              else if (comparison.evidence.member) appendEvidenceAbsence('Candidate record');
            }
          }
          var technical = item.append('details').attr('class', 'd3-dedup-technical');
          technical.append('summary').text('Technical details');
          appendText(technical, 'd3-dedup-comparison-metrics', target.source_name + ' · pass ' + comparison.comparison_number + ' · ' + formatCount(comparison.shared_lsh_buckets) + ' shared LSH buckets · ' + formatCount(comparison.shared_ngrams) + ' shared 3-grams');
        });
      }
      var context = inspector.append('details').attr('class', 'd3-dedup-record-context');
      context.append('summary').text('Record context');
      appendText(context, 'd3-dedup-preview-label', 'Opening · not rejection evidence');
      appendText(context, 'd3-dedup-preview', member.text_preview || 'No preview packaged');
      appendText(context, 'd3-dedup-comparison-metrics', 'Record ID · ' + member.id.slice(0, 18));
    }

    function renderGraph(cluster) {
      graph.selectAll('*').remove();
      var width = el.clientWidth < 620 ? 620 : 1000;
      var retained = cluster.members.filter(function (member) {
        return member.decision === 'retained_primary' || member.decision === 'retained_no_match';
      });
      var children = cluster.members.filter(function (member) { return member.decision === 'verified_duplicate'; });
      var delegated = cluster.members.filter(function (member) { return member.decision === 'delegated_global_exact'; });
      var height = delegated.length ? 390 : 335;
      var svg = graph.append('svg')
        .attr('viewBox', '0 0 ' + width + ' ' + height)
        .attr('role', 'img')
        .attr('aria-label', 'Verification decisions for one complete MinHash connected component');
      svg.append('rect').attr('class', 'd3-dedup-enclosure').attr('x', 12).attr('y', 34).attr('width', width - 24).attr('height', height - 48);
      svgText(svg, 28, 25, 'ONE MINHASH CONNECTED COMPONENT', 'd3-dedup-enclosure-label');
      var positions = {};
      retained.forEach(function (member, retainedIndex) {
        positions[member.member_key] = {
          x: (retainedIndex + 1) * width / (retained.length + 1),
          y: 112
        };
      });
      children.forEach(function (member, childIndex) {
        positions[member.member_key] = {
          x: (childIndex + 1) * width / (children.length + 1),
          y: 238
        };
      });
      delegated.forEach(function (member, delegatedIndex) {
        positions[member.member_key] = {
          x: (delegatedIndex + 1) * width / (delegated.length + 1),
          y: 330
        };
      });
      cluster.comparisons.forEach(function (comparison) {
        var start = positions[comparison.member_key];
        var end = positions[comparison.representative_key];
        if (!start || !end) return;
        var middleY = start.y === end.y ? start.y - 52 : (start.y + end.y) / 2;
        var path = svg.append('path')
          .attr('class', 'd3-dedup-edge ' + (comparison.accepted ? 'is-accepted' : 'is-rejected'))
          .attr('d', 'M' + start.x + ',' + start.y + ' C' + start.x + ',' + middleY + ' ' + end.x + ',' + middleY + ' ' + end.x + ',' + end.y)
          .attr('data-member', comparison.member_key)
          .attr('data-representative', comparison.representative_key)
          .attr('tabindex', '0')
          .attr('role', 'button')
          .attr('aria-label', dedupReason(comparison))
          .on('pointerenter focus', function () { d3.select(this).classed('is-hovered', true); })
          .on('pointerleave blur', function () { d3.select(this).classed('is-hovered', false); })
          .on('click', function () {
            modeButtons.attr('aria-pressed', 'false');
            var memberIndex = cluster.members.findIndex(function (member) { return member.member_key === comparison.member_key; });
            inspect(cluster, cluster.members[memberIndex], memberIndex);
          })
          .on('keydown', function (event) {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            event.preventDefault();
            modeButtons.attr('aria-pressed', 'false');
            var memberIndex = cluster.members.findIndex(function (member) { return member.member_key === comparison.member_key; });
            inspect(cluster, cluster.members[memberIndex], memberIndex);
          });
        addTitle(path, dedupReason(comparison) + '\n' + formatCount(comparison.shared_lsh_buckets) + ' shared LSH buckets · comparison ' + comparison.comparison_number);
      });
      if (delegated.length) svgText(svg, 28, 304, 'EXACT-ID PASS', 'd3-dedup-lane-label');
      cluster.members.forEach(function (member, memberIndex) {
        var point = positions[member.member_key];
        if (!point) return;
        var group = svg.append('g')
          .attr('class', 'd3-dedup-member is-' + member.decision)
          .attr('transform', 'translate(' + point.x + ',' + point.y + ')')
          .attr('tabindex', '0')
          .attr('role', 'button')
          .attr('aria-label', 'Record ' + (memberIndex + 1) + ', ' + member.source_name + ', ' + member.decision.replaceAll('_', ' '))
          .on('click', function () {
            modeButtons.attr('aria-pressed', 'false');
            inspect(cluster, member, memberIndex);
          })
          .on('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              modeButtons.attr('aria-pressed', 'false');
              inspect(cluster, member, memberIndex);
            }
          })
          .on('pointerenter focus', function () {
            svg.selectAll('.d3-dedup-edge').classed('is-muted', function () {
              return this.getAttribute('data-member') !== member.member_key && this.getAttribute('data-representative') !== member.member_key;
            });
          })
          .on('pointerleave blur', function () { svg.selectAll('.d3-dedup-edge').classed('is-muted', false); });
        group.append('circle').attr('r', 22);
        group.append('text').attr('class', 'd3-dedup-member-number').attr('text-anchor', 'middle').attr('dy', '.35em').text(memberIndex + 1);
        var sourceLimit = cluster.candidate_members > 6 ? 9 : cluster.candidate_members > 3 ? 15 : 22;
        var sourceLabel = member.source_name.length > sourceLimit ? member.source_name.slice(0, sourceLimit - 1) + '…' : member.source_name;
        group.append('text').attr('class', 'd3-dedup-member-source').attr('text-anchor', 'middle').attr('y', 39).text(sourceLabel);
        addTitle(group, member.source_name + '\n' + member.decision.replaceAll('_', ' '));
        var badges = [];
        if (member.is_cluster_canonical) badges.push('C');
        if (member.member_key === cluster.primary_member_key) badges.push('P');
        var activeLocal = cluster.comparisons.some(function (comparison) {
          return comparison.representative_key === member.member_key && comparison.representative_kind === 'local_representative';
        });
        if (activeLocal) badges.push('L');
        badges.forEach(function (badge, badgeIndex) {
          group.append('circle').attr('class', 'd3-dedup-badge').attr('cx', 18 + badgeIndex * 15).attr('cy', -18).attr('r', 8);
          group.append('text').attr('class', 'd3-dedup-badge-label').attr('x', 18 + badgeIndex * 15).attr('y', -15).attr('text-anchor', 'middle').text(badge);
        });
      });
      d3.select(el).selectAll('.d3-loop-tooltip').remove();
      activateFigureTooltips(el);
      inspect(cluster, cluster.members.find(function (member) { return member.member_key === cluster.primary_member_key; }), cluster.members.findIndex(function (member) { return member.member_key === cluster.primary_member_key; }));
    }

    function select(clusterIndex, memberKey, modeReason) {
      selected = clusterIndex;
      var cluster = payload.clusters[selected];
      modeButtons.attr('aria-pressed', function (mode) { return mode.reason === modeReason ? 'true' : 'false'; });
      status.text('Cluster ' + (selected + 1) + ' of ' + payload.clusters.length + ' · ' + cluster.candidate_members + ' candidates · ' + cluster.retained_representatives + ' active representatives');
      summary.html('')
        .append('span').text(cluster.source_count + ' sources');
      summary.append('span').text(cluster.verified_duplicates + ' verified duplicates');
      summary.append('span').text((cluster.candidate_members - cluster.verified_duplicates) + ' kept records');
      previous.attr('disabled', selected === 0 ? true : null);
      next.attr('disabled', selected === payload.clusters.length - 1 ? true : null);
      renderGraph(cluster);
      if (memberKey) {
        var memberIndex = cluster.members.findIndex(function (member) { return member.member_key === memberKey; });
        if (memberIndex >= 0) inspect(cluster, cluster.members[memberIndex], memberIndex);
      }
    }
    previous.on('click', function () { select(Math.max(0, selected - 1)); });
    next.on('click', function () { select(Math.min(payload.clusters.length - 1, selected + 1)); });
    select(0);
  }

  function renderContaminationMatrix(el, payload) {
    var root = d3.select(el).attr('class', 'd3-figure d3-contamination-matrix');
    root.selectAll('*').remove();
    var mobile = el.clientWidth < 620;
    var availableWidth = Math.max(280, el.clientWidth - (mobile ? 18 : 28));
    var sourceLimit = mobile ? 10 : 18;
    var sources = payload.sources.filter(function (source) { return source.contaminated_documents > 0; })
      .sort(function (left, right) { return right.contaminated_documents - left.contaminated_documents || d3.ascending(left.source, right.source); });
    var cellsBySource = d3.group(payload.cells, function (cell) { return cell.source; });
    var visibleSources = sources.slice(0, sourceLimit);
    var hiddenSources = sources.slice(sourceLimit);
    if (hiddenSources.length) {
      visibleSources.push({
        source: 'Other ' + hiddenSources.length + ' sources',
        contaminated_documents: d3.sum(hiddenSources, function (source) { return source.contaminated_documents; }),
        linked_documents: d3.sum(hiddenSources, function (source) { return source.linked_documents; }),
        unlinked_documents: d3.sum(hiddenSources, function (source) { return source.unlinked_documents; }),
        aggregate_sources: hiddenSources.map(function (source) { return source.source; })
      });
    }
    var benchmarkTotals = d3.rollup(payload.cells, function (rows) { return d3.sum(rows, function (row) { return row.linked_documents; }); }, function (row) { return row.benchmark; });
    var benchmarkMeta = new Map(payload.benchmarks.map(function (row) { return [row.benchmark, row]; }));
    var allBenchmarks = payload.benchmarks.map(function (row) { return row.benchmark; }).sort(function (left, right) {
      var leftMeta = benchmarkMeta.get(left);
      var rightMeta = benchmarkMeta.get(right);
      if (leftMeta.suite === 'AAII' && rightMeta.suite !== 'AAII') return -1;
      if (leftMeta.suite !== 'AAII' && rightMeta.suite === 'AAII') return 1;
      if (leftMeta.suite === 'AAII') return leftMeta.suite_order - rightMeta.suite_order;
      return (benchmarkTotals.get(right) || 0) - (benchmarkTotals.get(left) || 0) || d3.ascending(left, right);
    });
    var rowHeight = mobile ? 24 : 18;
    var columnWidth = mobile ? 20 : 18;
    var labelWidth = mobile ? 180 : 205;
    var barWidth = mobile ? 36 : 125;
    var barGap = mobile ? 12 : 22;
    var rightGutter = mobile ? 40 : 48;
    var readableNames = {
      'nemotron_sft/sft_general': ['Nemotron SFT · General', 'Nemotron Pretraining SFT v1 · General'],
      'nemotron_cc_v2/high_quality': ['Nemotron-CC 2 · High quality', 'Nemotron-CC v2 · High-quality'],
      'nemotron_cc_v2/medium_quality': ['Nemotron-CC 2 · Medium quality', 'Nemotron-CC v2 · Medium-quality'],
      'nemotron_cc_v2_1/medium_high_quality_synthetic': ['Nemotron-CC 2.1 · MHQ synth', 'Nemotron-CC v2.1 · Medium-high-quality synthetic'],
      'eai-taxonomy-code-w-dclm': ['EssentialAI Code + DCLM', 'EssentialAI Taxonomy Code with DCLM'],
      'nemotron_sft/sft_math': ['Nemotron SFT · Math', 'Nemotron Pretraining SFT v1 · Math'],
      'nemotron_cc_v2/medium_high_quality': ['Nemotron-CC 2 · Medium-high', 'Nemotron-CC v2 · Medium-high-quality'],
      'nemotron_code_v2/synthetic_question_answering': ['Nemotron Code 2 · Synthetic QA', 'Nemotron Pretraining Code v2 · Synthetic question answering'],
      'nemotron_cc_v2/diverse_qa': ['Nemotron-CC 2 · Diverse QA', 'Nemotron-CC v2 · Diverse QA'],
      'finepdfs': ['FinePDFs · English', 'FinePDFs · English'],
      'nemotron_cc_math_v1/3': ['Nemotron-CC Math · Level 3', 'Nemotron-CC-Math v1 · Level 3'],
      'dolma4pdfs': ['Dolma 3.5 · PDFs', 'Dolma 3.5 pool · Dolma4PDFs'],
      'stack-v3': ['The Stack v3', 'The Stack v3'],
      'nemotron_specialized_v1_2/multiple_choice': ['Nemotron Specialized · MCQ', 'Nemotron Pretraining Specialized v1.2 · Multiple choice'],
      'nemotron_code_v2/content': ['Nemotron Code v2', 'Nemotron Pretraining Code v2 · Source code'],
      'cp/data_provenance': ['Common Pile · Data Provenance', 'Common Pile · Data Provenance Initiative'],
      'nemotron_code_v2/synthetic_code_review': ['Nemotron Code 2 · Code review', 'Nemotron Pretraining Code v2 · Synthetic code review'],
      'nemotron_cc_math_v1/4plus_mind': ['Nemotron-CC Math · 4+ MIND', 'Nemotron-CC-Math v1 · 4+ MIND'],
      'finepdfs/spa_Latn': ['FinePDFs · Spanish', 'FinePDFs · Spanish (Latin script)'],
      'synthetic-1': ['PrimeIntellect SYNTHETIC-1', 'PrimeIntellect SYNTHETIC-1'],
      'nemotron_cc_v2/high_quality_synthetic': ['Nemotron-CC 2 · HQ synthetic', 'Nemotron-CC v2 · High-quality synthetic'],
      'nemotron_code_v1/content': ['Nemotron Code v1', 'Nemotron Pretraining Code v1 · Source code'],
      'nemotron_code_v2/synthetic_rewriting': ['Nemotron Code 2 · Rewriting', 'Nemotron Pretraining Code v2 · Synthetic rewriting'],
      'nemotron_cc_v2_1/high_quality_synthetic': ['Nemotron-CC 2.1 · HQ synthetic', 'Nemotron-CC v2.1 · High-quality synthetic']
    };
    function readableName(name, compactLabel) {
      if (name.indexOf('Other ') === 0) return name;
      var labels = readableNames[name];
      return labels ? labels[compactLabel ? 0 : 1] : name.replace(/[_/]+/g, ' ');
    }
    function readableTooltip(name) {
      return readableName(name, false);
    }
    var pageSize = Math.max(5, Math.min(mobile ? 8 : 30, Math.floor((availableWidth - labelWidth - barWidth - barGap - rightGutter) / columnWidth)));
    var pageCount = Math.ceil(allBenchmarks.length / pageSize);
    var page = 0;
    var toolbar = root.append('div').attr('class', 'd3-contamination-toolbar');
    var previous = toolbar.append('button').attr('type', 'button').text('← Previous');
    var status = toolbar.append('div').attr('class', 'd3-contamination-status').attr('aria-live', 'polite');
    var next = toolbar.append('button').attr('type', 'button').text('Next →');
    if (mobile) root.append('div').attr('class', 'd3-mobile-pan-hint').text('Swipe horizontally to explore the full matrix →');
    var scroll = root.append('div').attr('class', 'd3-contamination-scroll');
    scroll.attr('tabindex', 0).attr('role', 'region').attr('aria-label', 'Scrollable data matrix');
    var matrixMaxCell = 1;
    visibleSources.forEach(function (source) {
      var sourceCells = source.aggregate_sources
        ? source.aggregate_sources.flatMap(function (name) { return cellsBySource.get(name) || []; })
        : (cellsBySource.get(source.source) || []);
      var totals = d3.rollup(sourceCells, function (rows) {
        return d3.sum(rows, function (row) { return row.linked_documents; });
      }, function (row) { return row.benchmark; });
      totals.forEach(function (count) { matrixMaxCell = Math.max(matrixMaxCell, count); });
    });

    function draw() {
      scroll.selectAll('*').remove();
      var startBenchmark = page * pageSize;
      var benchmarks = allBenchmarks.slice(startBenchmark, startBenchmark + pageSize);
      status.text('Benchmarks ' + (startBenchmark + 1) + '–' + (startBenchmark + benchmarks.length) + ' of ' + allBenchmarks.length + ' · AAII first');
      previous.attr('disabled', page === 0 ? true : null);
      next.attr('disabled', page === pageCount - 1 ? true : null);
    var displayCells = [];
    visibleSources.forEach(function (source) {
      var sourceCells = source.aggregate_sources
        ? source.aggregate_sources.flatMap(function (name) { return cellsBySource.get(name) || []; })
        : (cellsBySource.get(source.source) || []);
      var totals = d3.rollup(sourceCells, function (rows) {
        var linkedItems = rows
          .map(function (row) { return row.linked_evaluation_items; })
          .filter(function (count) { return count != null; });
        return {
          linked_documents: d3.sum(rows, function (row) { return row.linked_documents; }),
          linked_evaluation_items: linkedItems.length ? d3.sum(linkedItems) : null
        };
      }, function (row) { return row.benchmark; });
      totals.forEach(function (total, benchmark) {
        if (benchmarks.includes(benchmark)) displayCells.push({
          source: source.source,
          benchmark: benchmark,
          linked_documents: total.linked_documents,
          linked_evaluation_items: total.linked_evaluation_items
        });
      });
    });
    var top = 140;
    var matrixWidth = benchmarks.length * columnWidth;
    var width = labelWidth + matrixWidth + barGap + barWidth + rightGutter;
    var height = top + visibleSources.length * rowHeight + (mobile ? 72 : 55);
    var svg = scroll.append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', '0 0 ' + width + ' ' + height)
      .attr('role', 'img')
      .attr('aria-label', 'Source by benchmark matrix of distinct linked documents with exact source contamination marginals');
    var x = d3.scaleBand().domain(benchmarks).range([labelWidth, labelWidth + matrixWidth]);
    var y = d3.scaleBand().domain(visibleSources.map(function (source) { return source.source; })).range([top, top + visibleSources.length * rowHeight]);
    var size = d3.scaleSqrt().domain([1, matrixMaxCell]).range([2.5, Math.min(14, columnWidth - 3)]).clamp(true);
    var maxSource = d3.max(visibleSources, function (source) { return source.contaminated_documents; }) || 1;
    var bar = d3.scaleLinear().domain([0, maxSource]).range([0, barWidth]);
    var barX = labelWidth + matrixWidth + barGap;
    function cellTooltip(cell) {
      var benchmark = payload.benchmarks.find(function (candidate) { return candidate.benchmark === cell.benchmark; });
      var coverage = benchmark && benchmark.evaluation_item_count && cell.linked_evaluation_items != null
        ? d3.format('.1%')(cell.linked_evaluation_items / benchmark.evaluation_item_count) + ' of benchmark · ' + formatCount(cell.linked_evaluation_items) + ' of ' + formatCount(benchmark.evaluation_item_count) + ' items\n'
        : '';
      return readableName(cell.source, false) + ' → ' + cell.benchmark + '\n' + coverage + formatCount(cell.linked_documents) + ' linked documents';
    }
    svg.selectAll('.d3-contamination-family')
      .data(benchmarks)
      .enter()
      .append('text')
      .attr('class', 'd3-contamination-family')
      .attr('transform', function (benchmark) { return 'translate(' + (x(benchmark) + x.bandwidth() / 2) + ',' + (top - 8) + ') rotate(-58)'; })
      .attr('text-anchor', 'start')
      .attr('data-tooltip', function (benchmark) {
        var metadata = benchmarkMeta.get(benchmark);
        return benchmark + '\n' + formatCount(metadata.evaluation_item_count) + ' evaluation items';
      })
      .text(function (benchmark) { return benchmark; });
    svg.selectAll('.d3-contamination-row-label')
      .data(visibleSources)
      .enter()
      .append('text')
      .attr('class', 'd3-contamination-row-label')
      .attr('x', labelWidth - 10)
      .attr('y', function (source) { return y(source.source) + y.bandwidth() / 2; })
      .attr('text-anchor', 'end')
      .attr('dy', '.35em')
      .attr('data-tooltip', function (source) { return readableTooltip(source.source); })
      .text(function (source) {
        return readableName(source.source, true);
      });
    var guides = svg.append('g').attr('class', 'd3-contamination-guides');
    var cellGroups = svg.selectAll('.d3-contamination-cell')
      .data(displayCells)
      .enter()
      .append('g')
      .attr('class', 'd3-contamination-cell')
      .attr('tabindex', '-1')
      .attr('role', 'img')
      .attr('aria-label', function (cell) { return readableName(cell.source, false) + ', ' + cell.benchmark + ', ' + formatCount(cell.linked_documents) + ' linked documents'; })
      .attr('data-tooltip', cellTooltip)
      .attr('transform', function (cell) { return 'translate(' + (x(cell.benchmark) + x.bandwidth() / 2) + ',' + (y(cell.source) + y.bandwidth() / 2) + ')'; })
      .on('pointerenter focus', function (_, cell) {
        guides.selectAll('*').remove();
        guides.append('line').attr('class', 'd3-contamination-guide').attr('x1', labelWidth).attr('x2', labelWidth + matrixWidth).attr('y1', y(cell.source) + y.bandwidth() / 2).attr('y2', y(cell.source) + y.bandwidth() / 2);
        guides.append('line').attr('class', 'd3-contamination-guide').attr('x1', x(cell.benchmark) + x.bandwidth() / 2).attr('x2', x(cell.benchmark) + x.bandwidth() / 2).attr('y1', top).attr('y2', top + visibleSources.length * rowHeight);
      })
      .on('pointerleave blur', function () { guides.selectAll('*').remove(); });
    cellGroups.append('rect')
      .attr('class', 'd3-contamination-hit')
      .attr('x', -columnWidth / 2).attr('y', -rowHeight / 2)
      .attr('width', columnWidth).attr('height', rowHeight);
    cellGroups.append('rect')
      .attr('class', 'd3-contamination-mark')
      .attr('x', function (cell) { return -size(cell.linked_documents) / 2; })
      .attr('y', function (cell) { return -size(cell.linked_documents) / 2; })
      .attr('width', function (cell) { return size(cell.linked_documents); })
      .attr('height', function (cell) { return size(cell.linked_documents); })
      .attr('data-tooltip', cellTooltip);
    var bars = svg.selectAll('.d3-contamination-bar')
      .data(visibleSources)
      .enter()
      .append('g')
      .attr('class', 'd3-contamination-bar')
      .attr('transform', function (source) { return 'translate(' + barX + ',' + (y(source.source) + y.bandwidth() / 2 - 5) + ')'; });
    bars.append('rect').attr('class', 'd3-contamination-bar-total').attr('width', function (source) { return bar(source.contaminated_documents); }).attr('height', 10)
      .attr('data-tooltip', function (source) {
        return readableName(source.source, false) + '\n' + formatCount(source.contaminated_documents) + ' documents removed';
      });
    svgText(svg, barX, top - 12, mobile ? 'REMOVED' : 'REMOVED DOCUMENTS', 'd3-contamination-axis-title');
    svg.selectAll('.d3-contamination-bar-value')
      .data(visibleSources)
      .enter()
      .append('text')
      .attr('class', 'd3-contamination-bar-value')
      .attr('x', barX + barWidth + 8)
      .attr('y', function (source) { return y(source.source) + y.bandwidth() / 2; })
      .attr('dy', '.35em')
      .text(function (source) { return compact(source.contaminated_documents); });
    var legendValues = [Math.max(1, Math.round(matrixMaxCell / 10)), matrixMaxCell];
    var legend = svg.append('g').attr('class', 'd3-contamination-legend').attr('transform', 'translate(0,' + (height - (mobile ? 42 : 26)) + ')');
    svgText(legend, 0, 0, 'DISTINCT LINKED DOCUMENTS', 'd3-contamination-axis-title');
    var legendStart = mobile ? 12 : labelWidth + 45;
    var legendStep = (width - legendStart - 70) / 2;
    legendValues.forEach(function (value, legendIndex) {
      var offset = legendStart + legendIndex * legendStep;
      var legendY = mobile ? 22 : 0;
      legend.append('rect').attr('class', 'd3-contamination-mark').attr('x', offset - size(value) / 2).attr('y', legendY - size(value) / 2 - 4).attr('width', size(value)).attr('height', size(value));
      svgText(legend, offset + size(value) / 2 + 5, legendY, compact(value), 'd3-contamination-legend-label');
    });
    var positiveCells = cellGroups.nodes();
    if (positiveCells.length) positiveCells[0].setAttribute('tabindex', '0');
    cellGroups.on('keydown', function (event) {
      var current = positiveCells.indexOf(this);
      var target = current;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') target = Math.min(positiveCells.length - 1, current + 1);
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') target = Math.max(0, current - 1);
      if (target !== current) {
        event.preventDefault();
        positiveCells[current].setAttribute('tabindex', '-1');
        positiveCells[target].setAttribute('tabindex', '0');
        positiveCells[target].focus();
      }
    });
    activateFigureTooltips(el);
    }

    previous.on('click', function () { page = Math.max(0, page - 1); draw(); });
    next.on('click', function () { page = Math.min(pageCount - 1, page + 1); draw(); });
    draw();
  }

  function renderDedupSourceOverlap(el, payload) {
    var root = d3.select(el).attr('class', 'd3-figure d3-dedup-overlap');
    root.selectAll('*').remove();
    var percent = d3.format('.1%');
    var mobile = el.clientWidth < 620;
    var availableWidth = Math.max(280, el.clientWidth - (mobile ? 18 : 28));
    var labelWidth = mobile ? 160 : 185;
    var barWidth = mobile ? 32 : 90;
    var barGap = mobile ? 10 : 14;
    var rightGutter = mobile ? 48 : 52;
    var cellSize = mobile ? 18 : 17;
    var readableNames = {
      'nemotron_cc_v2_1/medium_high_quality_synthetic': ['Nemotron-CC 2.1 · MHQ synthetic', 'Nemotron-CC v2.1 · Medium-high-quality synthetic'],
      'nemotron_cc_v2/medium_high_quality': ['Nemotron-CC 2 · Medium-high', 'Nemotron-CC v2 · Medium-high-quality'],
      'nemotron_cc_v2/high_quality': ['Nemotron-CC 2 · High quality', 'Nemotron-CC v2 · High-quality'],
      'nemotron_cc_v2/diverse_qa': ['Nemotron-CC 2 · Diverse QA', 'Nemotron-CC v2 · Diverse QA'],
      'nemotron_cc_v2/medium_quality': ['Nemotron-CC 2 · Medium quality', 'Nemotron-CC v2 · Medium-quality'],
      'nemotron_cc_v2_1/high_quality_translated_synthetic': ['Nemotron-CC 2.1 · Trans. synth', 'Nemotron-CC v2.1 · High-quality translated-to-English synthetic'],
      'nemotron_cc_v2_1/high_quality_translated': ['Nemotron-CC 2.1 · Translated', 'Nemotron-CC v2.1 · High-quality translated to English'],
      'hplt_v3': ['HPLT v3', 'HPLT v3'],
      'nemotron_pretraining_sft_v1/sft_code': ['Nemotron SFT v1 · Code', 'Nemotron Pretraining SFT v1 · Code'],
      'eai-taxonomy-code-w-dclm': ['EssentialAI Code + DCLM', 'EssentialAI Taxonomy Code with DCLM'],
      'stack-v3': ['The Stack v3', 'The Stack v3'],
      'nemotron_code_v1_content': ['Nemotron Code v1', 'Nemotron Pretraining Code v1'],
      'nemotron_cc_v2_1/high_quality': ['Nemotron-CC 2.1 · High quality', 'Nemotron-CC v2.1 · High-quality'],
      'nemotron_cc_v2_1/high_quality_synthetic': ['Nemotron-CC 2.1 · HQ synthetic', 'Nemotron-CC v2.1 · High-quality synthetic'],
      'nemotron_cc_v2_1/medium_high_quality': ['Nemotron-CC 2.1 · Medium-high', 'Nemotron-CC v2.1 · Medium-high-quality'],
      'nemotron_code_v2_content': ['Nemotron Code v2', 'Nemotron Pretraining Code v2'],
      'nemotron_cc_v2_1/medium_quality': ['Nemotron-CC 2.1 · Medium', 'Nemotron-CC v2.1 · Medium-quality'],
      'common_corpus_english_filtered': ['Common Corpus · English', 'Common Corpus · English filtered'],
      'cp/arxiv_abstracts': ['Common Pile · arXiv abstracts', 'Common Pile · arXiv abstracts'],
      'dolma4pdfs': ['Dolma 3.5 · PDFs', 'Dolma 3.5 pool · Dolma4PDFs'],
      'common-crawl-focus-2026-22': ['Common Crawl · Science focus', 'Common Crawl 2026-22 · Science focus crawl']
    };
    var sourceLimit = Math.max(4, Math.min(mobile ? 8 : 18, Math.floor((availableWidth - labelWidth - barWidth - barGap - rightGutter) / cellSize) - 1));
    var sourceStats = new Map(payload.sources.map(function (source) { return [source.source, source]; }));
    var ordered = payload.sources
      .filter(function (source) { return source.duplicate_documents > 0; })
      .sort(function (left, right) {
        return right.duplicate_documents - left.duplicate_documents || d3.ascending(left.source, right.source);
      });
    var visible = ordered.slice(0, sourceLimit).map(function (source) { return source.source; });
    var visibleSet = new Set(visible);
    var hidden = new Set(payload.sources.filter(function (source) {
      return !visibleSet.has(source.source);
    }).map(function (source) { return source.source; }));
    var names = hidden.size ? visible.concat(['Other sources']) : visible;
    function displayName(name) { return hidden.has(name) ? 'Other sources' : name; }
    function readableName(name, compactLabel) {
      if (name === 'Other sources') return name;
      var labels = readableNames[name];
      return labels ? labels[compactLabel ? 0 : 1] : sourceLabel(name, 1000);
    }
    function readableTooltip(name) {
      return readableName(name, false);
    }
    function sourceLabel(name, limit) {
      var label = name
        .replace(/^nemotron_cc_v2_1\//, 'CC v2.1 / ')
        .replace(/^nemotron_cc_v2\//, 'CC v2 / ')
        .replace(/^nemotron_pretraining_sft_v1\//, 'Nemotron SFT / ')
        .replace(/^nemotron_code_v([0-9]+)_content$/, 'Nemotron code v$1')
        .replace(/^common_corpus_english_filtered$/, 'Common Corpus')
        .replace(/^eai-taxonomy-code-w-dclm$/, 'EAI taxonomy code')
        .replace(/medium_high_quality/g, 'medium–high')
        .replace(/high_quality/g, 'high')
        .replace(/medium_quality/g, 'medium')
        .replace(/diverse_qa/g, 'diverse QA')
        .replace(/_translated/g, ' translated')
        .replace(/_synthetic/g, ' synthetic')
        .replace(/_/g, ' ');
      if (label.length <= limit) return label;
      var left = Math.ceil((limit - 1) * 0.58);
      return label.slice(0, left) + '…' + label.slice(-(limit - 1 - left));
    }
    var aggregated = d3.rollup(
      payload.cells.filter(function (cell) { return cell.source !== cell.representative; }),
      function (rows) { return d3.sum(rows, function (row) { return row.duplicate_documents; }); },
      function (cell) { return displayName(cell.source); },
      function (cell) { return displayName(cell.representative); }
    );
    var cells = [];
    aggregated.forEach(function (columns, source) {
      columns.forEach(function (count, representative) {
        if (names.includes(source) && names.includes(representative)) {
          cells.push({ source: source, representative: representative, duplicate_documents: count });
        }
      });
    });
    function combinedStat(name, field) {
      if (name !== 'Other sources') return sourceStats.get(name)[field];
      return d3.sum(Array.from(hidden), function (source) { return sourceStats.get(source)[field]; });
    }

    var top = 180;
    var matrixSize = names.length * cellSize;
    var barX = labelWidth + matrixSize + barGap;
    var width = barX + barWidth + rightGutter;
    var height = top + matrixSize + (mobile ? 72 : 55);
    if (mobile) root.append('div').attr('class', 'd3-mobile-pan-hint').text('Swipe horizontally to explore the full matrix →');
    var scroll = root.append('div').attr('class', 'd3-dedup-overlap-scroll');
    scroll.attr('tabindex', 0).attr('role', 'region').attr('aria-label', 'Scrollable data matrix');
    var svg = scroll.append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', '0 0 ' + width + ' ' + height)
      .attr('role', 'img')
      .attr('aria-label', 'Directed source-to-source matrix of verified duplicate documents');
    var x = d3.scaleBand().domain(names).range([labelWidth, labelWidth + matrixSize]);
    var y = d3.scaleBand().domain(names).range([top, top + matrixSize]);
    var maximum = d3.max(cells, function (cell) { return cell.duplicate_documents; }) || 1;
    var radius = d3.scaleLog().domain([1, maximum]).range([0.75, Math.min(6, cellSize * 0.36)]).clamp(true);
    var maximumOutgoing = d3.max(names, function (name) { return combinedStat(name, 'duplicate_documents'); }) || 1;
    var bar = d3.scaleLinear().domain([0, maximumOutgoing]).range([0, barWidth]);

    svgText(svg, mobile ? 0 : labelWidth, 15, 'KEPT REPRESENTATIVE SOURCE →', 'd3-dedup-overlap-axis-title');
    svg.selectAll('.d3-dedup-overlap-column')
      .data(names)
      .enter()
      .append('text')
      .attr('class', 'd3-dedup-overlap-column')
      .attr('transform', function (name) { return 'translate(' + (x(name) + x.bandwidth() / 2) + ',' + (top - 10) + ') rotate(-55)'; })
      .attr('text-anchor', 'start')
      .attr('data-tooltip', function (name) { return readableName(name, false); })
      .text(function (name) {
        return readableName(name, true);
      });
    svg.selectAll('.d3-dedup-overlap-row')
      .data(names)
      .enter()
      .append('text')
      .attr('class', 'd3-dedup-overlap-row')
      .attr('x', labelWidth - 8)
      .attr('y', function (name) { return y(name) + y.bandwidth() / 2; })
      .attr('dy', '.35em')
      .attr('text-anchor', 'end')
      .attr('data-tooltip', function (name) { return readableTooltip(name); })
      .text(function (name) {
        return readableName(name, true);
      });
    var guides = svg.append('g').attr('class', 'd3-dedup-overlap-guides');
    svg.selectAll('.d3-dedup-overlap-diagonal')
      .data(names.filter(function (name) { return name !== 'Other sources'; }))
      .enter()
      .append('line')
      .attr('class', 'd3-dedup-overlap-diagonal')
      .attr('x1', function (name) { return x(name) + cellSize * 0.32; })
      .attr('x2', function (name) { return x(name) + cellSize * 0.68; })
      .attr('y1', function (name) { return y(name) + cellSize * 0.68; })
      .attr('y2', function (name) { return y(name) + cellSize * 0.32; });
    var marks = svg.selectAll('.d3-dedup-overlap-cell')
      .data(cells)
      .enter()
      .append('circle')
      .attr('class', 'd3-dedup-overlap-cell')
      .attr('cx', function (cell) { return x(cell.representative) + x.bandwidth() / 2; })
      .attr('cy', function (cell) { return y(cell.source) + y.bandwidth() / 2; })
      .attr('r', function (cell) { return radius(cell.duplicate_documents); })
      .attr('tabindex', '-1')
      .attr('role', 'img')
      .attr('aria-label', function (cell) { return readableName(cell.source, false) + ' to ' + readableName(cell.representative, false) + ': ' + formatCount(cell.duplicate_documents) + ' duplicate documents'; })
      .attr('data-tooltip', function (cell) {
        var sourceDocuments = combinedStat(cell.source, 'source_document_count');
        var share = sourceDocuments
          ? ' · ' + percent(cell.duplicate_documents / sourceDocuments) + ' of ' + readableName(cell.source, false)
          : '';
        return readableName(cell.source, false) + ' → ' + readableName(cell.representative, false) + '\n' + formatCount(cell.duplicate_documents) + ' duplicates' + share;
      })
      .on('pointerenter focus', function (_, cell) {
        guides.selectAll('*').remove();
        guides.append('line').attr('x1', labelWidth).attr('x2', labelWidth + matrixSize).attr('y1', y(cell.source) + y.bandwidth() / 2).attr('y2', y(cell.source) + y.bandwidth() / 2);
        guides.append('line').attr('x1', x(cell.representative) + x.bandwidth() / 2).attr('x2', x(cell.representative) + x.bandwidth() / 2).attr('y1', top).attr('y2', top + matrixSize);
      })
      .on('pointerleave blur', function () { guides.selectAll('*').remove(); });
    var markNodes = marks.nodes();
    if (markNodes.length) markNodes[0].setAttribute('tabindex', '0');
    marks.on('keydown', function (event) {
      var current = markNodes.indexOf(this);
      var target = current;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') target = Math.min(markNodes.length - 1, current + 1);
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') target = Math.max(0, current - 1);
      if (target !== current) {
        event.preventDefault();
        markNodes[current].setAttribute('tabindex', '-1');
        markNodes[target].setAttribute('tabindex', '0');
        markNodes[target].focus();
      }
    });
    svgText(svg, barX, top - 16, mobile ? 'REMOVED' : 'DUPLICATES REMOVED', 'd3-dedup-overlap-axis-title');
    var bars = svg.selectAll('.d3-dedup-overlap-bar')
      .data(names)
      .enter()
      .append('g')
      .attr('class', 'd3-dedup-overlap-bar')
      .attr('transform', function (name) { return 'translate(' + barX + ',' + (y(name) + y.bandwidth() / 2 - 5) + ')'; });
    bars.append('rect').attr('class', 'is-total').attr('width', function (name) { return bar(combinedStat(name, 'duplicate_documents')); }).attr('height', 10)
      .attr('data-tooltip', function (name) {
        var total = combinedStat(name, 'duplicate_documents');
        return readableName(name, false) + '\n' + formatCount(total) + ' duplicates removed';
      });
    bars.append('text')
      .attr('x', barWidth + 8)
      .attr('y', 8)
      .text(function (name) {
        return compact(combinedStat(name, 'duplicate_documents'));
      });
    var legend = svg.append('g').attr('class', 'd3-dedup-overlap-legend').attr('transform', 'translate(0,' + (height - (mobile ? 42 : 26)) + ')');
    svgText(legend, 0, 0, 'VERIFIED DOCUMENTS', 'd3-dedup-overlap-axis-title');
    var legendValues = [Math.max(1, Math.round(maximum / 10)), maximum];
    var legendStart = mobile ? 12 : labelWidth + 45;
    var legendStep = (width - legendStart - 70) / 2;
    legendValues.forEach(function (value, index) {
      var offset = legendStart + index * legendStep;
      var legendY = mobile ? 22 : 0;
      legend.append('circle').attr('class', 'd3-dedup-overlap-cell').attr('cx', offset).attr('cy', legendY - 4).attr('r', radius(value));
      svgText(legend, offset + radius(value) + 5, legendY, compact(value), 'd3-dedup-overlap-legend-label');
    });
    svgText(svg, labelWidth - 8, top - 8, mobile ? 'REMOVED SOURCE ↓' : 'REMOVED DUPLICATE SOURCE ↓', 'd3-dedup-overlap-axis-title', 'end');
    activateFigureTooltips(el);
  }

  function renderTopicQualitySankey(el, payload) {
    var topicShareThreshold = 0.02;
    var root = d3.select(el).attr('class', 'd3-figure d3-topic-quality');
    root.selectAll('*').remove();
    var sourceByIndex = payload.sources;
    var controls = root.append('div').attr('class', 'd3-topic-quality-controls');
    controls.append('label').attr('for', 'topic-quality-source').text('Data source');
    var select = controls.append('select')
      .attr('id', 'topic-quality-source')
      .attr('aria-label', 'Choose a data source');
    sourceByIndex.map(function (source, index) {
      return { index: index, source: source };
    }).sort(function (left, right) {
      return left.source.source_name.localeCompare(right.source.source_name);
    }).forEach(function (item) {
      select.append('option')
        .attr('value', item.index)
        .text(item.source.source_name);
    });
    select.property('value', 0);
    var summary = controls.append('div').attr('class', 'd3-topic-quality-summary').attr('aria-live', 'polite');
    var scroll = root.append('div').attr('class', 'd3-topic-quality-scroll');

    function render(sourceIndex) {
      scroll.selectAll('*').remove();
      var source = sourceByIndex[sourceIndex];
      var qualityCount = payload.quality_count;
      var allTopics = payload.topics.map(function (topic) {
        var offset = topic.cluster_id * qualityCount;
        var qualityTokens = source.bucket_tokens.slice(offset, offset + qualityCount);
        return {
          cluster_id: topic.cluster_id,
          cluster_label: topic.cluster_label,
          quality_tokens: qualityTokens,
          token_count: d3.sum(qualityTokens)
        };
      }).filter(function (topic) {
        return topic.token_count > 0;
      }).sort(function (left, right) {
        return right.token_count - left.token_count;
      });
      var topics = allTopics.filter(function (topic) {
        return topic.token_count / source.token_count >= topicShareThreshold;
      });
      var smallTopics = allTopics.filter(function (topic) {
        return topic.token_count / source.token_count < topicShareThreshold;
      });
      if (smallTopics.length) {
        var otherQualityTokens = d3.range(qualityCount).map(function (quality) {
          return d3.sum(smallTopics, function (topic) { return topic.quality_tokens[quality]; });
        });
        topics.push({
          cluster_id: 'other',
          cluster_label: 'Everything else',
          quality_tokens: otherQualityTokens,
          token_count: d3.sum(otherQualityTokens),
          aggregated_topic_count: smallTopics.length
        });
      }
      summary.text(
        compact(source.token_count) + ' decontaminated tokens'
      );

      var plotWidth = scroll.node().clientWidth;
      var mobile = plotWidth < 620;
      var width = Math.max(mobile ? 340 : 620, plotWidth || 0);
      var height = 580;
      var top = 58;
      var bottom = 26;
      var plotHeight = height - top - bottom;
      var topicGap = topics.length > 30 ? 3 : 7;
      var qualityGap = 20;
      var nodeWidth = 22;
      var sourceX = mobile ? 18 : 30;
      var topicX = Math.round(width * (mobile ? 0.31 : 0.40));
      var qualityX = width - (mobile ? 66 : 76);
      var available = plotHeight - Math.max(
        Math.max(0, topics.length - 1) * topicGap,
        (qualityCount - 1) * qualityGap
      );
      var scale = available / source.token_count;
      var flowHeight = source.token_count * scale;
      var sourceY = top + (plotHeight - flowHeight) / 2;
      var topicY = top;
      topics.forEach(function (topic) {
        topic.height = topic.token_count * scale;
        topic.y = topicY;
        topicY += topic.height + topicGap;
      });
      var qualityTotals = d3.range(qualityCount).map(function (quality) {
        return d3.sum(topics, function (topic) { return topic.quality_tokens[quality]; });
      });
      var qualityGroupHeight = d3.sum(qualityTotals) * scale + (qualityCount - 1) * qualityGap;
      var qualityY = top + (plotHeight - qualityGroupHeight) / 2;
      var qualities = qualityTotals.map(function (tokenCount, quality) {
        var item = {
          quality: quality,
          token_count: tokenCount,
          height: tokenCount * scale,
          y: qualityY
        };
        qualityY += item.height + qualityGap;
        return item;
      });

      var svg = scroll.append('svg')
        .attr('viewBox', '0 0 ' + width + ' ' + height)
        .attr('role', 'img')
        .attr('aria-label', source.source_name + ' token flow through topics and quality bands');
      svgText(svg, qualityX + nodeWidth, 23, qualityCount + ' QUALITY BANDS', 'd3-topic-quality-heading', 'end');
      svgText(svg, qualityX + nodeWidth, 40, 'LOWEST → HIGHEST', 'd3-topic-quality-subheading', 'end');

      var sourceOffset = sourceY;
      topics.forEach(function (topic) {
        addTitle(svg.append('path')
          .attr('d', ribbonHorizontal(
            sourceX + nodeWidth,
            sourceOffset,
            topic.height,
            topicX,
            topic.y,
            topic.height
          ))
          .attr('class', 'd3-topic-quality-link is-topic'),
        (topic.aggregated_topic_count ? topic.cluster_label + ' · ' + topic.aggregated_topic_count + ' topics' : topic.cluster_label) + '\n' +
          compact(topic.token_count) + ' tokens · ' + d3.format('.1%')(topic.token_count / source.token_count) + ' of source');
        sourceOffset += topic.height;
      });

      var qualityOffsets = qualities.map(function (quality) { return quality.y; });
      topics.forEach(function (topic) {
        var topicOffset = topic.y;
        topic.quality_tokens.forEach(function (tokenCount, quality) {
          if (!tokenCount) return;
          var ribbonHeight = tokenCount * scale;
          addTitle(svg.append('path')
            .attr('d', ribbonHorizontal(
              topicX + nodeWidth,
              topicOffset,
              ribbonHeight,
              qualityX,
              qualityOffsets[quality],
              ribbonHeight
            ))
            .attr('class', 'd3-topic-quality-link is-quality quality-' + quality),
          topic.cluster_label + ' → Q' + quality + '\n' + compact(tokenCount) + ' tokens · ' + d3.format('.1%')(tokenCount / source.token_count) + ' of source');
          topicOffset += ribbonHeight;
          qualityOffsets[quality] += ribbonHeight;
        });
      });

      addTitle(svg.append('rect')
        .attr('x', sourceX).attr('y', sourceY)
        .attr('width', nodeWidth).attr('height', flowHeight)
        .attr('class', 'd3-topic-quality-node is-source'),
      source.source_name + '\n' + formatCount(source.token_count) + ' decontaminated tokens');
      topics.forEach(function (topic) {
        addTitle(svg.append('rect')
          .attr('x', topicX).attr('y', topic.y)
          .attr('width', nodeWidth).attr('height', Math.max(topic.height, .5))
          .attr('class', 'd3-topic-quality-node is-topic'),
        (topic.aggregated_topic_count ? topic.cluster_label + ' · ' + topic.aggregated_topic_count + ' topics' : topic.cluster_label) + '\n' +
          compact(topic.token_count) + ' tokens · ' + d3.format('.1%')(topic.token_count / source.token_count) + ' of source');
        if (topic.height >= 8) {
          svgText(
            svg,
            topicX + nodeWidth + 7,
            topic.y + topic.height / 2 + 3,
            topic.cluster_label,
            'd3-topic-quality-topic-label'
          );
        }
      });
      if (mobile) {
        svg.selectAll('.d3-topic-quality-topic-label').each(function () {
          var label = d3.select(this);
          var fullText = label.text();
          var maxWidth = qualityX - topicX - nodeWidth - 14;
          label.attr('data-tooltip', fullText);
          while (this.getComputedTextLength() > maxWidth && label.text().length > 2) {
            label.text(label.text().replace(/…$/, '').slice(0, -1) + '…');
          }
        });
      }
      qualities.forEach(function (quality) {
        addTitle(svg.append('rect')
          .attr('x', qualityX).attr('y', quality.y)
          .attr('width', nodeWidth).attr('height', Math.max(quality.height, .5))
          .attr('class', 'd3-topic-quality-node is-quality quality-' + quality.quality),
        'Q' + quality.quality + '\n' + compact(quality.token_count) + ' tokens · ' + d3.format('.1%')(quality.token_count / source.token_count) + ' of source');
        svgText(
          svg,
          qualityX + nodeWidth + 8,
          quality.y + quality.height / 2 - 2,
          'Q' + quality.quality,
          'd3-topic-quality-quality-label'
        );
        svgText(
          svg,
          qualityX + nodeWidth + 8,
          quality.y + quality.height / 2 + 12,
          d3.format('.1%')(quality.token_count / source.token_count),
          'd3-topic-quality-quality-share'
        );
      });
      svg.selectAll('.d3-topic-quality-link')
        .on('pointerenter.emphasis focus.emphasis', function () {
          svg.selectAll('.d3-topic-quality-link').classed('is-muted', true);
          d3.select(this).classed('is-muted', false).classed('is-emphasized', true);
        })
        .on('pointerleave.emphasis blur.emphasis', function () {
          svg.selectAll('.d3-topic-quality-link')
            .classed('is-muted', false)
            .classed('is-emphasized', false);
        });
      root.selectAll('.d3-loop-tooltip').remove();
      activateFigureTooltips(el);
    }

    select.on('change', function () {
      render(Number(this.value));
    });
    render(0);
    if (window.ResizeObserver) {
      var renderedWidth = el.clientWidth;
      var resizeFrame;
      new ResizeObserver(function () {
        if (Math.abs(el.clientWidth - renderedWidth) < 8) return;
        renderedWidth = el.clientWidth;
        window.cancelAnimationFrame(resizeFrame);
        resizeFrame = window.requestAnimationFrame(function () {
          render(Number(select.property('value')));
        });
      }).observe(el);
    }
  }

  document.querySelectorAll('.d3-figure[data-d3-src]').forEach(function (el) {
    el.setAttribute('aria-busy', 'true');
    fetch(el.dataset.d3Src)
      .then(function (response) {
        if (!response.ok) throw new Error('Failed to load ' + el.dataset.d3Src);
        return response.json();
      })
      .then(function (payload) {
        if (el.dataset.d3Renderer === 'decontamination') renderDecontamination(el, payload);
        if (el.dataset.d3Renderer === 'data-loop') renderDataLoop(el, payload);
        if (el.dataset.d3Renderer === 'uncheatable-correlations') renderUncheatableCorrelations(el, payload);
        if (el.dataset.d3Renderer === 'bucket-grid') renderBucketGrid(el, payload);
        if (el.dataset.d3Renderer === 'catalog-heavy-tail') renderCatalogHeavyTail(el, payload);
        if (el.dataset.d3Renderer === 'dedup-clusters') renderDedupClusters(el, payload);
        if (el.dataset.d3Renderer === 'dedup-source-overlap') renderDedupSourceOverlap(el, payload);
        if (el.dataset.d3Renderer === 'contamination-matrix') renderContaminationMatrix(el, payload);
        if (el.dataset.d3Renderer === 'topic-quality-sankey') renderTopicQualitySankey(el, payload);
        el.removeAttribute('aria-busy');
      })
      .catch(function (error) {
        el.textContent = 'D3 figure failed to load: ' + error.message;
        el.removeAttribute('aria-busy');
        el.setAttribute('role', 'alert');
      });
  });
})();
