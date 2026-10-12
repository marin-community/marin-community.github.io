#!/usr/bin/env python3
"""Offline validation of built blog URLs, attribution, full text, assets, and links."""
import hashlib
import json
from pathlib import Path
import sys
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
    if len(archive.select('.post-card')) != len(built_posts):
        errors.append('Archive does not contain every built post')
    for r in included:
        if r['source_url'] in sources:
            errors.append(f'Duplicate source: {r["source_url"]}')
        sources.add(r['source_url'])
        raw = (ROOT / r['post']).read_text()
        meta = yaml.safe_load(raw.split('---', 2)[1])
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
        for path, expected in r['assets'].items():
            assets.add(path)
            if not (ROOT / path).exists() or sha((ROOT / path).read_bytes()) != expected:
                errors.append(f'Missing/changed asset: {path}')
            if not (SITE / path).exists():
                errors.append(f'Asset missing from build: {path}')
    # Check only the blog and its navigation; unrelated analysis sites are preserved.
    for path in built_posts + [SITE / 'blog/index.html']:
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
    if errors:
        print('\n'.join(sorted(set(errors))), file=sys.stderr)
        return 1
    print(f'PASS: {len(included)} mirrors, {len(built_posts)} posts in archive, {len(assets)} asset checksums; full source text, authors, dates, canonicals, local links/anchors and figure dependencies verified')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
