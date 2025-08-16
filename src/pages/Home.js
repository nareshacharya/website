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
          As a Director of Product Design, I lead cross-functional teams to deliver AI-driven enterprise experiences that transform how organizations work. I specialize in design systems, enterprise UX, and executive leadership, with a proven track record of scaling design operations and driving product innovation across complex business domains.
        </p>
      </section>
      <AnimatedCompetencies />
      <Certifications />
      <SneekPeek />
    </>
  );
};

export default Home;
