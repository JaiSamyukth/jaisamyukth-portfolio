import React from 'react';
import { Link } from 'react-router-dom';
import { approachSteps } from '../data/content';
import { PageHero } from '../components/PageHero';
import { Arrow } from '../components/Bits';
import { Reveal } from '../components/Motion';

export function Approach() {
  return (
    <>
      <PageHero
        crumb="Approach"
        title="The"
        accent="approach."
        lede={
          <p>
            Objective: <strong className="font-semibold">stop doing boring things manually.</strong> The rest is just four steps on repeat.
          </p>
        }
        aside={<p className="eyebrow text-muted">Confidential // approach_doc_v2</p>}
      />

      <section className="pb-24 md:pb-32">
        <div className="wrap">
          <ol>
            {approachSteps.map((s, i) => (
              <Reveal
                as="li"
                key={s.title}
                delay={i * 80}
                className="group grid gap-4 border-t border-ink/20 py-10 transition-colors duration-500 last:border-b md:grid-cols-12 md:items-baseline md:py-14"
              >
                <span className="font-mono text-sm text-muted md:col-span-1">0{i + 1}</span>
                <h2 className="text-[clamp(3rem,9vw,8.5rem)] font-semibold leading-[0.85] tracking-[-0.05em] transition-colors duration-500 group-hover:text-blue md:col-span-6">
                  {s.title}
                </h2>
                <p className="max-w-md text-lg text-muted md:col-span-5">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="on-ink bg-ink py-24 text-paper md:py-32">
        <div className="wrap grid gap-10 md:grid-cols-12">
          <p className="eyebrow text-acid md:col-span-3">// The result</p>
          <div className="md:col-span-9">
            <Reveal as="p" className="font-serif text-[clamp(2rem,4vw,3.75rem)] leading-[1.05]">
              Software you forget exists because it actually works. That’s the only compliment I care about.
            </Reveal>
            <Reveal as="p" delay={120} className="mt-8 max-w-2xl text-lg text-muted-dark">
              It’s also why I don’t do three-week discovery phases. The fastest way to test whether an idea works is to write the code and find out.
            </Reveal>
            <Reveal delay={200}>
              <Link to="/contact" className="btn btn-ghost mt-10">
                <span>Start with a conversation</span> <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
