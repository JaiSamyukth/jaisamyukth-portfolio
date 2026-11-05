import React from 'react';
import { Link } from 'react-router-dom';
import { Arrow } from '../components/Bits';

export function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-end pb-20 pt-32">
      <div className="wrap">
        <p className="eyebrow text-muted">Error 404 · page not found</p>
        <h1 className="mt-6 text-mega font-semibold">
          Lost<span className="font-serif font-normal italic">?</span>
        </h1>
        <p className="mt-8 max-w-xl text-lede">
          This page doesn’t exist. Probably one of the thirty abandoned repos. Production doesn’t care, but I do.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/" className="btn btn-solid">
            <span>Back home</span> <Arrow />
          </Link>
          <Link to="/work" className="btn btn-ghost">
            <span>See the work</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
