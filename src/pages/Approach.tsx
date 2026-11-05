import React from 'react';
import { Link } from 'react-router-dom';
import { approachSteps } from '../data/content';
import { Arrow } from '../components/Bits';
import { PageHead } from '../components/PageHead';

export function Approach() {
  return (
    <>
      <PageHead
        crumb="Approach"
        title="Approach"
        lede="The objective: stop doing boring things by hand. The method is four steps on repeat."
        facts={[
          { k: 'Steps', v: approachSteps.length },
          { k: 'Discovery phase', v: 'None' },
          { k: 'Usual fix time', v: '2 AM' },
        ]}
      />
      <section className="wrap section--tight" aria-label="Steps">
        <ol className="biglist">
          {approachSteps.map((s, i) => (
            <li key={s.title} data-reveal="up">
              <span className="biglist__n">Step {i + 1}</span>
              <div>
                <h2 className="biglist__t" style={{ fontSize: 'var(--t-xl)' }}>
                  {s.title}
                </h2>
                <p className="biglist__b">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="night section--airy">
        <div className="wrap grid">
          <p className="t-l about-say" style={{ gridColumn: '1 / 10' }} data-split="lines">
            The result is software you forget exists, because it works. That is the only compliment I care about.
          </p>
          <div className="about-say" style={{ gridColumn: '1 / 8', marginTop: '2rem', display: 'grid', gap: '1.5rem' }}>
            <p className="muted">It is also why I skip three-week discovery phases. The fastest way to find out whether an idea works is to write the code.</p>
            <div>
              <Link to="/contact" className="btn btn--ghost" data-label="Contact">
                <span>Start with a conversation</span>
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
