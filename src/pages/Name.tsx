import React from 'react';
import { Link } from 'react-router-dom';
import { person, socials } from '../data/site';
import { Arrow, Crumbs, SayIt } from '../components/Bits';

/** A real page about the name: how it sounds, how it's spelled, what it means, and the ways
 *  people mistype it. The page a search engine should surface for "Jai Samuth" or "Jai Sampath". */
export function Name() {
  return (
    <>
      <header className="pagehead wrap">
        <Crumbs trail={[{ label: 'The name' }]} />
        <h1 className="t-xl" data-split="lines" data-intro>
          How to say Jai Samyukth
        </h1>
        <p className="pagehead__lede" data-reveal="up" data-intro data-delay="0.3">
          If you typed <strong>Jai Samuth</strong>, <strong>Jai Sampath</strong> or <strong>Jay Samyukth</strong>, you were probably looking for me: {person.name},
          co-founder of Genrec AI in {person.location.city}. It is spelled <strong>J‑A‑I S‑A‑M‑Y‑U‑K‑T‑H</strong>.
        </p>
      </header>

      <section className="night section" aria-labelledby="say">
        <div className="wrap">
          <div className="index__head">
            <h2 id="say" className="t-mega" style={{ fontSize: 'var(--t-xl)' }}>
              / {person.pronunciation} /
            </h2>
            <SayIt />
          </div>
          <ol className="syll">
            {person.syllables.map((s) => (
              <li key={s.part} data-reveal="up">
                <span className="label">Say “{s.say}”</span>
                <span className="t-xl">{s.part}</span>
                <span className="muted">{s.note}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap section" aria-labelledby="typos-title">
        <div className="grid">
          <div style={{ gridColumn: '1 / 5' }} className="about-say">
            <h2 id="typos-title" className="t-l">
              Typed it differently?
            </h2>
            <p className="muted" style={{ marginTop: '1rem' }}>
              All of these point to the same person.
            </p>
          </div>
          <div style={{ gridColumn: '6 / -1' }} className="about-say">
            <table className="typos">
              <thead>
                <tr>
                  <th scope="col">You typed</th>
                  <th scope="col">Why it happens</th>
                </tr>
              </thead>
              <tbody>
                {person.typos.map((t) => (
                  <tr key={t.typed}>
                    <th scope="row">{t.typed}</th>
                    <td>{t.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: '1.5rem' }}>
              Correct spelling: <strong>{person.shortName}</strong>. Full name: <strong>{person.name}</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap section--tight" aria-labelledby="meaning">
        <div className="grid">
          <h2 id="meaning" className="label about-say" style={{ gridColumn: '1 / 5' }}>
            What it means
          </h2>
          <p className="t-l about-say" style={{ gridColumn: '6 / -1' }} data-split="lines">
            {person.meaning}
          </p>
        </div>
      </section>

      <section className="wrap section" aria-labelledby="which">
        <div className="grid">
          <h2 id="which" className="t-l about-say" style={{ gridColumn: '1 / 5' }}>
            Which Jai?
          </h2>
          <div className="about-say" style={{ gridColumn: '6 / -1', display: 'grid', gap: '1.25rem' }}>
            <p className="t-m">
              There are a lot of Jais. This one is a systems builder from {person.location.city}, studying Computer Science and Business Systems, and co-founder of
              Genrec AI. I built <Link to="/work/lumina-iq" className="link">Lumina IQ</Link> and <Link to="/work/tabble" className="link">Tabble</Link>.
            </p>
            <ul className="chips" aria-label="Profiles">
              {socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="me noopener noreferrer" className="chip">
                    {s.label} · {s.handle}
                  </a>
                </li>
              ))}
            </ul>
            <div>
              <Link to="/about" className="btn btn--solid" data-label="About">
                <span>More about me</span>
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
