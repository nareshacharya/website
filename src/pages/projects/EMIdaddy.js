import { Link } from 'react-router-dom';
import '../CaseStudy.css';

export default function EMIdaddy() {
  return <main className="case-study">
    <div className="back-link"><Link to="/portfolio">← Back to Portfolio</Link></div>
    <div className="case-hero"><h1>EMIdaddy</h1></div>
    <section className="case-section">
      <h2>Borrower financial planning, end to end</h2>
      <p>EMIdaddy helps borrowers understand affordability, compare repayment scenarios and manage loans. I worked across product definition, experience design and implementation.</p>
      <p>The experience offers guided expense entry, sliders and direct inputs, with optional advanced settings for people who need more control. Repayment breakdowns make trade-offs visible, and an editable document review helps users check information before moving on.</p>
    </section>
  </main>;
}
