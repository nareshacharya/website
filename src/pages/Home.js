import './Home.css';

import SneekPeek from '../components/SneekPeek';
import '../components/SneekPeek.css';
import HeroMinimal from '../components/HeroMinimal';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedCompetencies from '../components/AnimatedCompetencies';
import Certifications from '../components/Certifications';

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  if (inView) controls.start("show");

  return (
    <>
      <HeroMinimal />
      
      {/* Leadership Impact Section */}
      <section className="leadership-impact-section">
        <div className="leadership-content">
          <div className="leadership-header">
            <h2>Leadership Impact at Scale</h2>
            <p className="leadership-subtitle">
              Transforming organizations through strategic design leadership, team empowerment, and AI-driven innovation that delivers measurable business results.
            </p>
          </div>
          
          <div className="impact-metrics">
            <div className="metric-item">
              <div className="metric-number">30+</div>
              <div className="metric-label">Design Team Members Led</div>
              <div className="metric-description">
                Built and scaled high-performing design organizations across multiple enterprise companies
              </div>
            </div>
            
            <div className="metric-item">
              <div className="metric-number">$10M+</div>
              <div className="metric-label">Business Impact Delivered</div>
              <div className="metric-description">
                Drove measurable revenue growth through strategic UX initiatives and product innovations
              </div>
            </div>
            
            <div className="metric-item">
              <div className="metric-number">50+</div>
              <div className="metric-label">Enterprise Projects Delivered</div>
              <div className="metric-description">
                Led end-to-end design transformation for Fortune 500 companies and global brands
              </div>
            </div>
            
            <div className="metric-item">
              <div className="metric-number">2</div>
              <div className="metric-label">AI Tools Built In-House</div>
              <div className="metric-description">
                Pioneered Hekla and Beetle - revolutionary AI-powered design and development platforms
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Transformational Projects Section */}
      <section className="transformational-projects-section">
        <div className="projects-content">
          <div className="projects-header">
            <h2>My Flagship Products</h2>
            <p className="projects-subtitle">
              Strategic design leadership that drives business transformation and creates measurable impact across industries and user segments.
            </p>
          </div>
          
          

     {/* Hekla App Flagship Section */}
      <div className="hekla-flagship-section">
        <div className="hekla-flagship-row">
          <div className="hekla-flagship-image-wrapper">
            <img src={process.env.PUBLIC_URL + '/images/hekla.png'} alt="Hekla AI App Builder" className="hekla-flagship-image" />
          </div>
          <div className="hekla-flagship-content">
            <h2 className="hekla-title">Hekla <br />AI App Builder</h2>
            <div className="hekla-subtitle">First-of-its-kind AI-powered platform that transforms natural language into enterprise-grade Pega apps.</div>
            <div className="hekla-description">
              I spearheaded the vision, design, and full development of Hekla — a flagship innovation redefining Pega consulting. With unmatched speed, efficiency, and ROI, it delivers apps in hours instead of weeks, setting a new benchmark in the industry.
            </div>
            <div className="hekla-stats-row">
              <div className="hekla-stat"><span className="stat-value">10x</span><span className="stat-label">Faster Delivery</span></div>
              <div className="hekla-stat"><span className="stat-value">$2.5M+</span><span className="stat-label">Business Impact</span></div>
              <div className="hekla-stat"><span className="stat-value">100% AI</span><span className="stat-label">No-Code Apps</span></div>
            </div>
            <a href="#" className="cta-button primary hekla-cta">View Product</a>
          </div>
        </div>
      </div>

     {/* Beetle App Flagship Section */}
      <div className="hekla-flagship-section">
        <div className="hekla-flagship-row">
          <div className="hekla-flagship-image-wrapper">
            <img src={process.env.PUBLIC_URL + '/images/beetle-landing.png'} alt="Hekla AI App Builder" className="hekla-flagship-image" />
          </div>
          <div className="hekla-flagship-content">
            <h2 className="hekla-title">Beetle  <br />Low-Code Accelerator</h2>
            <div className="hekla-subtitle">Proprietary low-code platform bridging Figma design and Pega DX API for rapid, accessible enterprise app delivery.</div>
            <div className="hekla-description">
              Conceived and built Beetle to give our team a competitive edge in Pega consulting. Enables 4x faster delivery, seamless Figma-to-code workflow, and enterprise-ready, accessible components.
            </div>
            <div className="hekla-stats-row">
              <div className="hekla-stat"><span className="stat-value">4x</span><span className="stat-label">Faster Delivery</span></div>
              <div className="hekla-stat"><span className="stat-value">$330k+</span><span className="stat-label">Annual Client Savings</span></div>
              <div className="hekla-stat"><span className="stat-value">100%</span><span className="stat-label">Accessible Components</span></div>
            </div>
            <a href="#" className="cta-button primary hekla-cta">View Product</a>
          </div>
        </div>
      </div>


          <div className="portfolio-cta">
            <a href="/portfolio" className="portfolio-btn">Explore Complete Portfolio</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
