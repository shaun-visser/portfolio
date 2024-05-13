'use client';
import React, { useLayoutEffect, useRef } from 'react';
import { HeroProps } from '../interfaces/components';
import gsap from 'gsap';
import Bounded from './Bounded';
import Shapes from './Shapes';

const Hero = ({ firstName, lastName, tagLine }: HeroProps) => {
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        '.name-animation',
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: 'elastic.out(1,0.3)',
          duration: 1,
          transformOrigin: 'left top',
          stagger: {
            each: 0.1,
            from: 'random',
          },
        }
      );
      tl.fromTo(
        '.tag-animation',
        {
          y: 20,
          opacity: 0,
          scale: 1.2,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scale: 1,
          ease: 'elastic.out(1,0.3)',
        }
      );
    }, component);
    return () => ctx.revert();
  }, []);
  const renderLetters = (name: string) => {
    if (!name) return;
    return name.split('').map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${index} inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };
  return (
    <Bounded ref={component}>
      <div className="grid grid-cols-1 min-h-[70dvh] md:grid-cols-2 items-center">
        <Shapes />
        <div>
          <h1
            className="mb-8 text-[clamp(3rem,17vmin,18rem)] font-extrabold loading-none tracking-tighter"
            aria-label={firstName + ' ' + lastName}
          >
            <span className="block text-slate-300">
              {renderLetters(firstName)}
            </span>
            <span className="-mt-[.2em] block text-slate-500">
              {renderLetters(lastName)}
            </span>
            <span className="tag-animation block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2rem] text-transparent opacity-0 md:text-4xl">
              {tagLine}
            </span>
          </h1>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
