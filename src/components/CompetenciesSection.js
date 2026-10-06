import React from 'react';
import { motion } from 'framer-motion';
import './CompetenciesSection.css';

const coreCompetencies = [
  {
    title: 'Product Definition & Prioritization',
    description: 'Connecting user needs, business goals and technical constraints to shape requirements, roadmaps and product decisions.',
  },
  {
    title: 'Discovery & Domain Research',
    description: 'Learning complex domains, studying users and testing assumptions before committing to a solution.',
  },
  {
    title: 'UX & Interaction Design',
    description: 'Mapping journeys, designing workflows and creating clear interfaces for enterprise platforms and digital products.',
  },
  {
    title: 'Design Systems & DesignOps',
    description: 'Building reusable patterns and practices that help teams work consistently at scale.',
  },
  {
    title: 'Solution & Experience Consulting',
    description: 'Advising clients across product, design and implementation choices in complex environments.',
  },
  {
    title: 'Leadership & Mentorship',
    description: 'Leading multidisciplinary teams while remaining close to the work and supporting practitioner growth.',
  },
  {
    title: 'AI Product Exploration',
    description: 'Exploring AI tools, agents and proofs of concept with attention to usefulness, control and implementation.',
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
