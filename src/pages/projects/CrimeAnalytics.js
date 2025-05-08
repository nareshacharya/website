import { Link } from 'react-router-dom';
import {
  FaChartArea,
  FaUserTie,
  FaSearch,
  FaDraftingCompass,
  FaCogs,
  FaTrophy,
  FaLightbulb
} from 'react-icons/fa';
import '../CaseStudy.css';

const CrimeAnalytics = () => {
  return (
    <section className="case-study">
      <div className="back-link">
        <Link to="/portfolio">← Back to Portfolio</Link>
      </div>

      <div className="case-hero">
        <h1>Crime Analytics Platform</h1>
        <p>
          A data intelligence solution that visualizes crime heatmaps, patterns, and risk zones — empowering police departments to prevent crime, not just respond to it.
        </p>
      </div>

      <div className="case-section">
        <h2><FaChartArea className="section-icon" /> The Challenge</h2>
        <p>
          Law enforcement teams lacked a single view to track, correlate, and predict criminal activity across neighborhoods. Most decisions relied on anecdotal memory or offline FIR logs.
          Our goal was to deliver an insight-rich geospatial platform to drive data-informed policing at scale.
        </p>
      </div>

      <div className="case-section">
        <h2><FaUserTie className="section-icon" /> My Role as Head of Product & Design</h2>
        <p>
          I led both strategic and tactical execution — from aligning on vision with crime analysts to defining detailed GIS interactions with our engineering team.
          I mentored UX designers on building map-based dashboards, set product priorities, and reviewed every sprint milestone against real policing needs.
        </p>
        <p>
          I also conducted stakeholder walkthroughs with district-level intelligence teams and data model experts to validate use cases.
        </p>
      </div>

      <div className="case-section">
        <h2><FaSearch className="section-icon" /> Discovery & Insights</h2>
        <ul>
          <li>Crime data came from multiple disconnected systems — FIRs, court records, patrol logs</li>
          <li>Officers wanted clear “repeat incident zones” and links to social-political triggers</li>
          <li>Pattern visibility over time was more valuable than dense statistical dashboards</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaDraftingCompass className="section-icon" /> UX Design System</h2>
        <ul>
          <li>Designed layered map overlays with toggles for crime category, time, and frequency</li>
          <li>Built visual correlation models using POIs, festivals, and local events</li>
          <li>Created drill-down flows for trends, repeat offenders, and geographic hotspots</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaCogs className="section-icon" /> Execution & Collaboration</h2>
        <p>
          I worked in close sync with GIS engineers and backend teams to optimize spatial queries and response times for map rendering.  
          We ran co-creation workshops with crime analysts to simplify filters, and field-tested views in actual police control rooms.
        </p>
      </div>

      <div className="case-section">
        <h2><FaTrophy className="section-icon" /> Results & Adoption</h2>
        <p>
          The platform enabled predictive beat deployment and reduced blind spots in crime prevention strategy.  
          Departments reported more confidence in their weekly crime briefings using our trend overlays.
        </p>
      </div>

      <div className="case-section">
        <h2><FaLightbulb className="section-icon" /> Key Takeaway</h2>
        <p>
          Data alone doesn’t drive change — clarity does. We turned cold crime stats into living, breathing spatial stories that made prevention visual and tactical.
        </p>
      </div>

      <div className="case-section">
        <h2>🖼 Screenshots</h2>
        <div className="case-images">
          <img src="/images/crime-heatmap.jpg" alt="Crime Heatmap View" />
          <img src="/images/crime-dashboard.jpg" alt="Crime Dashboard & Trend Analysis" />
        </div>
      </div>
    </section>
  );
};

export default CrimeAnalytics;
