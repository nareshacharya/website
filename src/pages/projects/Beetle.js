import { Link } from 'react-router-dom';
import '../CaseStudy.css';

export default function Beetle() {
  return <section className="case-study">
    <div className="back-link"><Link to="/portfolio">← Back to Portfolio</Link></div>
    <div className="case-hero"><h1>Beetle – Visual Low-Code Builder</h1><p className="case-tagline">A prototype exploring a visual path from interface design to Pega-connected application components.</p></div>
    <img src={process.env.PUBLIC_URL + '/images/beetle-landing.png'} alt="Beetle visual builder interface" style={{ width: '100%', height: 'auto', borderRadius: '18px', marginBottom: '2rem', objectFit: 'cover' }} />
    <div className="case-section"><h2>The idea</h2><p>Beetle explores how reusable components and a visual workflow could make it easier to assemble application interfaces. It is a low-code builder prototype, rather than a deployed case-management product.</p></div>
    <div className="case-section"><h2>My role</h2><p>I conceived and built the prototype, connecting product thinking, interaction design and frontend implementation.</p></div>
  </section>;
}
