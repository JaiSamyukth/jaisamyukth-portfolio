import React from 'react';
import { Link } from 'react-router-dom';
import { approachSteps } from '../data/content';
import { Crumbs } from '../components/Bits';

export function Approach() {
  return (
    <div className="bg-purple" style={{ borderLeft: '20px solid var(--ink)' }}>
      <div className="wrap section">
        <Crumbs trail={[{ label: 'My Method' }]} />
        <div className="card card--lg" style={{ position: 'relative', marginTop: '2.5rem' }}>
          <p className="sticker sticker--float bg-yellow tilt-r" >
            Confidential // approach_doc_v1
          </p>
          <h1 className="t-mega center" style={{ textDecoration: 'underline wavy var(--acid)', textUnderlineOffset: '0.12em', textDecorationThickness: '0.08em' }} data-reveal="up" data-intro>
            The approach
          </h1>
          <div style={{ margin: '2.5rem 0' }}>
            <h2 className="sticker bg-ink" style={{ color: 'var(--paper)', boxShadow: 'none', fontSize: '1rem' }}>
              Objective
            </h2>
            <p className="t-l" style={{ borderLeft: '6px solid var(--acid)', paddingLeft: '1.25rem', marginTop: '1rem', textTransform: 'none' }}>
              Stop doing boring things manually.
            </p>
          </div>
          <ol className="steps">
            {approachSteps.map((s, i) => (
              <li key={s.title} className="card step" data-reveal="up" data-delay={String(i * 0.08)}>
                <span className="step__n" aria-hidden="true">
                  0{i + 1}
                </span>
                <h2>{s.title}</h2>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="bg-ink" style={{ marginTop: '3rem', padding: '2rem', border: '4px dashed #777' }}>
            <h2 className="label c-acid" style={{ fontSize: '1.1rem' }}>
              // The result:
            </h2>
            <p className="t-m mono" style={{ marginTop: '0.75rem' }}>
              Software that you forget exists because it actually works. That’s the only compliment I care about.
            </p>
            <p className="mono" style={{ marginTop: '1rem', color: '#b8b6af' }}>
              This is also why I don’t do “3-week discovery phases.” The fastest way to test whether an idea works is to write the code and find out.
            </p>
            <Link to="/contact" className="neo-btn" style={{ marginTop: '1.75rem' }} data-label="Complain">
              Start a conversation <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
