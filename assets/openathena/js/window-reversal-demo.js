/* Locally time-reversed audio: chop the clip into windows of length W, play
   each window backwards, keep the windows in forward order. Large W sounds
   like tape run backwards; as W shrinks past the ear's temporal integration
   window the reversal stops being audible and the clip resolves forwards. */
(function () {
  'use strict';

  var root = document.getElementById('window-reversal-demo');
  if (!root) return;

  var CLIP = '/assets/openathena/assets/audio/blog/meet-our-team-alex-merose/tiger-roar.mp3';
  var MIN_MS = 3;
  var MAX_MS = 800;
  var STEPS = 1000;
  var LADDER = [700, 440, 280, 175, 110, 70, 44, 28, 17, 11, 7];
  var MAX_SECONDS = 8;
  var FADE_SECONDS = 0.003;

  function noop() {}

  function el(name) { return root.querySelector('[data-wr="' + name + '"]'); }

  var ui = {
    canvas: el('canvas'),
    slider: el('window'),
    readout: el('window-value'),
    play: el('play'),
    ladder: el('ladder'),
    clip: el('clip'),
    record: el('record'),
    filebtn: el('filebtn'),
    file: el('file'),
    status: el('status')
  };

  var ctx = null;
  var gain = null;
  var clipBytes = null;   // raw bytes of the built-in clip
  var dry = null;         // Float32Array, source at ctx.sampleRate
  var wet = null;         // Float32Array, windows reversed
  var buffer = null;      // AudioBuffer wrapping wet
  var node = null;
  var playing = false;
  var anchorTime = 0;     // ctx.currentTime when node started
  var anchorOffset = 0;   // position in buffer at anchorTime
  var peaks = null;
  var peakWidth = 0;
  var ladderTimer = null;
  var ladderStep = -1;
  var frame = null;
  var renderQueued = false;

  /* ---- window size <-> slider (log scale) ---- */

  function windowMs() {
    var v = Number(ui.slider.value) / STEPS;
    return MIN_MS * Math.pow(MAX_MS / MIN_MS, v);
  }

  function setWindowMs(ms) {
    var v = Math.log(ms / MIN_MS) / Math.log(MAX_MS / MIN_MS);
    ui.slider.value = String(Math.round(v * STEPS));
    syncReadout();
  }

  function syncReadout() {
    var ms = windowMs();
    var text = (ms >= 100 ? Math.round(ms) : ms.toFixed(1)) + ' ms';
    ui.readout.textContent = text;
    ui.slider.setAttribute('aria-valuetext', text + ' window');
  }

  /* ---- the actual processing ---- */

  function reverseWindows(src, W, ov) {
    var n = src.length;
    var out = new Float32Array(n);
    var half = ov >> 1;
    ov = half * 2;  // symmetric ramps, so a pair of them sums to exactly 1
    for (var s = 0; s < n; s += W) {
      var first = s === 0;
      var last = s + W >= n;
      var lo = Math.max(0, s - half);
      var hi = Math.min(n, s + W + half);
      for (var p = lo; p < hi; p++) {
        // Ramps are placed against the window's intended span, not the span
        // clamped to the buffer: at the tail several windows clamp to the
        // same end, and keying off that would stack their fades.
        var w = 1;
        if (!first && p < s + half) w = (p - s + half) / ov;
        else if (!last && p >= s + W - half) w = (s + W + half - p) / ov;
        out[p] += w * src[hi - 1 - (p - lo)];
      }
    }
    return out;
  }

  function render() {
    if (!dry || !ctx) return;
    var sr = ctx.sampleRate;
    var W = Math.max(2, Math.round(windowMs() / 1000 * sr));
    // Short equal-gain crossfade at each seam, so window edges do not click.
    var ov = Math.min(Math.round(FADE_SECONDS * sr), W >> 1);
    wet = reverseWindows(dry, W, ov);
    buffer = ctx.createBuffer(1, wet.length, sr);
    buffer.copyToChannel(wet, 0);
    peaks = null;
    if (playing) startNode(currentOffset());
    draw();
  }

  function queueRender() {
    if (renderQueued) return;
    renderQueued = true;
    requestAnimationFrame(function () {
      renderQueued = false;
      render();
    });
  }

  /* ---- playback ---- */

  function ensureContext() {
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      gain = ctx.createGain();
      gain.gain.value = 0.0001;
      gain.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function currentOffset() {
    if (!buffer) return 0;
    if (!playing) return anchorOffset;
    var d = buffer.duration;
    var p = (anchorOffset + (ctx.currentTime - anchorTime)) % d;
    return p < 0 ? p + d : p;
  }

  function startNode(offset) {
    if (!buffer) return;
    // Swap sources at one scheduled instant: the outgoing node stops exactly
    // where the incoming one starts, so re-rendering mid-drag stays gapless.
    var t = ctx.currentTime + 0.03;
    var wasPlaying = playing && node;
    if (node) {
      try { node.stop(t); } catch (e) { /* already stopped */ }
      node.onended = null;
    }
    node = ctx.createBufferSource();
    node.buffer = buffer;
    node.loop = true;
    node.connect(gain);
    node.start(t, offset % buffer.duration);
    if (!wasPlaying) {
      gain.gain.cancelScheduledValues(t);
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.85, t + 0.03);
    }
    anchorTime = t;
    anchorOffset = offset % buffer.duration;
    playing = true;
    ui.play.textContent = 'Pause';
    ui.play.setAttribute('aria-pressed', 'true');
    if (!frame) frame = requestAnimationFrame(tick);
  }

  function pause() {
    if (!ctx) return;
    var t = ctx.currentTime;
    anchorOffset = currentOffset();
    gain.gain.cancelScheduledValues(t);
    gain.gain.setValueAtTime(Math.max(gain.gain.value, 0.0001), t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.02);
    if (node) {
      try { node.stop(t + 0.03); } catch (e) { /* already stopped */ }
      node.onended = null;
      node = null;
    }
    playing = false;
    ui.play.textContent = 'Play';
    ui.play.setAttribute('aria-pressed', 'false');
    if (frame) { cancelAnimationFrame(frame); frame = null; }
    draw();
  }

  function togglePlay() {
    if (playing) { stopLadder(); pause(); return; }
    load().then(function () { startNode(anchorOffset); }).catch(noop);
  }

  /* ---- the shrinking loop, one pass of the clip per window size ---- */

  function toggleLadder() {
    if (ladderTimer !== null || ladderStep >= 0) { stopLadder(); return; }
    load().then(function () {
      ladderStep = 0;
      ui.ladder.textContent = 'Stop the loop';
      ui.ladder.setAttribute('aria-pressed', 'true');
      runLadderStep();
    }).catch(noop);
  }

  function runLadderStep() {
    if (ladderStep >= LADDER.length) {
      stopLadder();
      setStatus('The clip is playing forwards again. Every window is still reversed.');
      return;
    }
    setWindowMs(LADDER[ladderStep]);
    render();
    if (!playing) startNode(anchorOffset);
    setStatus('Shrinking window ' + (ladderStep + 1) + ' of ' + LADDER.length +
      ' · ' + ui.readout.textContent);
    var hold = Math.max(1200, buffer.duration * 1000);
    ladderTimer = setTimeout(function () {
      ladderTimer = null;
      ladderStep++;
      runLadderStep();
    }, hold);
  }

  function stopLadder() {
    if (ladderTimer !== null) clearTimeout(ladderTimer);
    ladderTimer = null;
    ladderStep = -1;
    ui.ladder.textContent = 'Run the shrinking loop';
    ui.ladder.setAttribute('aria-pressed', 'false');
  }

  /* ---- sources ---- */

  function setStatus(text) { ui.status.textContent = text; }

  function markSource(button) {
    [ui.clip, ui.record, ui.filebtn].forEach(function (b) {
      if (b) b.setAttribute('aria-pressed', b === button ? 'true' : 'false');
    });
  }

  function adopt(samples, label) {
    var limit = Math.min(samples.length, Math.round(MAX_SECONDS * ctx.sampleRate));
    var out = samples.subarray(0, limit);
    var peak = 0;
    for (var i = 0; i < out.length; i++) {
      var a = Math.abs(out[i]);
      if (a > peak) peak = a;
    }
    if (peak > 0) {
      var g = 0.95 / peak;
      for (var j = 0; j < out.length; j++) out[j] *= g;
    }
    dry = out;
    anchorOffset = 0;
    render();
    setStatus(label + ' · ' + (out.length / ctx.sampleRate).toFixed(1) + ' s');
  }

  function toMono(audioBuffer) {
    var n = audioBuffer.length;
    var out = new Float32Array(n);
    for (var c = 0; c < audioBuffer.numberOfChannels; c++) {
      var ch = audioBuffer.getChannelData(c);
      for (var i = 0; i < n; i++) out[i] += ch[i];
    }
    if (audioBuffer.numberOfChannels > 1) {
      for (var j = 0; j < n; j++) out[j] /= audioBuffer.numberOfChannels;
    }
    return out;
  }

  function decode(bytes) {
    return new Promise(function (resolve, reject) {
      ctx.decodeAudioData(bytes, resolve, reject);
    });
  }

  // Resolves once the built-in clip is decoded and a first render exists.
  function load() {
    if (!ensureContext()) {
      setStatus('This browser has no Web Audio support, so the demo cannot run.');
      return Promise.reject(new Error('no webaudio'));
    }
    if (dry) return Promise.resolve();
    setStatus('Loading the clip…');
    var bytes = clipBytes
      ? Promise.resolve(clipBytes.slice(0))
      : fetch(CLIP).then(function (r) {
          if (!r.ok) throw new Error('HTTP ' + r.status);
          return r.arrayBuffer();
        }).then(function (b) { clipBytes = b; return b.slice(0); });
    return bytes.then(decode).then(function (audio) {
      adopt(toMono(audio), 'Tiger roar');
      markSource(ui.clip);
    }).catch(function (err) {
      setStatus('Could not load the clip (' + err.message + '). Try loading your own file.');
      throw err;
    });
  }

  function useBuiltIn() {
    if (!ensureContext()) return;
    dry = null;
    pause();
    load().then(function () { startNode(0); }).catch(noop);
  }

  function useFile(file) {
    if (!file || !ensureContext()) return;
    stopLadder();
    setStatus('Decoding ' + file.name + '…');
    file.arrayBuffer().then(decode).then(function (audio) {
      adopt(toMono(audio), file.name);
      markSource(ui.filebtn);
      startNode(0);
    }).catch(function () {
      setStatus('Could not decode that file. Try a .wav, .mp3, or .m4a.');
    });
  }

  function record() {
    if (!ensureContext()) return;
    if (!navigator.mediaDevices || !window.MediaRecorder) {
      setStatus('This browser will not record audio. Load a file instead.');
      return;
    }
    stopLadder();
    pause();
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      var rec = new MediaRecorder(stream);
      var chunks = [];
      var left = 4;
      var countdown = setInterval(function () {
        left--;
        setStatus('Recording… ' + left + ' s');
      }, 1000);
      rec.ondataavailable = function (e) { chunks.push(e.data); };
      rec.onstop = function () {
        clearInterval(countdown);
        stream.getTracks().forEach(function (t) { t.stop(); });
        new Blob(chunks).arrayBuffer().then(decode).then(function (audio) {
          adopt(toMono(audio), 'Your recording');
          markSource(ui.record);
          startNode(0);
        }).catch(function () {
          setStatus('Could not decode the recording.');
        });
      };
      rec.start();
      setStatus('Recording… 4 s');
      setTimeout(function () { rec.stop(); }, 4000);
    }).catch(function () {
      setStatus('Microphone access was declined.');
    });
  }

  /* ---- canvas ---- */

  function computePeaks(width) {
    peaks = new Float32Array(width * 2);
    peakWidth = width;
    var per = wet.length / width;
    for (var x = 0; x < width; x++) {
      var from = Math.floor(x * per);
      var to = Math.min(wet.length, Math.floor((x + 1) * per));
      var min = 0, max = 0;
      for (var i = from; i < to; i++) {
        var v = wet[i];
        if (v < min) min = v;
        if (v > max) max = v;
      }
      peaks[x * 2] = min;
      peaks[x * 2 + 1] = max;
    }
  }

  function draw() {
    var c = ui.canvas;
    var dpr = window.devicePixelRatio || 1;
    var w = c.clientWidth;
    var h = c.clientHeight;
    if (!w || !h) return;
    if (c.width !== Math.round(w * dpr) || c.height !== Math.round(h * dpr)) {
      c.width = Math.round(w * dpr);
      c.height = Math.round(h * dpr);
      peaks = null;
    }
    var g = c.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, w, h);
    if (!wet || !ctx) {
      g.strokeStyle = 'rgba(31,30,27,0.2)';
      g.lineWidth = 1;
      g.beginPath();
      g.moveTo(0, Math.round(h / 2) + 0.5);
      g.lineTo(w, Math.round(h / 2) + 0.5);
      g.stroke();
      return;
    }
    if (!peaks || peakWidth !== w) computePeaks(w);

    var mid = h / 2;

    // One tick per window boundary, drawn only while they stay legible.
    var winPx = w * (windowMs() / 1000) / buffer.duration;
    if (winPx >= 5) {
      g.strokeStyle = 'rgba(31,30,27,0.22)';
      g.lineWidth = 1;
      g.beginPath();
      for (var x = winPx; x < w; x += winPx) {
        var px = Math.round(x) + 0.5;
        g.moveTo(px, 4);
        g.lineTo(px, h - 4);
      }
      g.stroke();
    }

    g.fillStyle = '#9e6d43';
    for (var i = 0; i < w; i++) {
      var min = peaks[i * 2], max = peaks[i * 2 + 1];
      var top = mid - max * (mid - 4);
      var bot = mid - min * (mid - 4);
      g.fillRect(i, top, 1, Math.max(1, bot - top));
    }

    g.strokeStyle = 'rgba(31,30,27,0.35)';
    g.lineWidth = 1;
    g.beginPath();
    g.moveTo(0, Math.round(mid) + 0.5);
    g.lineTo(w, Math.round(mid) + 0.5);
    g.stroke();

    var head = (currentOffset() / buffer.duration) * w;
    g.strokeStyle = '#1f1e1b';
    g.lineWidth = 2;
    g.beginPath();
    g.moveTo(head, 0);
    g.lineTo(head, h);
    g.stroke();
  }

  function tick() {
    draw();
    frame = playing ? requestAnimationFrame(tick) : null;
  }

  /* ---- wiring ---- */

  ui.slider.addEventListener('input', function () {
    stopLadder();
    syncReadout();
    queueRender();
  });
  ui.play.addEventListener('click', togglePlay);
  ui.ladder.addEventListener('click', toggleLadder);
  ui.clip.addEventListener('click', useBuiltIn);
  ui.record.addEventListener('click', record);
  ui.filebtn.addEventListener('click', function () { ui.file.click(); });
  ui.file.addEventListener('change', function () { useFile(ui.file.files[0]); });
  window.addEventListener('resize', function () { peaks = null; draw(); });

  setWindowMs(400);
  setStatus('Press play. At a 400 ms window the roar is chopped into backwards chunks.');
  draw();
})();
