import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { WorkList } from '../components/WorkList';
import { Arrow } from '../components/Bits';
import { Reveal } from '../components/Motion';

export function Work() {
  return (
    <>
      <PageHero
        crumb="Work"
        title="Things that"
        accent="survived."
        lede={
          <p>
            I have dozens of abandoned repositories. These are the ones that made it — products from{' '}
            <a href="https://www.genrecai.com" target="_blank" rel="noopener" className="link">
              Genrec AI
            </a>{' '}
            and client systems that run in production every day.
          </p>
        }
        aside={
          <p className="text-muted">
            Every project starts the same way: someone doing something tedious by hand, and me being unable to look away.
          </p>
        }
      />
      <section className="pb-28">
        <div className="wrap">
          <WorkList headingLevel={2} />
          <Reveal className="mt-16 flex flex-col items-start justify-between gap-6 rounded-md bg-paper-2 p-8 md:flex-row md:items-center md:p-12">
            <p className="max-w-xl text-lede">
              Want the 90% that <em className="font-serif">didn’t</em> make it? The lab keeps the failed experiments.
            </p>
            <Link to="/experimental" className="btn btn-ghost">
              <span>Visit the lab</span> <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
