import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './StatsCount.css';

const stats = [
  { label: 'Years in Design & Technology', end: 20, suffix: '+' },
  { label: 'Product Prototypes', end: 2, suffix: '' },
  { label: 'Connected Disciplines', end: 3, suffix: '' }
];

export default function StatsCount() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div className="stats-container" ref={ref}>
      {stats.map((stat, idx) => (
        <div key={idx} className="stat-box">
          {inView && (
            <CountUp
              start={0}
              end={stat.end}
              duration={2}
              delay={0}
              suffix={stat.suffix}
            >
              {({ countUpRef }) => (
                <>
                  <span className="count" ref={countUpRef} />
                  <div className="label">{stat.label}</div>
                </>
              )}
            </CountUp>
          )}
        </div>
      ))}
    </div>
  );
}
