import { Link } from 'react-router-dom';
import {
  FaLayerGroup,
  FaUserTie,
  FaSearch,
  FaDraftingCompass,
  FaCogs,
  FaTrophy,
  FaLightbulb,
  FaDesktop
} from 'react-icons/fa';
import '../CaseStudy.css';

const TALServicePortal = () => {
  return (
    <section className="case-study">
      <div className="back-link">
        <Link to="/portfolio">← Back to Portfolio</Link>
      </div>

      <div className="case-hero">
        <h1>TAL Insurance – UX Assessment for Service & Underwriting Portals</h1>
        <p>
          A 3-week UX deep-dive into TAL’s Pega applications — the Customer Service Portal (CSP) and Akuna Underwriting Workbench — to improve usability, consistency, and Constellation readiness.
        </p>
      </div>

      <div className="case-section">
        <h2><FaLayerGroup className="section-icon" /> The Context</h2>
        <p>
          TAL’s Pega application served multiple user groups via two portals built on the same codebase — CSP for Customer Service and Akuna for Underwriting.
          Over time, inconsistencies in UI patterns, nested flows, and ad-hoc case handling led to increasing complexity and lowered user confidence.
        </p>
      </div>

      <div className="case-section">
        <h2><FaUserTie className="section-icon" /> My Role as Head of UX Strategy</h2>
        <p>
          I led this engagement end-to-end: from stakeholder workshops and UX maturity analysis to redesign proposals and executive playback.
          I defined a week-by-week strategy, facilitated hands-on reviews, and created migration paths that aligned with TAL’s long-term Constellation goals.
        </p>
        <p>
          I also aligned the dev team on effort vs. value tradeoffs and guided my design team through a feasibility-informed redesign of both portals.
        </p>
      </div>

      <div className="case-section">
        <h2><FaSearch className="section-icon" /> UX Assessment Plan</h2>
        <ul>
          <li><strong>Week 1:</strong> Stakeholder workshops, process walkthroughs, heuristic review</li>
          <li><strong>Week 2:</strong> Persona definition, user journey mapping, usability documentation</li>
          <li><strong>Week 3:</strong> Design proposals, Constellation readiness matrix, dev alignment</li>
          <li>Reviewed 12+ case types, 3 personas, and UI friction in over 25 screens</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaDraftingCompass className="section-icon" /> Key Design Insights</h2>
        <ul>
          <li>CSP was eligible for direct Constellation uplift → proposed modular case types with clean layouts</li>
          <li>Akuna lacked a Constellation version → proposed a UI Kit uplift that visually mimicked Constellation</li>
          <li>Split interaction modes (CSR vs. Underwriter) led to UI control confusion</li>
          <li>Action buttons, screen titles, and case journey indicators were inconsistently placed</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaCogs className="section-icon" /> Solution Architecture & Rollout Plan</h2>
        <p>
          I proposed a two-track solution:
        </p>
        <ul>
          <li><strong>Track 1 (CSP):</strong> Use Pega’s native Constellation version and build new case types from scratch in a phased approach</li>
          <li><strong>Track 2 (Akuna):</strong> Apply visual uplift using UI Kit, with reusable component system mimicking Constellation styling</li>
        </ul>
        <p>
          I also introduced a reusable UI template system to maintain visual parity across portals and future-proof the design system.
        </p>
      </div>

      <div className="case-section">
        <h2><FaTrophy className="section-icon" /> Outcomes & Impact</h2>
        <p>
          TAL’s leadership team appreciated the clear path to modernization without replatforming risk.  
          Developers validated that ~70% of the proposed Akuna design uplift could be implemented with moderate effort.
        </p>
        <p>
          My team’s Figma designs are now being used as the base for the phased rollout of new CSP case types using Constellation.
        </p>
      </div>

      <div className="case-section">
        <h2><FaLightbulb className="section-icon" /> Key Takeaway</h2>
        <p>
          Modernization doesn’t always mean a full rebuild.  
          By aligning design direction with technical feasibility and Pega’s product roadmap, we unlocked transformation — without disruption.
        </p>
      </div>

      <div className="case-section">
        <h2><FaDesktop className="section-icon" /> Screenshots</h2>
        <div className="case-images">
          <img src="/images/tal-csp-before.jpg" alt="TAL CSP – Before" />
          <img src="/images/tal-csp-after.jpg" alt="TAL CSP – Constellation Upgrade" />
          <img src="/images/tal-akuna-after.jpg" alt="Akuna UI Kit Uplift" />
        </div>
      </div>
    </section>
  );
};

export default TALServicePortal;
