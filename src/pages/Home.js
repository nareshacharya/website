import './Home.css';

import SneekPeek from '../components/SneekPeek';
import '../components/SneekPeek.css';
import HeroMinimal from '../components/HeroMinimal';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedCompetencies from '../components/AnimatedCompetencies';
import Certifications from '../components/Certifications';

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  if (inView) controls.start("show");

  return (
    <>
      <HeroMinimal />
      {/* Intro Section */}
      <section className="intro-section">
        <p>
          I'm a UX Leader helping global teams design user-centric solutions across insurance, banking, and consumer domains. My passion lies in transforming complex enterprise workflows into intuitive digital experiences.
        </p>
      </section>
      <AnimatedCompetencies />
      <Certifications />
      <SneekPeek />
    </>
  );
};

export default Home;
