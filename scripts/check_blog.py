#!/usr/bin/env python3
"""Offline validation of built blog URLs, attribution, full text, assets, and links."""
import hashlib
import json
from pathlib import Path
import sys
import subprocess
from urllib.parse import unquote, urlsplit

from bs4 import BeautifulSoup
import yaml

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / '_site'


def sha(data):
    return hashlib.sha256(data).hexdigest()


def main():
    errors = []
    inventory = json.loads((ROOT / 'docs/openathena-inventory.json').read_text())
    sources = set()
    assets = set()
    included = [r for r in inventory if r['status'] == 'included']
    built_posts = list((SITE / 'blog').glob('*/*/*/*/index.html'))
    archive = BeautifulSoup((SITE / 'blog/index.html').read_text(), 'html.parser')
    archive_links = {a['href'] for a in archive.select('.post-card h2 a')}
    if len(archive.select('.post-card')) != len(built_posts):
        errors.append('Archive does not contain every built post')
    for r in included:
        if r['source_url'] in sources:
            errors.append(f'Duplicate source: {r["source_url"]}')
        sources.add(r['source_url'])
        raw = (ROOT / r['post']).read_text()
        meta = yaml.safe_load(raw.split('---', 2)[1])
        if meta.get('post_kind') != 'mirror' or not meta.get('source_url'):
            errors.append(f'OA sync inventory contains a non-mirror: {r["post"]}')
        fragment = raw.split('{% raw %}\n', 1)[1].rsplit('\n{% endraw %}', 1)[0]
        if sha(fragment.encode()) != r['mirrored_html_sha256']:
            errors.append(f'Mirror snapshot modified without inventory update: {r["post"]}')
        slug = Path(r['post']).stem[11:]
        route = meta.get('permalink', '/blog/' + r['date'].replace('-', '/') + '/' + slug + '/')
        target = SITE / route.strip('/') / 'index.html'
        if not target.exists():
            errors.append(f'Missing mirror URL: {route}')
            continue
        page = BeautifulSoup(target.read_text(), 'html.parser')
        scripts = [s.get('src') or s.get_text() for s in page.select('.oa-mirror script')]
        if len(scripts) != len(set(scripts)):
            errors.append(f'Duplicate source script execution: {route}')
        content = page.select_one('.blog-post-content')
        if content is None or sha(content.get_text(' ', strip=True).encode()) != r['source_content_sha256']:
            errors.append(f'Full source text differs after rendering: {route}')
        canonical = page.select_one('link[rel="canonical"]')
        if canonical is None or canonical['href'] != meta['canonical_url']:
            errors.append(f'Incorrect canonical URL: {route}')
        if meta['authors'] != r['authors'] or str(meta['date']) != r['date']:
            errors.append(f'Incorrect authors/date: {route}')
        if not page.select_one('.source-note a[href="' + r['source_url'] + '"]'):
            errors.append(f'Missing visible source attribution: {route}')
        if not page.select_one('.mirror-post'):
            errors.append(f'Mirror not rendered as a mirror: {route}')
        for path, expected in r['assets'].items():
            assets.add(path)
            if not (ROOT / path).exists() or sha((ROOT / path).read_bytes()) != expected:
                errors.append(f'Missing/changed asset: {path}')
            if not (SITE / path).exists():
                errors.append(f'Asset missing from build: {path}')
    originals = json.loads((ROOT / 'docs/marin-originals.json').read_text())
    if archive.select_one('.featured-writing'):
        errors.append('Archive must use one post list without a separate originals group')
    for r in originals:
        raw = (ROOT / r['post']).read_text()
        meta = yaml.safe_load(raw.split('---', 2)[1])
        if sha(raw.split('---', 2)[2].encode()) != r['body_sha256']:
            errors.append(f'Original content changed: {r["post"]}')
        if meta.get('post_kind') == 'mirror' or meta.get('source_url'):
            errors.append(f'Original wrongly assigned OA mirror metadata: {r["post"]}')
        if meta['title'] != r['title'] or meta['authors'] != r['authors'] or str(meta['date']) != r['date']:
            errors.append(f'Original title/authors/date changed: {r["post"]}')
        target = SITE / r['route'].strip('/') / 'index.html'
        if not target.exists():
            errors.append(f'Missing original URL: {r["route"]}')
            continue
        page = BeautifulSoup(target.read_text(), 'html.parser')
        canonical = page.select_one('link[rel="canonical"]')
        if canonical is None or canonical['href'] != 'https://marin.community' + r['route']:
            errors.append(f'Original must retain local canonical: {r["route"]}')
        if not page.select_one('.original-post') or page.select_one('.source-note, .oa-mirror, link[href*="openathena-mirror.css"]'):
            errors.append(f'Original has false mirror presentation: {r["route"]}')
        if meta.get('title_id') and not page.select_one('h1[id="' + meta['title_id'] + '"]'):
            errors.append(f'Original title anchor changed: {r["route"]}')
        card = archive.select_one('.post-card h2 a[href="' + r['route'] + '"]')
        if card is None or card.find_parent('article').select_one('.post-label'):
            errors.append(f'Original absent or unnecessarily labeled in archive: {r["route"]}')
        if r.get('content_text_sha256'):
            content = page.select_one('.retrospective-content')
            if content is None or sha(content.get_text(' ', strip=True).encode()) != r['content_text_sha256']:
                errors.append(f'Full retrospective text differs after rendering: {r["route"]}')
        for path, expected in r.get('assets', {}).items():
            assets.add(path)
            if not (ROOT / path).exists() or sha((ROOT / path).read_bytes()) != expected or not (SITE / path).exists():
                errors.append(f'Missing/changed original figure: {path}')
    # Canonical/source assumptions must remain correct for future original posts too.
    for path in built_posts:
        page = BeautifulSoup(path.read_text(), 'html.parser')
        if not page.select_one('.post-content') or not page.select_one('.post-toc') or not page.select_one('script[src="/assets/js/blog.js"]'):
            errors.append(f'Missing shared article layout/navigation: {path}')
        route = '/' + path.parent.relative_to(SITE).as_posix() + '/'
        if route not in archive_links:
            errors.append(f'Post absent from archive navigation: {route}')
        if page.select_one('.original-post'):
            if page.select_one('.post-header .eyebrow').get_text(strip=True) != 'Marin':
                errors.append(f'Original article must use the general Marin label: {route}')
            canonical = page.select_one('link[rel="canonical"]')
            if canonical is None or canonical['href'] != 'https://marin.community' + route or page.select_one('.source-note, .oa-mirror'):
                errors.append(f'Original attribution/canonical regression: {route}')
    # Homepage article links must point at existing local copies, not their sources.
    home = BeautifulSoup((SITE / 'index.html').read_text(), 'html.parser')
    source_routes = {}
    for r in included:
        meta = yaml.safe_load((ROOT / r['post']).read_text().split('---', 2)[1])
        slug = Path(r['post']).stem[11:]
        route = meta.get('permalink', '/blog/' + r['date'].replace('-', '/') + '/' + slug + '/')
        source_routes[urlsplit(r['source_url']).path.rstrip('/')] = route
    # The homepage highlights these five mirrors plus the open-development link.
    for slug in ('marin-data-pipeline-overview', 'delphi', 'cluster-scheduling-with-iris', 'pretraining-speedup', 'quantile-balancing', 'open-development-of-frontier-ai'):
        route = source_routes['/blog/' + slug]
        if not home.select_one('a[href="' + route + '"]'):
            errors.append(f'Homepage article missing its local mirror link: {route}')
        if slug == 'marin-data-pipeline-overview' and not home.select_one('.selected-writing a[href="' + route + '"]'):
            errors.append('Data-pipeline article missing from Selected writing')
    for r in originals:
        if 'retro' in r['route'] and not home.select_one('a[href="' + r['route'] + '"]'):
            errors.append(f'Homepage retrospective link must stay local: {r["route"]}')
    for link in home.select('a[href]'):
        parsed = urlsplit(link['href'])
        if parsed.hostname in ('openathena.ai', 'www.openathena.ai') and parsed.path.rstrip('/') in source_routes:
            errors.append(f'Homepage still links to mirrored source: {link["href"]}')
    # Home and every blog page share discoverable navigation with valid destinations.
    for path in [SITE / 'index.html'] + built_posts + [SITE / 'blog/index.html']:
        page = BeautifulSoup(path.read_text(), 'html.parser')
        nav = page.select_one('nav[aria-label="Main navigation"]')
        init = page.select_one('script#marin-theme-init')
        styles = page.select('link[rel="stylesheet"]')
        if not init or not styles or page.select('script,link').index(init) > page.select('script,link').index(styles[0]):
            errors.append(f'Theme must initialize before styles/first paint: {path.relative_to(SITE)}')
        if not page.select_one('link[href="/assets/css/theme.css"]') or not page.select_one('script[src="/assets/js/theme.js"][defer]'):
            errors.append(f'Missing shared theme assets: {path.relative_to(SITE)}')
        control = page.select_one('[data-theme-control]')
        if not control or [o.get('value') for o in control.select('option')] != ['system', 'light', 'dark']:
            errors.append(f'Missing shared theme control: {path.relative_to(SITE)}')
        links = {a.get_text(strip=True): a.get('href') for a in nav.select('a')} if nav else {}
        if links.get('Home') != '/' or links.get('Blog') != '/blog/':
            errors.append(f'Missing Home/Blog navigation: {path.relative_to(SITE)}')
    # Check home/blog links without scanning unrelated analysis sites.
    for path in built_posts + [SITE / 'blog/index.html', SITE / 'index.html']:
        page = BeautifulSoup(path.read_text(), 'html.parser')
        ids = {e['id'] for e in page.select('[id]')}
        for e in page.find_all(True):
            for attr in ('href', 'src', 'poster', 'data-animation-src', 'data-d3-src', 'data-plotly-src', 'data-plotly-src-mobile'):
                link = e.get(attr)
                if not link:
                    continue
                parsed = urlsplit(link)
                if parsed.scheme or parsed.netloc:
                    continue
                local = SITE / unquote(parsed.path).lstrip('/') if parsed.path.startswith('/') else path.parent / unquote(parsed.path)
                if parsed.path and not local.exists() and not (local / 'index.html').exists():
                    errors.append(f'{path.relative_to(SITE)}: missing {attr}={link}')
                if not parsed.path and parsed.fragment and unquote(parsed.fragment) not in ids:
                    errors.append(f'{path.relative_to(SITE)}: missing anchor {link}')
    # Animation assets referenced from JSON must resolve next to the manifest.
    for asset in assets:
        if asset.endswith('.json'):
            spec = json.loads((ROOT / asset).read_text())
            if isinstance(spec, dict):
                for key in ('src', 'poster'):
                    if isinstance(spec.get(key), str) and not urlsplit(spec[key]).scheme:
                        if not (ROOT / asset).parent.joinpath(spec[key]).exists():
                            errors.append(f'Missing animation dependency: {asset}: {spec[key]}')
    # The existing CI entry point covers preference behavior without changing workflows.
    subprocess.run(['node', str(ROOT / 'scripts/check_theme.js')], cwd=ROOT, check=True)
    if errors:
        print('\n'.join(sorted(set(errors))), file=sys.stderr)
        return 1
    print(f'PASS: {len(included)} OA mirrors, {len(originals)} Marin originals, {len(built_posts)} archive posts, {len(assets)} asset checksums; original content and local canonicals, mirror attribution/source canonicals, full text, authors/dates, archive navigation, links/anchors and figure dependencies verified')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
