import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { WorkIndex } from '../components/WorkIndex';
import { obsessions, services, stats, testimonial, tickerLines, trackRecord } from '../data/content';
import ScrollVelocity from '../components/rb/ScrollVelocity';
import ScrollReveal from '../components/rb/ScrollReveal';
import CountUp from '../components/rb/CountUp';
import SpotlightCard from '../components/rb/SpotlightCard';

export function Home() {
  return (
    <>
      <Hero />

      <section aria-label="Currently taking on" className="band bg-yellow">
        <ScrollVelocity
          texts={[`Currently taking on → ${tickerLines.join(' → ')} ✦`, `${trackRecord[3]} ✦ No 30-page proposals ✦`]}
          velocity={60}
          fontSize="clamp(1.4rem, 3.4vw, 3rem)"
          fontWeight={700}
          color="#0a0a0a"
          skewWithVelocity={6}
          numCopies={4}
          pauseOnHover
        />
      </section>

      <section className="night section statement" aria-label="Positioning">
        <div className="wrap">
          <ScrollReveal baseOpacity={0.28} enableBlur blurStrength={4} baseRotation={2} highlightColor="#ccff00" effect="rise">
            If you want a 30-page proposal and 3 weeks of meetings, I’m not your guy. If you want something built, broken, fixed, and shipped before Friday,
            we’ll get along fine.
          </ScrollReveal>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="record">
        <div className="shead">
          <div>
            <h2 id="record" className="t-xl">
              Track record
            </h2>
            <p>// numbers I’m willing to say out loud</p>
          </div>
        </div>
        <div className="stats">
          {stats.map((s) => (
            <div key={s.label} className={`stat bg-${s.color}`}>
              <p className="stat__n">
                <CountUp to={s.to} duration={2.2} suffix={s.suffix} trigger="view" />
              </p>
              <p className="stat__l">{s.label}</p>
              <p className="stat__note">{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section wrap bt" aria-labelledby="survived">
        <div className="shead">
          <div>
            <h2 id="survived" className="t-xl">
              Things that survived
            </h2>
            <p>The projects that didn’t get abandoned after 48 hours.</p>
          </div>
          <Link to="/work" className="neo-btn neo-btn--paper" data-label="Survivors">
            View all the messes <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
        <WorkIndex />
      </section>

      <section className="section wrap bt" aria-label="What I build and think about">
        <div className="lists">
          <div className="card card--lg bg-ink">
            <h2 className="t-l c-yellow" style={{ marginBottom: '1.5rem' }}>
              Things I usually help build
            </h2>
            <ul>
              {services.map((s) => (
                <li key={s.title}>• {s.title}</li>
              ))}
            </ul>
            <p className="t-m c-acid" style={{ marginTop: '1.75rem', fontStyle: 'italic', fontWeight: 700 }}>
              If that sounds familiar… keep scrolling.
            </p>
          </div>
          <div className="card card--lg bg-blue">
            <h2 className="t-l c-yellow" style={{ marginBottom: '1.5rem' }}>
              Current obsessions
            </h2>
            <ul>
              {obsessions.map((o) => (
                <li key={o}>→ {o}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section wrap" aria-label="What others say">
        <SpotlightCard className="card card--lg quote-card bg-ink" spotlightColor="rgba(204, 255, 0, 0.35)" theme="dark">
          <p className="label c-acid" style={{ marginBottom: '1rem' }}>
            // what others say
          </p>
          <figure>
            <blockquote>“{testimonial.quote}”</blockquote>
            <figcaption>
              —{' '}
              <a href={testimonial.href} target="_blank" rel="noopener noreferrer" className="ulink tap">
                {testimonial.name}
              </a>
              , {testimonial.role.toLowerCase()}
            </figcaption>
          </figure>
        </SpotlightCard>
      </section>
    </>
  );
}
