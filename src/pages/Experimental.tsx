import React from 'react';
import { experiments, otherRepos } from '../data/content';
import { socials } from '../data/site';
import { PageHero } from '../components/PageHero';
import { Arrow } from '../components/Bits';
import { Reveal } from '../components/Motion';

export function Experimental() {
  const github = socials.find((s) => s.label === 'GitHub')!;
  return (
    <>
      <PageHero
        crumb="Lab"
        title="Unfinished"
        accent="business."
        lede={<p>If you build enough things, most of them will be terrible. These are the projects that taught me what not to do.</p>}
        aside={
          <p className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d1a]" aria-hidden="true" /> Status: mostly broken
          </p>
        }
      />
      <section className="pb-28">
        <div className="wrap grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="eyebrow text-muted">Failed experiments</h2>
            <ul className="mt-6">
              {experiments.map((e, i) => (
                <Reveal as="li" key={e.title} delay={i * 70} className="group border-t border-ink/20 py-7 last:border-b">
                  <h3 className="text-[clamp(1.75rem,3.4vw,3rem)] font-semibold leading-none tracking-[-0.035em]">
                    <span className="bg-[linear-gradient(#ccff00,#ccff00)] bg-[length:0%_45%] bg-[position:0_85%] bg-no-repeat transition-[background-size] duration-700 ease-expo group-hover:bg-[length:100%_45%]">
                      {e.title}
                    </span>
                  </h3>
                  <p className="mt-3 text-muted">{e.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={150} className="on-ink self-start rounded-md bg-ink p-8 text-paper md:col-span-4 md:col-start-9 md:p-10">
            <h2 className="eyebrow text-acid">Other repos</h2>
            <ul className="mt-6 space-y-3">
              {otherRepos.map((r) => (
                <li key={r} className="flex gap-3">
                  <span aria-hidden="true" className="text-muted-dark">→</span>
                  {r}
                </li>
              ))}
            </ul>
            <a href={github.href} target="_blank" rel="me noopener noreferrer" className="btn btn-ghost mt-10">
              <span>Enter at your own risk</span> <Arrow diagonal />
            </a>
            <p className="mt-8 font-serif text-2xl italic text-muted-dark">I will undoubtedly break more things soon.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
