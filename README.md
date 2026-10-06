# Naresh Pentapati portfolio

Source for [nareshpentapati.in](https://nareshpentapati.in), a React 19 portfolio built with Create React App and CRACO.

## Local development

```bash
npm ci
npm start
```

Run the checks before shipping:

```bash
CI=true npm test -- --watch=false --runInBand
npm run build
```

The site uses React Router. The host must serve the built `index.html` for application routes that do not have a physical HTML file. The build also creates physical HTML pages for `/blogs` and every published article.

## Articles

`content/blogs/*.md` is the only article source. Each file has a slug-based filename, Markdown body and frontmatter for title, summary, author, publication date, topics, draft flag and sources. See [content/blogs/README.md](content/blogs/README.md) for the format.

The content build runs before development, tests and production builds. It creates the browser data, crawlable article pages, RSS feed and sitemap from reviewed articles with `draft: false`. Unapproved drafts belong outside this public repository. The older unreviewed article copy has not been published.

## Publishing

Review content and tests, then push the approved changes to `main` through the repository workflow. Hosting is managed separately; the old GitHub Pages deploy command has been removed.
