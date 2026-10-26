import { useState, useEffect } from 'react';
import { useScrollProgress } from '../hooks';
import { META } from '../data/portfolio';
import './Navbar.css';

const NAV_ITEMS = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close menu when screen grows to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1000) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Progress bar */}
      <div className="nav-progress" style={{ transform: `scaleX(${progress})` }} />

      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
        <div className="container navbar__inner">
          {/* Logo */}
          <button className="navbar__logo" onClick={() => scrollTo('home')}>
            <span className="navbar__logo-mark">P</span>
            <span className="navbar__logo-text">arth<span className="navbar__logo-dot">.</span></span>
          </button>

          {/* Desktop links */}
          <ul className="navbar__links">
            {NAV_ITEMS.map(item => (
              <li key={item}>
                <button
                  className={`navbar__link ${activeSection === item ? 'navbar__link--active' : ''}`}
                  onClick={() => scrollTo(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="navbar__actions">
            <a
              href={META.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost navbar__cta"
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
              </svg>
              GitHub
            </a>
            <button className="btn btn-primary" onClick={() => scrollTo('contact')}>
              Hire Me
            </button>
          </div>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(m => !m)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
          {NAV_ITEMS.map(item => (
            <button
              key={item}
              className={`navbar__mobile-link ${activeSection === item ? 'active' : ''}`}
              onClick={() => scrollTo(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <div className="navbar__mobile-actions">
            <a href={META.github} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>GitHub</a>
            <button className="btn btn-primary" onClick={() => scrollTo('contact')} style={{ width: '100%', justifyContent: 'center' }}>Hire Me</button>
          </div>
        </div>
      </nav>
    </>
  );
}
