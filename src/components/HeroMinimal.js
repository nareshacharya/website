
import './HeroMinimal.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const HeroMinimal = () => {
  return (
    <section className="hero-minimal">
      <div className="hero-left">
        <img src={process.env.PUBLIC_URL + '/images/naresh.png'} alt="Naresh Pentapati" />
      </div>
      <div className="hero-right">
      <div className="stats">
          <div><strong>80+</strong><span>Projects</span></div>
          <div><strong>7+</strong><span>Domains</span></div>
          <div><strong>100%</strong><span>Experience-led</span></div>
        </div>
        <div className="intro-text">
          <h1>Hello!</h1>
          <p>I am <span>Naresh Pentapati</span>, a UX Leader from Hyderabad</p>
        </div>

        <div className="hero-icons">
          <a href="https://linkedin.com/in/naresh-pentapati" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/nareshacharya" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="mailto:pentapati.naresh@gmail.com"><FaEnvelope /></a>
        </div>
      </div>
    </section>
  );
};

export default HeroMinimal;
