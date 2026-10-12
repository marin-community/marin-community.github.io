#!/usr/bin/env python3
"""Review published OA posts; optionally mirror explicit MARIN posts. No scheduling/push."""
import argparse
import datetime as dt
import hashlib
import json
from pathlib import Path
import re
import urllib.parse as url
import urllib.request

from bs4 import BeautifulSoup
import yaml

ROOT = Path(__file__).resolve().parents[1]
BASE = 'https://openathena.ai'
INVENTORY = ROOT / 'docs/openathena-inventory.json'


def digest(data):
    return hashlib.sha256(data).hexdigest()


def normalize(link):
    p = url.urlsplit(link)
    return url.urlunsplit(('https', 'openathena.ai' if p.hostname in ('www.openathena.ai', 'openathena.ai') else p.netloc, p.path.rstrip('/') + '/', '', ''))


def fetch(link):
    req = urllib.request.Request(link, headers={'User-Agent': 'MarinBlogMirror/1.0'})
    with urllib.request.urlopen(req, timeout=60) as response:
        if response.status != 200:
            raise ValueError(f'Unexpected response: {link}')
        return response.read()


def metadata(path):
    text = path.read_text()
    return yaml.safe_load(text.split('---', 2)[1]), text.split('---', 2)[2]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--write', action='store_true', help='Update owned mirrors/assets/inventory; review all changes in a PR')
    args = parser.parse_args()
    existing = {}
    content_hashes = {}
    for path in (ROOT / '_posts').glob('*'):
        meta, body = metadata(path)
        if meta.get('source_url'):
            key = normalize(meta['source_url'])
            if key in existing:
                raise ValueError(f'Duplicate source URL: {key}')
            existing[key] = (path, meta)
        parsed_body = BeautifulSoup(body, 'html.parser')
        published_body = parsed_body.select_one('.blog-post-content') or parsed_body
        content_hashes[digest(published_body.get_text(' ', strip=True).encode())] = path
        if meta.get('source_content_sha256'):
            content_hashes[meta['source_content_sha256']] = path

    listing = BeautifulSoup(fetch(BASE + '/blog/'), 'html.parser')
    rows = listing.select('a.blog-row')
    if not rows:
        raise ValueError('Listing schema changed: no published blog rows')
    previous = {r['source_url']: r for r in json.loads(INVENTORY.read_text())} if INVENTORY.exists() else {}
    writes, inventory = {}, []
    asset_data = {}
    asset_dependencies = {}
    active_assets = set()

    def asset(link):
        absolute = url.urljoin(BASE + '/', link)
        parsed = url.urlsplit(absolute)
        # Only copy public OA assets; third-party library URLs remain explicit.
        if parsed.hostname not in ('openathena.ai', 'www.openathena.ai'):
            return absolute
        if not parsed.path.startswith(('/assets/', '/js/', '/css/')) or '..' in parsed.path.split('/'):
            raise ValueError(f'Unexpected asset location: {absolute}')
        suffix = ('-' + digest(parsed.query.encode())[:10]) if parsed.query else ''
        p = Path(parsed.path.lstrip('/'))
        target = Path('assets/openathena') / p.parent / (p.stem + suffix + p.suffix)
        if absolute not in asset_data:
            asset_data[absolute] = (target, fetch(absolute))
            asset_dependencies[absolute] = []
            if p.suffix == '.json':
                spec = json.loads(asset_data[absolute][1])
                # Animation manifests load their video/SVG/poster relative to JSON.
                for key in ('src', 'poster'):
                    if isinstance(spec, dict) and isinstance(spec.get(key), str):
                        dependency = url.urljoin(absolute, spec[key])
                        asset(dependency)
                        asset_dependencies[absolute].append(dependency)
        active_assets.add(absolute)
        for dependency in asset_dependencies[absolute]:
            asset(dependency)
        writes[target] = asset_data[absolute][1]
        return '/' + target.as_posix() + (('#' + parsed.fragment) if parsed.fragment else '')

    for row in rows:
        source_url = normalize(url.urljoin(BASE, row['href']))
        slug = url.urlsplit(source_url).path.strip('/').split('/')[-1]
        if not re.fullmatch(r'[a-z0-9-]+', slug):
            raise ValueError(f'Unsafe slug: {slug}')
        tags = [t.get_text(strip=True) for t in row.select('.resource-type-tag')]
        title = row.select_one('.blog-row-title').get_text(strip=True)
        summary = row.select_one('.blog-row-summary').get_text(' ', strip=True)
        meta_text = row.select_one('.blog-row-meta').get_text(' ', strip=True)
        date_text, author = meta_text.split(' · ', 1)
        date = dt.datetime.strptime(date_text, '%B %d, %Y').date()
        raw = fetch(source_url)
        page = BeautifulSoup(raw, 'html.parser')
        content = page.select_one('.blog-post-content')
        body = page.select_one('.blog-post-body') or content
        header = page.select_one('.blog-post-header')
        if not body or not content or not header or header.h1.get_text(strip=True) != title:
            raise ValueError(f'Article schema/title changed: {source_url}')
        canonical = page.select_one('link[rel="canonical"]')
        if canonical is None or normalize(canonical['href']) != source_url:
            raise ValueError(f'Unexpected canonical URL: {source_url}')
        article_meta = header.select_one('.blog-post-meta')
        if article_meta is None or not article_meta.get_text(' ', strip=True).startswith(meta_text):
            raise ValueError(f'Listing/article authors or dates differ: {source_url}')
        text_hash = digest(content.get_text(' ', strip=True).encode())
        record = dict(source_url=source_url, title=title, date=date.isoformat(), authors=[author], tags=tags)
        future = date > dt.datetime.now(dt.timezone.utc).date()
        draft = page.select_one('meta[name="robots"][content*="noindex"]') or re.search(r'\b(draft|unpublished)\b', ' '.join(page.body.get('class', [])), re.I)
        if future or draft:
            record.update(status='excluded', reason='Future-dated or unpublished/noindex; do not import')
        elif 'MARIN' not in tags:
            ambiguous = bool(re.search(r'\bmarin(?:dna|fold)?\b', content.get_text(' ', strip=True), re.I))
            record.update(status='review' if ambiguous else 'excluded', reason='Unlabeled article mentions Marin; needs classification review' if ambiguous else 'Unrelated Open Athena article; no MARIN label or Marin content')
        else:
            record.update(status='included', reason='Explicit public MARIN label', source_content_sha256=text_hash)
            old = existing.get(source_url)
            path = old[0] if old else ROOT / '_posts' / f'{date.isoformat()}-{slug}.html'
            # URL deduplication wins; also avoid cloning an existing content-identical post.
            if not old and text_hash in content_hashes:
                record.update(status='duplicate', reason='Published content already exists', post=content_hashes[text_hash].relative_to(ROOT).as_posix())
                inventory.append(record)
                continue
            if path.exists() and not old:
                raise ValueError(f'Refusing to overwrite unrelated post: {path}')
            body = BeautifulSoup(str(body), 'html.parser')
            # Scripts already inside article body are retained once, in source order.
            extras = [s for s in page.find_all(['script', 'link'])
                      if (s.name == 'script' and not s.find_parent(class_='blog-post-body')
                          and not s.find_parent(class_='blog-post-content'))
                      or (s.name == 'link' and 'stylesheet' in s.get('rel', [])
                          and 'highlightjs/' in s.get('href', ''))]
            fragment = BeautifulSoup(str(body) + '\n' + '\n'.join(str(s) for s in extras), 'html.parser')
            external = []
            post_assets = {}
            active_assets.clear()
            for element in fragment.find_all(True):
                for attr in ('src', 'poster', 'data-animation-src', 'data-d3-src', 'data-plotly-src', 'data-plotly-src-mobile'):
                    if element.get(attr):
                        original = url.urljoin(source_url, element[attr])
                        element[attr] = asset(original)
                        if original in asset_data:
                            p, data = asset_data[original]
                            post_assets[p.as_posix()] = digest(data)
                        else:
                            external.append(original)
                if element.get('srcset'):
                    raise ValueError(f'srcset requires importer review: {source_url}')
                if element.get('href') and not element['href'].startswith('#'):
                    absolute = url.urljoin(source_url, element['href'])
                    parsed = url.urlsplit(absolute)
                    element['href'] = asset(absolute) if parsed.hostname in ('openathena.ai', 'www.openathena.ai') and parsed.path.startswith('/assets/') else absolute
                    if element.name == 'link' and parsed.hostname not in ('openathena.ai', 'www.openathena.ai'):
                        external.append(absolute)
                # Never interpret source prose/code as Liquid.
            fragment_html = str(fragment)
            post_assets = {asset_data[a][0].as_posix(): digest(asset_data[a][1]) for a in sorted(active_assets)}
            if '{% endraw %}' in fragment_html:
                raise ValueError('Source contains Liquid raw terminator; needs review')
            front = dict(layout='mirror', title=title, authors=[author], date=date.isoformat(), categories='blog', description=summary, source_url=source_url, canonical_url=page.select_one('link[rel="canonical"]')['href'], source_content_sha256=text_hash)
            front['excerpt'] = summary
            if old and old[1].get('permalink'):
                front['permalink'] = old[1]['permalink']
            elif old and old[1].get('date') != front['date']:
                raise ValueError('Source date changed; preserve original permalink before updating')
            writes[path.relative_to(ROOT)] = ('---\n' + yaml.safe_dump(front, allow_unicode=True, sort_keys=False) + '---\n{% raw %}\n' + fragment_html + '\n{% endraw %}\n').encode()
            record.update(post=path.relative_to(ROOT).as_posix(), mirrored_html_sha256=digest(fragment_html.encode()), assets=post_assets, external_dependencies=sorted(set(external)))
        inventory.append(record)
        print(f"{record['status']:9} {date} {title}")

    # CSS is isolated with native @scope, leaving Marin navigation/other pages intact.
    css = fetch(BASE + '/css/style.css').decode()
    css = re.sub(r'@font-face\s*\{[^}]*\}', '', css)
    css = re.sub(r'url\([\'\"]?([^\)\'\"]+)[\'\"]?\)', lambda m: 'url("' + url.urljoin(BASE, m[1]) + '")', css)
    writes[Path('assets/css/openathena-mirror.css')] = ('/* Source: https://openathena.ai/css/style.css; scoped public article/figure styles. */\n@scope (.oa-mirror) {\n' + css + '\n}\n').encode()
    writes[INVENTORY.relative_to(ROOT)] = (json.dumps(inventory, ensure_ascii=False, indent=2) + '\n').encode()
    # A disappearing source row is flagged, never silently removed from the mirror.
    removed = set(previous) - {r['source_url'] for r in inventory}
    if removed:
        raise ValueError(f'Source listing removed posts; manual review required: {sorted(removed)}')
    changes = [p for p, data in writes.items() if not (ROOT / p).exists() or (ROOT / p).read_bytes() != data]
    for p in changes:
        print(('WRITE ' if args.write else 'CHANGE ') + p.as_posix())
    if args.write:
        # Fetch/parse everything successfully before modifying files.
        for p in changes:
            (ROOT / p).parent.mkdir(parents=True, exist_ok=True)
            (ROOT / p).write_bytes(writes[p])
    print(f'{len(changes)} changed files; {len(inventory)} published source posts inspected')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
