# Writing a Marin blog post

Copy [the native post template](templates/native-post.md) to
`_posts/YYYY-MM-DD-your-post-slug.md`. Set the date, title, authors, and description,
then write the body in Markdown. Use `##` and `###` for sections; the shared article
layout supplies the page title, automatic contents menu, and section links.
Contents requires JavaScript; the article remains fully readable without it.

Native posts need no Open Athena metadata or import command. Their canonical URL
is the Marin URL `/blog/YYYY/MM/DD/your-post-slug/`. Original posts, restored
retrospectives, and mirrors share typography, navigation, tables, code, and figure
presentation. Only actual mirrors show Open Athena attribution and source
canonical links. The importer only manages explicitly marked mirrors.

Put images in `assets/images/posts/your-post-slug/` and use descriptive alt text.
A paragraph containing only italic text immediately after an image becomes a
caption. For complex figures, use `<figure>` with `<figcaption>`. Markdown tables,
blockquotes, lists, and fenced code blocks use the shared styles. Preserve existing
heading IDs and use an explicit `permalink` if changing a published filename/date.

For optional static contents when JavaScript is unavailable, add `contents` entries
with `title` and `id` matching the Markdown heading IDs (or your explicit HTML IDs).
Do not add `source_url`, `canonical_url`, or `post_kind: mirror` to native posts.
Imported math and interactive figures retain their source scripts; native posts
needing those features should include the required public scripts explicitly and
test them in the browser.

Run `bundle exec jekyll build` and `python scripts/check_blog.py` (install
`scripts/blog-sync-requirements.txt` first). Preview the archive and article at
desktop and mobile widths, including long tables, code, images, and section links.
Submit a PR; publishing follows the existing main-branch site workflow.

## Writing a Research Note

Copy [the Research Note template](templates/research-note.md) to
`_research_notes/your-note-slug.md`. Set the title, publication date, and
description. Add the note's main topic to the `tags` list. Use `engineering`
for systems and implementation, `modeling` for model, training, or evaluation
results, and `data` for datasets and data curation. Add an `authors` list if
the editor has assigned a byline.
The filename sets the public URL `/research-notes/your-note-slug/`. Keep that
URL when editing a published note.

Lead with the finding and its scope. Immediately after the lead, link the
original Marin issue and any related logbook issue. Link the public run,
code, or report where it supports a claim. State important limits of the
comparison and put figures under `assets/images/research-notes/your-note-slug/`
with descriptive alt text and captions.

The shared layout adds the Research Note label and editorial disclosure.
Run the build and content checks above and preview both the note and its
archive card before submitting the PR.
