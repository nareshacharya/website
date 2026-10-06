
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
          <h1>UX and product leadership,{' '}<br/>from idea to implementation</h1>
          <p>I’m Naresh Pentapati, Head of Creative and Associate Vice President at Photon Interactive. I lead creative work across EMEA and work across product discovery, UX design and frontend development, bringing 20+ years of experience with enterprise platforms and digital products.</p>
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
