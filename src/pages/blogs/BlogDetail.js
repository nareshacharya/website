import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import articles from '../../generated/blogs.json';
import './BlogDetail.css';

const BlogDetail = () => {
  const { blogId } = useParams();
  const article = articles.find(item => item.slug === blogId);

  if (!article) return <div className="blog-detail"><Link to="/blogs">← All Articles</Link><h1>Article Not Found</h1><p>This article is unavailable.</p></div>;

  return <article className="blog-detail">
    <div className="back-link"><Link to="/blogs">← All Articles</Link></div>
    <h1>{article.title}</h1>
    <p className="meta">Published {article.date} · {article.author}</p>
    <div className="blog-tags">{article.topics.map(topic => <span key={topic} className="tag">{topic}</span>)}</div>
    {article.modelLaunchDate && <p className="meta">Model launched {article.modelLaunchDate}</p>}
    {article.coverageDate && <p className="meta">Information checked {article.coverageDate}</p>}
    <div className="blog-content"><ReactMarkdown components={{ a: ({ href, children }) => <a href={href} {...(/^https:\/\//.test(href || '') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{children}</a> }}>{article.body}</ReactMarkdown></div>
    {article.sources.length > 0 && <section className="blog-sources"><h2>Sources</h2><ul>{article.sources.map(source => <li key={source}><a href={source} rel="noopener noreferrer" target="_blank">{source}</a></li>)}</ul></section>}
  </article>;
};

export default BlogDetail;
