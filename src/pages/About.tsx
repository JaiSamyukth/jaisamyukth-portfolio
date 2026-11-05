import React from 'react';
import portrait720 from '../assets/portrait-720.webp';
import portrait1200 from '../assets/portrait-1200.webp';
import { org, person, socials } from '../data/site';
import { faqs, stack, timeline } from '../data/content';
import { Breadcrumbs } from '../components/PageHero';
import { Arrow, SayMyName, SectionLabel } from '../components/Bits';
import { Reveal, Split } from '../components/Motion';

export function About() {
  return (
    <>
      <section className="pb-20 pt-32 md:pt-40">
        <div className="wrap">
          <Breadcrumbs items={[{ label: 'About' }]} />
          <div className="mt-10 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow text-muted">Serial builder · v1.0</p>
              <h1 className="mt-4 text-display font-semibold">
                <Split text="Jai Samyukth" />
                <span className="block font-serif font-normal italic">
                  <Split text="B U." delay={250} />
                </span>
              </h1>
              <Reveal as="p" delay={300} className="mt-10 max-w-2xl text-lede">
                I notice inefficient systems. I become obsessed with them. I build software until they stop being inefficient.
              </Reveal>
              <Reveal as="p" delay={380} className="mt-6 max-w-2xl text-muted">
                {person.summary}
              </Reveal>
            </div>
            <Reveal as="figure" delay={200} className="md:col-span-5">
              <div className="group overflow-hidden rounded-md bg-ink">
                <img
                  src={portrait720}
                  srcSet={`${portrait720} 720w, ${portrait1200} 1200w`}
                  sizes="(min-width: 768px) 40vw, 100vw"
                  width={720}
                  height={982}
                  alt={`${person.name}, co-founder of Genrec AI`}
                  fetchPriority="high"
                  className="w-full grayscale transition duration-1000 ease-expo group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              </div>
              <figcaption className="eyebrow mt-3 flex justify-between text-muted">
                <span>{person.name}</span>
                <span>
                  {person.location.city}, {person.location.countryCode}
                </span>
              </figcaption>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- How to say it ---------- */}
      <section id="say-it" className="on-ink scroll-mt-24 bg-ink py-24 text-paper md:py-32">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel index="01" className="text-muted-dark">
              How to say it
            </SectionLabel>
            <h2 className="mt-6 text-title font-semibold">
              It’s <span className="text-acid">Samyukth.</span>
              <br />
              <span className="font-serif font-normal italic">Not Samuth.</span>
            </h2>
          </div>
          <div className="md:col-span-7">
            <Reveal>
              <p className="font-serif text-[clamp(2.4rem,5vw,4.5rem)] italic leading-none">/ {person.pronunciation} /</p>
              <div className="mt-6 text-paper">
                <SayMyName />
              </div>
            </Reveal>
            <Reveal as="p" delay={120} className="mt-10 max-w-2xl text-lg text-muted-dark">
              It’s a name people usually hear before they read it, so it gets typed a lot of different ways. If you searched for any of these,
              you’re in the right place:
            </Reveal>
            <Reveal as="ul" delay={200} className="mt-6 flex flex-wrap gap-2">
              {person.alternateNames.map((n) => (
                <li key={n} className="chip border-paper/30 text-paper">
                  {n}
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Background ---------- */}
      <section className="py-24 md:py-32">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="02" className="text-muted">
              Background
            </SectionLabel>
            <h2 className="mt-6 text-title font-semibold">
              Why I <span className="font-serif font-normal italic">build</span>
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed md:col-span-7 md:col-start-6">
            <Reveal as="p">
              I started building things because I couldn’t stop. Eventually, someone paid me for it. Then the first AWS invoice arrived,
              politely informing me that curiosity isn’t free. I learned infrastructure the only way that works: by breaking it at 1 AM and
              frantically fixing it before anyone noticed.
            </Reveal>
            <Reveal as="p">
              My projects usually start because I watch people do something painful by hand. Lumina IQ exists because I watched students
              highlight entire PDFs and expect their brains to cooperate. Tabble exists because every waiter eventually develops
              superhero-level memory — because the software doesn’t.
            </Reveal>
            <Reveal as="p">
              I write code until it solves the problem. Sometimes it’s messy, but messy code running in production beats clean code sitting
              in a private repo forever.
            </Reveal>
            <Reveal as="p" className="text-muted">
              Education: {person.education}.
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Genrec AI ---------- */}
      <section className="bg-paper-2 py-24 md:py-32">
        <div className="wrap grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel index="03" className="text-muted">
              The studio
            </SectionLabel>
            <h2 className="mt-6 text-title font-semibold">Genrec AI</h2>
            <p className="mt-6 text-lg">{org.description}</p>
            <p className="mt-4 text-muted">
              Client builds pay for the servers. Products break and get fixed. Most of my client work lives there, and most of my product ideas
              escape from there.
            </p>
            <a href={org.url} target="_blank" rel="noopener" className="btn btn-ghost mt-8">
              <span>genrecai.com</span> <Arrow diagonal />
            </a>
          </div>
          <Reveal className="md:col-span-6 md:col-start-7">
            <div className="on-ink grid gap-px overflow-hidden rounded-md bg-paper/15 text-paper sm:grid-cols-3">
              {[
                ['01', 'Client builds', 'MVPs, internal tools, AI features'],
                ['02', 'Fund', 'Revenue pays for servers and time'],
                ['03', 'Products', 'Lumina IQ, Tabble'],
              ].map(([n, t, b]) => (
                <div key={n} className="flex min-h-56 flex-col justify-between bg-ink p-6">
                  <span className="font-mono text-xs text-acid">{n}</span>
                  <div>
                    <p className="text-2xl font-semibold tracking-tight">{t}</p>
                    <p className="mt-2 text-sm text-muted-dark">{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Stack ---------- */}
      <section className="py-24 md:py-32">
        <div className="wrap">
          <SectionLabel index="04" className="text-muted">
            Things I argue with
          </SectionLabel>
          <h2 className="sr-only">Tech stack</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-md bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
            {stack.map((g, i) => (
              <Reveal key={g.group} delay={i * 80} className="bg-paper p-8">
                <h3 className="eyebrow text-muted">{g.group}</h3>
                <ul className="mt-6 space-y-1 text-2xl font-semibold tracking-tight">
                  {g.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                {g.aside ? <p className="mt-6 font-serif italic text-muted">{g.aside}</p> : null}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Timeline ---------- */}
      <section className="border-t border-ink/20 py-24 md:py-32">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <SectionLabel index="05" className="text-muted">
                Timeline
              </SectionLabel>
              <h2 className="mt-6 text-title font-semibold">
                Mistakes <span className="font-serif font-normal italic">&amp;</span> fixes
              </h2>
            </div>
          </div>
          <ol className="md:col-span-8">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.title} delay={i * 50} className="grid gap-2 border-t border-ink/20 py-8 last:border-b md:grid-cols-[10rem_1fr]">
                <span className="eyebrow pt-2 text-muted">{t.when}</span>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{t.title}</h3>
                  <p className="mt-2 text-muted">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- FAQ (mirrored in FAQPage structured data) ---------- */}
      <section id="faq" className="bg-paper-2 py-24 md:py-32">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="06" className="text-muted">
              FAQ
            </SectionLabel>
            <h2 className="mt-6 text-title font-semibold">
              Questions people <span className="font-serif font-normal italic">actually</span> ask
            </h2>
          </div>
          <div className="md:col-span-8">
            {faqs.map((f, i) => (
              <details key={f.q} className="group border-t border-ink/20 last:border-b" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-xl font-semibold tracking-tight [&::-webkit-details-marker]:hidden">
                  <h3>{f.q}</h3>
                  <span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/25 transition-transform duration-500 ease-expo group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-8 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Writing ---------- */}
      <section className="py-24">
        <div className="wrap flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel index="07" className="text-muted">
              Notes to self
            </SectionLabel>
            <p className="mt-6 max-w-xl text-lede">Occasional rants about broken workflows and the things I built to fix them.</p>
          </div>
          <a href={socials.find((s) => s.label === 'Dev.to')!.href} target="_blank" rel="me noopener noreferrer" className="btn btn-solid">
            <span>Read on dev.to</span> <Arrow diagonal />
          </a>
        </div>
      </section>
    </>
  );
}
