import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Shot as ShotT } from '../data/projects';
import { person } from '../data/site';

export function Shot({ shot, sizes = '100vw', eager = false, className }: { shot: ShotT; sizes?: string; eager?: boolean; className?: string }) {
  return (
    <img
      src={shot.small}
      srcSet={`${shot.small} 960w, ${shot.large} 1600w`}
      sizes={sizes}
      width={shot.width}
      height={shot.height}
      alt={shot.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      {...(eager ? { fetchPriority: 'high' as const } : {})}
      className={className}
    />
  );
}

/** Local time in Coimbatore. Stable placeholder on the server so hydration never drifts. */
export function LocalTime() {
  const [now, setNow] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: person.timeZone });
    const tick = () => setNow(fmt.format(new Date()).toLowerCase());
    tick();
    const id = window.setInterval(tick, 20_000);
    return () => window.clearInterval(id);
  }, []);
  return <time suppressHydrationWarning>{now ?? '--:--'}</time>;
}

/** Speaks the name with the browser's speech engine. Hidden where unsupported. */
export function SayIt({ className = '' }: { className?: string }) {
  const [ok, setOk] = useState(false);
  const [busy, setBusy] = useState(false);
  useEffect(() => setOk('speechSynthesis' in window), []);
  if (!ok) return null;
  const say = () => {
    const u = new SpeechSynthesisUtterance(person.spoken);
    const v = speechSynthesis.getVoices();
    u.voice = v.find((x) => x.lang === 'en-IN') ?? v.find((x) => x.lang.startsWith('en')) ?? null;
    u.rate = 0.82;
    u.onend = () => setBusy(false);
    setBusy(true);
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  };
  return (
    <button type="button" className={`chip ${className}`} onClick={say} aria-label={`Hear it: how ${person.shortName} is pronounced`}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
        <path d="M11 5 6 9H2v6h4l5 4V5z" />
        <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      </svg>
      {busy ? 'Saying it' : 'Hear it'}
    </button>
  );
}

export const Arrow = () => (
  <span className="arrow btn__arrow" aria-hidden="true">
    →
  </span>
);

export function Crumbs({ trail }: { trail: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="crumbs">
        <li>
          <Link to="/">Home</Link>
        </li>
        {trail.map((c) => (
          <li key={c.label} style={{ display: 'flex', gap: '0.5rem' }}>
            <span aria-hidden="true">/</span>
            {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
