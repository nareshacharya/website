
import './About.css';

const About = () => {
  return (
    <div className="about-wrapper">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Me</h1>
        <h2>Beyond the Executive</h2>
        <p className="hero-description">
          While I lead design organizations and drive digital transformation by day, my true inspiration comes from the intersection of technology, creativity, and human experience. I believe the best leaders are lifelong learners who draw insights from diverse experiences.
        </p>
        
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years in Design</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">25+</div>
            <div className="stat-label">Countries Visited</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5K+</div>
            <div className="stat-label">Photos Captured</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Miles Cycled</div>
          </div>
        </div>
        
        <div className="hero-ctas">
          <a href="#" className="cta-btn primary">Download Resume</a>
          <a href="#" className="cta-btn secondary">Schedule Coffee Chat</a>
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <h2>My Journey</h2>
        <p className="section-subtitle">
          From individual contributor to design director—a journey of continuous learning, growth, and expanding impact in the world of design and technology.
        </p>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2008</div>
            <div className="timeline-content">
              <h3>Design Beginnings</h3>
              <p>Started as a visual designer, fell in love with the intersection of art and technology.</p>
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
              <p>Transitioned to leading design teams and discovered my passion for organizational impact.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">2020</div>
            <div className="timeline-content">
              <h3>AI Innovation</h3>
              <p>Pioneered AI-enhanced design processes and built industry-leading design tools.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">2024</div>
            <div className="timeline-content">
              <h3>Director & Thought Leader</h3>
              <p>Leading 30+ member teams while sharing insights through speaking and writing.</p>
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
              <img src={process.env.PUBLIC_URL + '/images/about/wildlife.jpg'} alt="Wildlife Photography" />
            </div>
            <div className="passion-content">
              <h3>Wildlife Photography</h3>
              <p>Capturing the beauty of nature and wildlife across different continents. My photography has been featured in National Geographic and wildlife conservation publications.</p>
              <div className="achievements">
                <h4>Achievements:</h4>
                <ul>
                  <li>Published in National Geographic</li>
                  <li>5 Wildlife Photography Awards</li>
                  <li>15 Countries Documented</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="passion-card">
            <div className="passion-image">
              <img src={process.env.PUBLIC_URL + '/images/about/cycling.jpg'} alt="Cycling Adventures" />
            </div>
            <div className="passion-content">
              <h3>Cycling Adventures</h3>
              <p>Long-distance cycling enthusiast who finds inspiration and clarity on two wheels. Completed several cross-country tours and mountain cycling challenges.</p>
              <div className="achievements">
                <h4>Achievements:</h4>
                <ul>
                  <li>10,000+ Miles Annually</li>
                  <li>Cross-Country Tour Completed</li>
                  <li>Mountain Challenge Finisher</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="passion-card">
            <div className="passion-image">
              <img src={process.env.PUBLIC_URL + '/images/about/italy.jpg'} alt="Global Travel" />
            </div>
            <div className="passion-content">
              <h3>Global Travel</h3>
              <p>Passionate traveler exploring diverse cultures, design philosophies, and human experiences. Each journey brings new perspectives to my design leadership approach.</p>
              <div className="achievements">
                <h4>Achievements:</h4>
                <ul>
                  <li>25+ Countries Visited</li>
                  <li>Cultural Design Studies</li>
                  <li>International Speaking Tours</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="passion-card">
            <div className="passion-image">
              <img src={process.env.PUBLIC_URL + '/images/about/travel.jpg'} alt="Creative Arts" />
            </div>
            <div className="passion-content">
              <h3>Creative Arts</h3>
              <p>Exploring various creative mediums including painting, sculpture, and digital art. Creativity outside of work fuels innovation in professional design challenges.</p>
              <div className="achievements">
                <h4>Achievements:</h4>
                <ul>
                  <li>Gallery Exhibitions</li>
                  <li>Digital Art Collections</li>
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

      {/* Core Values Section */}
      <section className="values-section">
        <h2>Core Values</h2>
        <p className="section-subtitle">
          The fundamental principles that guide my leadership style, decision-making, and approach to building meaningful relationships and impactful solutions.
        </p>
        
        <div className="values-grid">
          <div className="value-card">
            <h3>Authentic Leadership</h3>
            <p>Leading with vulnerability, transparency, and genuine care for team growth and wellbeing.</p>
          </div>
          
          <div className="value-card">
            <h3>Lifelong Learning</h3>
            <p>Embracing curiosity, seeking diverse perspectives, and growing through every challenge.</p>
          </div>
          
          <div className="value-card">
            <h3>Collaborative Impact</h3>
            <p>Believing that the best outcomes emerge from diverse teams working toward shared visions.</p>
          </div>
          
          <div className="value-card">
            <h3>Sustainable Innovation</h3>
            <p>Creating solutions that balance human needs, business goals, and environmental responsibility.</p>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="connect-section">
        <h2>Let's Connect & Collaborate</h2>
        <p>
          Whether you're interested in design leadership, sharing travel stories, discussing photography, or exploring collaboration opportunities—I'd love to connect.
        </p>
        <a href="#" className="connect-btn">Connect on LinkedIn</a>
      </section>
    </div>
  );
};

export default About;
