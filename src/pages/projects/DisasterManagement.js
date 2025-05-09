import { Link } from 'react-router-dom';
import { FaBullseye, FaUserShield, FaCompass, FaDraftingCompass, FaCogs, FaTrophy, FaLightbulb, FaDesktop } from 'react-icons/fa';
import '../CaseStudy.css';

const DisasterManagement = () => {
  return (
    <section className="case-study">
      <div className="back-link">
        <Link to="/portfolio">← Back to Portfolio</Link>
      </div>

      <div className="case-hero">
        <h1>Disaster Management Platform</h1>
        <p>
          An operational command system enabling government agencies to plan, coordinate, and respond effectively during large-scale emergencies.
        </p>
      </div>

      <div className="case-section">
        <h2><FaBullseye className="section-icon" /> The Mission</h2>
        <p>
          Civic agencies struggled to maintain a real-time view of assets and resources during emergency response. Coordination was fragmented, and traditional planning templates were outdated.
          Our mission was to deliver an intuitive, geospatially aware system that made readiness and response feel like clockwork.
        </p>
      </div>

      <div className="case-section">
        <h2><FaUserShield className="section-icon" /> My Role as Head of Product & Design</h2>
        <p>
          I owned the full product vision — from early stakeholder discovery to release readiness.  
          I led a cross-functional team of engineers, geospatial experts, and designers while directly managing stakeholder demos and integrations across two state governments.
        </p>
        <p>
          I mentored the design team on map UX, orchestrated roadmap planning, and defined design acceptance criteria in collaboration with domain experts and front-line responders.
        </p>
      </div>

      <div className="case-section">
        <h2><FaCompass className="section-icon" /> Research Insights</h2>
        <ul>
          <li>Agencies used whiteboards and Excel to manage disaster templates (highly error-prone)</li>
          <li>Most users were non-technical, but owned mission-critical roles</li>
          <li>Multiple asset types (ambulances, shelters, patrol units) needed visibility in one view</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaDraftingCompass className="section-icon" /> Design Approach</h2>
        <ul>
          <li>Created a tree + map + timeline view model with real-time updates across all three layers</li>
          <li>Designed drag-and-drop planning templates with hierarchy logic, groups, and asset roles</li>
          <li>Color-coded asset overlays with clustering and conflict resolution logic</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaCogs className="section-icon" /> Execution Strategy</h2>
        <p>
          We implemented the project in 3 phases — Planning, Operational Deployment, and Field Testing.  
          I ran weekly demos with backend, UI, and data teams to ensure seamless integration and usability testing in live command center environments.
        </p>
      </div>

      <div className="case-section">
        <h2><FaTrophy className="section-icon" /> Outcome & Impact</h2>
        <p>
          The solution became a core part of the city’s emergency preparedness playbook. It reduced manual planning errors, and enabled unified visibility during real-time disaster simulations.
          Adoption expanded across two departments within the first quarter.
        </p>
      </div>

      <div className="case-section">
        <h2><FaLightbulb className="section-icon" /> Key Takeaway</h2>
        <p>
          In complex public systems, success lies in building simple mental models. By visualizing complex asset hierarchies and geospatial overlays together, we gave decision-makers clarity under chaos.
        </p>
      </div>

      <div className="case-section">
        <h2><FaDesktop className="section-icon" /> Screenshots</h2>
        <div className="case-images">
          <img src="/images/disaster-map.jpg" alt="Map View with Resources" />
          <img src="/images/disaster-timeline.jpg" alt="Timeline Planning UI" />
        </div>
      </div>
    </section>
  );
};

export default DisasterManagement;
