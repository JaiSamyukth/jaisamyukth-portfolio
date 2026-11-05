import React, { useEffect, useState } from 'react';
import type { Shot } from '../data/projects';
import { person } from '../data/site';

export function Shot({
  shot,
  className = '',
  sizes = '(min-width: 1024px) 60vw, 100vw',
  eager = false,
}: {
  shot: Shot;
  className?: string;
  sizes?: string;
  eager?: boolean;
}) {
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

/** Live clock in Coimbatore. Renders a stable placeholder on the server to avoid hydration drift. */
export function LocalTime({ className = '' }: { className?: string }) {
  const [now, setNow] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: person.timeZone,
    });
    const tick = () => setNow(fmt.format(new Date()).toUpperCase());
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <span className={className}>
      <time suppressHydrationWarning>{now ?? '--:-- --'}</time> IST
    </span>
  );
}

/** Uses the browser's speech engine to say the name the way it's meant to sound. */
export function SayMyName({ className = '' }: { className?: string }) {
  const [supported, setSupported] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  useEffect(() => setSupported('speechSynthesis' in window), []);
  const say = () => {
    if (!supported) return;
    const u = new SpeechSynthesisUtterance(person.spoken);
    const voices = window.speechSynthesis.getVoices();
    u.voice = voices.find((v) => v.lang === 'en-IN') ?? voices.find((v) => v.lang.startsWith('en')) ?? null;
    u.rate = 0.82;
    u.onend = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  };
  if (!supported) return null;
  return (
    <button type="button" onClick={say} className={`chip hover:bg-ink hover:text-paper ${className}`} aria-label={`Hear how to say ${person.shortName}`}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
        <path d="M11 5 6 9H2v6h4l5 4V5z" />
        <path d={speaking ? 'M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14' : 'M15.5 8.5a5 5 0 0 1 0 7'} />
      </svg>
      {speaking ? 'Saying it…' : 'Hear it'}
    </button>
  );
}

export function Arrow({ className = '', diagonal = false }: { className?: string; diagonal?: boolean }) {
  return (
    <svg
      className={className}
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      style={diagonal ? { transform: 'rotate(-45deg)' } : undefined}
    >
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function SectionLabel({ index, children, className = '' }: { index: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`eyebrow flex items-center gap-4 ${className}`}>
      <span>({index})</span>
      <span className="h-px w-10 bg-current opacity-40" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}
