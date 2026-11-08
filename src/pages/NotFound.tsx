import React from 'react';
import { Link } from 'react-router-dom';
import FuzzyText from '../components/rb/FuzzyText';

export function NotFound() {
  return (
    <section className="lost night">
      <div className="wrap">
        <h1 className="sr-only">404, page not found</h1>
        <div aria-hidden="true" style={{ display: 'flex', justifyContent: 'center' }}>
          <FuzzyText fontSize="clamp(6rem, 22vw, 16rem)" fontWeight={700} color="#ccff00" baseIntensity={0.2} hoverIntensity={0.6} enableHover>
            404
          </FuzzyText>
        </div>
        <p className="t-m mono" style={{ marginTop: '1.5rem' }}>
          This page doesn’t exist. Probably one of the thirty abandoned repos.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
          <Link to="/" className="neo-btn" data-label="Home">
            Back home
          </Link>
          <Link to="/work" className="neo-btn neo-btn--paper" data-label="Survivors">
            See the survivors
          </Link>
        </div>
      </div>
    </section>
  );
}
