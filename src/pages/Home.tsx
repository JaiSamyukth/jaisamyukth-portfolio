import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { WorkIndex } from '../components/WorkIndex';
import { Arrow } from '../components/Bits';
import { projects } from '../data/projects';
import { services, testimonial } from '../data/content';

export function Home() {
  return (
    <>
      <Hero />

      <section className="section--airy wrap" aria-labelledby="statement">
        <div className="grid">
          <h2 id="statement" className="sr-only">
            What I do
          </h2>
          <p className="statement__text t-l" data-split="lines">
            I notice what people have learned to tolerate. The five spreadsheets, the waiter with a notepad, the student rereading a PDF the night before.
            Then I write software until they don’t have to.
          </p>
          <ul className="statement__list" data-reveal="fade">
            {services.map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="work-title">
        <div className="index__head">
          <h2 id="work-title" className="t-xl" data-split="lines">
            Selected work
          </h2>
          <p className="muted measure">The projects that survived past 48 hours, usually because someone paid me or I got annoyed enough to finish.</p>
        </div>
        <WorkIndex />
      </section>

      <section className="night section" aria-labelledby="joins-title">
        <div className="wrap">
          <div className="index__head">
            <h2 id="joins-title" className="t-xl" data-split="lines">
              What gets joined
            </h2>
            <p className="muted measure">Samyukth means joined. It turns out that is most of the job: many messy parts in, one thing that works out.</p>
          </div>
          <ul>
            {projects.map((p) => (
              <li key={p.id} className="joins__row">
                <span className="joins__side joins__side--from tabular" data-reveal="fade">
                  {p.joins.from}
                </span>
                <span className="joins__seam" data-reveal="clip" aria-hidden="true" />
                <span className="joins__side tabular" data-reveal="fade" data-delay="0.15">
                  {p.joins.to}
                  <span className="joins__note">
                    {p.title}. {p.joins.note}.
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section--airy wrap" aria-label="What a co-builder says">
        <div className="grid">
          <figure className="quote">
            <blockquote data-split="lines">“{testimonial.quote}”</blockquote>
            <figcaption className="label">
              <a href={testimonial.href} target="_blank" rel="noopener noreferrer" className="link" style={{ color: 'var(--c-fg)' }}>
                {testimonial.name}
              </a>
              , {testimonial.role.toLowerCase()}
            </figcaption>
          </figure>
          <div className="aside" data-reveal="up">
            <p>
              Co-founder of Genrec AI, studying Computer Science and Business Systems, and the person behind thirty-odd repositories. Most are terrible. The rest
              pay for servers.
            </p>
            <Link to="/about" className="btn btn--ghost" data-label="About">
              <span>More about me</span>
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
