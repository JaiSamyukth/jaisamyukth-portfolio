import React from 'react';
import portrait960 from '../assets/portrait-960.webp';
import { org, person, socials } from '../data/site';
import { faqs, stack, timeline } from '../data/content';
import { Crumbs, SayIt } from '../components/Bits';
import TiltedCard from '../components/rb/TiltedCard';
import ScrollVelocity from '../components/rb/ScrollVelocity';

export function About() {
  const devto = socials.find((s) => s.label === 'Dev.to')!;
  return (
    <>
      <header className="phead night" style={{ borderBottom: '8px solid var(--yellow)' }}>
        <div className="wrap about-grid">
          <div>
            <Crumbs trail={[{ label: 'The Idiot' }]} />
            <p className="label c-yellow" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ width: '4rem', height: '0.4rem', background: 'var(--yellow)', display: 'inline-block' }} /> Serial_builder_v1.0
            </p>
            <h1 className="t-mega" style={{ marginTop: '1.25rem' }} data-reveal="up" data-intro>
              Jai <br />
              <span className="c-acid">Samyukth</span> B&nbsp;U.
            </h1>
            <p className="phead__lede" style={{ color: '#d6d4cd' }} data-reveal="up" data-intro data-delay="0.15">
              I notice inefficient systems. I become obsessed with them. I build software until they stop being inefficient.
            </p>
          </div>
          <div style={{ position: 'relative', maxWidth: '26rem', justifySelf: 'center', width: '100%' }}>
            <div className="hero__photo-back" aria-hidden="true" style={{ background: 'var(--pink)' }} />
            <TiltedCard
              imageSrc={portrait960}
              altText={`${person.name}, co-founder of Genrec AI`}
              captionText={`${person.name} · ${person.location.city}`}
              containerHeight="min(32rem, 110vw)"
              containerWidth="100%"
              imageHeight="min(32rem, 110vw)"
              imageWidth="100%"
              rotateAmplitude={10}
              scaleOnHover={1.04}
              radius={0}
              glare={0.12}
            />
          </div>
        </div>
      </header>

      <section className="section wrap">
        <div className="about-grid">
          <div className="stack-gap">
            <div className="card card--lg">
              <h2 className="t-l" style={{ borderBottom: 'var(--b) solid var(--ink)', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
                Background
              </h2>
              <div className="stack-gap t-m">
                <p>
                  I started building things because I couldn’t stop. Eventually, someone paid me for it. Then the first AWS invoice arrived, politely informing me that
                  curiosity isn’t free. I learned infrastructure the only way that works: by breaking it at 1 AM and frantically trying to fix it before anyone noticed.
                </p>
                <p>
                  My projects usually start because I watch people do something stupid. Lumina IQ exists because I watched students highlight entire PDFs and somehow
                  expect their brains to cooperate. Tabble exists because every waiter eventually develops superhero-level memory because the software doesn’t.
                </p>
                <p>
                  I write code until it solves the problem. Sometimes it’s messy, but messy code running in production beats clean code sitting in a private repo
                  forever.
                </p>
              </div>
            </div>
            <div className="card bg-yellow tilt-l">
              <h2 className="t-l" style={{ marginBottom: '0.75rem' }}>
                What I’m like to work with
              </h2>
              <p className="t-m">
                Fast, direct and mildly allergic to meetings. You’ll get a working link before you get a status update, and I’ll tell you when an idea is bad,
                including mine. If something breaks at 2 AM, so does my sleep schedule.
              </p>
            </div>
            <div>
              <h2 className="t-l" style={{ marginBottom: '1.25rem' }}>
                Things I argue with
              </h2>
              <div className="skills">
                {stack.map((g) => (
                  <div key={g.group} className="card" style={{ padding: '1.1rem' }}>
                    <h3>{g.group}</h3>
                    <ul>
                      {g.items.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="card bg-blue">
              <h2 className="label c-yellow" style={{ marginBottom: '0.5rem' }}>
                // The name
              </h2>
              <p className="t-l">/ {person.pronunciation} /</p>
              <p style={{ marginTop: '0.5rem' }}>{person.meaning}</p>
              <div style={{ marginTop: '1rem' }}>
                <SayIt />
              </div>
            </div>
          </div>

          <div>
            <h2 className="t-l" style={{ borderBottom: 'var(--b) solid var(--ink)', paddingBottom: '0.5rem', marginBottom: '2rem' }}>
              Timeline of mistakes &amp; fixes
            </h2>
            <ol className="timeline">
              {timeline.map((t) => (
                <li key={t.title} data-reveal="up">
                  <div className="card">
                    <span className="sticker bg-ink" style={{ boxShadow: 'none', color: 'var(--paper)' }}>
                      {t.when}
                    </span>
                    <h3>{t.title}</h3>
                    <p style={{ marginTop: '0.35rem' }}>{t.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="card bg-ink" style={{ marginTop: '2.5rem' }}>
              <h2 className="label c-acid">// Notes to self</h2>
              <p className="mono" style={{ margin: '0.75rem 0 1.25rem' }}>
                Occasional rants about broken workflows and things I built.
              </p>
              <a href={devto.href} target="_blank" rel="me noopener noreferrer" className="neo-btn">
                Read on dev.to <span className="arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section--tight wrap faq" id="faq" aria-labelledby="faq-title">
        <h2 id="faq-title" className="t-xl" style={{ marginBottom: '2rem' }}>
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
        <p className="mono muted" style={{ marginTop: '1.5rem' }}>
          Co-founder of{' '}
          <a href={org.url} target="_blank" rel="noopener" className="ulink tap">
            Genrec AI
          </a>
          . {person.education}.
        </p>
      </section>

      <section className="band bg-blue bt" aria-hidden="true">
        <ScrollVelocity texts={['Available for contracts ✦ Fixing broken code ✦ Ignoring best practices to get things done ✦']} velocity={50} fontSize="clamp(1.3rem, 3vw, 2.6rem)" fontWeight={700} color="#ffffff" numCopies={3} pauseOnHover />
      </section>
    </>
  );
}
