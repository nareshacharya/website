
import './About.css';

const About = () => {
  return (
    <div className="about-wrapper">
      {/* Hero Section */}
      <div className="page-hero">
        <h1>About Me</h1>
      </div>
      <section className="about-hero">
        <h2>Product thinking, design and implementation</h2>
        <p className="hero-description">
          I’m Head of Creative and Associate Vice President at Photon Interactive, leading the EMEA creative team and its delivery. My work spans understanding domains and users, defining product requirements, mapping journeys, designing interfaces and building working software. I lead teams and advise clients while staying hands-on.
        </p>
        <p className="hero-description">
          At Photon, I lead work on AI-first and agentic application experiences for global corporations, including simplifying traditional application flows so tasks are easier to complete. I mentor and train UX practitioners in AI and UX, and run practical sessions on current models, their capabilities, performance and pricing so the team can make informed choices.
        </p>
        <p className="hero-description">
          Earlier work includes accounts and wallets at Entain, public safety with L&amp;T, citizen services with EY, Pega and React at Areteans, and consulting at Deloitte. I have also taken EMIdaddy and realIQ from product definition through implementation.
        </p>
        
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">20+</div>
            <div className="stat-label">Years in Design & Technology</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Countries Visited</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5K+</div>
            <div className="stat-label">Photos Captured</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">6K+</div>
            <div className="stat-label">Kilometres Cycled</div>
          </div>
        </div>
        
        <div className="hero-ctas">
          <a 
            href={process.env.PUBLIC_URL + '/images/Naresh_Pentapati_Resume_Product_Design.pdf'}
            className="cta-btn primary"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
          <a
            href="mailto:pentapati.naresh@gmail.com?subject=Coffee%20chat"
            className="cta-btn secondary"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <h2>My Journey</h2>
        <p className="section-subtitle">
          From frontend development to product and experience leadership, with hands-on work across research, design and engineering.
        </p>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2007</div>
            <div className="timeline-content">
              <h3>Frontend Beginnings</h3>
              <p>Started working in frontend development and grew toward user experience and product design.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">2012</div>
            <div className="timeline-content">
              <h3>UX Transformation</h3>
              <p>Discovered user experience design and the power of human-centered problem solving.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">2016</div>
            <div className="timeline-content">
              <h3>Leadership Evolution</h3>
              <p>Transitioned to leading product teams and discovered my passion for organizational impact.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">2021</div>
            <div className="timeline-content">
              <h3>Head of Product Experience, Areteans</h3>
              <p>Led product experience work from May 2021 through April 2026, including Pega and React-based experiences.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">2024</div>
            <div className="timeline-content">
              <h3>Visual Builder Prototype</h3>
              <p>Explored visual workflows for creating Pega-connected application components through Beetle.</p>
            </div>
          </div> 
          <div className="timeline-item">
            <div className="timeline-year">2025</div>
            <div className="timeline-content">
              <h3>AI App Builder Proof of Concept</h3>
              <p>Developed Hekla as a proof of concept for creating Pega-connected interfaces from natural-language prompts.</p>
            </div>
          </div>                    
          <div className="timeline-item">
            <div className="timeline-year">2026</div>
            <div className="timeline-content">
              <h3>Head of Creative & Associate Vice President, Photon Interactive</h3>
              <p>Since May 2026, leading the EMEA creative team and delivery, AI-first and agentic application experiences, and practical AI and UX learning for the team.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2027</div>
            <div className="timeline-content">
              <h3>MBA in AI, BITS</h3>
              <p>Expected April 2027.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Passions Section */}
      <section className="passions-section">
        <h2>Personal Passions</h2>
        <p className="section-subtitle">
          The diverse interests and experiences that fuel my creativity, broaden my perspective, and bring fresh insights to design leadership challenges.
        </p>
        
        <div className="passions-grid">
          <div className="passion-card">
            <div className="passion-image">
              <img src={process.env.PUBLIC_URL + '/images/about/wildlife.jpg'} alt="Wildlife Photography" loading="lazy" />
            </div>
            <div className="passion-content">
              <h3>Wildlife Photography</h3>
              <p>Capturing the beauty of nature and wildlife across different continents. My photography has been featured in National Geographic and wildlife conservation publications.</p>
              <div className="achievements">
                <h4>Achievements:</h4>
                <ul>
                  <li>1 Wildlife Photography Awards</li>
                  <li>5 Countries Documented</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="passion-card">
            <div className="passion-image">
              <img src={process.env.PUBLIC_URL + '/images/about/cycling.jpg'} alt="Cycling Adventures" loading="lazy" />
            </div>
            <div className="passion-content">
              <h3>Cycling Adventures</h3>
              <p>Long-distance cycling enthusiast who finds inspiration and clarity on two wheels. Completed several cross-country tours and mountain cycling challenges.</p>
              <div className="achievements">
                <h4>Achievements:</h4>
                <ul>
                  <li>2,000+ Kilometres Annually</li>
                  <li>Brevet Completed</li>
                  <li>Heaven and Hell Finisher</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="passion-card">
            <div className="passion-image">
              <img src={process.env.PUBLIC_URL + '/images/about/italy.jpg'} alt="Global Travel" loading="lazy" />
            </div>
            <div className="passion-content">
              <h3>Global Travel</h3>
              <p>Passionate traveler exploring diverse cultures, design philosophies, and human experiences. Each journey brings new perspectives to my design leadership approach.</p>
              <div className="achievements">
                <h4>Achievements:</h4>
                <ul>
                  <li>15+ Countries Visited</li>
                  <li>Cultural Design Studies</li>
                  <li>International Speaking Tours</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="passion-card">
            <div className="passion-image">
              <img src={process.env.PUBLIC_URL + '/images/about/travel.jpg'} alt="Creative Arts" loading="lazy" />
            </div>
            <div className="passion-content">
              <h3>Creative Arts</h3>
              <p>Exploring various creative mediums including drums, painting, sculpture, and digital art. Creativity outside of work fuels innovation in professional design challenges.</p>
              <div className="achievements">
                <h4>Achievements:</h4>
                <ul>
                  <li>2 Stage Performances</li>
                  <li>Mixed Media Experiments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="philosophy-quote">
        <blockquote>
          "Creativity is intelligence having fun. The best design solutions come from leaders who embrace diverse experiences and maintain childlike curiosity about the world."
        </blockquote>
        <cite>— My Personal Design Philosophy</cite>
      </section>
    </div>
  );
};

export default About;
