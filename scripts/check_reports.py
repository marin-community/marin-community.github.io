#!/usr/bin/env python3
"""Verify that the existing Markdown analysis reports remain published as HTML."""
from pathlib import Path
import sys

from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / '_site'


def main():
    reports = sorted((ROOT / 'analysis').rglob('report.md'))
    errors = []
    if not reports:
        errors.append('No source analysis reports found')
    for source in reports:
        route = '/' + source.parent.relative_to(ROOT).as_posix() + '/report/'
        target = SITE / route.strip('/') / 'index.html'
        if not target.is_file():
            errors.append(f'Missing published report route: {route}')
            continue
        page = BeautifulSoup(target.read_text(), 'html.parser')
        raw = source.read_text()
        title = next(line[2:].strip() for line in raw.splitlines() if line.startswith('# '))
        heading = page.select_one('section h1')
        if heading is None or heading.get_text(strip=True) != title:
            errors.append(f'Report heading/rendering changed: {route}')
        # Reports protected by a Liquid raw block retain the existing site title.
        expected_title = title + ' | Marin' if raw.startswith('# ') else 'Marin'
        if page.title is None or page.title.get_text() != expected_title:
            errors.append(f'Report title changed: {route}')
        canonical = page.select_one('link[rel="canonical"]')
        if canonical is None or canonical.get('href') != 'https://marin.community' + route:
            errors.append(f'Report canonical changed: {route}')
        if not page.select_one('section table'):
            errors.append(f'Report Markdown tables were not rendered: {route}')
        if not page.select_one('link[rel="stylesheet"][href^="/assets/css/style.css"]'):
            errors.append(f'Report theme layout missing: {route}')
        if not (SITE / source.relative_to(ROOT)).is_file():
            errors.append(f'Original report download missing: {route}')
    if errors:
        print('\n'.join(errors), file=sys.stderr)
        return 1
    print(f'PASS: {len(reports)} published analysis report routes, titles, canonicals, tables, theme layouts and Markdown downloads')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
