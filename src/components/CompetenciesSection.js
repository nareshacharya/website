import React from 'react';
import { motion } from 'framer-motion';
import './CompetenciesSection.css';

const coreCompetencies = [
  {
    title: 'Design Leadership & Strategy',
    description: 'Driving vision, design culture, and UX transformation across enterprise and B2B/B2C domains',
  },
  {
    title: 'Product Innovation',
    description: 'Spearheading AI-first solutions (e.g., Hekla, Beetle) that reduce time-to-market and create competitive advantage',
  },
  {
    title: 'User Experience Excellence',
    description: 'Heuristic analysis, design thinking, and systematized UX assessments (insurance, retail, public safety, infra)',
  },
  {
    title: 'Cross-Functional Collaboration',
    description: 'Partnering with business, engineering, and stakeholders to align design with organizational goals',
  },
  {
    title: 'Business Impact',
    description: 'Scaling design systems, securing multi-million $ RFP wins, and delivering measurable ROI',
  },
  {
    title: 'Mentorship & Team Growth',
    description: 'Leading and upskilling 30+ global UI/UX practitioners, fostering ownership, and embedding innovation',
  },
];

const technicalCompetencies = [
  {
    title: 'Frontend Development',
    description: 'ReactJS, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind, Styled Components',
  },
  {
    title: 'Enterprise Platforms',
    description: 'Pega Constellation (UI Kit → React SDK migration), DX API integration, low-code app building',
  },
  {
    title: 'Design Systems & Tools',
    description: 'Figma, Adobe XD, custom JSON-based design systems, component libraries',
  },
  {
    title: 'AI-Driven Development',
    description: 'AI-assisted frontend code generation (Cursor AI, Github Co-Pilot, Claude Code), agentic AI workflows',
  },
  {
    title: 'Collaboration & Delivery',
    description: 'Git, GitHub Actions, CI/CD workflows, Vercel/Netlify deployments, agile delivery',
  },
  {
    title: 'Cloud & Integrations',
    description: 'REST APIs, GraphQL, third-party integrations, responsive and accessible design practices',
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
