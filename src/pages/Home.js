import './Home.css';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Naresh Pentapati</h1>
        <p>UX Leader & Product Designer | 18+ Years of Experience</p>
        <div className="hero-buttons">
          <Link to="/portfolio" className="btn">View Portfolio</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
        </div>

        <div className="hero-icons">
          <a href="https://linkedin.com/in/naresh-pentapati" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/nareshacharya" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="mailto:naresh@example.com"><FaEnvelope /></a>
        </div>
      </div>
    </section>
  );
};

export default Home;
