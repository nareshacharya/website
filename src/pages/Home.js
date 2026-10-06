import './Home.css';

import '../components/SneekPeek.css';
import HeroMinimal from '../components/HeroMinimal';
import CompetenciesSection from '../components/CompetenciesSection';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <HeroMinimal />
      
      {/* Leadership Impact Section */}
      <section className="leadership-impact-section">
        <div className="leadership-content">
          <div className="leadership-header">
            <h2>Leadership Impact at Scale</h2>
            <p className="leadership-subtitle">
              Leading creative delivery across EMEA while connecting product strategy, research, experience design and frontend implementation.
            </p>
          </div>
          
          <div className="impact-metrics">
            <div className="metric-item">
              <div className="metric-number">01</div>
              <div className="metric-label">Discovery & Research</div>
              <div className="metric-description">
                Understanding the domain, users and constraints before defining the product direction
              </div>
            </div>
            
            <div className="metric-item">
              <div className="metric-number">02</div>
              <div className="metric-label">Product Definition</div>
              <div className="metric-description">
                Turning insight into requirements, priorities and journeys that a team can build
              </div>
            </div>
            
            <div className="metric-item">
              <div className="metric-number">03</div>
              <div className="metric-label">Experience Design</div>
              <div className="metric-description">
                Designing interfaces and systems that make complex workflows easier to use
              </div>
            </div>
            
            <div className="metric-item">
              <div className="metric-number">04</div>
              <div className="metric-label">Frontend Implementation</div>
              <div className="metric-description">
                Prototyping and building working software to test ideas in practice
              </div>
            </div>
          </div>
        </div>
      </section>

<CompetenciesSection />

      {/* Transformational Projects Section */}
      <section className="transformational-projects-section">
        <div className="projects-content">
          <div className="projects-header">
            <h2>Product Innovation</h2>
            <p className="projects-subtitle">
              Exploring useful products from discovery and interaction design through working software. Here are two prototypes I can share:
            </p>
          </div>
          
          

     {/* Hekla App Flagship Section */}
      <div className="hekla-flagship-section">
        <div className="hekla-flagship-row">
          <div className="hekla-flagship-image-wrapper">
            <img src={process.env.PUBLIC_URL + '/images/hekla.png'} alt="Hekla AI App Builder" className="hekla-flagship-image" />
          </div>
          <div className="hekla-flagship-content">
            <h2 className="hekla-title">Hekla - AI App Builder</h2>
            <div className="hekla-subtitle">An AI app builder proof of concept for Pega-connected applications.</div>
            <div className="hekla-description">
              I developed Hekla from concept to a working proof of concept, exploring how natural-language prompts could help teams create application interfaces connected to Pega.
            </div>
            <Link to="/portfolio/hekla" className="cta-button secondary">View Product</Link>
          </div>
        </div>
      </div>

     {/* Beetle App Flagship Section */}
      <div className="hekla-flagship-section">
        <div className="hekla-flagship-row">
          <div className="hekla-flagship-image-wrapper">
            <img src={process.env.PUBLIC_URL + '/images/beetle-landing.png'} alt="Beetle visual low-code builder" className="hekla-flagship-image" />
          </div>
          <div className="hekla-flagship-content">
            <h2 className="hekla-title">Beetle - Low-Code Accelerator</h2>
            <div className="hekla-subtitle">A visual low-code builder prototype for Pega-connected interfaces.</div>
            <div className="hekla-description">
              I conceived and built Beetle as a prototype for moving from interface concepts to reusable application components with a visual workflow.
            </div>
            <Link to="/portfolio/beetle" className="cta-button secondary">View Product</Link>
          </div>
        </div>
      </div>


          <div className="portfolio-cta">
            <Link to="/portfolio" className="portfolio-btn">Explore My Work</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
