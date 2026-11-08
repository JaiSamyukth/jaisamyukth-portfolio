import React from 'react';
import { Link } from 'react-router-dom';
import { WorkIndex } from '../components/WorkIndex';
import { PageHead } from '../components/PageHead';

export function Work() {
  return (
    <>
      <PageHead
        crumb="Survivors"
        tag="Survivors: 3 · Abandoned: lots"
        lede="I have dozens of abandoned repositories. These are the ones that actually made it. Mostly because someone paid me, or because I got annoyed enough to finish them."
      >
        Things that <span className="hl hl--acid">survived</span>
      </PageHead>
      <section className="section wrap" aria-label="Projects">
        <WorkIndex level={2} />
      </section>
      <section className="section--tight wrap">
        <div className="card card--lg bg-purple" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'space-between', alignItems: 'center' }}>
          <p className="t-l">Want the 90% that didn’t make it?</p>
          <Link to="/experimental" className="neo-btn neo-btn--ink" data-label="Lab">
            Enter the graveyard <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
