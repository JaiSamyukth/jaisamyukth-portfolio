import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProject, projects } from '../data/projects';
import { Crumbs, Shot } from '../components/Bits';
import { NotFound } from './NotFound';

export function ProjectDetail() {
  const { id = '' } = useParams();
  const p = getProject(id);
  if (!p) return <NotFound />;
  const next = projects[(projects.indexOf(p) + 1) % projects.length];

  return (
    <article>
      <header className="pagehead wrap">
        <Crumbs trail={[{ label: 'Work', to: '/work' }, { label: p.title }]} />
        <h1 className="t-mega" data-split="chars" data-intro>
          {p.title}
        </h1>
        <p className="pagehead__lede" data-reveal="up" data-intro data-delay="0.35">
          {p.hook}
        </p>
      </header>

      <div className="wrap">
        <dl className="case__meta" data-reveal="fade" data-intro data-delay="0.5">
          <div>
            <dt>Type</dt>
            <dd>{p.kind}</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd className="tabular">{p.year}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{p.status}</dd>
          </div>
          <div>
            <dt>Live</dt>
            <dd>
              {p.liveLink ? (
                <a href={p.liveLink} target="_blank" rel="noopener" className="link">
                  {p.liveLink.replace(/^https?:\/\//, '')}
                </a>
              ) : (
                'Private client system'
              )}
            </dd>
          </div>
        </dl>
      </div>

      <div className="wrap">
        {p.cover ? (
          <figure className="case__hero" data-reveal="clip" data-intro data-delay="0.45">
            <Shot shot={p.cover} eager sizes="100vw" />
          </figure>
        ) : (
          <div className="night case__hero" style={{ padding: 'clamp(2rem, 6vw, 6rem) var(--gutter)' }} data-reveal="clip" data-intro data-delay="0.45">
            <p className="case__bigjoin" style={{ fontSize: 'var(--t-xl)' }}>
              <span style={{ color: 'var(--c-night-muted)' }}>{p.joins.from}</span>
              <i aria-hidden="true" />
              <span>{p.joins.to}</span>
            </p>
            <p className="label" style={{ marginTop: '1.5rem' }}>
              Client system. No public screens.
            </p>
          </div>
        )}
      </div>

      <div className="wrap section--tight">
        <section className="case__block" aria-labelledby="c-join">
          <h2 id="c-join">The join</h2>
          <div>
            <p className="case__bigjoin" data-reveal="up">
              <span className="muted">{p.joins.from}</span>
              <i aria-hidden="true" />
              <span>{p.joins.to}</span>
            </p>
            <p className="muted" style={{ fontSize: 'var(--t-body)', marginTop: '0.75rem' }}>
              {p.joins.note}. {p.summary}
            </p>
          </div>
        </section>
        <section className="case__block" aria-labelledby="c-context">
          <h2 id="c-context">Context</h2>
          <div>
            <p data-split="lines">{p.overview}</p>
          </div>
        </section>
        <section className="case__block" aria-labelledby="c-problem">
          <h2 id="c-problem">What was broken</h2>
          <div>
            <p data-split="lines">{p.problem}</p>
          </div>
        </section>
        <section className="case__block" aria-labelledby="c-build">
          <h2 id="c-build">What I built</h2>
          <div>
            <p data-split="lines">{p.build}</p>
            <ul className="chips" style={{ marginTop: '1.5rem' }} aria-label="Stack">
              {p.stack.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>
        {p.gallery.length > 1 ? (
          <section className="case__block" aria-labelledby="c-screens" style={{ display: 'block' }}>
            <h2 id="c-screens" style={{ marginBottom: 'calc(var(--u) * 4)' }}>
              Screens
            </h2>
            <div className="case__gallery">
              {p.gallery.slice(1).map((g) => (
                <figure key={g.small} className="case__fig" data-reveal="up">
                  <div style={{ background: 'var(--c-fg)' }}>
                    <Shot shot={g} sizes="(max-width: 767px) 100vw, 66vw" />
                  </div>
                  <figcaption>{g.alt}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}
        <section className="case__block" aria-labelledby="c-outcome">
          <h2 id="c-outcome">What changed</h2>
          <div>
            <ul className="case__list t-m">
              {p.outcomes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
            <p className="label" style={{ marginTop: '2rem' }}>
              Where it stands
            </p>
            <ul className="case__list">
              {p.traction.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <nav className="night" aria-label="Next case study">
        <Link to={`/work/${next.id}`} className="case__next wrap" data-label={next.title}>
          <span className="label">Next case study</span>
          <span className="t-mega" style={{ display: 'block', marginTop: '1rem' }}>
            {next.title}
          </span>
        </Link>
      </nav>
    </article>
  );
}
