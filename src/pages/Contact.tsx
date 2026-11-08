import React from 'react';
import { contactReasons } from '../data/content';
import { person, socials } from '../data/site';
import { Crumbs, LocalTime } from '../components/Bits';
import Magnet from '../components/rb/Magnet';

const NOTES: Record<string, string> = { GitHub: 'my graveyard of repos', LinkedIn: 'for the recruiter bots', 'X (Twitter)': 'occasional noise', Instagram: 'proof I go outside', 'Dev.to': 'rants' };

export function Contact() {
  return (
    <div className="bg-yellow" style={{ backgroundImage: 'radial-gradient(#0a0a0a22 2px, transparent 2px)', backgroundSize: '20px 20px' }}>
      <div className="wrap section" style={{ maxWidth: '64rem' }}>
        <Crumbs trail={[{ label: 'Complain' }]} />
        <div className="card" style={{ border: '8px solid var(--ink)', boxShadow: '16px 16px 0 var(--ink)', position: 'relative', marginTop: '2rem' }}>
          <p className="sticker sticker--float bg-ink tilt-r" style={{ color: 'var(--paper)' }}>
            Open frequency
          </p>
          <h1 className="t-mega center" data-reveal="up" data-intro>
            Say <br />
            <span className="c-blue">hi.</span>
          </h1>
          <p className="t-m center" style={{ marginTop: '1.5rem', fontWeight: 600 }}>
            Most people who email me fall into one of these categories.
          </p>
          <ul className="mono center" style={{ display: 'grid', gap: '0.75rem', margin: '1.5rem auto', maxWidth: '36rem' }}>
            {contactReasons.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p className="t-l center c-blue" style={{ margin: '2rem 0' }}>
            If any of that sounds familiar… let’s fix it.
          </p>
          <div className="center" style={{ marginBottom: '2.5rem' }}>
            <Magnet magnetStrength={3} padding={60}>
              <a href={`mailto:${person.email}`} className="neo-btn neo-btn--ink" style={{ fontSize: 'clamp(1rem, 2.4vw, 1.4rem)' }} data-no-transition>
                {person.email}
              </a>
            </Magnet>
          </div>
          <nav aria-label="Elsewhere" className="contact-cards">
            <a href={`mailto:${person.email}`} data-no-transition>
              <b>[Email]</b>
              <span>for actual work</span>
            </a>
            {socials.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="me noopener noreferrer">
                <b>[{s.label}]</b>
                <span>{NOTES[s.label] ?? s.note}</span>
              </a>
            ))}
          </nav>
          <p className="mono muted center" style={{ marginTop: '2rem', fontWeight: 700 }}>
            RESPONSE LATENCY: &lt; 24H · LOCAL TIME <LocalTime />
          </p>
        </div>
        <p className="mono center" style={{ marginTop: '3rem', fontWeight: 700, opacity: 0.5 }}>
          // END OF TRANSMISSION
        </p>
      </div>
    </div>
  );
}
