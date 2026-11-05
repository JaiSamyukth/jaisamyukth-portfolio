import React from 'react';
import { usePage } from '../engine/react';
import { learnings } from '../data/content';
import { PageHead } from '../components/PageHead';

export function Learnings() {
  usePage(() => {
    document.documentElement.classList.add('page-night');
    return () => document.documentElement.classList.remove('page-night');
  });
  return (
    <div className="night">
      <PageHead
        crumb="Lessons"
        title="Things I learned expensively"
        split="lines"
        size="xl"
        lede="A running tally, written after each incident."
        facts={[
          { k: 'Entries', v: learnings.length },
          { k: 'Paid for by', v: 'Cloud invoices' },
        ]}
      />
      <section className="wrap section--tight" aria-label="Lessons">
        <ol className="biglist">
          {learnings.map((l, i) => (
            <li key={l} data-reveal="fade">
              <span className="biglist__n">No. {i + 1}</span>
              <p className="biglist__t">{l}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
