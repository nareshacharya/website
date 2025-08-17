
import { Link } from 'react-router-dom';
import {
  FaRocket, FaUserTie, FaPuzzlePiece, FaLightbulb, FaCogs, FaTrophy, FaChartLine, FaLock, FaGlobe, FaBolt
} from 'react-icons/fa';
import '../CaseStudy.css';

const Hekla = () => {
  return (
    <section className="case-study">
      <div className="back-link">
        <Link to="/portfolio">← Back to Portfolio</Link>
      </div>

      <div className="case-hero">
        <h1>Hekla – AI App Builder for Pega</h1>
        <p className="case-tagline">
          “Hekla is my flagship innovation — the first AI App Builder for Pega, created end-to-end by me, redefining speed, efficiency, and quality in enterprise app development.”
        </p>
      </div>

      <img 
  src={process.env.PUBLIC_URL + '/images/hekla.png'} 
  alt="Hekla Landing"
  style={{ width: '100%', height: 'auto', borderRadius: '18px', marginBottom: '2rem', objectFit: 'cover' }}
/>

      <div className="case-section">
        <h2><FaUserTie className="section-icon" /> Role: End-to-End Owner</h2>
        <p>
          Vision, Design, Development & Delivery — 100% owned and executed by me.
        </p>
      </div>

      <div className="case-section">
        <h2><FaPuzzlePiece className="section-icon" /> The Challenge</h2>
        <ul>
          <li>Slow: Weeks of repetitive setup and coding before business users saw results.</li>
          <li>Expensive: Large teams required for even basic app scaffolding.</li>
          <li>Uncompetitive: No productized accelerator for consulting firms to differentiate.</li>
          <li>No market-ready solution combining AI, React, and Pega DX APIs.</li>
        </ul>
      </div>


      <div className="case-section">
        <h2><FaLightbulb className="section-icon" /> My Vision</h2>
        <ul>
          <li>Business users describe needs in plain English.</li>
          <li>System instantly generates a working React+Next.js app, integrated with Pega workflows.</li>
          <li>Developers get a VS Code-like experience in the browser, with built-in GitHub publishing.</li>
        </ul>
        <p>
          This vision became Hekla — the first AI-native app builder for Pega, unmatched in the market.
        </p>
      </div>

      <div className="case-section">
        <h2><FaCogs className="section-icon" /> My Contribution (100% Ownership)</h2>
        <ul>
          <li>Vision & Strategy: Identified the market gap and positioned Hekla as a strategic differentiator.</li>
          <li>Product Design: Designed the 3-panel workspace (Prompt, File Explorer, Editor) for a clean, developer-friendly UX.</li>
          <li>Architecture: Selected and integrated Next.js, React, Monaco Editor, Zustand, Tailwind, NextAuth, and GitHub APIs.</li>
          <li>Development: Built the entire platform, from AI prompt handling to GitHub publishing and DX API integration.</li>
          <li>Rollout: Deployed on Vercel, onboarded teams, and drove adoption across the company.</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaRocket className="section-icon" /> The Solution – Hekla</h2>
        <ul>
          <li>Browser-based IDE powered by AI.</li>
          <li>Generates enterprise-ready apps from natural language prompts.</li>
          <li>Full coding experience in the browser.</li>
          <li>Seamless Pega DX API integration for case lifecycle workflows.</li>
          <li>One-click GitHub publishing and live deployment.</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaChartLine className="section-icon" /> Business Impact</h2>
        <ul>
          <li>90% Faster Delivery – project timelines reduced from weeks → hours.</li>
          <li>High ROI – optimized team efforts, reduced costs, and increased profitability.</li>
          <li>Strategic Differentiator – only product of its kind in the Pega consulting space.</li>
          <li>Company-Wide Adoption – used actively across projects to accelerate client delivery.</li>
          <li>Unmatched Quality – consistent, secure, enterprise-grade code every time.</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaTrophy className="section-icon" /> Flagship Achievement</h2>
        <ul>
          <li>Envisioned, designed, and developed entirely by me.</li>
          <li>First in the market – no competitor has a similar accelerator.</li>
          <li>Flagship solution driving company-wide transformation.</li>
          <li>Proof of end-to-end leadership: strategy → design → build → adoption.</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaGlobe className="section-icon" /> Screenshots</h2>
        <div className="case-images">
          <img src="/images/hekla-cover.png" alt="Hekla IDE Screenshot" />
           <img src="/images/hekla-1.png" alt="Hekla Screenshot 1" />
           <img src="/images/hekla-2.png" alt="Hekla Screenshot 2" />
           <img src="/images/hekla-3.png" alt="Hekla Screenshot 3" />
           <img src="/images/hekla-4.png" alt="Hekla Screenshot 4" />
           <img src="/images/hekla-5.png" alt="Hekla Screenshot 5" />    
           <img src="/images/hekla-6.png" alt="Hekla Screenshot 6" />
           <img src="/images/hekla-7.png" alt="Hekla Screenshot 7" />                     
        </div>
      </div>
    </section>
  );
};

export default Hekla;
