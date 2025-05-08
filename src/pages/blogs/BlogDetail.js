import { useParams, Link } from 'react-router-dom';
import './BlogDetail.css';

const blogData = {
  "ux-maturity": {
    title: "UX Maturity in an Organization — From Awareness to Impact",
    tags: ['UX Leadership', 'Design Culture', 'Enterprise UX'],
    content: ['In today’s competitive, experience-driven economy, design is no longer just about aesthetics or usability — it’s about creating consistent, scalable, and measurable value for both users and the business. However, many organizations still treat UX as an isolated function rather than a core capability. This gap is what UX maturity aims to measure and resolve.', "UX maturity defines how deeply embedded user experience practices are within an organization's culture, processes, leadership, and decision-making. It isn’t just about hiring designers or running usability tests — it’s about evolving design from a project task to a strategic differentiator.", 'Organizations at the lower end of the maturity curve often recognize the importance of user experience, but haven’t fully operationalized it. UX is typically reactive and tactical — brought in late to “make things look better” after decisions are made. Design success is anecdotal, and metrics, if any, are vanity-based.', 'At this stage: UX often reports into marketing or IT; there is little to no UX research; design debt is high due to inconsistent execution; and designers lack a seat at the table for roadmap or strategy. Progress begins with executive sponsorship, small wins through UX audits, and showing how friction in workflows impacts churn or missed revenue.', 'As organizations grow in maturity, UX becomes more embedded into product development workflows. Design is included earlier in the cycle — during problem definition, not just solution validation. There’s often a small but capable team of designers, researchers, and content strategists collaborating with product and engineering.', 'Key characteristics at this stage include structured UX research, use of user personas, component libraries or early design systems, shared KPIs across disciplines, and usability testing pre-release. The path forward is codification — turning tribal design knowledge into scalable practices.', 'This is where UX truly matures — no longer a support function, but a driver of innovation and transformation. Design and research shape product vision. UX metrics like task success, completion rate, or NPS are tied to business outcomes. Design teams are no longer asking for buy-in — they’re being sought out for strategic input.', 'You’ll see a robust DesignOps function, full-stack research, embedded designers in agile squads, and rituals like design critiques and pattern governance. Strategic initiatives begin with user-centric framing, not just technical feasibility.', 'Despite good intentions, many teams struggle due to lack of leadership, undervaluing research, and prioritizing delivery over discovery. Overcoming these requires investing in culture change — leadership must model design behavior and protect time for UX.', 'UX maturity isn’t a finish line. It’s a mindset — evolving from reactive problem-solving to proactive, strategic experience leadership. And it starts with making design not just visible, but vital.']
  },
  "pegadesign": {
    title: "Designing for Pega Constellation",
    tags: ['Pega', 'Design Systems'],
    content: ['Designing for Pega Constellation means thinking in models, not pages. Unlike traditional frontend frameworks, Constellation prioritizes reusability, configuration, and guardrails that make development faster — but also tighter.', 'When we first moved to Constellation, our design team had to rewire how we thought about screens. Instead of crafting end-to-end flows, we designed declarative templates that could adapt to case types, personas, and even regions.', "The real challenge was in striking a balance — honoring user needs while respecting Pega's platform constraints. For example, we customized Constellation containers to fit client branding without breaking upgrade compatibility.", 'Design tokens became a game-changer. By defining base colors, spacing, and typography as variables, we enabled faster iteration and centralized consistency across dozens of applications.', 'Constellation forces us to think not as screen builders, but as experience architects. It’s less about crafting a perfect UI and more about scaling a usable, maintainable experience.']
  },
  "ai-ux": {
    title: "Human-Centered AI: Beyond the Hype",
    tags: ['AI', 'UX Strategy'],
    content: ['AI is everywhere, but trust in AI is fragile. As designers, our job isn’t to make AI look cool — it’s to make it understandable, controllable, and trustworthy.', 'We experimented with AI-generated insights in policing, such as predicting crowd overflow or linking suspect data. What stood out wasn’t the sophistication of the algorithm — it was how users responded.', 'Our solution: always expose the reasoning. We implemented confidence scores, visual risk patterns, and even tooltips that explained how the AI “thought.”', 'We also allowed users to correct the AI. This not only improved model accuracy, but made users feel in control — transforming AI from a black box into a collaborative tool.', 'Designing for AI means designing for ambiguity. Our job is to reduce fear, not inflate wonder. Trust grows when systems behave predictably and give users space to override or ask questions.']
  },
  "govtech": {
    title: "Designing for Public Sector: 5 Things I Learned",
    tags: ['Public Sector', 'UX Strategy'],
    content: ['Designing for government systems was a humbling experience. Unlike commercial projects, public sector UX requires designing not just for usability — but for equity, resilience, and scale.', 'One lesson I learned early: simplicity beats speed. During our work on disaster management tools, officers needed interfaces that functioned with low connectivity, offline access, and zero training.', 'Another insight: transparency breeds trust. In public safety apps, users wanted to know what data was being shared, with whom, and how it would be used.', 'Co-creation was essential. We invited beat officers, command center operators, and even citizens into our design sprints. Their feedback shaped everything — from button labels to alert priority logic.', 'The best compliment came from an officer who said, “I feel like this app understands my day.” That, to me, is what good government design should aim for — empathy, clarity, and service.']
  },
  "ux-strategy": {
    title: "Crafting a UX Strategy That Works",
    tags: ['UX Strategy', 'Design Leadership', 'Product Design', 'Digital Transformation'],
    content: ['In many organizations, UX is perceived as a set of deliverables — wireframes, UI screens, or usability tests. But design leaders know that behind every great experience is a strategy: a plan to align user needs, business goals, and technological capabilities into a coherent direction.', 'A UX strategy isn’t just about what users want. It’s about prioritizing where to invest design effort, how to create measurable impact, and how to embed design into the rhythm of the business. When done right, it becomes a powerful operating model for product success.', 'You can have talented designers, modern tools, and even a robust design system — but without a strategy, your design team ends up reactive. They get pulled into every request, patching problems rather than solving root causes. The result? Burnout, inconsistent quality, and designs that don’t scale.', 'In my consulting experience, I’ve seen organizations struggle because they treat UX as a service desk — a group to “make it look good” after decisions have been made. Strategy shifts this dynamic. It brings design upstream, giving it a role in framing the problem, not just polishing the solution.', 'When I define UX strategy for clients, I use a four-pillar model:\n\n1. Experience Vision: A north star that describes the desired user experience.\n2. UX Priorities Aligned with Product Roadmap: Identify product bets and align UX effort.\n3. Operating Model for Design Execution: Define roles, rituals, and systems.\n4. Measurement Framework: Metrics tied to business KPIs.', 'In a recent engagement with a financial services firm, we were brought in to improve a complex onboarding journey. The design team had already delivered wireframes, but adoption was low and users kept abandoning midway.', 'We paused the design work and reframed it through strategy. With a revised UX strategy, we reduced form fields by 30%, re-sequenced steps, and added contextual help. The result was a 24% increase in completion rate within 6 weeks.', 'A UX strategy is only as good as the buy-in it receives. That means involving product and engineering early, using data and real stories, and creating shareable assets like a strategy deck with metrics and priorities.', 'UX strategy is not documentation. It’s a design mindset made operational. It gives teams clarity on what to focus on, how to work, and how to measure impact. Without it, design teams float. With it, they lead.', 'If you’re a designer moving into leadership, start small: create a vision, define one key metric, and align your team around it. If you’re an exec, ask: Do we have a UX strategy, or just a lot of screens?']
  },
};


const BlogDetail = () => {
  const { blogId } = useParams();
  const blog = blogData[blogId];

  if (!blog) {
    return (
      <div className="blog-detail">
        <div className="back-link">
          <Link to="/blogs">← All Articles</Link>
        </div>
        <h1>404 – Blog Not Found</h1>
        <p>Sorry, this blog doesn't exist or has been moved.</p>
      </div>
    );
  }

  return (
    <div className="blog-detail">
      <div className="back-link">
        <Link to="/blogs">← All Articles</Link>
      </div>
      <h1>{blog.title}</h1>
      <div className="blog-tags">
        {blog.tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>
      <div className="blog-content">
        {blog.content.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;
