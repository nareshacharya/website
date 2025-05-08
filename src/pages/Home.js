import './Home.css';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import SneekPeek from '../components/SneekPeek';
import '../components/SneekPeek.css';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
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
            <a href="mailto:pentapati.naresh@gmail.com"><FaEnvelope /></a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        <p>
          I'm a UX Leader with 18+ years of experience helping global teams design user-centric solutions across insurance, banking, and consumer domains. My passion lies in transforming complex enterprise workflows into intuitive digital experiences.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Core Expertise</h2>
        <ul className="skills-list">
          <li>UX Strategy</li>
          <li>Design Systems</li>
          <li>Pega Constellation</li>
          <li>React & Frontend Architecture</li>
          <li>Enterprise UX Consulting</li>
          <li>Team Leadership & Mentorship</li>
        </ul>
      </section>

      <SneekPeek />




    </>
  );
};

export default Home;
