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

      {/* AI Innovation Leadership Section */}
      <section className="ai-innovation-section">
        <div className="ai-innovation-content">
          <div className="ai-innovation-header">
            <h2>AI Innovation Leadership</h2>
            <p className="ai-innovation-subtitle">
              Pioneering the integration of artificial intelligence into design workflows and user experiences. Leading cross-functional teams to build revolutionary tools that transform how designers and developers create digital products.
            </p>
          </div>
          
          <div className="ai-tools-grid">
            <div className="ai-tool-card">
              <div className="tool-image">
                <div className="tool-icon hekla-icon">H</div>
              </div>
              <div className="tool-header">
                <h3>Hekla</h3>
                <div className="tool-badges">
                  <span className="impact-badge high">High Impact</span>
                  <span className="term-badge short">Short Term</span>
                </div>
              </div>
              <p className="tool-description">
                AI-powered app builder revolutionizing product development workflows
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformational Projects Section */}
      <section className="transformational-projects-section">
        <div className="projects-content">
          <div className="projects-header">
            <h2>Transformational Projects</h2>
            <p className="projects-subtitle">
              Strategic design leadership that drives business transformation and creates measurable impact across industries and user segments.
            </p>
          </div>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src={process.env.PUBLIC_URL + '/images/hekla-project.jpg'} alt="Hekla AI Project" />
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <div className="project-title">
                    <h3>Hekla AI</h3>
                    <span className="project-type">AI-Powered App Builder</span>
                  </div>
                  <img src={process.env.PUBLIC_URL + '/images/hekla-logo.png'} alt="Hekla AI" className="project-logo" />
                </div>
                
                <p className="project-description">
                  Revolutionary platform enabling non-technical users to build sophisticated applications through natural language interfaces. Led the complete design strategy and product vision, resulting in breakthrough user adoption and significant revenue generation.
                </p>
                
                <div className="project-metrics">
                  <div className="metric">
                    <div className="metric-value">$2.5M ARR Generated</div>
                    <div className="metric-label">Business Impact</div>
                  </div>
                  <div className="metric">
                    <div className="metric-value">18 months</div>
                    <div className="metric-label">Timeline</div>
                  </div>
                  <div className="metric">
                    <div className="metric-value">25 Specialists</div>
                    <div className="metric-label">Team Size</div>
                  </div>
                </div>
                
                <a href="#" className="case-study-btn">View Detailed Case Study</a>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <img src={process.env.PUBLIC_URL + '/images/beetle-landing.png'} alt="Beetle Platform Project" />
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <div className="project-title">
                    <h3>🐞 Beetle Platform</h3>
                    <span className="project-type">Strategic Innovation & Low-Code Development</span>
                  </div>
                  <div className="project-logo-placeholder">
                    <div className="beetle-icon-small">B</div>
                  </div>
                </div>
                
                <p className="project-description">
                  <strong>My Strategic Innovation for Pega Constellation:</strong> Conceived Beetle as a proprietary low-code form builder to position our company ahead in Pega consulting. Bridges the gap between design (Figma) and Pega DX API implementation, serving as a competitive differentiator with enterprise-ready components, built-in accessibility, and Constellation theming.
                </p>
                
                <div className="project-highlights">
                  <div className="highlight-item">
                    <strong>Vision:</strong> Strategic accelerator that differentiates us in competitive market
                  </div>
                  <div className="highlight-item">
                    <strong>Innovation:</strong> Import Figma → Export React + TypeScript components
                  </div>
                  <div className="highlight-item">
                    <strong>My Role:</strong> Brainchild & Visionary - Designed as strategic innovation and competitive edge
                  </div>
                </div>
                
                <div className="project-metrics">
                  <div className="metric">
                    <div className="metric-value">90% Faster Creation</div>
                    <div className="metric-label">Business Impact</div>
                  </div>
                  <div className="metric">
                    <div className="metric-value">4x Productivity</div>
                    <div className="metric-label">Delivery Speed</div>
                  </div>
                  <div className="metric">
                    <div className="metric-value">$330k+ Annual Savings</div>
                    <div className="metric-label">Client Value</div>
                  </div>
                </div>
                
                <a href="#" className="case-study-btn">View Strategic Innovation Case Study</a>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <img src={process.env.PUBLIC_URL + '/images/smart-cities-project.jpg'} alt="Smart Cities Initiative Project" />
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <div className="project-title">
                    <h3>Smart Cities Initiative</h3>
                    <span className="project-type">Public Safety Innovation</span>
                  </div>
                  <img src={process.env.PUBLIC_URL + '/images/smart-cities-logo.png'} alt="Smart Cities Initiative" className="project-logo" />
                </div>
                
                <p className="project-description">
                  Transformative digital solutions for urban infrastructure, impacting over 2 million citizens through intelligent design. Spearheaded cross-functional teams to create safer urban environments using IoT, AI, and data analytics.
                </p>
                
                <div className="project-metrics">
                  <div className="metric">
                    <div className="metric-value">2M+ Citizens Served</div>
                    <div className="metric-label">Business Impact</div>
                  </div>
                  <div className="metric">
                    <div className="metric-value">24 months</div>
                    <div className="metric-label">Timeline</div>
                  </div>
                  <div className="metric">
                    <div className="metric-value">35 Specialists</div>
                    <div className="metric-label">Team Size</div>
                  </div>
                </div>
                
                <a href="#" className="case-study-btn">View Detailed Case Study</a>
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
