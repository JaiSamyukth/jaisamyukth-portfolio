import React from 'react';
import { experiments, otherRepos } from '../data/content';
import { socials } from '../data/site';
import { Arrow } from '../components/Bits';
import { PageHead } from '../components/PageHead';

export function Experimental() {
  const gh = socials.find((s) => s.label === 'GitHub')!;
  return (
    <>
      <PageHead
        crumb="Lab"
        title="Lab"
        lede="If you build enough things, most of them will be terrible. These are the ones that taught me what not to do."
        facts={[
          { k: 'Experiments', v: experiments.length },
          { k: 'Status', v: 'Mostly broken' },
        ]}
      />
      <section className="wrap section--tight" aria-labelledby="failed">
        <h2 id="failed" className="label" style={{ marginBottom: '1rem' }}>
          Experiments that didn’t join up
        </h2>
        <ul className="biglist">
          {experiments.map((e) => (
            <li key={e.title} data-reveal="up" style={{ gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 7fr)' }}>
              <h3 className="biglist__t">{e.title}</h3>
              <p className="muted t-m">{e.body}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="night section">
        <div className="wrap grid">
          <div className="about-say" style={{ gridColumn: '1 / 7' }}>
            <h2 className="t-l">Also in the graveyard</h2>
          </div>
          <div className="about-say" style={{ gridColumn: '7 / -1', display: 'grid', gap: '1.5rem' }}>
            <ul className="case__list">
              {otherRepos.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <div>
              <a href={gh.href} target="_blank" rel="me noopener noreferrer" className="btn btn--ghost">
                <span>Enter at your own risk</span>
                <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
