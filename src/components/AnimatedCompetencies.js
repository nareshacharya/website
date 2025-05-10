import { motion } from 'framer-motion';
import { FaLightbulb, FaCogs, FaUniversalAccess, FaUsersCog, FaChartLine } from 'react-icons/fa';
import './AnimatedCompetencies.css';

const competencies = [
  { title: 'Visionary Product Thinking', icon: process.env.PUBLIC_URL + '/images/competencies/product-thinking.jpg' },
  { title: 'Executive Stakeholder Engagement', icon: process.env.PUBLIC_URL + '/images/competencies/executive-management.jpg' },
  { title: 'Metrics-Driven UX Strategy', icon: process.env.PUBLIC_URL + '/images/competencies/metrics.jpg' },
  { title: 'Design Leadership & Mentorship', icon: process.env.PUBLIC_URL + '/images/competencies/design-leadership.jpg' },
  { title: 'Enterprise UX & Design Systems', icon: process.env.PUBLIC_URL + '/images/competencies/enterprise-ux.jpg' },
  { title: 'Generative AI in Product Design', icon: process.env.PUBLIC_URL + '/images/competencies/generative-ai.jpg' },
  { title: 'Accessibility (WCAG)', icon: process.env.PUBLIC_URL + '/images/competencies/accessibility.jpg' },
  { title: 'Research-Driven Design Decisions', icon: process.env.PUBLIC_URL + '/images/competencies/research.jpg' },
  { title: 'Agile UX & DesignOps', icon: process.env.PUBLIC_URL + '/images/competencies/agile.jpg' },
];

export default function AnimatedCompetencies() {
  return (
    <section className="competency-tiles">
      <h2>Core Competencies</h2>
      <div className="competency-grid">
        {competencies.map((item, idx) => (
          <motion.div
            key={idx}
            className="competency-tile"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <div className="tile-icon"><img src={item.icon} alt={item.title} /></div>

            <p>{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
