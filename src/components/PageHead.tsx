import React from 'react';
import { Crumbs } from './Bits';

export function PageHead({
  crumb,
  tag,
  tagClass = 'bg-yellow',
  children,
  lede,
  night = false,
}: {
  crumb: string;
  tag?: string;
  tagClass?: string;
  children: React.ReactNode;
  lede?: React.ReactNode;
  night?: boolean;
}) {
  return (
    <header className={`phead${night ? ' night' : ''}`}>
      <div className="wrap">
        <Crumbs trail={[{ label: crumb }]} />
        {tag ? <p className={`sticker tilt-r phead__tag ${tagClass}`}>{tag}</p> : null}
        <h1 className="t-mega" data-reveal="up" data-intro>
          {children}
        </h1>
        {lede ? (
          <p className="phead__lede" data-reveal="up" data-intro data-delay="0.15">
            {lede}
          </p>
        ) : null}
      </div>
    </header>
  );
}
