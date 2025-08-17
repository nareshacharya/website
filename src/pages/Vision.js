import React from 'react';
import { FaUserCircle, FaProjectDiagram, FaUniversalAccess, FaChartBar, FaUsers, FaBullseye, FaLayerGroup, FaRegHeart, FaStar, FaLightbulb, FaHandshake } from 'react-icons/fa';
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
              <h3>Systems Thinking</h3>
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

        <section className="vision-section">
          <h2>The Future I'm Building</h2>
          <div className="future-content" style={{marginTop: '2.5rem', marginBottom: '2.5rem'}}>
            <p>I envision a world where technology seamlessly integrates into human life, where interfaces are intuitive, and where digital experiences enhance rather than complicate our daily interactions. Through AI-powered design tools and human-centered methodologies, I'm working to create products that anticipate needs, adapt to contexts, and deliver value that goes beyond functional requirements.</p>
            <p>My goal is to lead teams that don't just design interfaces, but craft experiences that make people's lives better, businesses more successful, and society more connected.</p>
          </div>
        </section>

        <section className="vision-section">
          <h2>Core Values</h2>
          <div className="values-grid" style={{marginTop: '2.5rem', marginBottom: '2.5rem'}}>
            <div className="value-item">
              <FaRegHeart size={32} style={{marginBottom: '0.5rem', color: 'var(--text-primary)'}} />
              <h4>Empathy</h4>
              <p>Understanding user needs through deep research and genuine connection.</p>
            </div>
            <div className="value-item">
              <FaStar size={32} style={{marginBottom: '0.5rem', color: 'var(--text-primary)'}} />
              <h4>Excellence</h4>
              <p>Pursuing the highest standards in every design decision and deliverable.</p>
            </div>
            <div className="value-item">
              <FaLightbulb size={32} style={{marginBottom: '0.5rem', color: 'var(--text-primary)'}} />
              <h4>Innovation</h4>
              <p>Pushing boundaries while maintaining focus on practical, user-centered solutions.</p>
            </div>
            <div className="value-item">
              <FaHandshake size={32} style={{marginBottom: '0.5rem', color: 'var(--text-primary)'}} />
              <h4>Collaboration</h4>
              <p>Building strong partnerships across disciplines to achieve shared goals.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Vision;
