import { Link } from 'react-router-dom';
import '../CaseStudy.css';

export default function Hekla() {
  return <section className="case-study">
    <div className="back-link"><Link to="/portfolio">← Back to Portfolio</Link></div>
    <div className="case-hero"><h1>Hekla – AI App Builder for Pega</h1><p className="case-tagline">A validated proof of concept for turning natural-language prompts into Pega-connected application interfaces.</p></div>
    <img src={process.env.PUBLIC_URL + '/images/hekla.png'} alt="Hekla app builder interface" style={{ width: '100%', height: 'auto', borderRadius: '18px', marginBottom: '2rem', objectFit: 'cover' }} />
    <div className="case-section"><h2>The idea</h2><p>Hekla explores how an AI-assisted builder could help teams move from a product idea to a working application interface. The proof of concept brings prompts, generated code and a developer workspace together.</p></div>
    <div className="case-section"><h2>My role</h2><p>I worked across the concept, product experience and implementation, using the prototype to validate the interaction and technical direction for Pega-connected applications.</p></div>
  </section>;
}
