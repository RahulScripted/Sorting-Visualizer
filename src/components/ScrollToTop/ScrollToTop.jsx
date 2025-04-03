import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
      setIsVisible(scrollTop > 100); // Show button when scrolled down
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-5 z-99">
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="relative w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center shadow-lg cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <svg className="absolute w-full h-full" viewBox="0 0 36 36">
            <path
              className="text-gray-200"
              strokeWidth="3"
              stroke="currentColor"
              fill="none"
              d="M18 2a16 16 0 1 1 0 32 16 16 0 0 1 0-32"
            />
            <path
              className="text-violet-500"
              strokeWidth="2"
              strokeDasharray="100"
              strokeDashoffset={`${100 - scrollProgress}`}
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2a16 16 0 1 1 0 32 16 16 0 0 1 0-32"
            />
          </svg>
          <ArrowUp className="text-white w-5 h-5" />
        </motion.button>
      )}
    </div>
  );
};

export default ScrollToTop;