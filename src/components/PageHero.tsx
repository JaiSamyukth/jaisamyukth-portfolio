import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal, Split } from './Motion';

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="eyebrow text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        {items.map((c) => (
          <li key={c.label} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {c.to ? (
              <Link to={c.to} className="link">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  crumb,
  title,
  accent,
  lede,
  aside,
}: {
  crumb: string;
  title: string;
  /** Optional italic serif word appended to the title */
  accent?: string;
  lede: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <section className="pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="wrap">
        <Breadcrumbs items={[{ label: crumb }]} />
        <h1 className="mt-8 text-display font-semibold">
          <Split text={title} />
          {accent ? (
            <>
              {' '}
              <Reveal as="span" delay={300} className="inline-block font-serif font-normal italic">
                {accent}
              </Reveal>
            </>
          ) : null}
        </h1>
        <div className="mt-10 grid gap-8 border-t border-ink/20 pt-8 md:grid-cols-12">
          <Reveal className="text-lede md:col-span-7" delay={200}>
            {lede}
          </Reveal>
          {aside ? (
            <Reveal className="md:col-span-4 md:col-start-9" delay={300}>
              {aside}
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
