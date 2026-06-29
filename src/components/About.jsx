import { useInView } from '../hooks';
import { META } from '../data/portfolio';
import './About.css';

const INFO_CARDS = [
  { icon: '🎓', label: 'University', value: 'Darshan University' },
  { icon: '📊', label: 'CGPA', value: '7.99 / 10' },
  { icon: '📍', label: 'Location', value: 'Gujarat, India' },
  { icon: '💼', label: 'Status', value: 'Seeking Remote' },
  { icon: '🗓️', label: 'Graduating', value: 'Dec 2026' },
  { icon: '🚀', label: 'Available', value: 'Immediately' },
];

const WHAT_I_DO = [
  { icon: '⚡', title: 'Frontend', desc: 'React.js apps with clean UI, responsive design, and smooth interactions.' },
  { icon: '🔧', title: 'Backend', desc: 'ASP.NET Core 8 APIs, ADO.NET, JWT auth, middleware, and stored procedures.' },
  { icon: '🗄️', title: 'Database', desc: 'SQL Server 2022 — optimized schemas, stored procedures, and LINQ queries.' },
  { icon: '🤖', title: 'AI Integration', desc: 'Google Gemini API for intelligent features like mock interviews and resume parsing.' },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="about section-pad">
      <div className="container" ref={ref}>
        {/* Header */}
        <div className={`section-header ${inView ? 'fade-up' : ''}`}>
          <span className="label">About Me</span>
          <h2 className="heading" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginTop: 12 }}>
            Who I Am
          </h2>
        </div>

        <div className="about__grid">
          {/* Bio */}
          <div className={`about__bio ${inView ? 'fade-up' : ''}`} style={{ animationDelay: '0.1s' }}>
            <p>
              I'm a final-year Computer Engineering student at <strong>{META.university}</strong> building
              production-grade full-stack applications. I completed my internship at{' '}
              <strong>SaiKet Systems</strong> (Mar–Apr 2026) working on React + ASP.NET Core projects.
            </p>
            <p>
              My flagship project — the <strong className="about__accent">AI Interview Simulator</strong> —
              integrates Google Gemini 2.5 Flash for adaptive mock interviews, PDF resume analysis, leaderboard,
              streaks, certificates, and automated email reports. Built entirely from scratch.
            </p>
            <p>
              I'm actively seeking <strong>remote fresher roles</strong> in India and internationally.
              I prefer direct communication, clean code, and shipping things that actually work.
            </p>

            <div className="about__links">
              <a href={META.github} target="_blank" rel="noreferrer" className="btn btn-primary">
                View GitHub
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
              <a href={META.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Info cards */}
          <div className={`about__cards ${inView ? 'fade-up' : ''}`} style={{ animationDelay: '0.2s' }}>
            {INFO_CARDS.map(({ icon, label, value }) => (
              <div key={label} className="about__card glass">
                <span className="about__card-icon">{icon}</span>
                <div>
                  <div className="about__card-label">{label}</div>
                  <div className="about__card-value">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What I do */}
        <div className={`about__what ${inView ? 'fade-up' : ''}`} style={{ animationDelay: '0.3s' }}>
          <h3 className="heading" style={{ fontSize: 20, marginBottom: 'var(--s3)', color: 'var(--text-2)' }}>
            What I build
          </h3>
          <div className="about__what-grid">
            {WHAT_I_DO.map(({ icon, title, desc }) => (
              <div key={title} className="about__what-card glass">
                <span className="about__what-icon">{icon}</span>
                <h4 className="about__what-title">{title}</h4>
                <p className="about__what-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
