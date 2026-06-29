import { useState, useEffect, useRef } from 'react';

// Scroll-triggered reveal
export function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// Typewriter effect
export function useTypewriter(words, speed = 80, deleteSpeed = 40, pause = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;
    if (!deleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => setCharIdx(c => c + 1), speed);
      } else {
        timeout = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx(c => c - 1), deleteSpeed);
      } else {
        setDeleting(false);
        setWordIdx(i => (i + 1) % words.length);
      }
    }
    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, deleteSpeed, pause]);

  return displayed;
}

// Active section tracking
export function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0]);
  useEffect(() => {
    const observers = sectionIds.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, [sectionIds]);
  return active;
}

// Copy to clipboard
export function useCopy(text, duration = 2000) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), duration);
    });
  };
  return [copied, copy];
}

// Mouse position (for spotlight effect)
export function useMouse() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = e => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, []);
  return pos;
}

// Scroll progress
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handler = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return progress;
}
