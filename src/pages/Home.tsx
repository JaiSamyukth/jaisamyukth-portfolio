import React from 'react';
import { Link } from 'react-router-dom';
import portrait720 from '../assets/portrait-720.webp';
import portrait1200 from '../assets/portrait-1200.webp';
import { person } from '../data/site';
import { obsessions, services, stats, testimonial, tickerLines } from '../data/content';
import { Marquee, Reveal, Scrub, Split } from '../components/Motion';
import { Arrow, SayMyName, SectionLabel } from '../components/Bits';
import { WorkList } from '../components/WorkList';

export function Home() {
  return (
    <>
      {/* ---------- Hero: a dictionary entry for a name people keep misspelling ---------- */}
      <section className="relative flex min-h-[100svh] flex-col justify-end pb-10 pt-28 md:pb-14">
        <div className="wrap">
          <Reveal className="eyebrow flex flex-wrap items-center justify-between gap-3 text-muted">
            <span>(Entry 001) — Portfolio · Coimbatore, India</span>
            <span className="flex items-center gap-2 text-ink">
              <span className="live-dot h-2 w-2 rounded-full bg-acid ring-1 ring-ink/40" aria-hidden="true" />
              Available for client work
            </span>
          </Reveal>

          <h1 className="mt-6 font-semibold leading-[0.8] tracking-[-0.06em] text-[clamp(3.6rem,17.5vw,19.5rem)]">
            <span className="flex items-center gap-[0.12em]">
              <Split text="Jai" />
              <Reveal
                as="span"
                delay={350}
                className="group relative inline-block h-[0.62em] w-[1.25em] shrink-0 overflow-hidden rounded-full align-middle"
              >
                <img
                  src={portrait720}
                  srcSet={`${portrait720} 720w, ${portrait1200} 1200w`}
                  sizes="25vw"
                  width={720}
                  height={982}
                  alt=""
                  fetchPriority="high"
                  className="absolute inset-0 h-full w-full scale-110 object-cover object-[50%_28%] grayscale transition duration-700 ease-expo group-hover:scale-100 group-hover:grayscale-0"
                />
              </Reveal>
              <span aria-hidden="true" className="eyebrow ml-auto hidden max-w-[16rem] self-start pt-[0.15em] text-right leading-relaxed tracking-[0.14em] text-muted md:block">
                Systems builder &amp; co-founder of Genrec AI
              </span>
            </span>
            <span className="block">
              <Split text="Samyukth" delay={120} />
              <span className="sr-only"> B U — systems builder and co-founder of Genrec AI</span>
            </span>
          </h1>

          <div className="mt-10 grid gap-10 border-t border-ink/20 pt-8 md:grid-cols-12 md:gap-8">
            <Reveal className="md:col-span-3" delay={200}>
              <p className="eyebrow text-muted">Pronunciation</p>
              <p className="mt-3 font-serif text-3xl italic">/ {person.pronunciation} /</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <SayMyName />
                <span className="eyebrow text-muted">noun.</span>
              </div>
            </Reveal>

            <Reveal as="ol" className="space-y-4 text-lede md:col-span-6" delay={300}>
              <li className="flex gap-4">
                <span className="font-mono text-sm text-muted">1.</span>
                <span>
                  A systems builder who notices what people have learned to tolerate — then writes software until they{' '}
                  <em className="font-serif">don’t have to.</em>
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-sm text-muted">2.</span>
                <span>
                  Co-founder of{' '}
                  <a href="https://www.genrecai.com" target="_blank" rel="noopener" className="link">
                    Genrec AI
                  </a>
                  . Maker of <Link to="/work/lumina-iq" className="link">Lumina IQ</Link> and{' '}
                  <Link to="/work/tabble" className="link">Tabble</Link>.
                </span>
              </li>
            </Reveal>

            <Reveal className="md:col-span-3" delay={400}>
              <p className="eyebrow text-muted">Not to be misspelled as</p>
              <ul className="mt-3 space-y-1 font-mono text-sm">
                {person.misheard.map((n) => (
                  <li key={n}>
                    <s className="decoration-blue decoration-[1.5px]">{n}</s>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="mt-10 flex flex-wrap gap-3" delay={500}>
            <Link to="/work" className="btn btn-solid">
              <span>See the work</span> <Arrow />
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              <span>Tell me what you’re building</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- Ticker ---------- */}
      <section aria-label="Currently taking on" className="border-y border-ink bg-acid py-4 text-[clamp(1.5rem,4vw,3.5rem)] font-semibold tracking-tight">
        <Marquee items={tickerLines.map((t) => `Currently taking on: ${t}`)} speed={55} />
      </section>

      {/* ---------- Positioning ---------- */}
      <section className="on-ink bg-ink py-28 text-paper md:py-40">
        <div className="wrap">
          <SectionLabel index="01" className="text-muted-dark">
            Positioning
          </SectionLabel>
          <Scrub
            className="mt-10 max-w-6xl text-title font-semibold"
            text="If you want a 30-page proposal and three weeks of meetings, I’m not your guy. If you want something *built,* *broken,* *fixed* and *shipped* before Friday — we’ll get along fine."
          />

          <dl className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-md bg-paper/15 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90} className="bg-ink p-6 md:p-8">
                <dt className="eyebrow text-muted-dark">{s.label}</dt>
                <dd className="mt-6">
                  <span className="block text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-none tracking-[-0.05em] text-acid">{s.value}</span>
                  <span className="mt-4 block text-sm text-muted-dark">{s.note}</span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- Selected work ---------- */}
      <section className="py-28 md:py-36">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel index="02" className="text-muted">
                Things that survived
              </SectionLabel>
              <h2 className="mt-6 text-display font-semibold">
                Selected <span className="font-serif font-normal italic">work</span>
                <sup className="ml-2 align-top font-mono text-base tracking-normal text-muted">(03)</sup>
              </h2>
            </div>
            <p className="max-w-sm text-muted">
              The projects that didn’t get abandoned after 48 hours — mostly because someone paid me, or I got annoyed enough to finish them.
            </p>
          </div>
          <div className="mt-14">
            <WorkList />
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="bg-paper-2 py-28 md:py-36">
        <div className="wrap">
          <SectionLabel index="03" className="text-muted">
            What I usually help build
          </SectionLabel>
          <div className="mt-14 grid gap-px overflow-hidden rounded-md bg-ink/15 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90} className="group bg-paper-2 p-8 transition-colors duration-500 hover:bg-ink hover:text-paper md:p-12">
                <span className="font-mono text-sm text-muted group-hover:text-acid">0{i + 1}</span>
                <h3 className="mt-10 max-w-md text-[clamp(1.6rem,2.8vw,2.6rem)] font-semibold leading-[1.02] tracking-[-0.03em]">{s.title}</h3>
                <p className="mt-4 max-w-md text-muted group-hover:text-muted-dark">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Testimonial ---------- */}
      <section className="py-28 md:py-40">
        <div className="wrap grid gap-10 md:grid-cols-12">
          <SectionLabel index="04" className="text-muted md:col-span-3">
            Word from a co-builder
          </SectionLabel>
          <Reveal as="figure" className="md:col-span-9">
            <blockquote className="font-serif text-[clamp(1.9rem,3.6vw,3.4rem)] leading-[1.08] tracking-[-0.01em]">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="eyebrow mt-8 text-muted">
              —{' '}
              <a href={testimonial.href} target="_blank" rel="noopener noreferrer" className="link text-ink">
                {testimonial.name}
              </a>
              , {testimonial.role}
            </figcaption>
          </Reveal>
        </div>
      </section>

      {/* ---------- Obsessions ---------- */}
      <section className="border-t border-ink/20 py-28 md:py-36">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel index="05" className="text-muted">
              Current obsessions
            </SectionLabel>
            <h2 className="mt-6 text-title font-semibold">
              Things I can’t <span className="font-serif font-normal italic">stop</span> thinking about.
            </h2>
            <Link to="/about" className="btn btn-ghost mt-10">
              <span>More about me</span> <Arrow />
            </Link>
          </div>
          <ul className="md:col-span-7">
            {obsessions.map((o, i) => (
              <Reveal
                as="li"
                key={o}
                delay={i * 60}
                className="group flex items-baseline gap-6 border-t border-ink/20 py-5 text-[clamp(1.25rem,2.2vw,1.9rem)] tracking-tight last:border-b"
              >
                <span className="font-mono text-xs text-muted">→</span>
                <span className="transition-transform duration-500 ease-expo group-hover:translate-x-2">{o}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
