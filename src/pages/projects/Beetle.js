
import { Link } from 'react-router-dom';
import {
  FaBug, FaLightbulb, FaRocket, FaCogs, FaChartLine, FaUserTie, FaTrophy, FaShieldAlt, FaBolt, FaGlobe
} from 'react-icons/fa';
import '../CaseStudy.css';

const Beetle = () => {
  return (
    <section className="case-study">
      <div className="back-link">
        <Link to="/portfolio">← Back to Portfolio</Link>
      </div>

      <div className="case-hero">

        <h1>Beetle – Strategic Innovation for Pega Constellation</h1>
        <p>By innovating with Beetle, I’ve helped transform our practice positioning from being one of many service providers to being recognized as a consulting partner with IP-led differentiation — a decisive edge in Pega’s competitive ecosystem.</p>
      </div> 
       <img 
          src={process.env.PUBLIC_URL + '/images/beetle-landing.png'} 
          alt="Beetle Landing"
          style={{ width: '100%', height: 'auto', borderRadius: '18px', marginBottom: '2rem', objectFit: 'cover' }}
        />

      <div className="case-section">
        <h2><FaLightbulb className="section-icon" /> My Strategic Vision</h2>
        <p>
          As a Design and Practice Director, I envisioned Beetle not simply as a tool, but as a strategic differentiator for our company in the highly competitive Pega consulting space.
        </p>
        <ul>
          <li>Clients were frustrated with slow, costly, and inconsistent form development in Pega Constellation.</li>
          <li>Competitors solved it with manual effort, but no one built an accelerator merging design, AI, and Pega DX APIs into a single low-code experience.</li>
        </ul>
        <p>
          I conceived Beetle to fill this gap — a brainchild that redefines our positioning in the market, showcasing us not just as delivery partners, but as innovators shaping the future of Pega solutions.
        </p>
      </div>

      <div className="case-section">
        <h2><FaRocket className="section-icon" /> What Beetle Delivers</h2>
        <ul>
          <li>Import Figma Designs → Convert directly into React + TypeScript components.</li>
          <li>Drag & Drop Builder → Simplify creation of forms with ready-to-use elements, selectors, compound components, and layouts.</li>
          <li>DX API Integration → Bind data dynamically with Pega case lifecycle management.</li>
          <li>Enterprise Compliance → Accessibility (WCAG 2.1 AA), theming, and security built in.</li>
          <li>Reusable Templates → Login, Registration, Onboarding, Approvals, Payments, etc.</li>
        </ul>
        <p>This is not just efficiency — it’s enterprise transformation.</p>
      </div>

      <div className="case-section">
        <h2><FaChartLine className="section-icon" /> Business Impact</h2>
        <ul>
          <li>90% faster delivery → Forms built in hours, not days.</li>
          <li>4x productivity boost → Teams ship more, with fewer resources.</li>
          <li>$330k+ annual client savings → Direct cost reductions across portfolios of 200+ forms.</li>
          <li>Risk-free compliance → Accessibility and theming standardized, reducing audit/rework.</li>
          <li>Market Differentiation → Proprietary accelerator, no competitor offers.</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaUserTie className="section-icon" /> My Role as Strategic Leader</h2>
        <ul>
          <li>Visionary → Conceived Beetle as a flagship innovation to strengthen our market positioning.</li>
          <li>Strategic Architect → Ensured Beetle aligned with enterprise needs and Pega’s evolving Constellation framework.</li>
          <li>Practice Builder → Embedded Beetle into our delivery methodology, making it a core capability offered to clients.</li>
          <li>Differentiator → Positioned Beetle as proof of our ability to innovate beyond standard consulting, directly influencing new business wins.</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaBolt className="section-icon" /> Why It Matters</h2>
        <ul>
          <li>Beetle is my brainchild and a reflection of my leadership philosophy:</li>
          <li>Don’t just deliver projects → create strategic assets.</li>
          <li>Don’t just compete → differentiate with innovation.</li>
          <li>Don’t just follow Pega’s roadmap → build accelerators that put us ahead.</li>
        </ul>
      </div>

       <div className="case-section">
         <h2><FaGlobe className="section-icon" /> Screenshots</h2>
         <div className="case-images">
           <img src="/images/beetle-login.png" alt="Beetle Login" />
           <img src="/images/beetle-1.png" alt="Beetle Login" />
           <img src="/images/beetle-2.png" alt="Beetle Login" />
           <img src="/images/beetle-3.png" alt="Beetle Login" />
           <img src="/images/beetle-4.png" alt="Beetle Login" />
           <img src="/images/beetle-5.png" alt="Beetle Login" />
         </div>
       </div>     

    </section>
  );
};

export default Beetle;
