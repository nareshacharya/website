import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = path.join(root, 'content', 'blogs');
const publicDir = path.join(root, 'public');
const outputDir = path.join(publicDir, 'blogs');
const generatedDir = path.join(root, 'src', 'generated');
const site = 'https://nareshpentapati.in';
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[character]));
const xml = escapeHtml;
const formatDate = value => value instanceof Date ? value.toISOString().slice(0, 10) : String(value);
const markdownComponents = {
  a: ({ href, children }) => React.createElement('a', /^https:\/\//.test(href || '') ? { href, target: '_blank', rel: 'noopener noreferrer' } : { href }, children),
};

const articles = [];
for (const file of fs.readdirSync(contentDir).filter(name => name.endsWith('.md') && name !== 'README.md').sort()) {
  const slug = path.basename(file, '.md');
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error(`Invalid blog slug: ${file}`);
  const { data, content } = matter(fs.readFileSync(path.join(contentDir, file), 'utf8'));
  if (data.draft !== false && data.draft !== true) throw new Error(`${file}: draft must be true or false`);
  if (data.draft) continue;
  for (const field of ['title', 'summary', 'author', 'date']) {
    if (!data[field]) throw new Error(`${file}: missing ${field}`);
  }
  const date = formatDate(data.date);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(`${date}T00:00:00Z`))) throw new Error(`${file}: invalid date`);
  if (date > new Date().toISOString().slice(0, 10)) throw new Error(`${file}: future publication date`);
  if (!Array.isArray(data.topics) || !data.topics.length || !data.topics.every(topic => typeof topic === 'string')) throw new Error(`${file}: topics must be a nonempty list`);
  if (!Array.isArray(data.sources) || !data.sources.every(source => typeof source === 'string')) throw new Error(`${file}: sources must be a list`);
  if (data.sources.some(source => !/^https:\/\//.test(source))) throw new Error(`${file}: source links must use https`);
  for (const field of ['model_launch_date', 'coverage_date']) {
    if (data[field] && !/^\d{4}-\d{2}-\d{2}$/.test(formatDate(data[field]))) throw new Error(`${file}: invalid ${field}`);
  }
  if (!content.trim()) throw new Error(`${file}: empty article`);
  articles.push({ slug, title: String(data.title), summary: String(data.summary), author: String(data.author), date, topics: data.topics, sources: data.sources, modelLaunchDate: data.model_launch_date ? formatDate(data.model_launch_date) : null, coverageDate: data.coverage_date ? formatDate(data.coverage_date) : null, body: content.trim() });
}
articles.sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));

fs.mkdirSync(generatedDir, { recursive: true });
fs.writeFileSync(path.join(generatedDir, 'blogs.json'), JSON.stringify(articles, null, 2) + '\n');
fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });

