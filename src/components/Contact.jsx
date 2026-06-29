import { useState } from 'react';
import { useInView, useCopy } from '../hooks';
import { META } from '../data/portfolio';
import './Contact.css';

// ─── EMAILJS CONFIG ───────────────────────────────────────────────
// 1. Go to https://www.emailjs.com → Sign up free
// 2. Add Email Service → connect your Gmail → copy Service ID
// 3. Create Email Template → use variables below → copy Template ID
// 4. Go to Account → copy Public Key
// Replace the three values below with yours:
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. service_abc123
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. template_xyz789
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // e.g. aBcDeFgHiJkLmNoP
// ──────────────────────────────────────────────────────────────────

const CONTACT_LINKS = [
  {
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: META.email,
    href: `mailto:${META.email}`,
    color: '#8B5CF6',
    copyable: true,
  },
  {
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/parthvekariya05',
    href: META.linkedin,
    color: '#0EA5E9',
    copyable: false,
  },
  {
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: 'Phone',
    value: META.phone,
    href: `tel:${META.phone}`,
    color: '#10B981',
    copyable: true,
  },
  {
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/parthvekariya05',
    href: META.github,
    color: '#F59E0B',
    copyable: false,
  },
];

function ContactLink({ link }) {
  const [copied, copy] = useCopy(link.value);
  return (
    <div className="contact__link glass">
      <div className="contact__link-icon" style={{ color: link.color, background: link.color + '18' }}>
        {link.icon}
      </div>
      <div className="contact__link-info">
        <div className="contact__link-label">{link.label}</div>
        <div className="contact__link-value">{link.value}</div>
      </div>
      <div className="contact__link-actions">
        <a
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel="noreferrer"
          className="btn btn-ghost contact__link-btn"
        >
          Open ↗
        </a>
        {link.copyable && (
          <button className="btn btn-ghost contact__link-btn" onClick={copy} title="Copy">
            {copied ? '✓' : '⎘'}
          </button>
        )}
      </div>
    </div>
  );
}

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [state, setState] = useState('idle'); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('');

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    if (!form.name.trim())    return 'Please enter your name.';
    if (!form.email.trim())   return 'Please enter your email.';
    if (!/\S+@\S+\.\S+/.test(form.email)) return 'Please enter a valid email.';
    if (!form.message.trim()) return 'Please enter a message.';
    return null;
  };

  const handleSubmit = async () => {
    const err = validate();
    if (err) { setErrorMsg(err); return; }
    setErrorMsg('');
    setState('sending');

    try {
      // Load EmailJS from CDN dynamically (no npm install needed)
      if (!window.emailjs) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
        window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
      }

      await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          subject:      form.subject || 'Portfolio Contact',
          message:      form.message,
          to_name:      'Parth',
          reply_to:     form.email,
        }
      );

      setState('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setState('idle'), 6000);

    } catch (e) {
      console.error('EmailJS error:', e);
      setErrorMsg('Failed to send. Please email me directly at ' + META.email);
      setState('idle');
    }
  };

  return (
    <section id="contact" className="contact section-pad">
      <div className="container" ref={ref}>
        <div className={`section-header ${inView ? 'fade-up' : ''}`}>
          <span className="label">Get In Touch</span>
          <h2 className="heading" style={{ fontSize: 'clamp(28px,4vw,44px)', marginTop: 12 }}>
            Let's Work Together
          </h2>
          <p style={{ color: 'var(--text-3)', fontSize: 15, marginTop: 12, maxWidth: 460 }}>
            Open to remote fresher roles globally. I respond within 24 hours.
          </p>
        </div>

        <div className="contact__grid">
          {/* Left — links */}
          <div className={`contact__left ${inView ? 'fade-up' : ''}`} style={{ animationDelay: '0.1s' }}>
            <div className="contact__links">
              {CONTACT_LINKS.map(link => (
                <ContactLink key={link.label} link={link} />
              ))}
            </div>

            {/* Location card */}
            <div className="contact__location glass">
              <div className="contact__location-pin">📍</div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-1)', fontSize: 15 }}>Gujarat, India</div>
                <div style={{ fontSize: 13, color: 'var(--text-3)', marginTop: 3 }}>IST (UTC +5:30) · Open to global remote</div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className={`contact__form-wrap glass ${inView ? 'fade-up' : ''}`} style={{ animationDelay: '0.2s' }}>
            <h3 className="heading" style={{ fontSize: 18, marginBottom: 'var(--s3)' }}>Send a Message</h3>

            {/* Success banner */}
            {state === 'sent' && (
              <div className="contact__success">
                <span>🎉</span>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--green)' }}>Message sent successfully!</div>
                  <div style={{ fontSize: 13, color: 'var(--text-3)', marginTop: 3 }}>Parth will reply within 24 hours.</div>
                </div>
              </div>
            )}

            {/* Error banner */}
            {errorMsg && (
              <div className="contact__error">
                ⚠️ {errorMsg}
              </div>
            )}

            <div className="contact__form">
              <div className="contact__row">
                <div className="contact__field">
                  <label className="contact__label">Name *</label>
                  <input
                    className="contact__input"
                    placeholder="Your name"
                    value={form.name}
                    onChange={set('name')}
                    disabled={state === 'sending' || state === 'sent'}
                  />
                </div>
                <div className="contact__field">
                  <label className="contact__label">Email *</label>
                  <input
                    className="contact__input"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={set('email')}
                    disabled={state === 'sending' || state === 'sent'}
                  />
                </div>
              </div>
              <div className="contact__field">
                <label className="contact__label">Subject</label>
                <input
                  className="contact__input"
                  placeholder="Job opportunity, collaboration..."
                  value={form.subject}
                  onChange={set('subject')}
                  disabled={state === 'sending' || state === 'sent'}
                />
              </div>
              <div className="contact__field">
                <label className="contact__label">Message *</label>
                <textarea
                  className="contact__input contact__textarea"
                  placeholder="Tell me about the role or project..."
                  rows={5}
                  value={form.message}
                  onChange={set('message')}
                  disabled={state === 'sending' || state === 'sent'}
                />
              </div>
              <button
                className={`btn btn-primary contact__submit ${state === 'sent' ? 'contact__submit--sent' : ''}`}
                onClick={handleSubmit}
                disabled={state === 'sending' || state === 'sent'}
              >
                {state === 'idle'    && (<>Send Message <span>→</span></>)}
                {state === 'sending' && (<><span className="contact__spinner" /> Sending...</>)}
                {state === 'sent'    && (<>✓ Message Sent!</>)}
              </button>

              <p className="contact__note">
                📧 Messages go directly to <strong>{META.email}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
