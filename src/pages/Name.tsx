import React from 'react';
import { Link } from 'react-router-dom';
import { person, socials } from '../data/site';
import { Breadcrumbs } from '../components/PageHero';
import { Arrow, SayMyName, SectionLabel } from '../components/Bits';
import { Reveal, Split } from '../components/Motion';

/**
 * A real, useful page about the name itself: how it sounds, how it's spelled,
 * what it means, and the ways people commonly mistype it. This is the page a
 * search engine should surface for "Jai Samuth", "Jai Sampath", "Jay Samyukth"…
 */
export function Name() {
  return (
    <>
      <section className="pb-16 pt-32 md:pt-40">
        <div className="wrap">
          <Breadcrumbs items={[{ label: 'The name' }]} />
          <p className="eyebrow mt-10 text-muted">A short guide to one name</p>
          <h1 className="mt-4 text-display font-semibold">
            <Split text="How to say" />{' '}
            <span className="block">
              <Split text="Jai Samyukth" delay={200} />
            </span>
          </h1>
          <Reveal as="p" delay={300} className="mt-10 max-w-3xl text-lede">
            If you typed <strong className="font-semibold">Jai Samuth</strong>, <strong className="font-semibold">Jai Sampath</strong> or{' '}
            <strong className="font-semibold">Jay Samyukth</strong> — you were probably looking for me: {person.name}, co-founder of Genrec AI
            in {person.location.city}. It’s spelled <strong className="font-semibold">J-A-I S-A-M-Y-U-K-T-H</strong>.
          </Reveal>
        </div>
      </section>

      <section className="on-ink bg-ink py-24 text-paper md:py-32">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel index="01" className="text-muted-dark">
                Say it
              </SectionLabel>
              <p className="mt-6 font-serif text-[clamp(2.6rem,7vw,6.5rem)] italic leading-none">/ {person.pronunciation} /</p>
            </div>
            <SayMyName />
          </div>
          <ol className="mt-16 grid gap-px overflow-hidden rounded-md bg-paper/15 md:grid-cols-3">
            {person.syllables.map((s, i) => (
              <Reveal as="li" key={s.part} delay={i * 90} className="bg-ink p-8">
                <span className="font-mono text-xs text-acid">0{i + 1}</span>
                <p className="mt-8 text-[clamp(3rem,6vw,5rem)] font-semibold leading-none tracking-[-0.04em]">{s.part}</p>
                <p className="mt-4 text-lg">
                  say “<span className="font-semibold">{s.say}</span>”
                </p>
                <p className="text-muted-dark">{s.note}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="02" className="text-muted">
              Typed it differently?
            </SectionLabel>
            <h2 className="mt-6 text-title font-semibold">
              Common <span className="font-serif font-normal italic">misspellings</span>
            </h2>
            <p className="mt-6 text-muted">All of these point to the same person.</p>
          </div>
          <div className="md:col-span-8">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="eyebrow text-muted">
                  <th scope="col" className="pb-4 font-normal">
                    You typed
                  </th>
                  <th scope="col" className="pb-4 font-normal">
                    Why it happens
                  </th>
                </tr>
              </thead>
              <tbody>
                {person.typos.map((t) => (
                  <tr key={t.typed} className="border-t border-ink/20 align-baseline last:border-b">
                    <th scope="row" className="py-5 pr-6 text-xl font-semibold tracking-tight">
                      {t.typed}
                    </th>
                    <td className="py-5 text-muted">{t.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-8 text-lg">
              Correct spelling: <strong className="font-semibold">{person.shortName}</strong> · full name{' '}
              <strong className="font-semibold">{person.name}</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-24 md:py-32">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="03" className="text-muted">
              What it means
            </SectionLabel>
          </div>
          <Reveal as="p" className="font-serif text-[clamp(1.8rem,3.4vw,3.2rem)] leading-[1.1] md:col-span-8">
            {person.meaning}
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="04" className="text-muted">
              Which Jai?
            </SectionLabel>
            <h2 className="mt-6 text-title font-semibold">
              The one who <span className="font-serif font-normal italic">builds</span> things.
            </h2>
          </div>
          <div className="space-y-6 text-lg md:col-span-7 md:col-start-6">
            <p>
              There are a lot of Jais. This one is a systems builder from {person.location.city}, {person.location.country}, studying{' '}
              {person.education.replace('B.Tech, ', '')}, and co-founder of{' '}
              <a href="https://www.genrecai.com" target="_blank" rel="noopener" className="link">
                Genrec AI
              </a>
              . I built <Link to="/work/lumina-iq" className="link">Lumina IQ</Link> (AI active-recall learning) and{' '}
              <Link to="/work/tabble" className="link">Tabble</Link> (real-time restaurant ordering).
            </p>
            <p className="text-muted">Same person on every platform:</p>
            <ul className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="me noopener noreferrer" className="chip hover:bg-ink hover:text-paper">
                    {s.label} · {s.handle}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-4">
              <Link to="/about" className="btn btn-solid">
                <span>More about me</span> <Arrow />
              </Link>
              <Link to="/work" className="btn btn-ghost">
                <span>See the work</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
