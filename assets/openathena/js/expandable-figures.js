(function() {
  // Tall figures marked .figure-expandable start as a square crop with an
  // Expand button. Without JS the full image shows and the button stays hidden.
  document.querySelectorAll('.blog-post-content .figure-expandable').forEach(function(figure) {
    var button = figure.querySelector('.figure-expand-button');
    if (!button) return;

    figure.classList.add('is-collapsible', 'is-collapsed');
    button.addEventListener('click', function() {
      var collapsed = figure.classList.toggle('is-collapsed');
      button.setAttribute('aria-expanded', String(!collapsed));
      button.textContent = collapsed ? 'Expand' : 'Collapse';
    });
  });
})();
