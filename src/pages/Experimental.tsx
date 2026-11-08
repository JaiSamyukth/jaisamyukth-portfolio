import React from 'react';
import { experiments, otherRepos } from '../data/content';
import { socials } from '../data/site';
import { Crumbs } from '../components/Bits';

export function Experimental() {
  const gh = socials.find((s) => s.label === 'GitHub')!;
  return (
    <div className="bg-acid">
      <div className="wrap section">
        <Crumbs trail={[{ label: 'Lab' }]} />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'end', gap: '1rem', borderBottom: 'var(--b) solid var(--ink)', paddingBottom: '1rem', marginBottom: '3rem' }}>
          <div>
            <h1 className="t-mega" data-reveal="up" data-intro>
              Unfinished business
            </h1>
            <p className="mono" style={{ fontWeight: 700, marginTop: '0.5rem' }}>
              The 90% that didn’t make it
            </p>
          </div>
          <p className="sticker bg-paper">Status: mostly broken</p>
        </div>
        <div className="lists">
          <div className="card card--lg">
            <h2 className="t-l" style={{ marginBottom: '1rem' }}>
              Failed experiments
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>If you build enough things, most of them will be terrible. These are the projects that taught me what not to do.</p>
            <ul style={{ display: 'grid', gap: '0.9rem', fontFamily: 'var(--f-body)', fontSize: 'var(--t-body)' }}>
              {experiments.map((e) => (
                <li key={e.title} className="lessons" style={{ display: 'block' }}>
                  <span style={{ display: 'block', padding: '1rem', border: '3px solid var(--ink)', background: 'var(--paper)' }}>
                    <b style={{ display: 'block', textTransform: 'uppercase' }}>{e.title}</b>
                    <span className="mono" style={{ fontSize: '0.9rem' }}>
                      {e.body}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="stack-gap">
            <div className="card card--lg bg-ink" style={{ border: '4px solid var(--paper)' }}>
              <h2 className="t-l c-pink" style={{ marginBottom: '1rem' }}>
                Other repos
              </h2>
              <ul style={{ display: 'grid', gap: '0.5rem', listStyle: 'disc', paddingLeft: '1.25rem' }} className="mono">
                {otherRepos.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <a href={gh.href} target="_blank" rel="me noopener noreferrer" className="neo-btn neo-btn--paper" style={{ marginTop: '1.5rem' }}>
                Enter at your own risk ↗
              </a>
            </div>
            <div className="card card--lg bg-purple center">
              <p className="t-mega" aria-hidden="true">
                ?
              </p>
              <p className="t-m" style={{ fontWeight: 700 }}>
                I will undoubtedly break more things soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
