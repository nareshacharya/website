import React from 'react';
import { motion } from 'framer-motion';
import './CompetenciesSection.css';

const coreCompetencies = [
  {
    title: 'Design Leadership & Strategy',
    description: 'Defining UX strategy that balances user needs, business goals, and technology feasibility. Setting direction for enterprise-scale design transformations',
  },
  {
    title: 'Experience-Centered Innovation',
    description: 'Creating state-of-the-art products (Hekla, Beetle, Smart City solutions) that merge UX principles with cutting-edge tech like AI and low-code',
  },
  {
    title: 'Enterprise UX Strategy',
    description: 'Leading end-to-end UX for platforms (Pega Constellation, React) with focus on design systems, accessibility, and scalability across industries (insurance, retail, infra, public sector)',
  },
  {
    title: 'DesignOps & Systems Thinking',
    description: 'Building design systems and operational frameworks to ensure consistency, speed, and governance in large distributed teams',
  },
  {
    title: 'Research-Driven Insights',
    description: 'Driving user research, heuristic analysis, and usability testing to shape high-impact decisions in enterprise workflows',
  },
  {
    title: 'Mentorship & Design Culture',
    description: 'Growing, coaching, and inspiring 30+ global UI/UX practitioners, instilling ownership, design maturity, and innovation mindset',
  },
  {
    title: 'Business Impact through UX',
    description: 'Demonstrating ROI by securing multi-million $ wins, improving adoption, and positioning design as a competitive differentiator',
  },  
];

const technicalCompetencies = [
  {
    title: 'Frontend Development',
    description: 'ReactJS, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind, Styled Components',
  },
  {
    title: 'Enterprise Platforms',
    description: 'Pega Constellation (UI Kit to React SDK migration), DX API integration, low-code app building',
  },
  {
    title: 'Design Systems & Tools',
    description: 'Figma, Adobe XD, custom JSON-based design systems, component libraries',
  },
  {
    title: 'AI-Driven Development',
    description: 'AI-assisted frontend code generation (Cursor AI, Github Co-Pilot, Claude Code), agentic AI workflows, prompt engineering for UI/UX',
  },
  {
    title: 'Collaboration & Delivery',
    description: 'Git, GitHub Actions, CI/CD workflows, Vercel/Netlify deployments, agile delivery',
  },
  {
    title: 'Cloud & Integrations',
    description: 'REST APIs, GraphQL, third-party integrations, responsive and accessible design practices',
  },
  {
    title: 'Data-Driven UX & Analytics',
    description: 'Leveraging product analytics, A/B testing, and usage insights to continuously optimize user experience and business outcomes',
  },  
];

const listItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, type: 'spring', stiffness: 60 },
  }),
};

const CompetenciesSection = () => (
  <section className="competencies-section">
    <div className="competencies-header">
      <h2>Competencies</h2>
    </div>
    <div className="competencies-container">
      <div className="competencies-column">
        <h2 className="competencies-title">Core</h2>
        <ul className="competencies-list">
          {coreCompetencies.map((item, idx) => (
            <motion.li
              key={idx}
              className="competency-item"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
            >
              <div className="competency-heading">{item.title}</div>
              <div className="competency-desc">{item.description}</div>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="competencies-column">
        <h2 className="competencies-title">Technical</h2>
        <ul className="competencies-list">
          {technicalCompetencies.map((item, idx) => (
            <motion.li
              key={idx}
              className="competency-item"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
            >
              <div className="competency-heading">{item.title}</div>
              <div className="competency-desc">{item.description}</div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default CompetenciesSection;
