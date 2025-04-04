import React, { useState, useEffect } from 'react';
import { gsap, CSSPlugin, Expo } from 'gsap';

gsap.registerPlugin(CSSPlugin);

const PreLoader = ({ onComplete }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((prev) =>
        prev < 100
          ? prev + 1
          : (clearInterval(count), setCounter(100), reveal())
      );
    }, 75);
  }, []);

  const reveal = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    tl.to('.follow', {
      width: '100%',
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to('.hide', { opacity: 0, duration: 0.3 })
      .to('.hide', { display: 'none', duration: 0.3 })
      .to('.follow', {
        height: '100%',
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      })
      .to('.content', {
        width: '100%',
        ease: Expo.easeInOut,
        duration: 0.7,
      });
  };

  return (
    <div className="absolute inset-0 z-50 bg-black flex items-center justify-center overflow-hidden content">

      {/* Progress Bar */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute top-0 left-0 bg-violet-500 h-[5px] w-0 follow z-20" />
        <div
          className="absolute top-0 left-0 bg-white h-[5px] hide z-10"
          style={{ width: `${counter}%` }}
        />
        <p className='text-[100px] hide'>{counter}%</p>
        </div>
    </div>
  );
};

export default PreLoader;