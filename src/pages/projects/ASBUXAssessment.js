import { Link } from 'react-router-dom';
import {
  FaBoxes,
  FaUserTie,
  FaSearch,
  FaDraftingCompass,
  FaCogs,
  FaTrophy,
  FaLightbulb
} from 'react-icons/fa';
import '../CaseStudy.css';

const ASBUXAssessment = () => {
  return (
    <section className="case-study">
      <div className="back-link">
        <Link to="/portfolio">← Back to Portfolio</Link>
      </div>

      <div className="case-hero">
        <h1>ASB – UX Assessment & Standardization Strategy</h1>
        <p>
          A UI/UX standardization initiative across 18+ Pega applications within ASB Bank, focused on building consistency, design governance, and component reuse.
        </p>
      </div>

      <div className="case-section">
        <h2><FaBoxes className="section-icon" /> The Problem</h2>
        <p>
          ASB Bank's digital estate included 18 Pega applications, each built on different versions (UI Kit, Theme Cosmos, legacy custom).  
          Inconsistent user interfaces, fragmented visual styles, and lack of reusable components created a disjointed experience for internal users and customers.
        </p>
      </div>

      <div className="case-section">
        <h2><FaUserTie className="section-icon" /> My Role as Head of UX Practice</h2>
        <p>
          I led the UX assessment across multiple ASB teams and lines of business, driving the creation of a UI standardization playbook.
          I defined an enterprise-wide design vision, conducted heuristic reviews across applications, and managed team alignment across design, development, and architecture.
        </p>
        <p>
          I also handled stakeholder conflicts, ran alignment sessions with product owners, and introduced best practices for scalable component usage across squads.
        </p>
      </div>

      <div className="case-section">
        <h2><FaSearch className="section-icon" /> Discovery Highlights</h2>
        <ul>
          <li>Audited 18 applications and found 9 distinct UI layouts in use</li>
          <li>Identified over 45 UX gaps — inconsistent field types, misaligned action buttons, unclear screen titles</li>
          <li>Some squads built custom widgets with redundant logic, leading to high maintenance cost</li>
          <li>Developer productivity impacted due to lack of shared design tokens and UI specs</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaDraftingCompass className="section-icon" /> Strategic Recommendations</h2>
        <ul>
          <li>Created a shared visual component system mapped to Pega’s UI Kit & Constellation structures</li>
          <li>Proposed a centralized UX audit workflow across projects before sprint sign-off</li>
          <li>Recommended consolidation of design logic using a shared widget library and branding guidelines</li>
          <li>Established a “UI governance squad” to monitor and evolve experience standards</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaCogs className="section-icon" /> Execution Plan</h2>
        <p>
          I built a phased roadmap:
        </p>
        <ul>
          <li><strong>Phase 1:</strong> UX assessment across 8 core apps</li>
          <li><strong>Phase 2:</strong> Design system creation + handoff to devs</li>
          <li><strong>Phase 3:</strong> Governance setup + ongoing monitoring</li>
        </ul>
        <p>
          My team also created a Figma-based component library aligned to Pega design tokens.
        </p>
      </div>

      <div className="case-section">
        <h2><FaTrophy className="section-icon" /> Outcome</h2>
        <p>
          Teams reported a 28% reduction in UI rework after the rollout of shared design templates.  
          Visual and interaction consistency improved across 6 apps within the first 2 quarters.
        </p>
        <p>
          The governance squad is now driving Constellation adoption using the standards we introduced.
        </p>
      </div>

      <div className="case-section">
        <h2><FaLightbulb className="section-icon" /> What I Learned</h2>
        <p>
          In large enterprise ecosystems, scaling design is not just about components — it’s about culture.  
          Success came from empowering squads to align, not just comply.
        </p>
      </div>

      <div className="case-section">
        <h2>🖼 Screenshots</h2>
        <div className="case-images">
          <img src="/images/asb-audit.jpg" alt="Audit Findings Snapshot" />
          <img src="/images/asb-guidelines.jpg" alt="Standardized UI Guidebook" />
        </div>
      </div>
    </section>
  );
};

export default ASBUXAssessment;
