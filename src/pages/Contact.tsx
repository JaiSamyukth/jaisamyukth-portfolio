import React, { useState } from 'react';
import { contactReasons } from '../data/content';
import { person, socials } from '../data/site';
import { Breadcrumbs } from '../components/PageHero';
import { Arrow, LocalTime } from '../components/Bits';
import { Reveal, Split } from '../components/Motion';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${person.email}`;
    }
  };

  return (
    <>
      <section className="pb-20 pt-32 md:pt-40">
        <div className="wrap">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
          <h1 className="mt-8 text-mega font-semibold">
            <Split text="Say" />{' '}
            <Reveal as="span" delay={250} className="inline-block font-serif font-normal italic text-blue">
              hi.
            </Reveal>
          </h1>

          <div className="mt-14 grid gap-12 border-t border-ink/20 pt-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow text-muted">Email — for actual work</p>
              <a href={`mailto:${person.email}`} className="group mt-4 inline-flex flex-wrap items-center gap-4 text-[clamp(1.6rem,4.4vw,4rem)] font-semibold tracking-[-0.035em]">
                <span className="link">{person.email}</span>
                <Arrow diagonal className="text-[0.7em] transition-transform duration-500 ease-expo group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button type="button" onClick={copy} className="btn btn-ghost" aria-live="polite">
                  <span>{copied ? 'Copied ✓' : 'Copy address'}</span>
                </button>
                <span className="eyebrow text-muted">
                  Response latency &lt; 24h · it’s <LocalTime /> here
                </span>
              </div>
            </div>
            <Reveal className="md:col-span-4 md:col-start-9">
              <p className="eyebrow text-muted">Most people who email me…</p>
              <ul className="mt-4 space-y-3">
                {contactReasons.map((r) => (
                  <li key={r} className="flex gap-3">
                    <span aria-hidden="true" className="text-muted">→</span>
                    {r}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xl font-semibold">If any of that sounds familiar — let’s fix it.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="on-ink bg-ink py-20 text-paper md:py-28">
        <div className="wrap">
          <h2 className="eyebrow text-muted-dark">Elsewhere</h2>
          <ul className="mt-8">
            {socials.map((s, i) => (
              <Reveal as="li" key={s.href} delay={i * 60} className="border-t border-paper/15 last:border-b">
                <a
                  href={s.href}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="group grid grid-cols-[1fr_auto] items-baseline gap-4 py-6 md:grid-cols-[1fr_1fr_auto]"
                >
                  <span className="text-[clamp(2rem,5vw,4.5rem)] font-semibold leading-none tracking-[-0.04em] transition-colors duration-300 group-hover:text-acid">
                    {s.label}
                  </span>
                  <span className="hidden text-muted-dark md:block">
                    {s.handle} — {s.note}
                  </span>
                  <Arrow diagonal className="text-3xl transition-transform duration-500 ease-expo group-hover:rotate-45" />
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
