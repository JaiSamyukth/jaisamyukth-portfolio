import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import ChromaGrid from './rb/ChromaGrid';
import { Shot } from './Bits';

const ACCENT: Record<string, string> = { 'lumina-iq': '#ccff00', tabble: '#ff0099', 'crm-platform': '#2b59ff' };
const BAR: Record<string, string> = { 'lumina-iq': 'bg-acid', tabble: 'bg-pink', 'crm-platform': 'bg-blue' };

/** Colour-flood image grid (React Bits ChromaGrid) plus a neo card per project. */
export function WorkIndex({
  level = 3,
  details = true,
  eager = false,
  variant = 'chroma',
}: {
  level?: 2 | 3;
  details?: boolean;
  eager?: boolean;
  variant?: 'chroma' | 'cards';
}) {
  const H = `h${level}` as 'h2' | 'h3';
  if (variant === 'cards') {
    // Plain HTML cards with real covers: paints without JS, so the page's LCP stays fast.
    return (
      <ul className="work-cards">
        {projects.map((p, i) => (
          <li key={p.id}>
            <Link to={`/work/${p.id}`} className="pm wc" data-label={p.title}>
              <span className={`pm__bar ${BAR[p.id]}`}>
                <span>{p.status}</span>
                <span>
                  {String(i + 1).padStart(2, '0')} · {p.year}
                </span>
              </span>
              {p.cover ? (
                <span className="wc__img">
                  <Shot shot={p.cover} eager={eager && i === 0} sizes="(max-width: 900px) 100vw, 60vw" />
                </span>
              ) : null}
              <span className="pm__body">
                <H className="pm__title">{p.title}</H>
                <span className="pm__desc t-m" style={{ fontWeight: 600 }}>{p.oneLiner}</span>
                <span className="pm__desc" style={{ fontStyle: 'italic' }}>“{p.hook}”</span>
                <span className="wc__join mono">
                  {p.joins.from} → {p.joins.to}
                </span>
                <span className="pm__tags" aria-label="Stack">
                  {p.stack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className="work-grid">
      <ChromaGrid
        items={projects.map((p) => ({
          image: p.cover!.small,
          title: p.title,
          subtitle: `${p.joins.from} → ${p.joins.to}`,
          accent: ACCENT[p.id],
          borderColor: ACCENT[p.id],
          url: `/work/${p.id}`,
          alt: p.cover!.alt,
        }))}
        columns={3}
        minCardWidth={260}
        gap={24}
        radius={320}
        grayscale={0.35}
        dim={0.05}
        cardRadius={0}
        aspectRatio="16 / 10"
        theme="light"
        showInfo
        eager={eager}
      />
      {details ? (
        <ul className="project-meta">
          {projects.map((p) => (
            <li key={p.id}>
              <Link to={`/work/${p.id}`} className="pm" data-label={p.title}>
                <span className={`pm__bar ${BAR[p.id]}`}>
                  <span>{p.status}</span>
                  <span>{p.year}</span>
                </span>
                <span className="pm__body">
                  <H className="pm__title">{p.title}</H>
                  <span className="pm__desc">{p.oneLiner}</span>
                  <span className="pm__tags" aria-label="Stack">
                    {p.stack.slice(0, 4).map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
