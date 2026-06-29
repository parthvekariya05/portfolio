import { useInView } from '../hooks';
import { EXPERIENCE } from '../data/portfolio';
import './Experience.css';

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="experience section-pad">
      <div className="container" ref={ref}>
        <div className={`section-header ${inView ? 'fade-up' : ''}`}>
          <span className="label">Journey</span>
          <h2 className="heading" style={{ fontSize: 'clamp(28px,4vw,44px)', marginTop: 12 }}>
            Experience & Education
          </h2>
        </div>

        <div className="exp__timeline">
          {EXPERIENCE.map((item, i) => (
            <div
              key={i}
              className={`exp__item ${inView ? 'fade-up' : ''}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Connector */}
              <div className="exp__connector">
                <div className="exp__dot" style={{ background: item.color, boxShadow: `0 0 14px ${item.color}66` }}>
                  <span>{item.type === 'work' ? '💼' : '🎓'}</span>
                </div>
                {i < EXPERIENCE.length - 1 && <div className="exp__line" />}
              </div>

              {/* Card */}
              <div className="exp__card glass">
                <div className="exp__card-header">
                  <div>
                    <h3 className="exp__role heading">{item.role}</h3>
                    <div className="exp__org" style={{ color: item.color }}>{item.org}</div>
                  </div>
                  <div className="exp__right">
                    <span className="exp__period">{item.period}</span>
                    <span className="exp__location">📍 {item.location}</span>
                  </div>
                </div>
                <p className="exp__desc">{item.desc}</p>
                <div className="exp__skills">
                  {item.skills.map(s => (
                    <span key={s} className="tag" style={{ borderColor: item.color + '33', color: item.color, background: item.color + '10' }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
