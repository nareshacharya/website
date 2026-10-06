
import './Contact.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="page-hero">
        <h1>Contact</h1>
      </div>
    <section className="contact-section">
      <div className="contact-overlay">
        <div className="contact-content">
          <p className="intro">
            I work across product discovery, UX design, frontend implementation and creative leadership.<br/><br/>
            For consulting, product collaborations or speaking inquiries, get in touch by email or LinkedIn.
          </p>
          <div className="contact-icons">
            <a href="https://www.linkedin.com/in/naresh-pentapati-89ab621b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            {/*<a href="https://github.com/nareshacharya" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>*/}
            <a href="mailto:pentapati.naresh@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>

    </div>
  );
};

export default Contact;
