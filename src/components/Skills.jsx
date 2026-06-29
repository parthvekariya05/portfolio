import { useState } from 'react';
import { useInView } from '../hooks';
import { SKILLS } from '../data/portfolio';
import './Skills.css';

export default function Skills() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView();

  const current = SKILLS[active];

  return (
    <section id="skills" className="skills section-pad">
      <div className="container" ref={ref}>
        <div className={`section-header ${inView ? 'fade-up' : ''}`}>
          <span className="label">Tech Stack</span>
          <h2 className="heading" style={{ fontSize: 'clamp(28px,4vw,44px)', marginTop: 12 }}>
            Skills & Technologies
          </h2>
        </div>

        {/* Category tabs */}
        <div className={`skills__tabs ${inView ? 'fade-up' : ''}`} style={{ animationDelay: '0.1s' }}>
          {SKILLS.map((s, i) => (
            <button
              key={s.category}
              className={`skills__tab ${active === i ? 'skills__tab--active' : ''}`}
              onClick={() => setActive(i)}
              style={active === i ? { '--tab-color': s.color } : {}}
            >
              <span>{s.icon}</span>
              {s.category}
            </button>
          ))}
        </div>

        {/* Skills content */}
        <div className={`skills__content ${inView ? 'fade-up' : ''}`} style={{ animationDelay: '0.2s' }}>
          <div className="skills__bars">
            {current.items.map(({ name, level }, i) => (
              <div key={name} className="skills__bar-row" style={{ animationDelay: `${i * 0.06}s` }}>
                <div className="skills__bar-info">
                  <span className="skills__bar-name">{name}</span>
                  <span className="skills__bar-pct" style={{ color: current.color }}>{level}%</span>
                </div>
                <div className="skills__bar-track">
                  <div
                    className="skills__bar-fill"
                    style={{
                      width: inView ? `${level}%` : '0%',
                      background: `linear-gradient(90deg, ${current.color}88, ${current.color})`,
                      transitionDelay: `${i * 0.07 + 0.3}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tag cloud */}
          <div className="skills__tags">
            <div className="skills__tags-label label">All Technologies</div>
            <div className="skills__tags-grid">
              {SKILLS.flatMap(s =>
                s.items.map(item => (
                  <span
                    key={item.name}
                    className="tag"
                    style={{
                      borderColor: s.color + '33',
                      color: s.color,
                      background: s.color + '10',
                    }}
                  >
                    {item.name}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