const page = ({ title, description, canonical, body, type = 'website' }) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title><meta name="description" content="${escapeHtml(description)}">
<link rel="canonical" href="${escapeHtml(canonical)}"><meta property="og:type" content="${type}">
<meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:url" content="${escapeHtml(canonical)}"><meta property="og:image" content="${site}/images/og-image.png">
<meta name="twitter:card" content="summary_large_image"><link rel="alternate" type="application/rss+xml" title="Articles by Naresh Pentapati" href="${site}/rss.xml">
<style>body{margin:0;background:#faf9f6;color:#242424;font:16px/1.7 Montserrat,Arial,sans-serif}header,footer{padding:1.25rem max(1.5rem,calc((100vw - 1100px)/2))}header{border-bottom:1px solid #ddd}footer{border-top:1px solid #ddd;margin-top:4rem}a{color:#775e28}header a{text-decoration:none;color:inherit;font-weight:700}nav{float:right}nav a{margin-left:1rem}main{max-width:850px;margin:5rem auto;padding:0 1.5rem;min-height:55vh}main a{overflow-wrap:anywhere}h1{font-size:clamp(2.4rem,6vw,4rem);line-height:1.15}h2{margin-top:2.5rem}article{border-top:1px solid #ddd;padding:1.5rem 0}.meta{color:#666;font-size:.9rem}.topics{color:#775e28}.body img{max-width:100%;height:auto}.body pre{overflow:auto;padding:1rem;background:#eee}@media(max-width:580px){main{margin:3rem auto}nav{float:none;display:block;margin-top:.5rem}nav a{margin:0 1rem 0 0}}</style>
</head><body><header><a href="/">Naresh Pentapati</a><nav><a href="/portfolio">Work</a><a href="/about">About</a><a href="/blogs">Articles</a><a href="/contact">Contact</a></nav></header><main>${body}</main><footer><a href="/">Naresh Pentapati</a> · <a href="/sitemap.xml">Sitemap</a></footer></body></html>`;

const listing = articles.length
  ? articles.map(article => `<article><h2><a href="/blogs/${article.slug}/">${escapeHtml(article.title)}</a></h2><p class="meta">${escapeHtml(article.date)} · ${escapeHtml(article.author)}</p><p>${escapeHtml(article.summary)}</p><p class="topics">${article.topics.map(escapeHtml).join(' · ')}</p></article>`).join('')
  : '<p>New writing is on its way. In the meantime, explore my work or get in touch.</p><p><a href="/portfolio">Explore my work</a> · <a href="/contact">Contact me</a></p>';
fs.writeFileSync(path.join(outputDir, 'index.html'), page({ title: 'Articles & Writing | Naresh Pentapati', description: 'Articles on product thinking, UX design and frontend implementation by Naresh Pentapati.', canonical: `${site}/blogs`, body: `<h1>Articles & Writing</h1>${listing}` }));

for (const article of articles) {
  const articleDir = path.join(outputDir, article.slug);
  fs.mkdirSync(articleDir, { recursive: true });
  const body = renderToStaticMarkup(React.createElement(ReactMarkdown, { components: markdownComponents }, article.body));
  const sources = article.sources.length ? `<section><h2>Sources</h2><ul>${article.sources.map(source => `<li><a href="${escapeHtml(source)}" rel="noopener noreferrer">${escapeHtml(source)}</a></li>`).join('')}</ul></section>` : '';
  fs.writeFileSync(path.join(articleDir, 'index.html'), page({ title: `${article.title} | Naresh Pentapati`, description: article.summary, canonical: `${site}/blogs/${article.slug}`, type: 'article', body: `<article><a href="/blogs">← All articles</a><h1>${escapeHtml(article.title)}</h1><p class="meta">Published ${escapeHtml(article.date)} · ${escapeHtml(article.author)}</p><p class="topics">${article.topics.map(escapeHtml).join(' · ')}</p>${article.modelLaunchDate ? `<p class="meta">Model launched ${escapeHtml(article.modelLaunchDate)}</p>` : ''}${article.coverageDate ? `<p class="meta">Information checked ${escapeHtml(article.coverageDate)}</p>` : ''}<div class="body">${body}</div>${sources}</article>` }));
}

const paths = ['/', '/portfolio', '/about', '/vision', '/contact', '/blogs',
  '/portfolio/emidaddy', '/portfolio/realiq', '/portfolio/hekla', '/portfolio/beetle',
  '/portfolio/crowd-management', '/portfolio/disaster-management', '/portfolio/patrol-management',
  '/portfolio/crum-underwriting', '/portfolio/tal-service-portal', '/portfolio/asb-ux-assessment',
  ...articles.map(article => `/blogs/${article.slug}`)];
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map(route => `  <url><loc>${site}${route}</loc></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(publicDir, 'rss.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>Articles by Naresh Pentapati</title><link>${site}/blogs</link><description>Writing on product thinking, UX design and implementation.</description>${articles.map(article => `<item><title>${xml(article.title)}</title><link>${site}/blogs/${article.slug}</link><guid>${site}/blogs/${article.slug}</guid><description>${xml(article.summary)}</description><pubDate>${new Date(`${article.date}T00:00:00Z`).toUTCString()}</pubDate></item>`).join('')}</channel></rss>\n`);
console.log(`Prepared ${articles.length} published article(s).`);
