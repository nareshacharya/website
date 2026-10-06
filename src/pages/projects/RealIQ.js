import { Link } from 'react-router-dom';
import '../CaseStudy.css';

export default function RealIQ() {
  return <main className="case-study">
    <div className="back-link"><Link to="/portfolio">← Back to Portfolio</Link></div>
    <div className="case-hero"><h1>realIQ</h1></div>
    <section className="case-section">
      <h2>Map-first real-estate intelligence</h2>
      <p>realIQ is an invite-only product for exploring villages and land through a map-first experience. I worked from product definition through experience design and implementation.</p>
      <p>The interface reveals detail progressively, communicates data limitations and keeps sign-in consistent across the journey.</p>
    </section>
  </main>;
}
