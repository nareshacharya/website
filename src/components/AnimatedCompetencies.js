import { motion } from 'framer-motion';
import { FaLightbulb, FaCogs, FaUniversalAccess, FaUsersCog, FaChartLine } from 'react-icons/fa';
import './AnimatedCompetencies.css';

const competencies = [
  { title: 'Visionary Product Thinking', icon: <FaLightbulb /> },
  { title: 'Executive Stakeholder Engagement', icon: <FaUsersCog /> },
  { title: 'Metrics-Driven UX Strategy', icon: <FaChartLine /> },
  { title: 'Design Leadership & Mentorship', icon: <FaCogs /> },
  { title: 'Enterprise UX & Design Systems', icon: <FaCogs /> },
  { title: 'Generative AI in Product Design', icon: <FaLightbulb /> },
  { title: 'Accessibility (WCAG)', icon: <FaUniversalAccess /> },
  { title: 'Research-Driven Design Decisions', icon: <FaChartLine /> },
  { title: 'Agile UX & DesignOps', icon: <FaUsersCog /> },
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
            <div className="tile-icon">{item.icon}</div>
            <p>{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
