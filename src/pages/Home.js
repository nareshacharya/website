
import './Home.css';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import SneekPeek from '../components/SneekPeek';
import '../components/SneekPeek.css';
import HeroMinimal from '../components/HeroMinimal';

const profile =  process.env.PUBLIC_URL + "/images/naresh.png";
const Home = () => {
  return (
    <>
     <HeroMinimal />

      {/* Intro Section */}
      <section className="intro-section">
        <p>
          I'm a UX Leader helping global teams design user-centric solutions across insurance, banking, and consumer domains. My passion lies in transforming complex enterprise workflows into intuitive digital experiences.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
  <h2>Core Expertise</h2>
  <div className="skills-grid">
    <div className="skill-tile">
      <i className="fas fa-sitemap"></i>
      <span>UX Strategy</span>
    </div>
    <div className="skill-tile">
      <i className="fas fa-layer-group"></i>
      <span>Design Systems</span>
    </div>
    <div className="skill-tile">
      <i className="fas fa-cube"></i>
      <span>Pega Constellation</span>
    </div>
    <div className="skill-tile">
      <i className="fab fa-react"></i>
      <span>React & Architecture</span>
    </div>
    <div className="skill-tile">
      <i className="fas fa-building"></i>
      <span>Enterprise UX Consulting</span>
    </div>
    <div className="skill-tile">
      <i className="fas fa-search"></i>
      <span>Market Research</span>
    </div>
    <div className="skill-tile">
      <i className="fab fa-react"></i>
      <span>ReactJS</span>
    </div>
    <div className="skill-tile">
      <i className="fas fa-chalkboard-teacher"></i>
      <span>Agile Coaching</span>
    </div>
    <div className="skill-tile">
      <i className="fas fa-code"></i>
      <span>Frontend Development</span>
    </div>
    <div className="skill-tile">
      <i className="fas fa-users"></i>
      <span>Team Leadership</span>
    </div>
  </div>
</section>


      <SneekPeek />
    </>
  );
};

export default Home;
