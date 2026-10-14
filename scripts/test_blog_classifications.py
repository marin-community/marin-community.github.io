#!/usr/bin/env python3
"""Offline regression checks for full-article classification and audio assets."""
import contextlib
import io
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

import sync_openathena as sync


class ClassificationTests(unittest.TestCase):
    def run_import(self, decision=None, stale=False, draft=False, audio=False, future=False):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        root = Path(self.temp.name)
        (root / '_posts').mkdir()
        (root / 'docs').mkdir()
        source = sync.BASE + '/blog/profile/'
        date = 'October 08, 2099' if future else 'October 08, 2025'
        meta = date + ' · Sophie Bushwick'
        body = '<p>Substantial MarinFold work and open Marin experiments.</p>'
        text_hash = sync.digest(sync.BeautifulSoup(body, 'html.parser').get_text(' ', strip=True).encode())
        listing = f'<a class="blog-row" href="/blog/profile/"><span class="blog-row-title">Profile</span><span class="blog-row-summary">Profile summary</span><span class="blog-row-meta">{meta}</span></a>'
        head = '<meta name="robots" content="noindex">' if draft else ''
        script = '<script src="/js/window-reversal-demo.js"></script>' if audio else ''
        article = f'<html><head>{head}<link rel="canonical" href="{source}"></head><body><header class="blog-post-header"><h1>Profile</h1><div class="blog-post-meta">{meta}</div></header><div class="blog-post-body"><div class="blog-post-content">{body}</div>{script}</div></body></html>'
        resources = {
            sync.BASE + '/blog/': listing.encode(), source: article.encode(),
            sync.BASE + '/css/style.css': b'',
            sync.BASE + '/js/window-reversal-demo.js': b"var CLIP = '/assets/audio/tiger.mp3';",
            sync.BASE + '/assets/audio/tiger.mp3': b'public audio fixture',
        }
        reviews = [] if decision is None else [dict(source_url=source, decision=decision,
            content_sha256='0' * 64 if stale else text_hash, reviewed_on='2026-10-14', reason='Full article reviewed')]
        classifications = root / 'docs/openathena-classifications.json'
        classifications.write_text(json.dumps(reviews))
        inventory = root / 'docs/openathena-inventory.json'
        with patch.multiple(sync, ROOT=root, INVENTORY=inventory, CLASSIFICATIONS=classifications), patch.object(sync, 'fetch', side_effect=lambda u: resources[u]), patch('sys.argv', ['sync', '--write']), contextlib.redirect_stdout(io.StringIO()):
            if stale:
                with self.assertRaisesRegex(ValueError, 'before any writes'):
                    sync.main()
                self.assertFalse(inventory.exists())
                self.assertEqual(list((root / '_posts').iterdir()), [])
                self.assertFalse((root / 'assets').exists())
                return
            sync.main()
        return root, json.loads(inventory.read_text())[0]

    def test_reviewed_unlabeled_include_preserves_audio_dependency(self):
        root, record = self.run_import(decision='include', audio=True)
        self.assertEqual(record['status'], 'included')
        self.assertEqual(record['authors'], ['Sophie Bushwick'])
        self.assertEqual(record['date'], '2025-10-08')
        self.assertEqual(len(record['assets']), 2)
        self.assertIn('/assets/openathena/assets/audio/tiger.mp3', (root / 'assets/openathena/js/window-reversal-demo.js').read_text())
        for path, checksum in record['assets'].items():
            self.assertEqual(sync.digest((root / path).read_bytes()), checksum)

    def test_explicit_exclusion_and_ambiguity_do_not_import(self):
        for decision, status in [('exclude', 'excluded'), ('review', 'review')]:
            with self.subTest(decision=decision):
                root, record = self.run_import(decision=decision)
                self.assertEqual(record['status'], status)
                self.assertEqual(list((root / '_posts').iterdir()), [])

    def test_changed_review_blocks_all_writes(self):
        self.run_import(decision='include', stale=True)

    def test_unpublished_guards_override_inclusion(self):
        for flag in ['draft', 'future']:
            with self.subTest(flag=flag):
                root, record = self.run_import(decision='include', **{flag: True})
                self.assertEqual(record['status'], 'excluded')
                self.assertEqual(list((root / '_posts').iterdir()), [])

    def test_new_unlabeled_candidate_still_requires_review(self):
        root, record = self.run_import()
        self.assertEqual(record['status'], 'review')
        self.assertEqual(list((root / '_posts').iterdir()), [])


if __name__ == '__main__':
    unittest.main()
