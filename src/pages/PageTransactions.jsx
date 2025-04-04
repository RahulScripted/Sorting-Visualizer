import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap, Power2 } from "gsap";

const PageTransition = ({ contentRef }) => {
  const location = useLocation();
  const divsRef = useRef([]);

  useEffect(() => {
    const divs = divsRef.current;
    const tl = gsap.timeline();

    // Slide down bars
    tl.staggerTo(divs, 0.5, { bottom: "0%", ease: Power2.easeIn }, 0.2)

      .to({}, { duration: 0.4 })

      // Slide bars back up
      .staggerTo(divs, 0.5, { bottom: "100%", ease: Power2.easeOut }, 0.2)

      // After animation, fade-in main content
      .to(contentRef?.current, {
        autoAlpha: 1,
        duration: 0.6,
        ease: Power2.easeOut,
      }, "-=0.3"); 
  }, [location.pathname, contentRef]);

  return (
    <div className="page-transition fixed top-0 left-0 w-full h-full z-[9999] pointer-events-none">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          ref={(el) => (divsRef.current[i] = el)}
          className="bar-div fixed h-full w-[20%] bg-violet-500 bottom-full"
          style={{ left: `${i * 20}%` }}
        />
      ))}
    </div>
  );
};

export default PageTransition;