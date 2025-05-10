
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const allProjects = [
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
    id: 'crime-analytics',
    title: 'Crime Analytics',
    category: 'public',
    tech: ['GIS', 'Heatmaps', 'Predictive Insights', 'Public Safety'],
    description: 'Visualized crime trends using heatmaps, filters, and offender data layers. Helped agencies spot patterns and allocate resources more effectively.',
    image: process.env.PUBLIC_URL + '/images/crime.jpg'
  },
  {
    id: 'investigation-analytics',
    title: 'Investigation Analytics',
    category: 'public',
    tech: ['Link Analysis', 'Data Visualization', 'AI Insights', 'Graph UI'],
    description: 'Designed a unified dashboard that helped officers link people, places, and evidence seamlessly. Enabled faster, structured investigations with visual timelines and smart case mapping.',
    image: process.env.PUBLIC_URL + '/images/investigation.jpg'
  },
  {
    id: 'suspect-tracking',
    title: 'Suspect & Vehicle Tracking',
    category: 'public',
    tech: ['AI Video', 'Facial Recognition', 'Path Tracing', 'Live Surveillance'],
    description: 'Built a real-time system for tracking vehicles and suspects across city zones. Gave field teams instant intel through live maps, alerts, and historical movement.',
    image: process.env.PUBLIC_URL + '/images/suspect.jpg'
  },
  {
    id: 'women-safety',
    title: 'Women Safety App',
    category: 'public',
    tech: ['Mobile App', 'SOS Alerts', 'Geofencing', 'Secure UX'],
    description: 'Created a one-touch emergency app with live location sharing and silent alerts. Empowered users and gave responders critical visibility during distress calls.',
    image: process.env.PUBLIC_URL + '/images/women.jpg'
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
          <Link to={`/portfolio/${project.id}`} key={project.id} className="project-tile">
            <div className="project-header">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>              
            </div>
            <div className="project-content">
              {/* <h3>{project.title}</h3> */}
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
