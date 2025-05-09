import { Link } from 'react-router-dom';
import './SneekPeek.css';

const sneakPeekProjects = [
  {
    id: 'crum-underwriting',
    title: 'Crum & Forster Underwriting Workbench',
    description: 'Led the UX uplift of legacy UI Kit applications into a unified, modular experience aligned with Pega Constellation principles, streamlining underwriting workflows across risk segments.',
    tags: ['Design System', 'Insurance', 'Enterprise UX', 'Pega'],
    image: process.env.PUBLIC_URL + '/images/cf.jpg'
  },
  {
    id: 'patrol-management',
    title: 'Patrol Management Platform',
    description: 'Designed and delivered a mobile-first solution to plan, assign, and monitor patrolling activity with GPS tracking, AI-based suggestions, and offline sync for field officers.',
    tags: ['Field Operations', 'Mobile UX', 'AI Recommendations', 'Public Safety'],
    image: process.env.PUBLIC_URL + '/images/patrol.jpg'
  },
  {
    id: 'crowd-management',
    title: 'Crowd Management System',
    description: 'Developed a real-time crowd monitoring platform for public events, integrating GPS heatmaps, AI pattern detection, and role-based access for command centers.',
    tags: ['Public Safety', 'GIS', 'Crowd Intelligence'],
    image: process.env.PUBLIC_URL + '/images/crowd.jpg'
  },
  {
    id: 'investigation-analytics',
    title: 'Investigation Analytics Platform',
    description: 'Built a highly interactive investigative platform supporting link analysis, case history, and AI-assisted insights to empower intelligence teams in complex criminal investigations.',
    tags: ['Crime Analytics', 'AI Visualizations', 'Public Safety'],
    image: process.env.PUBLIC_URL + '/images/investigation.jpg'
  }
];

const SneekPeek = () => {
  return (
    <section className="sneak-peek-section">
      <h2>Sneak Peek …</h2>
      {sneakPeekProjects.map((proj, index) => (
        <div className={`peek-tile ${index % 2 !== 0 ? 'reverse' : ''}`} key={proj.id}>
          <div className="peek-image">
            <img src={proj.image} alt={proj.title} />
          </div>
          <div className="peek-content">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tags">
              {proj.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
            <Link to={`/portfolio/${proj.id}`}>
              <span className="project-cta">View Project →</span>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SneekPeek;
