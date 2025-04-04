import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const sentence = "Sorting bugs, not just arrays";

const PreLoader = () => {
  const loaderRef = useRef(null);
  const lettersRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      lettersRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        duration: 0.6,
      }
    ).to(
      loaderRef.current,
      {
        y: '-100%',
        duration: 1,
        scale: 0.8,
        delay: 1.5,
        ease: 'power3.inOut',
      }
    );
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed top-0 left-0 w-full h-screen bg-black text-white flex items-center justify-center z-50"
    >
      <h1 className="text-3xl md:text-5xl font-bold tracking-wide flex flex-wrap justify-center">
        {sentence.split('').map((char, index) => (
          <span
            key={index}
            ref={(el) => (lettersRef.current[index] = el)}
            className={`inline-block ${char === ' ' ? 'mx-1' : ''}`}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default PreLoader;