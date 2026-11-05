import React from 'react';
import { Link } from 'react-router-dom';
import { Arrow } from '../components/Bits';

/** 404 in the concept: a join that never happened. The middle piece is missing. */
export function NotFound() {
  return (
    <section className="lost wrap">
      <p className="label">Error 404</p>
      <h1 className="t-mega lost__digits" aria-label="404, page not found">
        <span aria-hidden="true">4</span>
        <span className="lost__gap" aria-hidden="true" />
        <span aria-hidden="true">4</span>
      </h1>
      <p className="pagehead__lede">This page never joined up. Probably one of the thirty abandoned repos.</p>
      <div className="hero__actions" style={{ marginTop: '2rem' }}>
        <Link to="/" className="btn btn--solid" data-label="Home">
          <span>Back home</span>
          <Arrow />
        </Link>
        <Link to="/work" className="btn btn--ghost" data-label="Work">
          <span>See the work</span>
        </Link>
      </div>
    </section>
  );
}
