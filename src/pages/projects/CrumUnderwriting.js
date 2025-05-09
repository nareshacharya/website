import { Link } from 'react-router-dom';
import {
  FaFolderOpen,
  FaUserTie,
  FaSearch,
  FaDraftingCompass,
  FaCogs,
  FaTrophy,
  FaLightbulb,
  FaDesktop
} from 'react-icons/fa';
import '../CaseStudy.css';

const CrumUnderwriting = () => {
  return (
    <section className="case-study">
      <div className="back-link">
        <Link to="/portfolio">← Back to Portfolio</Link>
      </div>

      <div className="case-hero">
        <h1>Crum & Forster – Underwriting Workbench UX Assessment</h1>
        <p>
          A modernization initiative to uplift Crum & Forster’s Pega-based Underwriting Workbench through strategic UX enhancements and Constellation-aligned design improvements.
        </p>
      </div>

      <div className="case-section">
        <h2><FaFolderOpen className="section-icon" /> The Challenge</h2>
        <p>
          Crum & Forster’s underwriting platform was built using Pega UI Kit on version 8.5 and had been recently upgraded to Pega 8.8. While functional, the interface had become cluttered and inconsistent across lines of business.
          The goal was to assess its UX maturity, improve usability, and propose a path toward modernizing the UI without breaking critical workflows.
        </p>
      </div>

      <div className="case-section">
        <h2><FaUserTie className="section-icon" /> My Role as Head of Product & UX Strategy</h2>
        <p>
          I led the UX assessment across the Underwriting Workbench suite — engaging with underwriting leads, claims, and IT to align on experience goals.  
          I defined the UX audit framework, led stakeholder workshops, reviewed legacy UI patterns, and guided my team in creating modern, lightweight designs aligned with Pega Constellation principles.
        </p>
        <p>
          I also acted as the primary presenter for playback sessions with product leadership and regional heads.
        </p>
      </div>

      <div className="case-section">
        <h2><FaSearch className="section-icon" /> Discovery & Heuristics</h2>
        <ul>
          <li>Reviewed over 20 case types across Executive Risk and Specialty teams</li>
          <li>Conducted stakeholder interviews across 4 lines of business</li>
          <li>Performed heuristic analysis based on Nielsen Norman principles</li>
          <li>Identified ~36 UX issues — including deep nesting, modal overload, and unclear user state transitions</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaDraftingCompass className="section-icon" /> Design Improvements</h2>
        <ul>
          <li>Redesigned the case summary and tasking experience using a side-by-side layout with contextual data cards</li>
          <li>Unified widget styling and reduced interaction friction by 32%</li>
          <li>Suggested consistent placement of action buttons and dynamic tabs based on user intent (view vs. edit)</li>
          <li>Introduced lightweight visual patterns to mirror Constellation, reducing full replatforming effort</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaCogs className="section-icon" /> Execution & Collaboration</h2>
        <p>
          I worked closely with the Pega development and business configuration teams to ensure that design improvements could be adopted within the current UI Kit framework.  
          We also created a feasibility grid mapping visual uplift against complexity, recommending a phased approach.
        </p>
        <p>
          I led cross-BU reviews and provided annotated wireframes and handoff kits to the dev team.
        </p>
      </div>

      <div className="case-section">
        <h2><FaTrophy className="section-icon" /> Outcome & Adoption</h2>
        <p>
          The Executive Risk team adopted the proposed new UI with a phased rollout.  
          Feedback from underwriters showed increased comfort with task prioritization, better visibility into related risks, and faster onboarding of junior users.
        </p>
        <p>
          This project served as the foundation for UX uplift across other internal Pega tools within C&F.
        </p>
      </div>

      <div className="case-section">
        <h2><FaLightbulb className="section-icon" /> Key Takeaway</h2>
        <p>
          In enterprise tools, change isn’t just about new UI — it’s about reducing resistance and building trust.  
          By aligning with Pega’s Constellation model visually, without breaking old bones, we found the sweet spot between innovation and feasibility.
        </p>
      </div>

      <div className="case-section">
        <h2><FaDesktop className="section-icon" /> Screenshots</h2>
        <div className="case-images">
          <img src="/images/cf-before.jpg" alt="Legacy UI (Before)" />
          <img src="/images/cf-after.jpg" alt="Proposed UX Uplift (After)" />
        </div>
      </div>
    </section>
  );
};

export default CrumUnderwriting;
