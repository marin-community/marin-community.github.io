#!/usr/bin/env python3
"""Offline regression checks for full-article classification and profile policy."""
import contextlib
import io
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

import sync_openathena as sync


class ClassificationTests(unittest.TestCase):
    def test_unresolved_source_footnote_preserves_complete_mirror_metadata(self):
        body = sync.BeautifulSoup('<p>Baseline![^missing]</p><pre>[^code-example]</pre><code>[^inline-example]</code>', 'html.parser')
        missing = sync.unresolved_footnotes(body)
        self.assertEqual(missing, ['[^missing]'])
        previous = dict(source_url=sync.BASE+'/blog/research/', title='Research', date='2026-10-01', authors=['Author'], status='included', assets={'figure.png':'a'*64}, source_content_sha256='b'*64, mirrored_html_sha256='c'*64)
        current = dict(previous, source_content_sha256='d'*64)
        held = sync.hold_incomplete_update(current, previous, previous['assets'], missing)
        self.assertEqual(held['source_content_sha256'], previous['source_content_sha256'])
        self.assertEqual(held['mirrored_html_sha256'], previous['mirrored_html_sha256'])
        self.assertEqual(held['source_update_held']['observed_source_content_sha256'], current['source_content_sha256'])
        with self.assertRaisesRegex(ValueError, 'require review'):
            sync.hold_incomplete_update(current, None, previous['assets'], missing)
        with self.assertRaisesRegex(ValueError, 'changed existing assets'):
            sync.hold_incomplete_update(current, previous, {'figure.png':'e'*64}, missing)

    def run_import(self, decision=None, stale=False, draft=False, future=False, profile=False, tagged=False):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        root = Path(self.temp.name)
        (root / '_posts').mkdir()
        (root / 'docs').mkdir()
        source = sync.BASE + '/blog/profile/'
        title = 'Meet our team: Example' if profile else 'Research note'
        date = 'October 08, 2099' if future else 'October 08, 2025'
        meta = date + ' · Sophie Bushwick'
        body = '<p>Substantial MarinFold work and open Marin experiments.</p>'
        text_hash = sync.digest(sync.BeautifulSoup(body, 'html.parser').get_text(' ', strip=True).encode())
        tag = '<span class="resource-type-tag">MARIN</span>' if tagged else ''
        listing = f'<a class="blog-row" href="/blog/profile/">{tag}<span class="blog-row-title">{title}</span><span class="blog-row-summary">Article summary</span><span class="blog-row-meta">{meta}</span></a>'
        head = '<meta name="robots" content="noindex">' if draft else ''
        article = f'<html><head>{head}<link rel="canonical" href="{source}"></head><body><header class="blog-post-header"><h1>{title}</h1><div class="blog-post-meta">{meta}</div></header><div class="blog-post-body"><div class="blog-post-content">{body}</div></div></body></html>'
        resources = {
            sync.BASE + '/blog/': listing.encode(), source: article.encode(),
            sync.BASE + '/css/style.css': b'.fn-tooltip { position: absolute; }',
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

    def test_reviewed_unlabeled_research_can_be_included(self):
        root, record = self.run_import(decision='include')
        self.assertEqual(record['status'], 'included')
        self.assertEqual(record['authors'], ['Sophie Bushwick'])
        self.assertEqual(record['date'], '2025-10-08')
        self.assertTrue((root / record['post']).exists())
        self.assertIn('body:has(.oa-mirror) > :is(.fn-tooltip, .github-hovercard)',
                      (root / 'assets/css/openathena-mirror.css').read_text())
        self.assertIn(':is(.fn-tooltip, :scope.fn-tooltip)',
                      (root / 'assets/css/openathena-mirror.css').read_text())

    def test_profile_policy_overrides_label_and_old_inclusion(self):
        for decision in [None, 'include', 'exclude']:
            with self.subTest(decision=decision):
                root, record = self.run_import(decision=decision, profile=True, tagged=True)
                self.assertEqual(record['status'], 'excluded')
                self.assertEqual(list((root / '_posts').iterdir()), [])

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
