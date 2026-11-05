import React from 'react';
import { learnings } from '../data/content';
import { Breadcrumbs } from '../components/PageHero';
import { Reveal, Split } from '../components/Motion';

export function Learnings() {
  return (
    <div className="on-ink bg-ink text-paper">
      <section className="pb-16 pt-32 md:pt-40">
        <div className="wrap [&_nav]:text-muted-dark [&_[aria-current]]:text-paper">
          <Breadcrumbs items={[{ label: 'Lessons' }]} />
          <h1 className="mt-8 text-display font-semibold">
            <Split text="Things I’ve learned" />{' '}
            <Reveal as="span" delay={400} className="inline-block font-serif font-normal italic text-acid">
              expensively.
            </Reveal>
          </h1>
          <p className="eyebrow mt-8 text-muted-dark">A running tally · {learnings.length} entries and counting</p>
        </div>
      </section>
      <section className="pb-28">
        <div className="wrap">
          <ol>
            {learnings.map((l, i) => (
              <Reveal
                as="li"
                key={l}
                delay={(i % 4) * 60}
                className="group grid grid-cols-[3rem_1fr] items-baseline gap-4 border-t border-paper/15 py-6 last:border-b md:grid-cols-[6rem_1fr] md:py-8"
              >
                <span className="font-mono text-sm text-muted-dark transition-colors group-hover:text-acid">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-[clamp(1.6rem,4vw,3.4rem)] font-semibold leading-[1] tracking-[-0.035em] transition-transform duration-500 ease-expo group-hover:translate-x-3">
                  {l}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
