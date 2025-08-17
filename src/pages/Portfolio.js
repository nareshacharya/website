
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const allProjects = [
  {
    id: 'hekla',
    title: 'Hekla',
    category: 'enterprise',
    tech: ['AI', 'App Generation', 'Pega', 'Platform', 'Enterprise UX'],
    description: 'Hekla is a next-gen incident response and public safety platform, integrating AI-driven analytics, real-time data, and seamless field coordination for agencies and enterprises.',
    image: process.env.PUBLIC_URL + '/images/hekla.png'
  },
  {
    id: 'beetle',
    title: 'Beetle',
    category: 'enterprise',
    tech: [ 'Low-code', 'Case Management', 'Platform', 'Enterprise UX'],
    description: 'Beetle is an AI-powered case management and automation suite, streamlining investigations, evidence handling, and workflow orchestration for modern agencies.',
    image: process.env.PUBLIC_URL + '/images/beetle-landing.png'
  },
  {
    id: 'crowd-management',
    title: 'Crowd Management',
    category: 'public',
    tech: ['GIS', 'Real-time Data', 'Event Ops', 'Web App'],
    description: 'Built a tool to monitor crowd density, movement, and behavior in real time. Enabled proactive alerts and helped prevent crowding risks at events.',
    image: process.env.PUBLIC_URL + '/images/crowd.jpg'
  },
  {
    id: 'disaster-management',
    title: 'Disaster Management',
    category: 'public',
    tech: ['Emergency Planning', 'Map UI', 'Resource Mapping', 'Offline UX'],
    description: 'Mapped emergency resources and response plans through a central planning tool. Enabled fast decision-making during floods, fires, and public safety threats.',
    image: process.env.PUBLIC_URL + '/images/disaster.jpg'
  },
  {
    id: 'patrol-management',
    title: 'Patrol Management',
    category: 'public',
    tech: ['Mobile-first', 'Beat Planning', 'GPS Tracking', 'Offline Access'],
    description: 'Streamlined beat scheduling and officer tracking with a smart patrol planner. Improved on-ground efficiency and visibility for supervisors.',
    image: process.env.PUBLIC_URL + '/images/patrol.jpg'
  },


  {
    id: 'crum-underwriting',
    title: 'Crum & Forster – Underwriting Workbench',
    category: 'enterprise',
    tech: ['Pega', 'UI Kit', 'Constellation Parity', 'Design System'],
    description: 'Transformed a legacy UI into a Constellation-aligned modular workspace. Helped underwriters move faster with clean screens, visual clarity, and flow consistency.',
    image: process.env.PUBLIC_URL + '/images/cf.jpg'
  },
  {
    id: 'tal-service-portal',
    title: 'TAL Insurance – Service & Underwriting Portals',
    category: 'enterprise',
    tech: ['Pega', 'Constellation', 'UX Audit', 'Feasibility Mapping'],
    description: 'Redesigned Service and Underwriting portals for simplicity, speed, and visual harmony. Enabled seamless customer service and underwriter tasks across Pega screens.',
    image: process.env.PUBLIC_URL + '/images/tal.jpg'
  },
  {
    id: 'asb-ux-assessment',
    title: 'ASB – UX Assessment & Standardization',
    category: 'enterprise',
    tech: ['Design System', 'Governance', 'Component Library', 'Enterprise UX'],
    description: 'Audited 18+ Pega applications and identified key UI/UX inconsistencies. Rolled out a standardized design system that aligned functionality and experience.',
    image: process.env.PUBLIC_URL + '/images/asb.jpg'
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [activeTag, setActiveTag] = useState(null);

  const filtered = allProjects.filter(project => {
    const categoryMatch = filter === 'all' || project.category === filter;
    const tagMatch = !activeTag || project.tech.includes(activeTag);
    return categoryMatch && tagMatch;
  });

  return (
    <div className="portfolio-wrapper">
      <div className="page-hero">
        <h1>My Work</h1>
      </div>
      <div className="portfolio-filter">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('public')} className={filter === 'public' ? 'active' : ''}>Public Safety</button>
        <button onClick={() => setFilter('enterprise')} className={filter === 'enterprise' ? 'active' : ''}>Enterprise UX</button>
      </div>

      {activeTag && (
        <div className="tag-reset">
          <button onClick={() => setActiveTag(null)}>Clear “{activeTag}” Filter ✕</button>
        </div>
      )}

      <div className="portfolio-list">
        {filtered.map(project => (
          <Link to={`/portfolio/${project.id}`} key={project.id} className="project-tile project-tile-horizontal">
            <div className="project-image-col">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content-col">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {/* Optionally add stats here if available */}
                <div className="project-tags">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className={`tag ${activeTag === tag ? 'active' : ''}`}
                      onClick={e => { e.preventDefault(); setActiveTag(tag === activeTag ? null : tag); }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="project-cta">View Project →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
