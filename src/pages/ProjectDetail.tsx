import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProject, projects } from '../data/projects';
import { Breadcrumbs } from '../components/PageHero';
import { Arrow, SectionLabel, Shot } from '../components/Bits';
import { Reveal, Split } from '../components/Motion';
import { NotFound } from './NotFound';

export function ProjectDetail() {
  const { id = '' } = useParams();
  const project = getProject(id);
  if (!project) return <NotFound />;

  const idx = projects.indexOf(project);
  const next = projects[(idx + 1) % projects.length];
  const accentBg = project.accent === 'acid' ? 'bg-acid text-ink' : project.accent === 'blue' ? 'bg-blue text-paper' : 'bg-ink text-paper';

  const facts = [
    { k: 'Type', v: project.kind },
    { k: 'Category', v: project.category },
    { k: 'Status', v: project.status },
    { k: 'Focus', v: project.focus },
  ];

  return (
    <article>
      <header className="pb-14 pt-32 md:pt-40">
        <div className="wrap">
          <Breadcrumbs items={[{ label: 'Work', to: '/work' }, { label: project.title }]} />
          <p className="eyebrow mt-10 text-muted">
            Case study {String(idx + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </p>
          <h1 className="mt-4 text-mega font-semibold">
            <Split text={project.title} />
          </h1>
          <Reveal as="p" delay={250} className="mt-10 max-w-4xl font-serif text-[clamp(1.6rem,3.2vw,3rem)] leading-[1.1]">
            {project.hook}
          </Reveal>

          <Reveal as="dl" delay={350} className="mt-14 grid grid-cols-2 gap-6 border-t border-ink/20 pt-8 md:grid-cols-5">
            {facts.map((f) => (
              <div key={f.k}>
                <dt className="eyebrow text-muted">{f.k}</dt>
                <dd className="mt-2">{f.v}</dd>
              </div>
            ))}
            <div className="col-span-2 md:col-span-1">
              <dt className="eyebrow text-muted">Live</dt>
              <dd className="mt-2">
                {project.liveLink ? (
                  <a href={project.liveLink} target="_blank" rel="noopener" className="link inline-flex items-center gap-1">
                    {project.liveLink.replace(/^https?:\/\//, '')} <Arrow diagonal />
                  </a>
                ) : (
                  <span className="text-muted">Private client system</span>
                )}
              </dd>
            </div>
          </Reveal>
        </div>
      </header>

      {project.cover ? (
        <Reveal className="wrap">
          <div className="overflow-hidden rounded-md border border-ink/15 bg-ink">
            <Shot shot={project.cover} eager sizes="(min-width: 1408px) 1360px, 100vw" className="w-full" />
          </div>
        </Reveal>
      ) : (
        <div className="wrap">
          <Reveal className={`flex aspect-[16/7] flex-col justify-between rounded-md p-8 md:p-14 ${accentBg}`}>
            <span className="eyebrow">{project.kind} · {project.status}</span>
            <span className="text-display font-semibold">{project.focus}</span>
          </Reveal>
        </div>
      )}

      <section className="py-24 md:py-32">
        <div className="wrap grid gap-16 md:grid-cols-12">
          <aside className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <SectionLabel index="i" className="text-muted">
                Overview
              </SectionLabel>
              <p className="mt-6 text-muted">{project.summary}</p>
              <p className="eyebrow mt-10 text-muted">Stack</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="space-y-20 md:col-span-8">
            <Reveal>
              <p className="text-lede">{project.overview}</p>
            </Reveal>
            <Reveal>
              <SectionLabel index="ii" className="text-muted">
                The frustration
              </SectionLabel>
              <h2 className="mt-5 text-title font-semibold">What was broken</h2>
              <p className="mt-6 text-lg leading-relaxed">{project.problem}</p>
            </Reveal>
            <Reveal>
              <SectionLabel index="iii" className="text-muted">
                The code
              </SectionLabel>
              <h2 className="mt-5 text-title font-semibold">What I built</h2>
              <p className="mt-6 text-lg leading-relaxed">{project.build}</p>
            </Reveal>
            <Reveal>
              <SectionLabel index="iv" className="text-muted">
                The outcome
              </SectionLabel>
              <h2 className="mt-5 text-title font-semibold">What changed</h2>
              <ul className="mt-8">
                {project.outcomes.map((o, i) => (
                  <li key={o} className="flex gap-6 border-t border-ink/20 py-5 text-lg last:border-b">
                    <span className="font-mono text-sm text-muted">0{i + 1}</span>
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className={`rounded-md p-8 md:p-10 ${accentBg}`}>
              <p className="eyebrow">Current state</p>
              <ul className="mt-6 space-y-3 text-lg">
                {project.traction.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span aria-hidden="true">→</span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {project.gallery.length > 1 ? (
        <section aria-label={`${project.title} screenshots`} className="pb-24 md:pb-32">
          <div className="wrap grid gap-6 md:grid-cols-2">
            {project.gallery.slice(1).map((g, i) => (
              <Reveal as="figure" key={g.small} delay={i * 100} className={project.gallery.length === 2 ? 'md:col-span-2' : ''}>
                <div className="overflow-hidden rounded-md border border-ink/15 bg-ink">
                  <Shot shot={g} className="w-full" sizes={project.gallery.length === 2 ? '100vw' : '(min-width: 768px) 50vw, 100vw'} />
                </div>
                <figcaption className="eyebrow mt-3 text-muted">{g.alt}</figcaption>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      <nav aria-label="Next project" className="on-ink bg-ink text-paper">
        <Link to={`/work/${next.id}`} className="wrap group flex flex-col gap-6 py-20 md:flex-row md:items-end md:justify-between md:py-28">
          <div>
            <p className="eyebrow text-muted-dark">Next case study</p>
            <p className="mt-4 text-display font-semibold transition-colors duration-500 group-hover:text-acid">{next.title}</p>
          </div>
          <span className="grid h-20 w-20 place-items-center rounded-full border border-paper/30 text-3xl transition-all duration-500 ease-expo group-hover:rotate-45 group-hover:border-acid group-hover:bg-acid group-hover:text-ink">
            <Arrow />
          </span>
        </Link>
      </nav>
    </article>
  );
}
