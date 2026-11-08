import React, { Suspense, lazy, useState } from 'react';
import { learnings } from '../data/content';
import { Crumbs } from '../components/Bits';

// The physics engine (matter-js) only loads when someone asks for chaos.
const FallingText = lazy(() => import('../components/rb/FallingText'));

export function Learnings() {
  const [chaos, setChaos] = useState(false);
  return (
    <div className="night" style={{ backgroundImage: 'linear-gradient(#ffffff14 1px, transparent 1px), linear-gradient(90deg, #ffffff14 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      <div className="wrap section" style={{ maxWidth: '62rem' }}>
        <Crumbs trail={[{ label: 'Scars' }]} />
        <div className="card bg-paper" style={{ border: '8px solid var(--paper)', boxShadow: '16px 16px 0 var(--pink)', marginTop: '1.5rem' }}>
          <div className="center" style={{ borderBottom: '8px solid var(--ink)', paddingBottom: '2rem', marginBottom: '2rem' }}>
            <h1 className="t-xl" data-reveal="up" data-intro>
              Things I’ve learned <br />
              <span className="c-pink">expensively</span>
            </h1>
            <p className="sticker bg-yellow tilt-r" style={{ marginTop: '1.25rem' }}>
              A running tally
            </p>
          </div>
          {chaos ? (
            <Suspense fallback={<p className="mono center">Loading physics. Gravity is expensive too.</p>}>
              <div className="falling-box">
                <FallingText
                  text={learnings.join(' ')}
                  highlightWords={['AWS', 'Azure', 'Excel', 'Production', 'Git', 'Backups']}
                  trigger="auto"
                  gravity={0.7}
                  fontSize="1.4rem"
                  theme="light"
                  accentColor="#ff0099"
                  draggable
                />
              </div>
              <p className="mono muted center" style={{ marginTop: '1rem' }}>
                Drag them around. That’s what production did to me.
              </p>
            </Suspense>
          ) : (
            <ol className="lessons">
              {learnings.map((l, i) => (
                <li key={l}>
                  <b>{String(i + 1).padStart(2, '0')}</b>
                  {l}
                </li>
              ))}
            </ol>
          )}
          <div className="center" style={{ marginTop: '2rem' }}>
            <button type="button" className={`neo-btn ${chaos ? 'neo-btn--paper' : 'neo-btn--pink'}`} onClick={() => setChaos((c) => !c)}>
              {chaos ? 'Put them back in order' : 'Let them fall (it’s what they do)'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
