import React from 'react';
import { Crumbs } from './Bits';

/** Inner page header: title on the left, real facts on the right, joined by a violet seam. */
export function PageHead({
  crumb,
  title,
  lede,
  facts,
  split = 'chars',
  size = 'mega',
}: {
  crumb: string;
  title: string;
  lede?: React.ReactNode;
  facts: { k: string; v: React.ReactNode }[];
  split?: 'chars' | 'lines';
  size?: 'mega' | 'xl';
}) {
  return (
    <header className="pagehead wrap">
      <Crumbs trail={[{ label: crumb }]} />
      <div className="pagehead__grid">
        <div className="pagehead__main">
          <h1 className={size === 'mega' ? 't-mega' : 't-xl'} data-split={split} data-intro>
            {title}
          </h1>
          {lede ? (
            <p className="pagehead__lede" data-reveal="up" data-intro data-delay="0.3">
              {lede}
            </p>
          ) : null}
        </div>
        <i className="pagehead__seam" aria-hidden="true" data-reveal="clip" data-intro data-delay="0.2" />
        <dl className="pagehead__facts" data-reveal="fade" data-intro data-delay="0.4">
          {facts.map((f) => (
            <div key={f.k}>
              <dt>{f.k}</dt>
              <dd>{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}
