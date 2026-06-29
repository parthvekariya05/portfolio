import { useState } from 'react';
import { useInView } from '../hooks';
import { PROJECTS } from '../data/portfolio';
import './Projects.css';

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`project-card ${project.featured ? 'project-card--featured' : ''} ${inView ? 'fade-up' : ''}`}
      style={{ animationDelay: `${index * 0.12}s`, '--p-color': project.color }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {project.featured && (
        <div className="project-badge">
          ⚡ Flagship Project
        </div>
      )}

      {/* Header */}
      <div className="project-header">
        <div className="project-icon">{project.icon}</div>
        <div className="project-meta">
          <span className="project-year">{project.year}</span>
        </div>
      </div>

      <h3 className="project-title heading">{project.title}</h3>
      <p className="project-tagline" style={{ color: project.color }}>{project.tagline}</p>
      <p className="project-desc">{project.description}</p>

      {/* Highlights */}
      <div className="project-highlights">
        {project.highlights.map(h => (
          <span key={h} className="project-highlight">
            <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {h}
          </span>
        ))}
      </div>

      {/* Tech stack */}
      <div className="project-tech">
        {project.tech.map(t => (
          <span key={t} className="tag" style={{ borderColor: project.color + '30', color: project.color, background: project.color + '0f' }}>
            {t}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="project-actions">
        {project.github !== '#' ? (
          <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ fontSize: 13, padding: '9px 20px' }}>
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
            View Code
          </a>
        ) : (
          <button className="btn btn-ghost" disabled style={{ fontSize: 13, padding: '9px 20px', opacity: 0.5, cursor: 'not-allowed' }}>
            Private Repo
          </button>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ fontSize: 13, padding: '9px 20px' }}>
            Live Demo ↗
          </a>
        )}
      </div>

      {/* Hover glow */}
      <div className="project-glow" style={{ background: project.color, opacity: hovered ? 0.06 : 0 }} />
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className="projects section-pad">
      <div className="container">
        <div className={`section-header ${inView ? 'fade-up' : ''}`} ref={ref}>
          <span className="label">Portfolio</span>
          <h2 className="heading" style={{ fontSize: 'clamp(28px,4vw,44px)', marginTop: 12 }}>
            Featured Projects
          </h2>
          <p style={{ color: 'var(--text-3)', fontSize: 15, marginTop: 12, maxWidth: 480 }}>
            Production-grade applications built from scratch — not tutorials.
          </p>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className={`projects__cta ${inView ? 'fade-up' : ''}`} style={{ animationDelay: '0.4s' }}>
          <a href="https://github.com/parthvekariya05" target="_blank" rel="noreferrer" className="btn btn-ghost">
            See All on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
