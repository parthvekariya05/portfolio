import { useState } from 'react';
import { useMouse, useTypewriter } from '../hooks';
import { META, ROLES, STATS } from '../data/portfolio';
import codingImg from '../assets/coding.jpg';
import './Hero.css';

export default function Hero() {
  const mouse = useMouse();
  const typed = useTypewriter(ROLES, 75, 35, 2000);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText(META.email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2500);
    });
  };

  return (
    <section id="home" className="hero grid-pattern">
      {/* Toast notification */}
      <div className={`hero__toast ${emailCopied ? 'hero__toast--show' : ''}`}>
        ✅ Email copied — <strong>{META.email}</strong>
      </div>
      {/* Spotlight follows cursor */}
      <div
        className="hero__spotlight"
        style={{
          left: mouse.x,
          top: mouse.y,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Ambient blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__blob hero__blob--3" />

      <div className="container hero__inner">
        {/* Left — text */}
        <div className="hero__content">
          {/* Available badge */}
          <div className="hero__badge fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="hero__badge-dot" />
            Open to Work · Remote / WFH
          </div>

          <h1 className="hero__heading display fade-up" style={{ animationDelay: '0.2s' }}>
            Building
            <span className="gradient-text"> digital</span>
            <br />
            experiences
            <span className="hero__period gradient-text">.</span>
          </h1>

          {/* Typewriter */}
          <div className="hero__typewriter fade-up" style={{ animationDelay: '0.3s' }}>
            <span className="hero__typewriter-label">I'm a</span>
            <span className="hero__typed">{typed}</span>
            <span className="hero__cursor" />
          </div>

          <p className="hero__bio fade-up" style={{ animationDelay: '0.4s' }}>
            Final-year B.Tech CSE @ <strong>{META.university}</strong> (CGPA {META.cgpa}) building
            production-grade full-stack apps with <strong>React</strong>, <strong>ASP.NET Core 8</strong>,
            and <strong>AI integration</strong>. Gujarat, India.
          </p>

          {/* CTAs */}
          <div className="hero__ctas fade-up" style={{ animationDelay: '0.5s' }}>
            <button
              className="btn btn-primary hero__cta-main"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See My Work
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <a href={META.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
              </svg>
              GitHub
            </a>
            <button className="btn btn-ghost" onClick={handleEmailClick}>
              {emailCopied ? (
                <>
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Email
                </>
              )}
            </button>
          </div>

          {/* Stats */}
          <div className="hero__stats fade-up" style={{ animationDelay: '0.65s' }}>
            {STATS.map(({ value, label }) => (
              <div key={label} className="hero__stat">
                <span className="hero__stat-value display">{value}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — visual orb */}
        <div className="hero__visual fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="hero__orb floating">
            <div className="hero__orb-inner">
              <img
                src={codingImg}
                alt="Parth Vekariya - Developer"
                className="hero__orb-img"
              />
            </div>
            {/* Orbiting icons */}
            <div className="hero__orbit hero__orbit--1">
              <span className="hero__orbit-icon">⚛️</span>
            </div>
            <div className="hero__orbit hero__orbit--2">
              <span className="hero__orbit-icon">🔷</span>
            </div>
            <div className="hero__orbit hero__orbit--3">
              <span className="hero__orbit-icon">🤖</span>
            </div>
          </div>

          {/* Floating cards */}
          <div className="hero__float-card hero__float-card--1">
            <span>🚀</span>
            <div>
              <div className="hero__float-title">AI Interview Simulator</div>
              <div className="hero__float-sub">Flagship Project</div>
            </div>
          </div>
          <div className="hero__float-card hero__float-card--2">
            <div className="hero__avail-dot" />
            <span style={{ fontSize: 13, color: 'var(--green)', fontWeight: 600 }}>Available Now</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
