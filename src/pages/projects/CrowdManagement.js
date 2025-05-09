import { Link } from 'react-router-dom';
import {
  FaUsers,
  FaUserTie,
  FaSearch,
  FaDraftingCompass,
  FaCogs,
  FaTrophy,
  FaLightbulb,
  FaDesktop
} from 'react-icons/fa';
import '../CaseStudy.css';

const CrowdManagement = () => {
  return (
    <section className="case-study">
      <div className="back-link">
        <Link to="/portfolio">← Back to Portfolio</Link>
      </div>

      <div className="case-hero">
        <h1>Crowd Management System</h1>
        <p>
          A real-time surveillance and crowd analytics platform used by command centers to monitor crowd density, trigger proactive alerts, and prevent chaos at public gatherings.
        </p>
      </div>

      <div className="case-section">
        <h2><FaUsers className="section-icon" /> The Challenge</h2>
        <p>
          During large events, police and civic teams had no real-time way to track crowd buildup or movement. They relied on manual reporting and fragmented CCTV grids, often learning of congestion too late to prevent incidents.
          Our goal: build a visual command platform that enabled proactive intervention — before a crowd became a crisis.
        </p>
      </div>

      <div className="case-section">
        <h2><FaUserTie className="section-icon" /> My Role as Head of Product & Design</h2>
        <p>
          I defined the product vision and led multi-city rollout of the platform, aligning with senior police officials, GIS vendors, and emergency response teams.
          I mentored a UX team focused on real-time UI, conducted command center walkthroughs, and prioritized roadmap features tied to real field needs.
        </p>
        <p>
          I also established a fast design-review cadence with backend teams and worked with GIS engineers to optimize for clarity, performance, and real-time updates under stress.
        </p>
      </div>

      <div className="case-section">
        <h2><FaSearch className="section-icon" /> Ground Research</h2>
        <ul>
          <li>Observed crowd control teams during high-footfall events to understand stress points</li>
          <li>Interviewed CCTV control room operators and field commanders about current workflows</li>
          <li>Found that officers needed fast visual indicators, not numeric data or dropdowns</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaDraftingCompass className="section-icon" /> UX & Design System</h2>
        <ul>
          <li>Designed a live heatmap that pulsed based on crowd density, movement, and sound thresholds</li>
          <li>Created “Focus Zones” that auto-triggered alerts when occupancy exceeded safe levels</li>
          <li>Built overlays for vehicle flow, entry/exit choke points, and real-time incident tagging</li>
          <li>Used colorblind-friendly palette and minimal text for at-a-glance decision making</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaCogs className="section-icon" /> Rollout & Execution</h2>
        <p>
          I worked with city command centers during live festivals to validate and iterate designs in the field.
          Our UX team conducted night-shift testing with live CCTV feeds and adjusted alert logic for better field usability.
        </p>
        <p>
          I also oversaw product performance testing during heavy video stream loads to ensure UI responsiveness remained instant under peak crowd activity.
        </p>
      </div>

      <div className="case-section">
        <h2><FaTrophy className="section-icon" /> Results & Outcomes</h2>
        <p>
          The system helped reduce crowd overflow incidents by 40% in pilot deployments.  
          Authorities were able to reroute or disperse gatherings minutes earlier using zone alerts and predictive movement patterns.
        </p>
        <p>
          It was adopted by two major city governments and continues to serve in high-risk public events, concerts, and religious gatherings.
        </p>
      </div>

      <div className="case-section">
        <h2><FaLightbulb className="section-icon" /> Key Learning</h2>
        <p>
          In crisis systems, attention is the real currency. Design must remove friction, noise, and hesitation.  
          Our success came from designing for decisiveness — giving officers not just data, but clarity they could act on.
        </p>
      </div>

      <div className="case-section">
        <h2><FaDesktop className="section-icon" /> Screenshots</h2>
        <div className="case-images">
          <img src="/images/crowd-wireframe.jpg" alt="Early Wireframe View" />
          <img src="/images/crowd-heatmap.jpg" alt="Final Heatmap Interface" />
        </div>
      </div>
    </section>
  );
};

export default CrowdManagement;
