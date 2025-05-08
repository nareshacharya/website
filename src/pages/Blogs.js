
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';

const allBlogs = [
  {
    id: "ux-maturity",
    title: "UX Maturity in an Organization — From Awareness to Impact",
    summary: "Understand the stages of UX maturity, how to assess it, and why it’s essential for organizational success.",
    tags: ['UX Leadership', 'Design Culture', 'Enterprise UX']
  },
  {
    id: "pegadesign",
    title: "Designing for Pega Constellation",
    summary: "A practical guide to designing scalable, upgrade-friendly experiences using Pega's Constellation architecture.",
    tags: ['Pega', 'Design Systems']
  },
  {
    id: "ai-ux",
    title: "Human-Centered AI: Beyond the Hype",
    summary: "Designing trustworthy AI tools starts with transparency, control, and shared understanding — not magic.",
    tags: ['AI', 'UX Strategy']
  },
  {
    id: "govtech",
    title: "Designing for Public Sector: 5 Things I Learned",
    summary: "Lessons from building digital platforms for public safety, disaster response, and policy-led ecosystems.",
    tags: ['Public Sector', 'UX Strategy']
  },
  {
    id: "ux-strategy",
    title: "Crafting a UX Strategy That Works",
    summary: "A real-world approach to defining UX vision, priorities, and execution frameworks that align with product and business goals.",
    tags: ['UX Strategy', 'Design Leadership', 'Product Design', 'Digital Transformation']
  },
];

const Blogs = () => {
  const [activeTag, setActiveTag] = useState(null);

  const filteredBlogs = !activeTag
    ? allBlogs
    : allBlogs.filter(blog => blog.tags.includes(activeTag));

  return (
    <div className="blog-wrapper">
      <h1>Articles & Writing</h1>

      <div className="blog-filters">
        <button onClick={() => setActiveTag(null)} className={!activeTag ? 'active' : ''}>All</button>
        {[...new Set(allBlogs.flatMap(b => b.tags))].map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={activeTag === tag ? 'active' : ''}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="blog-list">
        {filteredBlogs.map(blog => (
          <Link to={`/blogs/${blog.id}`} key={blog.id} className="blog-card-link">
            <div className="blog-card">
              <h3>{blog.title}</h3>
              <p>{blog.summary}</p>
              <div className="blog-tags">
                {blog.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`tag ${activeTag === tag ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTag(tag === activeTag ? null : tag);
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
