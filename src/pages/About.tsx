import React from 'react';
import { Link } from 'react-router-dom';
import portrait960 from '../assets/portrait-960.webp';
import portrait1600 from '../assets/portrait-1600.webp';
import { org, person, socials } from '../data/site';
import { faqs, stack, timeline, testimonial } from '../data/content';
import { Arrow, Crumbs, SayIt } from '../components/Bits';

export function About() {
  const devto = socials.find((s) => s.label === 'Dev.to')!;
  return (
    <>
      <header className="pagehead wrap about-head">
        <Crumbs trail={[{ label: 'About' }]} />
        <div className="pagehead__grid">
          <h1 className="t-mega" data-split="chars" data-intro>
            About
          </h1>
          <figure className="about__photo" style={{ gridColumn: "auto" }} data-reveal="clip" data-intro data-delay="0.2">
            <div className="frame-img">
              <img
                src={portrait960}
                srcSet={`${portrait960} 960w, ${portrait1600} 1600w`}
                sizes="(max-width: 767px) 100vw, 40vw"
                width={960}
                height={1309}
                alt={`${person.name}, co-founder of Genrec AI`}
                fetchPriority="high"
              />
            </div>
            <figcaption className="label" style={{ marginTop: '0.6rem' }}>
              {person.name}, {person.location.city}
            </figcaption>
          </figure>
        </div>
      </header>

      <section className="wrap section--tight">
        <div className="grid">
          <p className="t-xl about-say" style={{ gridColumn: '1 / 8' }} data-split="lines">
            A name that means victory, joined. Fitting, for someone who glues systems together.
          </p>
          <div className="about__text about-say" style={{ gridColumn: "8 / -1" }}>
            <p className="t-l" data-split="lines" data-intro data-delay="0.3">
              I notice inefficient systems, become a little obsessed with them, and build software until they stop being inefficient.
            </p>
            <p data-reveal="up">
              I started building things because I couldn’t stop. Then someone paid me for it. Then the first AWS invoice arrived, politely explaining that
              curiosity isn’t free, and I learned infrastructure the only way that works: by breaking it at 1 AM and fixing it before anyone noticed.
            </p>
            <p data-reveal="up">
              Lumina IQ exists because I watched students highlight entire PDFs and expect their brains to cooperate. Tabble exists because waiters
              end up with superhero memory, since the software has none. Messy code in production beats clean code in a private repo.
            </p>
            <p className="muted" style={{ fontSize: 'var(--t-body)' }} data-reveal="up">
              Co-founder of{' '}
              <a href={org.url} target="_blank" rel="noopener" className="link">
                Genrec AI
              </a>
              , where client builds fund our own products. {person.education}.
            </p>
          </div>
        </div>
      </section>

      <section className="night section" id="say-it" aria-labelledby="say-title">
        <div className="wrap grid">
          <div style={{ gridColumn: '1 / 7' }} className="about-say">
            <h2 id="say-title" className="t-xl" data-split="lines">
              It’s Samyukth. Not Samuth.
            </h2>
          </div>
          <div style={{ gridColumn: '8 / -1', display: 'grid', gap: '1.25rem', alignContent: 'start' }} className="about-say">
            <p className="t-l">/ {person.pronunciation} /</p>
            <div>
              <SayIt />
            </div>
            <p className="muted">
              {person.meaning} You probably heard the name before you read it, so you might have typed it a few ways. All of these are me:
            </p>
            <ul className="chips" aria-label="Spellings people use">
              {person.alternateNames.map((n) => (
                <li key={n} className="chip">
                  {n}
                </li>
              ))}
            </ul>
            <p>
              <Link to="/name" className="link tap">
                The full spelling guide
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="wrap section" aria-labelledby="stack-title">
        <h2 id="stack-title" className="t-xl" data-split="lines" style={{ marginBottom: 'calc(var(--u) * 5)' }}>
          Things I argue with
        </h2>
        <div className="stack">
          {stack.map((g) => (
            <div key={g.group} data-reveal="up">
              <h3>{g.group}</h3>
              <ul>
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              {g.aside ? (
                <p className="muted t-xs" style={{ marginTop: '0.8rem' }}>
                  {g.aside}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section" aria-labelledby="time-title">
        <h2 id="time-title" className="t-xl" data-split="lines" style={{ marginBottom: 'calc(var(--u) * 5)' }}>
          Mistakes and fixes
        </h2>
        <ol className="timeline">
          {timeline.map((t) => (
            <li key={t.title} data-reveal="fade">
              <span className="label tabular">{t.when}</span>
              <div>
                <h3>{t.title}</h3>
                <p className="muted" style={{ marginTop: '0.35rem', maxWidth: '44rem' }}>
                  {t.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap section--tight" aria-label="Testimonial">
        <figure className="quote" style={{ maxWidth: '62rem' }}>
          <blockquote data-split="lines">“{testimonial.quote}”</blockquote>
          <figcaption className="label">
            {testimonial.name}, {testimonial.role.toLowerCase()}
          </figcaption>
        </figure>
      </section>

      <section className="wrap section faq" id="faq" aria-labelledby="faq-title">
        <h2 id="faq-title" className="t-xl" data-split="lines" style={{ marginBottom: 'calc(var(--u) * 5)' }}>
          Questions people ask
        </h2>
        {faqs.map((f, i) => (
          <details key={f.q} open={i === 0}>
            <summary>
              <h3>{f.q}</h3>
              <span className="plus" aria-hidden="true">
                +
              </span>
            </summary>
            <p>{f.a}</p>
          </details>
        ))}
      </section>

      <section className="wrap section--tight">
        <div className="index__head" style={{ marginBottom: 0 }}>
          <p className="t-l measure">Occasional rants about broken workflows, on dev.to.</p>
          <a href={devto.href} target="_blank" rel="me noopener noreferrer" className="btn btn--solid">
            <span>Read the notes</span>
            <Arrow />
          </a>
        </div>
      </section>
    </>
  );
}
