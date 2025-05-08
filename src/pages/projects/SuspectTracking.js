import { Link } from 'react-router-dom';
import {
  FaVideo,
  FaUserTie,
  FaSearch,
  FaDraftingCompass,
  FaCogs,
  FaTrophy,
  FaLightbulb
} from 'react-icons/fa';
import '../CaseStudy.css';

const SuspectTracking = () => {
  return (
    <section className="case-study">
      <div className="back-link">
        <Link to="/portfolio">← Back to Portfolio</Link>
      </div>

      <div className="case-hero">
        <h1>Suspect & Vehicle Tracking System</h1>
        <p>
          An AI-powered visual intelligence platform to automatically detect, tag, and trace vehicles and suspects using live video feeds across city-wide surveillance.
        </p>
      </div>

      <div className="case-section">
        <h2><FaVideo className="section-icon" /> The Situation</h2>
        <p>
          During investigations, officers relied on hours of CCTV footage and memory-based location reviews. Finding one suspect or vehicle among thousands of feeds was time-consuming and inefficient.
          The goal was to convert passive video feeds into actionable tracking intelligence — in real-time.
        </p>
      </div>

      <div className="case-section">
        <h2><FaUserTie className="section-icon" /> My Role as Head of Product & Design</h2>
        <p>
          I led the strategy and execution for this AI-driven product line, translating complex machine learning models into simplified user workflows.  
          I coordinated between AI researchers, video tech engineers, and police surveillance operators to ensure product-market fit, usability, and performance on real-world deployments.
        </p>
        <p>
          I also prioritized privacy, ethics, and accuracy concerns into the design backlog, and ran design-led validation with control room staff.
        </p>
      </div>

      <div className="case-section">
        <h2><FaSearch className="section-icon" /> Research & Insights</h2>
        <ul>
          <li>Most officers described their job as “finding a needle in 100 hours of video.”</li>
          <li>Needed ability to tag, alert, and visually trail suspects/vehicles across feeds</li>
          <li>Non-technical users needed confidence in AI match accuracy, not guesswork</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaDraftingCompass className="section-icon" /> Design Execution</h2>
        <ul>
          <li>Built quick search by number plate, vehicle color, or facial match</li>
          <li>Designed multi-camera “path view” to show suspect movement over time</li>
          <li>Included smart alerting and match-confidence overlays on live feeds</li>
          <li>Created drill-downs from license plate match → movement history → known associates</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaCogs className="section-icon" /> System Rollout</h2>
        <p>
          We piloted the system in collaboration with city surveillance and crime units.  
          I led UI sprints alongside ML model validations, conducted stress testing under real video loads, and ran feedback loops with operators on performance and false positive handling.
        </p>
      </div>

      <div className="case-section">
        <h2><FaTrophy className="section-icon" /> Outcome</h2>
        <p>
          The platform helped officers track vehicles across city perimeters in under 5 minutes — a process that previously took hours.  
          It played a key role in 3 major criminal captures within the first month of rollout.
        </p>
      </div>

      <div className="case-section">
        <h2><FaLightbulb className="section-icon" /> What I Learned</h2>
        <p>
          Building trust in AI starts with transparent design.  
          By showing officers what matched, why, and how to follow it up — we turned black-box intelligence into an intuitive human ally.
        </p>
      </div>

      <div className="case-section">
        <h2>🖼 Screenshots</h2>
        <div className="case-images">
          <img src="/images/suspect-search.jpg" alt="AI Suspect Video Match View" />
          <img src="/images/vehicle-path.jpg" alt="Vehicle Path Analysis" />
        </div>
      </div>
    </section>
  );
};

export default SuspectTracking;
