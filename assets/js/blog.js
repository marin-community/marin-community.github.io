// Shared navigation for native Markdown and preserved article HTML.
document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.post-content');
  const toc = document.querySelector('.post-toc');
  if (!content || !toc) return;
  const list = toc.querySelector('ul');
  const headings = Array.from(content.querySelectorAll('h1, h2, h3')).filter(heading => !heading.closest('.blog-post-citation, .blog-toc'));
  list.replaceChildren();
  headings.forEach((heading, index) => {
    const labelNode = heading.cloneNode(true);
    labelNode.querySelectorAll('.headerlink, .heading-anchor, .section-link').forEach(a => a.remove());
    const label = labelNode.textContent.trim();
    if (!label) return;
    if (!heading.id) {
      const base = label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || `section-${index + 1}`;
      let id = base;
      let suffix = 2;
      while (document.getElementById(id)) id = `${base}-${suffix++}`;
      heading.id = id;
    }
    const item = document.createElement('li');
    if (heading.tagName === 'H3') item.className = 'toc-subsection';
    const link = document.createElement('a');
    link.href = `#${encodeURIComponent(heading.id)}`;
    link.textContent = label;
    item.append(link);
    list.append(item);
    const anchor = document.createElement('a');
    anchor.className = 'section-link';
    anchor.href = link.href;
    anchor.textContent = '#';
    anchor.setAttribute('aria-label', `Link to ${label}`);
    heading.append(anchor);
  });
  toc.hidden = list.children.length === 0;
  content.querySelectorAll('p').forEach(paragraph => {
    if (paragraph.children.length === 1 && paragraph.firstElementChild.tagName === 'EM'
        && paragraph.previousElementSibling?.querySelector('img')) {
      paragraph.classList.add('image-caption');
    }
  });
});
