import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center gap-5">
      

        {/* Heading */}
        <h1 className="text-2xl md:text-5xl font-bold tracking-[3px]">
          Visualize
          <span className="bg-gradient-to-r from-violet-700 via-violet-300 to-violet-700 text-transparent bg-clip-text">
            {" "}Sorting <br /> {" "}
          </span>
          Algorithms in
          <span className="bg-gradient-to-r from-violet-700 via-violet-200 to-violet-700 text-transparent bg-clip-text">
            {" "}Action!
          </span>
        </h1>

        {/* Paragraph */}
        <p className="w-full md:max-w-5xl text-sm md:text-base text-gray-300">
          Explore, understand, and compare different sorting algorithms with real-time animations. Adjust speed, size, and see how each algorithm works step by step! Gain deeper insights with performance comparisons, visualize sorting complexities, and interact with customizable datasets to improve your understanding of algorithm efficiency!
        </p>
    </div>
  );
};

export default HeroSection;
