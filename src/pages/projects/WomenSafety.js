import { Link } from 'react-router-dom';
import {
  FaShieldAlt,
  FaUserTie,
  FaSearch,
  FaMobileAlt,
  FaCogs,
  FaTrophy,
  FaHeart
} from 'react-icons/fa';
import '../CaseStudy.css';

const WomenSafety = () => {
  return (
    <section className="case-study">
      <div className="back-link">
        <Link to="/portfolio">← Back to Portfolio</Link>
      </div>

      <div className="case-hero">
        <h1>Women Safety Mobile App</h1>
        <p>
          A mobile-first safety app offering real-time SOS alerts, trip tracking, and access to police support — built to protect women in everyday situations.
        </p>
      </div>

      <div className="case-section">
        <h2><FaShieldAlt className="section-icon" /> The Problem</h2>
        <p>
          Women commuters felt unsafe during late-night travel and emergencies. Accessing help was slow, and most tools didn’t connect users directly to patrol or police in real time.
          We set out to build a digital safety net — simple, fast, and always connected.
        </p>
      </div>

      <div className="case-section">
        <h2><FaUserTie className="section-icon" /> My Role as Head of Product & Design</h2>
        <p>
          I owned the entire design and product leadership cycle — from defining the feature set with law enforcement to testing the app with working women and students.
          I orchestrated UX workshops, aligned with backend developers, and ensured strict performance and privacy standards were met.
        </p>
        <p>
          I also drove integration with patrol vehicles, real-time CCTV access, and created public comms guidelines for city launch.
        </p>
      </div>

      <div className="case-section">
        <h2><FaSearch className="section-icon" /> User Research</h2>
        <ul>
          <li>Women feared being stranded without fast access to help</li>
          <li>Many didn’t trust apps that stored too much personal data</li>
          <li>They wanted fast SOS, visible trip tracking, and trusted contact notifications</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaMobileAlt className="section-icon" /> UX & Mobile Design</h2>
        <ul>
          <li>One-tap SOS button with local video recording, patrol alert, and Dial 100 call</li>
          <li>“Track Me” mode that monitored trip route and sent alerts on deviation</li>
          <li>Trusted circle integration — alert family with exact location + battery status</li>
          <li>Dark mode interface, accessibility enhancements, and battery optimization</li>
        </ul>
      </div>

      <div className="case-section">
        <h2><FaCogs className="section-icon" /> Implementation Strategy</h2>
        <p>
          We worked closely with police control room integration teams and mobile backend engineers.  
          I handled live testing with officers and citizen focus groups and prioritized frictionless onboarding to build trust and encourage downloads.
        </p>
      </div>

      <div className="case-section">
        <h2><FaTrophy className="section-icon" /> Results & Impact</h2>
        <p>
          The app was launched as a flagship city safety initiative. Within weeks, it reached 20,000 downloads and was used in 15+ real-world alerts.
          Women users praised its clarity and instant connection to patrol.
        </p>
      </div>

      <div className="case-section">
        <h2><FaHeart className="section-icon" /> What I Learned</h2>
        <p>
          Designing for safety means designing with empathy.  
          In moments of panic, speed, simplicity, and trust matter more than features. That shaped every screen and decision we made.
        </p>
      </div>

      <div className="case-section">
        <h2>🖼 Screenshots</h2>
        <div className="case-images">
          <img src="/images/women-safety-sos.jpg" alt="SOS Alert UI" />
          <img src="/images/women-safety-trackme.jpg" alt="Track Me Feature UI" />
        </div>
      </div>
    </section>
  );
};

export default WomenSafety;
