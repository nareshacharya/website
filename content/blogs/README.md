# Articles

Add one Markdown file per article, named with its URL slug, for example `product-discovery.md`.

```md
---
title: A clear article title
summary: A concise description for the listing and search results.
author: Naresh Pentapati
date: 2026-10-06
topics:
  - Product design
  - UX research
draft: true
sources: []
# Optional for model guides: keep these distinct from the article publication date.
model_launch_date: 2026-09-01
coverage_date: 2026-10-06
---

Write the article here in Markdown.
```

Only reviewed articles with `draft: false` enter the website, RSS feed and sitemap. Set the real publication date when publishing. The build rejects missing metadata and future dates. Keep sensitive material out of this public repository, even when marked as a draft. The five older article drafts are intentionally not migrated because their claims need review.

Add public source URLs to `sources`. Markdown images can reference assets in `public/images`, including reviewed diagrams. Verify model launch dates, pricing and benchmarks against current primary sources before publication.
