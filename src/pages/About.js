
import './About.css';

const About = () => {
  return (
    <div className="about-wrapper">
      {/* Hero Section */}
      <div className="page-hero">
        <h1>About Me</h1>
      </div>
      <section className="about-hero">
        <h2>Beyond the Executive</h2>
        <p className="hero-description">
          While I lead design organizations and drive digital transformation by day, my true inspiration comes from the intersection of technology, creativity, and human experience. I believe the best leaders are lifelong learners who draw insights from diverse experiences.
        </p>
        
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">18+</div>
            <div className="stat-label">Years in Design</div>
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
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Coffee%20Chat%20with%20Naresh%20Pentapati&details=Let%27s%20connect%20for%20a%20virtual%20coffee%20chat!%20Feel%20free%20to%20adjust%20the%20time%20as%20needed.&dates=20250820T090000Z/20250820T093000Z&ctz=Asia/Kolkata&add=pentapati.naresh@gmail.com"
            className="cta-btn secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule Coffee Chat
          </a>
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
            <div className="timeline-year">2007</div>
            <div className="timeline-content">
              <h3>Corporate Beginnings</h3>
              <p>Started as a frontend guy, fell in love with the intersection of art and technology.</p>
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
              <h3>AI Innovation</h3>
              <p>Pioneered AI-enhanced design processes and built industry-leading design tools.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">2022</div>
            <div className="timeline-content">
              <h3>Head of Design & Thought Leader</h3>
              <p>Leading 30+ member teams while sharing insights through speaking and writing.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2024</div>
            <div className="timeline-content">
              <h3>Low-code App Builder</h3>
              <p>Built a low-code app builder to revolutionalize the way frontend developers create Pega applications.</p>
            </div>
          </div> 
          <div className="timeline-item">
            <div className="timeline-year">2025</div>
            <div className="timeline-content">
              <h3>AI App Builder</h3>
              <p>A game changing innovation in Pega consulting with an AI-powered app builder to disrupt the frontend capabilities.</p>
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
                  <li>1 Wildlife Photography Awards</li>
                  <li>5 Countries Documented</li>
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
                  <li>2,000+ Kilometres Annually</li>
                  <li>Brevet Completed</li>
                  <li>Heaven and Hell Finisher</li>
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
                  <li>15+ Countries Visited</li>
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
