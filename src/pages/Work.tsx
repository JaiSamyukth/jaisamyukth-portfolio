import React from 'react';
import { Link } from 'react-router-dom';
import { WorkIndex } from '../components/WorkIndex';
import { Arrow } from '../components/Bits';
import { PageHead } from '../components/PageHead';
import { projects } from '../data/projects';

export function Work() {
  return (
    <>
      <PageHead
        crumb="Work"
        title="Work"
        lede="Products from Genrec AI and client systems that run every day. I have dozens of abandoned repositories; these are the ones that made it."
        facts={[
          { k: 'Systems in use', v: projects.length },
          { k: 'Years', v: '2024 to now' },
          { k: 'Built from', v: 'Coimbatore' },
        ]}
      />
      <section className="wrap section--tight" aria-label="Projects">
        <WorkIndex level={2} />
      </section>
      <section className="wrap section">
        <div className="index__head" style={{ marginBottom: 0 }}>
          <p className="t-l measure">The other ninety percent lives in the lab, with notes on why it failed.</p>
          <Link to="/experimental" className="btn btn--ghost" data-label="Lab">
            <span>Visit the lab</span>
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
