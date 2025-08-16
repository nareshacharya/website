
import './HeroMinimal.css';
import { Link } from 'react-router-dom';
import StatsCount from './StatsCount';

const HeroMinimal = () => {
  return (
    <section className="hero-minimal gradient-background">
      <div className="hero-left">
        <img src={process.env.PUBLIC_URL + '/images/naresh.png'} alt="Naresh Pentapati" />
      </div>
      <div className="hero-right">
      
        <div className="intro-text">
          <h1>Transforming Digital Experiences<br/>at Scale</h1>
          <p>Leading enterprise UX transformation with AI-powered innovation. Driving multi-million dollar business impact through strategic design leadership and team empowerment across 30+ member organizations.</p>
        </div>

        <div className="hero-ctas">
          <Link to="/portfolio" className="cta-button primary">
            Explore My Work
          </Link>
          <Link to="/vision" className="cta-button secondary">
            My Vision
          </Link>
        </div>
        <StatsCount />
      </div>
    </section>
  );
};

export default HeroMinimal;
