import './Home.css';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import SneekPeek from '../components/SneekPeek';
import '../components/SneekPeek.css';
import HeroMinimal from '../components/HeroMinimal';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { icon: "fa-sitemap", label: "UX Strategy" },
  { icon: "fa-layer-group", label: "Design Systems" },
  { icon: "fa-cube", label: "Pega Constellation" },
  { icon: "fab fa-react", label: "React & Architecture" },
  { icon: "fa-building", label: "Enterprise UX Consulting" },
  { icon: "fa-search", label: "Market Research" },
  { icon: "fab fa-react", label: "ReactJS" },
  { icon: "fa-chalkboard-teacher", label: "Agile Coaching" },
  { icon: "fa-code", label: "Frontend Development" },
  { icon: "fa-users", label: "Team Leadership" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
};

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

      {/* Animated Core Expertise Section */}
      <section className="skills-section" ref={ref}>
        <h2>Core Expertise</h2>
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {skills.map((skill, idx) => (
            <motion.div
              className="skill-tile"
              variants={itemVariants}
              key={idx}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
            >
              <i className={`fas ${skill.icon}`}></i>
              <span>{skill.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <SneekPeek />
    </>
  );
};

export default Home;
