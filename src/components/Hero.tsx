import React from 'react';
import { Link } from 'react-router-dom';
import portrait960 from '../assets/portrait-960.webp';
import { person } from '../data/site';
import TiltedCard from './rb/TiltedCard';
import DotGrid from './rb/DotGrid';
import CircularText from './rb/CircularText';
import TextPressure from './rb/TextPressure';

export function Hero() {
  return (
    <section className="hero" aria-label="Intro">
      <div className="hero__bg" aria-hidden="true">
        <DotGrid dotSize={4} gap={26} baseColor="#d8d5cc" activeColor="#2b59ff" proximity={130} shockRadius={220} shockStrength={4} />
      </div>

      <div className="wrap hero__grid">
        <div>
          <div className="dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <p className="hero__title">
            Hi, I’m Jai.
            <br />
            I help ideas
            <br />
            leave the
            <br />
            <span className="hl hl--yellow">group chat.</span>
          </p>
          <p className="hero__hi">
            Co-founder of Genrec AI. I talk to clients, plan the work with my team, and make sure it actually ships.
          </p>
          <div className="hero__actions">
            <Link to="/work" className="neo-btn" data-label="Survivors">
              See my work <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <Link to="/contact" className="neo-btn neo-btn--paper" data-label="Complain">
              Tell me what you’re building
            </Link>
          </div>
          <p className="hero__status">
            STATUS: <b>ONLINE</b> · <b>AVOIDING TERMINAL WARNINGS</b>
          </p>
        </div>

        <div className="hero__photo">
          <div className="hero__photo-back" aria-hidden="true" />
          <TiltedCard
            imageSrc={portrait960}
            altText={`${person.name}, co-founder of Genrec AI`}
            containerHeight="min(36rem, 120vw)"
            containerWidth="100%"
            imageHeight="min(36rem, 120vw)"
            imageWidth="100%"
            rotateAmplitude={10}
            scaleOnHover={1.04}
            radius={0}
            glare={0.12}
          />
          <span className="hero__floater sticker bg-purple" aria-hidden="true">
            STATUS: DEBUGGING
          </span>
          <span className="hero__circle" aria-hidden="true">
            <CircularText text="CO-FOUNDER ✦ GENREC AI ✦ BUILDER ✦ " spinDuration={14} size={120} fontSize={11} color="#0a0a0a" ring ringColor="#fff500" onHover="speedUp" />
          </span>
        </div>
      </div>

      <div className="hero__name">
        <div className="wrap hero__name-in">
          <TextPressure
            text="JAI SAMYUKTH"
            fontFamily="Roboto Flex"
            fontUrl="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght@8..144,25..151,100..1000&text=JAISMYUKTH%20&display=swap"
            textColor="#fdfbf7"
            pressureColor="#ccff00"
            width
            weight
            italic={false}
            alpha={false}
            flex
            idle="wave"
            clickRipple
            minFontSize={40}
          />
        </div>
      </div>
    </section>
  );
}
