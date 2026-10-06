import { useState } from 'react';
import { Link } from 'react-router-dom';
import articles from '../generated/blogs.json';
import './Blogs.css';

const Blogs = () => {
  const [activeTopic, setActiveTopic] = useState(null);
  const topics = [...new Set(articles.flatMap(article => article.topics))];
  const visible = activeTopic ? articles.filter(article => article.topics.includes(activeTopic)) : articles;

  return (
    <div className="blog-wrapper">
      <div className="page-hero"><h1>Articles & Writing</h1></div>
      {articles.length > 0 && <div className="blog-filters">
        <button type="button" onClick={() => setActiveTopic(null)} className={!activeTopic ? 'active' : ''}>All</button>
        {topics.map(topic => <button type="button" key={topic} onClick={() => setActiveTopic(topic)} className={activeTopic === topic ? 'active' : ''}>{topic}</button>)}
      </div>}
      <div className="blog-list">
        {visible.length ? visible.map(article => <Link to={`/blogs/${article.slug}`} key={article.slug} className="blog-card-link">
          <article className="blog-card">
            <h2>{article.title}</h2>
            <p className="meta">{article.date} · {article.author}</p>
            <p>{article.summary}</p>
            <div className="blog-tags">{article.topics.map(topic => <span className="tag" key={topic}>{topic}</span>)}</div>
          </article>
        </Link>) : <div className="blog-card"><h2>New writing is on its way</h2><p>Explore my work or get in touch while I prepare new articles.</p><p><Link to="/portfolio">Explore my work</Link> · <Link to="/contact">Contact me</Link></p></div>}
      </div>
    </div>
  );
};

export default Blogs;
