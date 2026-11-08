import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProject, projects } from '../data/projects';
import { Crumbs, Shot } from '../components/Bits';
import { NotFound } from './NotFound';
import TiltedCard from '../components/rb/TiltedCard';

const BG: Record<string, string> = { 'lumina-iq': 'bg-acid', tabble: 'bg-pink', 'crm-platform': 'bg-blue' };

export function ProjectDetail() {
  const { id = '' } = useParams();
  const p = getProject(id);
  if (!p) return <NotFound />;
  const next = projects[(projects.indexOf(p) + 1) % projects.length];

  return (
    <article>
      <header className={`phead ${BG[p.id]}`}>
        <div className="wrap">
          <Crumbs trail={[{ label: 'Survivors', to: '/work' }, { label: p.title }]} />
          <p className="sticker tilt-l bg-paper phead__tag">
            {p.category} · {p.status}
          </p>
          <h1 className="t-mega" data-reveal="up" data-intro>
            {p.title}
          </h1>
          <p className="phead__lede" data-reveal="up" data-intro data-delay="0.15" style={{ fontWeight: 700 }}>
            {p.hook}
          </p>
          <dl className="case__meta">
            <div>
              <dt>Focus</dt>
              <dd>{p.focus}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{p.year}</dd>
            </div>
            <div>
              <dt>Type</dt>
              <dd>{p.kind}</dd>
            </div>
            <div>
              <dt>Proof it exists</dt>
              <dd>
                {p.liveLink ? (
                  <a href={p.liveLink} target="_blank" rel="noopener" className="ulink tap">
                    {p.liveLink.replace(/^https?:\/\//, '')} ↗
                  </a>
                ) : (
                  'Only works on the client’s machines'
                )}
              </dd>
            </div>
          </dl>
        </div>
      </header>

      {p.cover ? (
        <section className="section--tight wrap case-cover" aria-label="Screens">
          <TiltedCard
            imageSrc={p.cover.large}
            altText={p.cover.alt}
            captionText={p.title}
            containerHeight="auto"
            containerWidth="100%"
            imageHeight="auto"
            imageWidth="100%"
            rotateAmplitude={5}
            scaleOnHover={1.02}
            radius={0}
            glare={0.2}
          />
        </section>
      ) : null}

      <section className="section--tight wrap" aria-label="The story">
        <div className="card card--lg" style={{ marginBottom: '2rem' }}>
          <h2 className="label" style={{ marginBottom: '0.75rem' }}>
            System overview
          </h2>
          <p className="t-m" data-reveal="fade">
            {p.overview}
          </p>
        </div>
        <div className="case__cols">
          <div className="card bg-yellow">
            <h2>The frustration</h2>
            <p>{p.problem}</p>
          </div>
          <div className="card bg-ink">
            <h2 className="c-acid">The code</h2>
            <p>{p.build}</p>
            <ul className="pm__tags" style={{ marginTop: '1.25rem' }} aria-label="Stack">
              {p.stack.map((s) => (
                <li key={s} style={{ listStyle: 'none', border: '2px solid #fdfbf7', padding: '0.1rem 0.5rem', fontFamily: 'var(--f-mono)', fontSize: '0.75rem', fontWeight: 700 }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {p.gallery.length > 1 ? (
        <section className="section--tight wrap" aria-label="More screens">
          <div className="case__gallery">
            {p.gallery.slice(1).map((g) => (
              <figure key={g.small} data-reveal="up">
                <Shot shot={g} sizes="(max-width: 900px) 100vw, 50vw" />
                <figcaption>{g.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section--tight wrap" aria-label="Outcome">
        <div className="case__cols">
          <div className="card card--lg">
            <h2 className="t-l" style={{ marginBottom: '1.25rem' }}>
              The outcome
            </h2>
            <ul className="case__list">
              {p.outcomes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
          <div className={`card card--lg ${BG[p.id]}`}>
            <h2 className="t-l" style={{ marginBottom: '1.25rem' }}>
              Current state
            </h2>
            <ul className="case__list">
              {p.traction.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <nav className="night bt" aria-label="Next case study" style={{ marginTop: 'calc(var(--u) * 6)' }}>
        <div className="wrap case__next">
          <Link to="/work" className="neo-btn neo-btn--paper" data-label="Survivors">
            ← Back to survivors
          </Link>
          <Link to={`/work/${next.id}`} className="neo-btn" data-label={next.title}>
            Next: {next.title} <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </nav>
    </article>
  );
}
