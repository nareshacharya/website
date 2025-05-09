import { Link } from 'react-router-dom';
import {
  FaMapMarkedAlt,
  FaUserTie,
  FaSearchLocation,
  FaRoute,
  FaTools,
  FaAward,
  FaBrain,
  FaDesktop
} from 'react-icons/fa';
import '../CaseStudy.css';

const PatrolManagement = () => {
  return (
    <section className="case-study">
      <div className="back-link">
        <Link to="/portfolio">← Back to Portfolio</Link>
      </div>

      <div className="case-hero">
        <h1>Patrol Management System</h1>
        <p>
          A city-wide patrol planning and tracking solution enabling beat optimization, real-time field visibility, and operational accountability.
        </p>
      </div>

      <div className="case-section">
        <h2><FaMapMarkedAlt className="section-icon" /> The Challenge</h2>
        <p>
          City law enforcement relied on static beat charts and phone updates to coordinate daily patrols. The lack of real-time beat tracking led to inefficiencies, missed incidents, and delayed response.
          We set out to reimagine the patrol lifecycle — from plan to execution — using data and design.
        </p>
      </div>

      <div className="case-section">
        <h2><FaUserTie className="section-icon" /> My Role as Head of Product & Design</h2>
        <p>
          I led both product vision and execution across stakeholders including police HQ, patrol units, and city IT teams.  
          I defined the beat planning framework, mentored the design team on mobility-first interactions, and ensured seamless collaboration with developers and GIS experts.
        </p>
        <p>
          My focus was on making patrol intelligence usable in high-speed, high-stress environments — with clarity, speed, and mobile-first UI.
        </p>
      </div>

      <div className="case-section">
        <h2><FaSearchLocation className="section-icon" /> Discovery Highlights</h2>
        <ul>
          <li>Beat planners used crime maps + gut instinct, not data-backed recommendations</li>
          <li>Field officers lacked location-based guidance and logged duties manually</li>
          <li>No visibility for supervisors on patrol execution or overlap</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaRoute className="section-icon" /> Design Strategy</h2>
        <ul>
          <li>Created a “hot route + hot time” based beat planner with recommendations</li>
          <li>Designed a mobile-first app for field officers to Start/Pause/Complete beats</li>
          <li>Enabled real-time unit tracking with map overlays for backup requests</li>
          <li>Included a daily logbook feature with voice, video, and location tagging</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaTools className="section-icon" /> Execution & Rollout</h2>
        <p>
          We delivered the system in two releases — Planning and Field Execution.  
          I handled product roadmap milestones, design QA, and field-level UAT with supervisors and police officers during night patrols.
        </p>
      </div>

      <div className="case-section">
        <h2><FaAward className="section-icon" /> Results & Impact</h2>
        <p>
          Beat efficiency improved by 32%, with more coverage using fewer vehicles.  
          Supervisors reported higher clarity, and officers appreciated the ability to digitally log beats — cutting down manual reporting time by 60%.
        </p>
      </div>

      <div className="case-section">
        <h2><FaBrain className="section-icon" /> What I Learned</h2>
        <p>
          Systems that serve the ground force need to think like the field.  
          Every second of usability translates to better safety. I learned how to blend AI-powered decisions with the realities of boots-on-ground police work.
        </p>
      </div>

      <div className="case-section">
        <h2><FaDesktop className="section-icon" />  Screenshots</h2>
        <div className="case-images">
          <img src="/images/patrol-map.jpg" alt="Patrol Planning Map" />
          <img src="/images/patrol-mobile.jpg" alt="Mobile Field Officer App" />
        </div>
      </div>
    </section>
  );
};

export default PatrolManagement;
