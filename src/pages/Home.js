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
            
            <div className="ai-tool-card">
              <div className="tool-header">
                <h3>Beetle</h3>
                <div className="tool-badges">
                  <span className="impact-badge medium">Medium Impact</span>
                  <span className="term-badge medium">Medium Term</span>
                </div>
              </div>
              <p className="tool-description">
                Low-code platform enabling 10x faster custom component development for Pega
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        <p>
          As a Director of Product Design, I lead cross-functional teams to deliver AI-driven enterprise experiences that transform how organizations work. I specialize in design systems, enterprise UX, and executive leadership, with a proven track record of scaling design operations and driving product innovation across complex business domains.
        </p>
      </section>
      <AnimatedCompetencies />
      <Certifications />
      <SneekPeek />
    </>
  );
};

export default Home;
