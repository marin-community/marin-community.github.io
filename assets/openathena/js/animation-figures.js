(function () {
  'use strict';
  let diagramCount = 0;

  async function mount(figure) {
    const manifestURL = figure.dataset.animationSrc;
    const response = await fetch(manifestURL);
    if (!response.ok) throw new Error('Cannot load the animation.');
    const spec = await response.json();
    const title = figure.getAttribute('aria-label');
    const assetURL = (path) => new URL(path, new URL(manifestURL, location.href)).href;
    const stage = figure.querySelector('.animation-stage');
    const poster = stage.querySelector('img');
    const isVideo = spec.kind === 'video';
    const steps = spec.steps;
    let index = 0;
    let playing = false;
    let failed = false;
    let timer = null;
    let pendingTime = null;
    let actionId = 0;
    let ready;
    let videoVisible = false;
    let autoplayPending = !matchMedia('(prefers-reduced-motion: reduce)').matches;
    let visible = false;

    const controls = document.createElement('div');
    controls.className = 'animation-controls';
    controls.setAttribute('role', 'group');
    controls.setAttribute('aria-label', title + ' controls');
    function button(label, action) {
      const element = document.createElement('button');
      element.type = 'button';
      element.textContent = label;
      element.addEventListener('click', action);
      controls.append(element);
      return element;
    }
    const play = button('Play', toggle);
    play.className = 'animation-toggle';
    const previous = button('←', () => go(index - 1));
    const next = button('→', () => go(index + 1));
    button('Reset', () => go(0));
    previous.setAttribute('aria-label', 'Previous stage');
    next.setAttribute('aria-label', 'Next stage');
    previous.title = 'Previous stage';
    next.title = 'Next stage';

    const status = document.createElement('p');
    status.className = 'animation-status animation-status-hidden';
    status.setAttribute('aria-live', 'polite');

    let media;
    let crop;
    if (isVideo) {
      media = document.createElement('video');
      stage.classList.add('animation-stage-video');
      poster.classList.add('animation-poster');
      media.classList.add('animation-media');
      media.poster = poster.src;
      media.preload = 'none';
      media.muted = true;
      media.playsInline = true;
      media.loop = true;
      media.width = spec.width;
      media.height = spec.height;
      media.addEventListener('timeupdate', () => {
        if (!playing || pendingTime !== null || media.seeking) return;
        const current = steps.findLastIndex((step) => step.time <= media.currentTime);
        if (current >= 0 && current !== index) {
          index = current;
          update();
        }
      });
      media.addEventListener('error', fail);
    } else {
      const ns = 'http://www.w3.org/2000/svg';
      media = document.createElementNS(ns, 'svg');
      const clip = document.createElementNS(ns, 'clipPath');
      clip.id = `animation-clip-${++diagramCount}`;
      crop = document.createElementNS(ns, 'rect');
      clip.append(crop);
      const picture = document.createElementNS(ns, 'image');
      picture.setAttribute('href', assetURL(spec.src));
      picture.setAttribute('width', spec.width);
      picture.setAttribute('height', spec.height);
      picture.setAttribute('clip-path', `url(#${clip.id})`);
      media.append(clip, picture);
      media.setAttribute('role', 'img');
      stage.tabIndex = 0;
      stage.setAttribute('role', 'region');
      stage.setAttribute('aria-label', 'Diagram detail. Scroll horizontally to see more.');
      stage.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          stage.scrollLeft += event.key === 'ArrowRight' ? 80 : -80;
        }
      });
      const captionLabel = figure.querySelector('figcaption strong') || figure.querySelector('figcaption')?.firstChild;
      if (captionLabel) {
        const overview = document.createElement('a');
        overview.href = poster.src;
        overview.title = 'View the full diagram';
        overview.setAttribute('aria-label', 'View the full diagram: ' + title);
        captionLabel.replaceWith(overview);
        overview.append(captionLabel);
      }
    }
    media.setAttribute('aria-label', title);
    if (isVideo) stage.append(media);
    else stage.replaceChildren(media);
    stage.after(controls, status);
    figure.tabIndex = 0;

    function update() {
      if (failed) return;
      play.textContent = playing ? 'Pause' : 'Play';
      previous.disabled = index === 0;
      next.disabled = index === steps.length - 1;
      figure.dataset.stageIndex = index;
      const state = pendingTime !== null ? 'Loading' : playing ? 'Playing' : 'Paused';
      status.textContent = `${state} · Stage ${index + 1} of ${steps.length}: ${steps[index].title}`;
      if (!isVideo) {
        const box = steps[index].viewBox;
        media.setAttribute('viewBox', box.join(' '));
        media.style.aspectRatio = `${box[2]} / ${box[3]}`;
        media.style.minWidth = `${Math.min(960, box[2])}px`;
        ['x', 'y', 'width', 'height'].forEach((key, i) => {
          crop.setAttribute(key, box[i]);
        });
        media.setAttribute('aria-label', title + ': ' + steps[index].title);
      }
    }

    function stop() {
      playing = false;
      clearTimeout(timer);
      if (isVideo) media.pause();
      actionId += 1;
      if (pendingTime !== null && !failed) synchronize(actionId);
      update();
    }

    function fail() {
      if (failed) return;
      failed = true;
      pendingTime = null;
      stop();
      media.remove();
      poster.classList.remove('animation-poster');
      controls.hidden = true;
      status.classList.remove('animation-status-hidden');
      status.textContent = 'Cannot load the animation. The still image remains available.';
    }

    function mediaEvent(name, action, timeoutMs = 8000) {
      return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => error(), timeoutMs);
        function clean() {
          clearTimeout(timeout);
          media.removeEventListener(name, complete);
          media.removeEventListener('error', error);
        }
        function complete() { clean(); resolve(); }
        function error() { clean(); reject(new Error('Cannot load the animation.')); }
        media.addEventListener(name, complete);
        media.addEventListener('error', error);
        try { action(); }
        catch (error) { clean(); reject(error); }
      });
    }

    function nextVideoFrame() {
      return new Promise((resolve) => {
        let callback;
        function complete() {
          clearTimeout(timeout);
          if (callback !== undefined && media.cancelVideoFrameCallback) {
            media.cancelVideoFrameCallback(callback);
          }
          resolve();
        }
        const timeout = setTimeout(complete, 1000);
        if (media.requestVideoFrameCallback) callback = media.requestVideoFrameCallback(complete);
        else requestAnimationFrame(() => requestAnimationFrame(complete));
      });
    }

    async function revealVideo() {
      if (videoVisible) return;
      await nextVideoFrame();
      if (failed) return;
      videoVisible = true;
      media.classList.add('animation-media-visible');
      poster.classList.add('animation-poster-hidden');
    }

    function prepare() {
      if (!ready) {
        ready = (async () => {
          // A complete local buffer permits seeks without HTTP range support.
          const response = await fetch(assetURL(spec.src));
          if (!response.ok) throw new Error('Cannot load the animation.');
          const blob = await response.blob();
          await mediaEvent('loadedmetadata', () => {
            media.src = URL.createObjectURL(blob);
            media.load();
          });
        })();
      }
      return ready;
    }

    async function synchronize(id) {
      try {
        await prepare();
        if (failed || id !== actionId) return;
        if (pendingTime !== null) {
          const time = pendingTime;
          if (media.seeking || Math.abs(media.currentTime - time) > 0.001) {
            // A seek can finish before the browser displays its new frame.
            await Promise.all([
              nextVideoFrame(),
              mediaEvent('seeked', () => { media.currentTime = time; })
            ]);
          }
          if (failed || id !== actionId) return;
          pendingTime = null;
        }
        if (playing) {
          await media.play();
          await revealVideo();
          if (!playing) media.pause();
        }
        if (id === actionId) update();
      } catch (error) {
        if (failed || id !== actionId || error.name === 'AbortError') return;
        if (error.name === 'NotAllowedError') {
          stop();
          return;
        }
        fail();
      }
    }

    function go(target) {
      if (failed) return;
      autoplayPending = false;
      index = Math.max(0, Math.min(steps.length - 1, target));
      if (isVideo && (ready || index > 0)) pendingTime = steps[index].time + 0.01;
      stop();
      if (!isVideo) stage.scrollLeft = 0;
    }

    function advance() {
      index = (index + 1) % steps.length;
      update();
      timer = setTimeout(advance, 4000);
    }

    function start() {
      if (playing || failed) return;
      playing = true;
      if (isVideo) {
        if (!ready && index > 0) pendingTime = steps[index].time + 0.01;
        synchronize(++actionId);
      } else {
        timer = setTimeout(advance, 4000);
      }
      update();
    }

    function toggle() {
      autoplayPending = false;
      if (playing) stop(); else start();
    }

    figure.addEventListener('keydown', (event) => {
      if (event.target === stage) return;
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        go(index + (event.key === 'ArrowRight' ? 1 : -1));
      } else if (event.code === 'Space' && event.target === figure) {
        event.preventDefault();
        toggle();
      }
    });
    function autoplay() {
      if (autoplayPending && visible && !document.hidden) {
        autoplayPending = false;
        start();
      }
    }
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else autoplay();
    });
    new IntersectionObserver((entries) => {
      visible = entries[0].intersectionRatio >= 0.5;
      if (!entries[0].isIntersecting) stop();
      else autoplay();
    }, { threshold: [0, 0.5] }).observe(figure);
    update();
  }

  document.querySelectorAll('[data-animation-src]').forEach((figure) => {
    mount(figure).catch(() => {
      const message = document.createElement('p');
      message.className = 'animation-status';
      message.textContent = 'Cannot load the controls. The still image remains available.';
      figure.append(message);
    });
  });
})();
