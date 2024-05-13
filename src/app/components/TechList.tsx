'use client';

import React, { Fragment, useEffect, useRef } from 'react';
import { TechListProps, TechProps } from '../interfaces/components';
import Heading from './Heading';
import { MdCircle } from 'react-icons/md';
import Bounded from './Bounded';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechList = ({ heading, techList, className = '' }: TechListProps) => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          // markers: true,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 4,
        },
      });

      tl.fromTo(
        '.tech-row',
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: 'power1.inOut',
        }
      );
    }, component);
    return () => ctx.revert();
  });

  return (
    <section className={`${className}`} ref={component}>
      <Bounded as="div">
        <Heading size="xl" className="mb-8" as="h2">
          {heading}
        </Heading>
      </Bounded>
      {techList.map(({ techColor, techName }: TechProps, index) => (
        <div
          key={index}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
          aria-label={techName || undefined}
        >
          {Array.from({ length: 15 }, (_, index) => (
            <Fragment key={index}>
              <span
                className="tech-item text-8xl font-extrabold uppercase tracking-tighter"
                style={{
                  color: index === 7 && techColor ? techColor : 'inherit',
                }}
              >
                {techName}
              </span>
              <span className="text-3xl">
                <MdCircle />
              </span>
            </Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default TechList;
