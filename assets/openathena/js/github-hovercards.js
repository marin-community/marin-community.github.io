(function() {
  var content = document.querySelector('.blog-post-content');
  if (!content || !window.fetch) return;

  var githubLinkPattern = /^\/([^/]+)\/([^/]+)\/(issues|pull)\/(\d+)\/?$/;
  var links = [];

  content.querySelectorAll('a[href]').forEach(function(link) {
    var url;
    try {
      url = new URL(link.href);
    } catch (error) {
      return;
    }

    if (url.hostname.toLowerCase() !== 'github.com') return;
    var match = url.pathname.match(githubLinkPattern);
    if (!match) return;

    var target = {
      owner: match[1],
      repo: match[2],
      kind: match[3] === 'pull' ? 'Pull request' : 'Issue',
      number: match[4]
    };
    target.key = (target.owner + '/' + target.repo + '#' + target.number).toLowerCase();
    link._githubHovercardTarget = target;
    links.push(link);
  });

  if (!links.length) return;

  var hovercard = document.createElement('div');
  hovercard.id = 'github-hovercard';
  hovercard.className = 'github-hovercard';
  hovercard.setAttribute('role', 'tooltip');
  hovercard.setAttribute('aria-hidden', 'true');
  document.body.appendChild(hovercard);

  var requests = new Map();
  var currentLink = null;
  var showTimer = null;
  var hideTimer = null;
  var hoveredLink = null;
  var focusedLink = null;
  var hovercardHovered = false;
  var supportsHover = window.matchMedia &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  function sessionKey(target) {
    return 'open-athena:github-hovercard:v3:' + target.key;
  }

  function readSession(target) {
    try {
      var cached = window.sessionStorage.getItem(sessionKey(target));
      return cached ? JSON.parse(cached) : null;
    } catch (error) {
      return null;
    }
  }

  function writeSession(target, data) {
    try {
      window.sessionStorage.setItem(sessionKey(target), JSON.stringify(data));
    } catch (error) {
      // The preview still works when storage is disabled or full.
    }
  }

  function formatDate(value) {
    if (!value) return '';
    var date = new Date(value);
    if (Number.isNaN(date.getTime())) return '';

    try {
      return new Intl.DateTimeFormat(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }).format(date);
    } catch (error) {
      return value.slice(0, 10);
    }
  }

  function bodyPreview(response) {
    var lines = String(response.body_text || '')
      .split(/\n+/)
      .map(function(line) { return line.trim(); })
      .filter(Boolean);
    if (!lines.length) return { heading: '', excerpt: '' };

    var heading = '';
    var firstLine = lines[0];
    var comparableTitle = String(response.title || '').toLowerCase();
    var comparableFirstLine = firstLine.toLowerCase();

    if (comparableTitle &&
        (comparableTitle.indexOf(comparableFirstLine) === 0 ||
         comparableFirstLine.indexOf(comparableTitle) === 0)) {
      lines.shift();
    } else if (firstLine.length <= 60 && !/[.!?]$/.test(firstLine)) {
      heading = lines.shift();
    }

    var excerpt = lines.join(' ').replace(/\s+/g, ' ').trim();
    if (excerpt.length > 180) {
      excerpt = excerpt.slice(0, 179).replace(/\s+\S*$/, '') + '…';
    }

    return { heading: heading, excerpt: excerpt };
  }

  function previewData(response, target) {
    var labels = Array.isArray(response.labels)
      ? response.labels
        .map(function(label) {
          return typeof label === 'string' ? label : label && label.name;
        })
        .filter(Boolean)
      : [];
    var isPullRequest = Boolean(response.pull_request);
    var state = 'Open';

    if (isPullRequest && response.pull_request.merged_at) {
      state = 'Merged';
    } else if (response.state === 'closed') {
      state = 'Closed';
    } else if (isPullRequest && response.draft) {
      state = 'Draft';
    }
    var body = bodyPreview(response);

    return {
      title: response.title ||
        (isPullRequest ? 'Pull request' : 'Issue') + ' #' + target.number,
      state: state,
      labels: labels,
      createdDate: formatDate(response.created_at),
      bodyHeading: body.heading,
      bodyExcerpt: body.excerpt
    };
  }

  function fetchPreview(target) {
    var cached = readSession(target);
    if (cached) return Promise.resolve(cached);
    if (requests.has(target.key)) return requests.get(target.key);

    var endpoint = 'https://api.github.com/repos/' +
      encodeURIComponent(target.owner) + '/' +
      encodeURIComponent(target.repo) + '/issues/' +
      encodeURIComponent(target.number);

    var request = window.fetch(endpoint, {
      headers: { Accept: 'application/vnd.github.text+json' }
    }).then(function(response) {
      if (!response.ok) throw new Error('GitHub preview request failed');
      return response.json();
    }).then(function(response) {
      var data = previewData(response, target);
      writeSession(target, data);
      return data;
    });

    // Keep both successful and failed requests in memory so repeated hovers do
    // not consume more of GitHub's anonymous API allowance.
    requests.set(target.key, request);
    return request;
  }

  function describedBy(link, add) {
    var ids = (link.getAttribute('aria-describedby') || '')
      .split(/\s+/)
      .filter(Boolean)
      .filter(function(id) { return id !== hovercard.id; });
    if (add) ids.push(hovercard.id);
    if (ids.length) link.setAttribute('aria-describedby', ids.join(' '));
    else link.removeAttribute('aria-describedby');
  }

  function position(link) {
    var linkRect = link.getBoundingClientRect();
    var cardRect = hovercard.getBoundingClientRect();
    var margin = 12;
    var gap = 8;
    var viewportWidth = document.documentElement.clientWidth;

    var left = linkRect.left + linkRect.width / 2 - cardRect.width / 2;
    left = Math.max(margin, Math.min(left, viewportWidth - cardRect.width - margin));

    var placeBelow = linkRect.top < cardRect.height + gap + margin;
    var top = placeBelow
      ? linkRect.bottom + gap
      : linkRect.top - cardRect.height - gap;

    hovercard.style.left = (left + window.scrollX) + 'px';
    hovercard.style.top = (top + window.scrollY) + 'px';
    hovercard.dataset.placement = placeBelow ? 'below' : 'above';
  }

  function addText(parent, className, text) {
    var element = document.createElement('span');
    element.className = className;
    element.textContent = text;
    parent.appendChild(element);
    return element;
  }

  function renderLoading(target) {
    hovercard.replaceChildren();
    addText(
      hovercard,
      'github-hovercard-context',
      target.owner + '/' + target.repo + ' · ' + target.kind + ' #' + target.number
    );
    addText(hovercard, 'github-hovercard-loading', 'Loading preview…');
  }

  function renderPreview(target, data) {
    hovercard.replaceChildren();

    var meta = document.createElement('div');
    meta.className = 'github-hovercard-meta';
    addText(
      meta,
      'github-hovercard-context',
      target.owner + '/' + target.repo +
        (data.createdDate ? ' on ' + data.createdDate : '')
    );
    addText(
      meta,
      'github-hovercard-state github-hovercard-state-' + data.state.toLowerCase(),
      data.state
    );
    hovercard.appendChild(meta);

    var title = document.createElement('div');
    title.className = 'github-hovercard-title';
    title.textContent = data.title + ' ';
    addText(title, 'github-hovercard-number', '#' + target.number);
    hovercard.appendChild(title);

    if (data.bodyHeading || data.bodyExcerpt) {
      var body = document.createElement('div');
      body.className = 'github-hovercard-body';
      if (data.bodyHeading) {
        addText(body, 'github-hovercard-body-heading', data.bodyHeading);
      }
      if (data.bodyExcerpt) {
        addText(body, 'github-hovercard-excerpt', data.bodyExcerpt);
      }
      hovercard.appendChild(body);
    }

    if (data.labels.length) {
      var labels = document.createElement('div');
      labels.className = 'github-hovercard-labels';
      data.labels.slice(0, 3).forEach(function(label) {
        addText(labels, 'github-hovercard-label', label);
      });
      if (data.labels.length > 3) {
        addText(
          labels,
          'github-hovercard-label github-hovercard-label-more',
          '+' + (data.labels.length - 3)
        );
      }
      hovercard.appendChild(labels);
    }
  }

  function makeVisible(link) {
    if (currentLink && currentLink !== link) describedBy(currentLink, false);
    currentLink = link;
    describedBy(link, true);
    hovercard.classList.add('visible');
    hovercard.setAttribute('aria-hidden', 'false');
    position(link);
  }

  function show(link) {
    clearTimeout(hideTimer);
    var target = link._githubHovercardTarget;
    if (!target) return;

    renderLoading(target);
    makeVisible(link);

    fetchPreview(target).then(function(data) {
      if (currentLink !== link) return;
      renderPreview(target, data);
      position(link);
    }).catch(function() {
      if (currentLink === link) hide(true);
    });
  }

  function hide(immediate) {
    clearTimeout(showTimer);
    clearTimeout(hideTimer);

    function finish(allowFallback) {
      if (allowFallback) {
        if (hovercardHovered) return;
        if (currentLink &&
            (hoveredLink === currentLink || focusedLink === currentLink)) {
          return;
        }

        var fallback = focusedLink || hoveredLink;
        if (fallback) {
          show(fallback);
          return;
        }
      } else {
        hovercardHovered = false;
      }

      if (currentLink) describedBy(currentLink, false);
      currentLink = null;
      hovercard.classList.remove('visible');
      hovercard.setAttribute('aria-hidden', 'true');
    }

    if (immediate) finish(false);
    else hideTimer = setTimeout(function() { finish(true); }, 100);
  }

  links.forEach(function(link) {
    if (supportsHover) {
      link.addEventListener('mouseenter', function() {
        hoveredLink = link;
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
        showTimer = setTimeout(function() { show(link); }, 160);
      });
      link.addEventListener('mouseleave', function() {
        if (hoveredLink === link) hoveredLink = null;
        hide(false);
      });
    }

    link.addEventListener('focus', function() {
      focusedLink = link;
      show(link);
    });
    link.addEventListener('blur', function() {
      if (focusedLink === link) focusedLink = null;
      hide(false);
    });
  });

  hovercard.addEventListener('mouseenter', function() {
    hovercardHovered = true;
    clearTimeout(hideTimer);
  });
  hovercard.addEventListener('mouseleave', function() {
    hovercardHovered = false;
    hide(false);
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && currentLink) hide(true);
  });

  window.addEventListener('resize', function() {
    if (currentLink) position(currentLink);
  });
})();
