
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const allProjects = [
  {
    id: 'crowd-management',
    title: 'Crowd Management',
    category: 'public',
    tech: ['GIS', 'Real-time Data', 'Event Ops', 'Web App'],
    description: 'Real-time monitoring of crowd density, behavior, and vehicle movement during events.',
    image: '/images/crowd.jpg'
  },
  {
    id: 'disaster-management',
    title: 'Disaster Management',
    category: 'public',
    tech: ['Emergency Planning', 'Map UI', 'Resource Mapping', 'Offline UX'],
    description: 'Operational planning and resource mapping for emergency response teams.',
    image: '/images/disaster.jpg'
  },
  {
    id: 'patrol-management',
    title: 'Patrol Management',
    category: 'public',
    tech: ['Mobile-first', 'Beat Planning', 'GPS Tracking', 'Offline Access'],
    description: 'Beat planning, patrol tracking, and AI-powered mobility for field officers.',
    image: '/images/patrol.jpg'
  },
  {
    id: 'crime-analytics',
    title: 'Crime Analytics',
    category: 'public',
    tech: ['GIS', 'Heatmaps', 'Predictive Insights', 'Public Safety'],
    description: 'GIS-based crime heatmaps, trend patterns, and predictive insights.',
    image: '/images/crime.jpg'
  },
  {
    id: 'investigation-analytics',
    title: 'Investigation Analytics',
    category: 'public',
    tech: ['Link Analysis', 'Data Visualization', 'AI Insights', 'Graph UI'],
    description: 'Link analysis, crime scene intelligence, and suspect journey visualization.',
    image: '/images/investigation.jpg'
  },
  {
    id: 'suspect-tracking',
    title: 'Suspect & Vehicle Tracking',
    category: 'public',
    tech: ['AI Video', 'Facial Recognition', 'Path Tracing', 'Live Surveillance'],
    description: 'AI-driven recognition and tracking from multi-source city surveillance.',
    image: '/images/suspect.jpg'
  },
  {
    id: 'women-safety',
    title: 'Women Safety App',
    category: 'public',
    tech: ['Mobile App', 'SOS Alerts', 'Geofencing', 'Secure UX'],
    description: 'Emergency SOS, tracking, shuttle visibility, and complaint management.',
    image: '/images/women.jpg'
  },
  {
    id: 'crum-underwriting',
    title: 'Crum & Forster – Underwriting Workbench',
    category: 'enterprise',
    tech: ['Pega', 'UI Kit', 'Constellation Parity', 'Design System'],
    description: 'Constellation-aligned UX uplift for underwriting workflows across risk segments.',
    image: '/images/cf-after.jpg'
  },
  {
    id: 'tal-service-portal',
    title: 'TAL Insurance – Service & Underwriting Portals',
    category: 'enterprise',
    tech: ['Pega', 'Constellation', 'UX Audit', 'Feasibility Mapping'],
    description: '3-week UX assessment to align legacy Pega screens with Constellation and streamline workflows.',
    image: '/images/tal-csp-after.jpg'
  },
  {
    id: 'asb-ux-assessment',
    title: 'ASB – UX Assessment & Standardization',
    category: 'enterprise',
    tech: ['Design System', 'Governance', 'Component Library', 'Enterprise UX'],
    description: 'Component-based design system rollout across 18 Pega applications at ASB Bank.',
    image: '/images/asb-guidelines.jpg'
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
          <Link to={`/portfolio/${project.id}`} key={project.id} className="project-row-tile">
            <img src={project.image} alt={project.title} />
            <div className="project-row-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className={`tag ${activeTag === tag ? 'active' : ''}`}
                    onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="project-cta">View Project →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
