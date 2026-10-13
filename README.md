To serve locally:

    bundle exec jekyll serve

The Marin blog is at `/blog/`, with original community posts and selected Open
Athena articles. New original posts use `layout: post`; only imported OA posts
use `post_kind: mirror`, `source_url`, and an original-source canonical URL.
See [the Open Athena sync workflow](docs/blog-sync.md)
for checking/importing published Marin posts through draft PRs and validating the
build. The sync does not install a recurring schedule or deploy changes.
