
import './Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-overlay">
        <div className="contact-content">
          <p className="intro">
            I'm passionate about crafting meaningful experiences that bring clarity, delight, and value.<br/><br/>
            Let's connect and create something impactful!
          </p>
          <div className="contact-icons">
            <a href="https://www.linkedin.com/in/naresh-pentapati-89ab621b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/nareshacharya" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:pentapati.naresh@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
