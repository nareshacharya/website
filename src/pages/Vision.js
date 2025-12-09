import React from 'react';
import { FaUserCircle, FaProjectDiagram, FaUniversalAccess, FaChartBar, FaUsers, FaBullseye, FaLayerGroup, FaRegHeart, FaStar, FaLightbulb, FaHandshake, FaSearch, FaFileAlt, FaPaintBrush, FaRocket, FaSyncAlt } from 'react-icons/fa';
import './Vision.css';

const Vision = () => {
  return (
    <div className="vision-wrapper">
      <div className="page-hero">
        <h1>Vision & Philosophy</h1>
      </div>

      <div className="vision-content">
        <section className="vision-section">
          <h2>My Design Philosophy</h2>
          <div className="philosophy-grid" style={{marginTop: '2.5rem', marginBottom: '2.5rem'}}>
            <div className="philosophy-item">
              <FaUserCircle size={36} style={{marginBottom: '1rem', color: 'var(--accent-primary)'}} />
              <h3>Human-Centered Design</h3>
              <p>Every design decision should enhance human potential and create meaningful connections between people and technology.</p>
            </div>
            <div className="philosophy-item">
              <FaProjectDiagram size={36} style={{marginBottom: '1rem', color: 'var(--accent-primary)'}} />
              <h3>Systems Thinking<br /><br /></h3>
              <p>Design solutions that consider the entire ecosystem, from individual interactions to organizational impact.</p>
            </div>
            <div className="philosophy-item">
              <FaUniversalAccess size={36} style={{marginBottom: '1rem', color: 'var(--accent-primary)'}} />
              <h3>Inclusive Innovation</h3>
              <p>Create accessible experiences that work for everyone, regardless of ability, background, or context.</p>
            </div>
            <div className="philosophy-item">
              <FaChartBar size={36} style={{marginBottom: '1rem', color: 'var(--accent-primary)'}} />
              <h3>Data-Informed Decisions</h3>
              <p>Balance quantitative insights with qualitative understanding to make informed design choices.</p>
            </div>
          </div>
        </section>

        <section className="vision-section">
          <h2>My Vision for Design Leadership</h2>
          <div className="vision-pillars" style={{marginTop: '2.5rem', marginBottom: '2.5rem'}}>
            <div className="pillar">
              <FaUsers size={36} style={{marginBottom: '1rem', color: 'var(--accent-secondary)'}} />
              <h3>Empowering Teams</h3>
              <p>Build design cultures where creativity thrives and every voice contributes to exceptional outcomes.</p>
            </div>
            <div className="pillar">
              <FaBullseye size={36} style={{marginBottom: '1rem', color: 'var(--accent-secondary)'}} />
              <h3>Strategic Impact</h3>
              <p>Bridge the gap between business objectives and user needs to drive measurable growth and innovation.</p>
            </div>
            <div className="pillar">
              <FaLayerGroup size={36} style={{marginBottom: '1rem', color: 'var(--accent-secondary)'}} />
              <h3>Scalable Excellence</h3>
              <p>Establish design systems and processes that enable consistent, high-quality experiences across all touchpoints.</p>
            </div>
          </div>
        </section>

        <section className="vision-section approach-section">
          <div style={{width: '100%', maxWidth: '100%', padding: '0 2rem'}}>
            <h2 style={{marginBottom: '2rem'}}>My Approach: Concept → Delivery</h2>
            <div className="approach-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '2rem', marginTop: '2.5rem', marginBottom: '5rem'}}>
              <div className="approach-stage">
                <FaSearch size={32} style={{marginBottom: '1rem', color: 'var(--accent-primary)'}} />
                <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '600'}}>1. Discovery</h3>
                <ul style={{textAlign: 'left', lineHeight: '1.6', fontSize: '1rem', color: 'var(--text-secondary)', paddingLeft: '1.2rem'}}>
                  <li>Business goals & KPIs</li>
                  <li>User needs & JTBD</li>
                  <li>Competitive analysis</li>
                  <li>Experience principles</li>
                </ul>
              </div>
              <div className="approach-stage">
                <FaFileAlt size={32} style={{marginBottom: '1rem', color: 'var(--accent-primary)'}} />
                <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '600'}}>2. Definition</h3>
                <ul style={{textAlign: 'left', lineHeight: '1.6', fontSize: '1rem', color: 'var(--text-secondary)', paddingLeft: '1.2rem'}}>
                  <li>Information architecture</li>
                  <li>User flows & content</li>
                  <li>Design requirements</li>
                  <li>Component mapping</li>
                </ul>
              </div>
              <div className="approach-stage">
                <FaPaintBrush size={32} style={{marginBottom: '1rem', color: 'var(--accent-primary)'}} />
                <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '600'}}>3. Design</h3>
                <ul style={{textAlign: 'left', lineHeight: '1.6', fontSize: '1rem', color: 'var(--text-secondary)', paddingLeft: '1.2rem'}}>
                  <li>Components & variables</li>
                  <li>Design tokens</li>
                  <li>Accessibility standards</li>
                  <li>Interaction & motion</li>
                </ul>
              </div>
              <div className="approach-stage">
                <FaRocket size={32} style={{marginBottom: '1rem', color: 'var(--accent-primary)'}} />
                <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '600'}}>4. Delivery</h3>
                <ul style={{textAlign: 'left', lineHeight: '1.6', fontSize: '1rem', color: 'var(--text-secondary)', paddingLeft: '1.2rem'}}>
                  <li>Dev Mode & specs</li>
                  <li>Code Connect</li>
                  <li>Storybook alignment</li>
                  <li>QA & sign-off</li>
                </ul>
              </div>
              <div className="approach-stage">
                <FaSyncAlt size={32} style={{marginBottom: '1rem', color: 'var(--accent-primary)'}} />
                <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '600'}}>5. Iterate</h3>
                <ul style={{textAlign: 'left', lineHeight: '1.6', fontSize: '1rem', color: 'var(--text-secondary)', paddingLeft: '1.2rem'}}>
                  <li>Analytics & heatmaps</li>
                  <li>A/B testing</li>
                  <li>Backlog refinement</li>
                  <li>System evolution</li>
                </ul>
              </div>
            </div>
            <div className="approach-message" style={{textAlign: 'center', marginTop: '1.5rem', padding: '1.25rem', background: 'var(--bg-secondary)', borderRadius: '8px', borderLeft: '4px solid var(--accent-primary)'}}>
              <p style={{fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-primary)', margin: 0}}>
                "My process ensures design is not just created, but delivered with integrity."
              </p>
            </div>
          </div>
        </section>

        <section className="vision-section">
          <h2>Core Values</h2>
          <div className="values-grid" style={{marginTop: '2.5rem', marginBottom: '2.5rem'}}>
            <div className="value-item">
              <FaRegHeart size={32} style={{marginBottom: '0.5rem', color: 'var(--text-primary)'}} />
              <h3>Empathy</h3>
              <p>Understanding user needs through deep research and genuine connection.</p>
            </div>
            <div className="value-item">
              <FaStar size={32} style={{marginBottom: '0.5rem', color: 'var(--text-primary)'}} />
              <h3>Excellence</h3>
              <p>Pursuing the highest standards in every design decision and deliverable.</p>
            </div>
            <div className="value-item">
              <FaLightbulb size={32} style={{marginBottom: '0.5rem', color: 'var(--text-primary)'}} />
              <h3>Innovation</h3>
              <p>Pushing boundaries while maintaining focus on practical, user-centered solutions.</p>
            </div>
            <div className="value-item">
              <FaHandshake size={32} style={{marginBottom: '0.5rem', color: 'var(--text-primary)'}} />
              <h3>Collaboration</h3>
              <p>Building strong partnerships across disciplines to achieve shared goals.</p>
            </div>
          </div>
        </section>

        <section className="vision-section">
          <h2>The Future I'm Building</h2>
          <div className="future-content" style={{marginTop: '2.5rem', marginBottom: '2.5rem'}}>
            <p>I envision a world where technology seamlessly integrates into human life, where interfaces are intuitive, and where digital experiences enhance rather than complicate our daily interactions. Through AI-powered design tools and human-centered methodologies, I'm working to create products that anticipate needs, adapt to contexts, and deliver value that goes beyond functional requirements.</p>
            <p>My goal is to lead teams that don't just design interfaces, but craft experiences that make people's lives better, businesses more successful, and society more connected.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Vision;
