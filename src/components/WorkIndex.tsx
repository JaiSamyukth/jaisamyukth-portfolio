import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import ChromaGrid from './rb/ChromaGrid';

const ACCENT: Record<string, string> = { 'lumina-iq': '#ccff00', tabble: '#ff0099', 'crm-platform': '#2b59ff' };
const BAR: Record<string, string> = { 'lumina-iq': 'bg-acid', tabble: 'bg-pink', 'crm-platform': 'bg-blue' };

/** Colour-flood image grid (React Bits ChromaGrid) plus a neo card per project. */
export function WorkIndex({ level = 3, details = true }: { level?: 2 | 3; details?: boolean }) {
  const H = `h${level}` as 'h2' | 'h3';
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
                  <span className="pm__desc">{p.hook}</span>
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
