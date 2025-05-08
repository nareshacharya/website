import { Link } from 'react-router-dom';
import {
  FaProjectDiagram,
  FaUserTie,
  FaSearch,
  FaDraftingCompass,
  FaCogs,
  FaTrophy,
  FaLightbulb
} from 'react-icons/fa';
import '../CaseStudy.css';

const InvestigationAnalytics = () => {
  return (
    <section className="case-study">
      <div className="back-link">
        <Link to="/portfolio">← Back to Portfolio</Link>
      </div>

      <div className="case-hero">
        <h1>Investigation Analytics Platform</h1>
        <p>
          A powerful data intelligence system designed to give investigators real-time access to link analysis, suspect profiling, and crime scene intelligence — all in one place.
        </p>
      </div>

      <div className="case-section">
        <h2><FaProjectDiagram className="section-icon" /> The Problem</h2>
        <p>
          Investigators lacked a central view to connect evidence, suspect behavior, and case data across multiple systems. Much of their work relied on gut instinct, spreadsheets, and siloed intelligence.
          We set out to build a platform that made linkages visible and actions smarter.
        </p>
      </div>

      <div className="case-section">
        <h2><FaUserTie className="section-icon" /> My Role as Head of Product & Design</h2>
        <p>
          I shaped the product vision, prioritized key features for release, and oversaw the delivery of high-clarity UI for complex intelligence flows.
          My focus was on translating investigation workflows into intuitive digital interactions — with minimal clicks, maximum clarity.
        </p>
        <p>
          I led cross-functional design reviews with criminal intelligence units, managed release scope across modules like Journey to Crime and Link Analysis, and ensured alignment between product, tech, and field expectations.
        </p>
      </div>

      <div className="case-section">
        <h2><FaSearch className="section-icon" /> Ground Research</h2>
        <ul>
          <li>Investigators tracked suspects across mobile data, CCTNS, transport logs — all manually</li>
          <li>They lacked visual models for suspect connections, movements, or crime pattern overlaps</li>
          <li>They needed “answers,” not data — but the UI didn’t help get there fast</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaDraftingCompass className="section-icon" /> Design Thinking</h2>
        <ul>
          <li>Created dynamic link graphs to map people, crimes, events, and interactions</li>
          <li>Built filters to trace suspects by phone usage, last known movements, or crime patterns</li>
          <li>Designed “Journey to Crime” view with map playback of movement timelines</li>
          <li>Built auto-generated crime summaries exportable for courtroom submission</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaCogs className="section-icon" /> Execution & Field Validation</h2>
        <p>
          I worked closely with backend and data science teams to enable entity matching algorithms.  
          We ran validation workshops with senior investigators, refined interaction models, and integrated cross-agency data ingestion points.
        </p>
      </div>

      <div className="case-section">
        <h2><FaTrophy className="section-icon" /> Impact</h2>
        <p>
          The system significantly reduced time to insight in live investigations. Analysts were able to spot key suspects within minutes, and field responders accessed summarized crime info on the move.
          Legal teams appreciated the one-click evidence packet exports.
        </p>
      </div>

      <div className="case-section">
        <h2><FaLightbulb className="section-icon" /> What I Learned</h2>
        <p>
          Investigators don’t need all the data — they need the right data, fast.  
          Great design here wasn’t flashy UI, it was building quiet clarity into every screen.
        </p>
      </div>

      <div className="case-section">
        <h2>🖼 Screenshots</h2>
        <div className="case-images">
          <img src="/images/investigation-link.jpg" alt="Link Analysis Graph" />
          <img src="/images/investigation-journey.jpg" alt="Journey to Crime Map View" />
        </div>
      </div>
    </section>
  );
};

export default InvestigationAnalytics;
