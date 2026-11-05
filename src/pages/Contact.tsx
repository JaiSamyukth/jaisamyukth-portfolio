import React, { useState } from 'react';
import { contactReasons } from '../data/content';
import { person, socials } from '../data/site';
import { LocalTime } from '../components/Bits';
import { PageHead } from '../components/PageHead';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      location.href = `mailto:${person.email}`;
    }
  };
  return (
    <>
      <PageHead
        crumb="Contact"
        title="Contact"
        facts={[
          { k: 'Reply time', v: 'Within a day' },
          { k: 'Local time', v: <><LocalTime /> IST</> },
          { k: 'Taking on', v: 'Client work' },
        ]}
      />
      <section className="wrap section--tight">
        <div className="grid">
          <div className="about-say" style={{ gridColumn: '1 / 8', display: 'grid', gap: '1.5rem', alignContent: 'start' }}>
            <p className="label">Email, for actual work</p>
            <a href={`mailto:${person.email}`} className="t-l link" style={{ justifySelf: 'start', wordBreak: 'break-word' }}>
              {person.email}
            </a>
            <div className="hero__actions">
              <button type="button" className="btn btn--solid" onClick={copy}>
                <span aria-live="polite">{copied ? 'Copied' : 'Copy the address'}</span>
              </button>
              <p className="label">
                Replies within a day. It is <LocalTime /> in {person.location.city}.
              </p>
            </div>
          </div>
          <div className="about-say" style={{ gridColumn: '9 / -1' }} data-reveal="up">
            <p className="label">Most people who write fall into one of these</p>
            <ul className="case__list" style={{ marginTop: '0.75rem' }}>
              {contactReasons.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <p className="t-m" style={{ marginTop: '1.25rem', fontWeight: 600 }}>
              If that sounds familiar, let’s fix it.
            </p>
          </div>
        </div>
      </section>
      <section className="night section" aria-labelledby="elsewhere">
        <div className="wrap">
          <h2 id="elsewhere" className="label" style={{ marginBottom: '1rem' }}>
            Elsewhere
          </h2>
          <ul>
            {socials.map((s) => (
              <li key={s.href} className="index__row" style={{ borderColor: 'rgb(242 241 238 / 0.16)' }}>
                <a href={s.href} target="_blank" rel="me noopener noreferrer" className="index__link" style={{ gridTemplateColumns: 'minmax(0,5fr) minmax(0,6fr) auto' }}>
                  <span className="index__title">{s.label}</span>
                  <span className="muted">
                    {s.handle}, {s.note}
                  </span>
                  <span className="index__go" aria-hidden="true" style={{ borderColor: 'rgb(242 241 238 / 0.3)' }}>
                    <span className="arrow">→</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
