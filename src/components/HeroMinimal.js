
import './HeroMinimal.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import StatsCount from './StatsCount';

const HeroMinimal = () => {
  return (
    <section className="hero-minimal gradient-background">
      <div className="hero-left">
        <img src={process.env.PUBLIC_URL + '/images/naresh.png'} alt="Naresh Pentapati" />
      </div>
      <div className="hero-right">
      <StatsCount />
        <div className="intro-text">
          <h1>Transforming Digital Experiences at Scale</h1>
          <p>Leading enterprise UX transformation with AI-powered innovation. Driving multi-million dollar business impact through strategic design leadership and team empowerment across 30+ member organizations.</p>
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
