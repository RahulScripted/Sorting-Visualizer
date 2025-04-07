import { MoveRight, Play, Shuffle } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

// Generate according to screen size
const getBarCount = () => {
  if (window.innerWidth > 1024) return 25;
  if (window.innerWidth > 768) return 20;
  if (window.innerWidth > 480) return 10;
  else return 5;
};

// Generate Random bars
const generateRandom = (count) => {
  return Array.from(
    { length: count },
    () => Math.floor(Math.random() * 100) + 10
  );
};

const Sorting = ({
  title,
  description,
  working,
  generateTimeComplexity,
  generateSpaceComplexity,
  sortingAlgorithm,
  codeSnippets,
}) => {
  // Hooks
  const [barCount, setBarCount] = useState(getBarCount());
  const [bars, setBars] = useState(generateRandom(barCount));
  const [isMobile, setIsMobile] = useState(false);
  const [sorting, setSorting] = useState(false);
  const [comparing, setComparing] = useState([]);
  const [swapping, setSwapping] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [currentPivot, setCurrentPivot] = useState(null);
  const [animationSpeed, setAnimationSpeed] = useState(50);
  const [selectLanguage, setSelectLanguage] = useState("cpp");

  // Side Effect -> Bar Generation
  useEffect(() => {
    const handleResize = () => {
      const newCount = getBarCount();
      setBarCount(newCount);
      setBars(generateRandom(newCount));
      setSorted([]);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Shuffle the bar function with animation
  const shuffleBars = async () => {
    if (!sorting) {
      // Create a visual shuffle effect
      setSorting(true);
      const newBars = [...bars];

      // Fisher-Yates shuffle with animation
      for (let i = newBars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        setSwapping([i, j]);
        await new Promise((resolve) => setTimeout(resolve, animationSpeed));

        // Swap
        [newBars[i], newBars[j]] = [newBars[j], newBars[i]];
        setBars([...newBars]);

        await new Promise((resolve) => setTimeout(resolve, animationSpeed));
        setSwapping([]);
      }

      setSorted([]);
      setSorting(false);
      setBars(newBars);
    }
  };

  // Side Effect -> For removing number in x axis
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Adjust the width as needed
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Enhanced sorting with visual feedback
  const startSorting = async () => {
    if (!sorting) {
      setSorting(true);
      setSorted([]);

      // Wrap the sorting algorithm to add visual enhancements
      const enhancedSortingAlgorithm = async (
        array,
        updateBars,
        updateComparing
      ) => {
        // Create enhanced setter functions that include visual effects
        const enhancedSetBars = (newBars) => {
          updateBars(newBars);
          return new Promise((resolve) => setTimeout(resolve, animationSpeed));
        };

        const enhancedSetComparing = (indices) => {
          updateComparing(indices);
          return new Promise((resolve) => setTimeout(resolve, animationSpeed));
        };

        // Add ability to set pivot (for quicksort) and mark sorted elements
        const setPivot = (index) => {
          setCurrentPivot(index);
          return new Promise((resolve) => setTimeout(resolve, animationSpeed));
        };

        const markSorted = (indices) => {
          setSorted((prev) => {
            const newSorted = [
              ...prev,
              ...indices.filter((idx) => !prev.includes(idx)),
            ];
            return newSorted;
          });
          return new Promise((resolve) =>
            setTimeout(resolve, animationSpeed * 2)
          );
        };

        const setSwap = (indices) => {
          setSwapping(indices);
          return new Promise((resolve) => setTimeout(resolve, animationSpeed));
        };

        return await sortingAlgorithm(
          [...array],
          enhancedSetBars,
          enhancedSetComparing,
          {
            setPivot,
            markSorted,
            setSwap,
            animationSpeed,
          }
        );
      };

      const sortedBars = await enhancedSortingAlgorithm(
        [...bars],
        setBars,
        setComparing
      );

      // Mark all as sorted when complete
      const allIndices = Array.from({ length: sortedBars.length }, (_, i) => i);
      setSorted(allIndices);
      setComparing([]);
      setSwapping([]);
      setCurrentPivot(null);
      setBars(sortedBars);

      // Celebratory animation when sorting is complete
      const celebrateSort = async () => {
        for (let i = 0; i < sortedBars.length; i++) {
          setComparing([i]);
          await new Promise((resolve) =>
            setTimeout(resolve, animationSpeed / 2)
          );
        }
        setComparing([]);
      };

      await celebrateSort();
      setSorting(false);
    }
  };

  // Get Time data
  const timeData = generateTimeComplexity();
  const spaceData = generateSpaceComplexity();

  // For calculating dynamic bar colors
  const getBarColor = (index, value) => {
    if (comparing.includes(index)) return "bg-red-500"; // Being compared
    if (swapping.includes(index)) return "bg-yellow-500"; // Being swapped
    if (currentPivot === index) return "bg-blue-500"; // Pivot element
    if (sorted.includes(index)) return "bg-green-500"; // Already sorted

    // Default color with gradient based on value
    const intensity = Math.floor((value / 100) * 255);
    return `bg-violet-500`;
  };

  // For calculating animations
  const getBarStyle = (index, value) => {
    const style = { height: `${value * 3}px` };

    // Add animations
    if (swapping.includes(index)) {
      style.transform = "scale(1.1)";
      style.transition = "all 0.3s ease";
    } else if (comparing.includes(index)) {
      style.transform = "translateY(-10px)";
      style.transition = "all 0.2s ease";
    } else if (currentPivot === index) {
      style.transform = "scale(1.05)";
      style.transition = "all 0.3s ease";
    }

    return style;
  };

  return (
    <div className="flex flex-col gap-5">
      {/* 1st Part */}
      <div className="flex flex-col gap-2">
        {/* Heading */}
        <h1 className="bg-gradient-to-br from-violet-500 via-violet-300 to-violet-700 text-3xl bg-clip-text text-transparent font-bold">
          {title}
        </h1>

        {/* Paragraph */}
        <p className="text-[0.9rem] text-gray-300">{description}</p>
      </div>

      {/* 2nd Part */}
      <div className="flex flex-col gap-2">
        {/* Heading */}
        <h1 className="bg-gradient-to-br from-violet-500 via-violet-300 to-violet-700 text-3xl bg-clip-text text-transparent font-bold">
          Working of {title}
        </h1>

        {/* Working */}
        <ul className="pl-2 md:pl-5">
          {working.map((item, idx) => (
            <li key={idx} className="mt-2 flex gap-2">
              <MoveRight className="w-[25px] sm:w-[15px] h-[25px] sm:h-[25px] text-green-500" />
              <p className="text-xs sm:text-sm">{item}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* 3rd Part */}
      <div className="mt-10 flex flex-col items-center justify-center gap-5 md:gap-10">
        {/* Heading */}
        <h1 className="bg-gradient-to-br from-violet-500 via-violet-300 to-violet-700 text-4xl bg-clip-text text-transparent font-bold">
          Show In Action
        </h1>

        {/* For Animation */}
        <div className="w-[90%] bg-[#111] h-[80vh] rounded-md flex items-end justify-center gap-2 px-5 relative">
          {bars.map((value, idx) => (
            <div
              key={idx}
              className={`w-[30px] sm:w-[40px] md:w-[50px] flex items-end justify-center text-white text-sm font-bold pb-5 rounded-md transition-all duration-300 ${getBarColor(
                idx,
                value
              )}`}
              style={getBarStyle(idx, value)}
            >
              {value}
            </div>
          ))}

          {/* Status indicator */}
          {sorting && (
            <div className="absolute top-4 left-4 bg-black bg-opacity-70 px-3 py-1 rounded-md text-white text-sm">
              {comparing.length > 0
                ? "Comparing"
                : swapping.length > 0
                ? "Swapping"
                : "Processing..."}
            </div>
          )}
        </div>

        {/* Animation Speed Control */}
        <div className="w-full max-w-md flex items-center gap-3">
          <span className="text-xs text-gray-300">Speed:</span>
          <input
            type="range"
            min="10"
            max="200"
            value={200 - animationSpeed}
            onChange={(e) => setAnimationSpeed(200 - e.target.value)}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            disabled={sorting}
          />
          <span className="text-xs text-gray-300">
            {animationSpeed < 50
              ? "Fast"
              : animationSpeed > 120
              ? "Slow"
              : "Normal"}
          </span>
        </div>

        {/* For Buttons */}
        <div className="flex items-center justify-center gap-5 md:gap-10 lg:gap-16">
          {/* For Shuffle */}
          <button
            onClick={shuffleBars}
            disabled={sorting}
            className={`flex items-center justify-center gap-2 px-10 py-2 md:py-4 rounded-md ${
              sorting
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-violet-500 cursor-pointer border border-transparent hover:bg-transparent hover:border-violet-500 hover:scale-90"
            } transition-all duration-300`}
          >
            <Shuffle className="w-5 h-5 text-white" />
            <p className="hidden md:block text-sm">Shuffle</p>
          </button>

          {/* For Starting sort */}
          <button
            onClick={startSorting}
            disabled={sorting}
            className={`flex items-center justify-center gap-2 px-10 py-2 md:py-4 rounded-md ${
              sorting
                ? "border border-gray-600 cursor-not-allowed"
                : "border border-violet-500 cursor-pointer hover:bg-violet-500 hover:scale-90"
            } transition-all duration-300`}
          >
            <Play className="w-5 h-5 text-white " />
            <p className="hidden md:block text-sm">Start</p>
          </button>
        </div>
      </div>

      {/* 4th Part */}
      <div className="w-full flex flex-col items-center justify-center mt-10">
        {/* Heading */}
        <h1 className="bg-gradient-to-br from-violet-500 via-violet-300 to-violet-700 text-2xl md:text-3xl bg-clip-text text-transparent font-bold text-center">
          {title} Complexity Analysis
        </h1>

        {/* Container for both visualizations */}
        <div className="w-full mt-10 flex flex-col items-center justify-center lg:justify-between lg:flex-row gap-6">
          {/* Time Complexity */}
          <div className="flex-1">
            {/* Heading */}
            <h2 className="text-xl font-semibold text-center mb-4">
              Time Complexity
            </h2>

            {/* Graph Container */}
            <div className="h-72 sm:h-80 mb-4">
              <ResponsiveContainer width="100%" height="100%" minWidth={300}>
                {/* Line chart */}
                <LineChart data={timeData}>
                  {/* Cartesian */}
                  <CartesianGrid strokeDasharray="3 3" />

                  {/* X - axis */}
                  <XAxis
                    dataKey="n"
                    label={{
                      value: "Input size (n)",
                      position: "insideBottom",
                      offset: -5,
                    }}
                    interval={0}
                    hide={isMobile}
                  />

                  {/* Y - axis */}
                  <YAxis
                    label={{
                      value: "Operations",
                      angle: -90,
                      position: "insideLeft",
                    }}
                    hide={isMobile}
                  />

                  {/* Tooltip */}
                  <Tooltip />

                  {/* Graph Line -> Worst Case */}
                  <Line
                    type="monotone"
                    dataKey="worstCase"
                    stroke="#EF4444"
                    name="Worst Case"
                    strokeWidth={2}
                  />

                  {/* Graph Line -> Average Case */}
                  <Line
                    type="monotone"
                    dataKey="averageCase"
                    stroke="#8B5CF6"
                    name="Average Case"
                    strokeWidth={2}
                  />

                  {/* Graph Line -> Best Case */}
                  <Line
                    type="monotone"
                    dataKey="bestCase"
                    stroke="#10B981"
                    name="Best Case"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Space Complexity */}
          <div className="flex-1">
            {/* Heading */}
            <h2 className="text-xl font-semibold text-center mb-4">
              Space Complexity
            </h2>

            {/* Graph Container */}
            <div className="h-72 sm:h-80 mb-4">
              <ResponsiveContainer width="100%" height="100%" minWidth={300}>
                {/* Line chart */}
                <LineChart data={spaceData}>
                  {/* Cartesian */}
                  <CartesianGrid strokeDasharray="3 3" />

                  {/* X - axis */}
                  <XAxis
                    dataKey="n"
                    label={{
                      value: "Input size (n)",
                      position: "insideBottom",
                      offset: -5,
                    }}
                    interval={0}
                    hide={isMobile}
                  />

                  {/* Y - axis */}
                  <YAxis
                    label={{
                      value: "Operations",
                      angle: -90,
                      position: "insideLeft",
                    }}
                    domain={[0, "dataMax + 1"]}
                    hide={isMobile}
                  />

                  {/* Tooltip */}
                  <Tooltip />

                  {/* Graph Line -> Space Complexity */}
                  <Line
                    type="monotone"
                    dataKey="complexity"
                    stroke="#3B82F6"
                    name="Space Complexity"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* 5th Part */}
      <div className="w-full mt-10">
        {/* Heading */}
        <h1 className="bg-gradient-to-br from-violet-500 via-violet-300 to-violet-700 text-4xl bg-clip-text text-transparent font-bold text-center h-auto md:h-[70px] ">
          {title} Code
        </h1>

        {/* Language Tabs */}
        <div className="mt-10 flex mb-4 gap-4">
          {Object.keys(codeSnippets).map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectLanguage(lang)}
              className={`px-4 py-2 rounded-md text-sm font-semibold cursor-pointer ${
                selectLanguage === lang
                  ? "bg-violet-500 text-white"
                  : "bg-transparent hover:bg-violet-500 transition-all duration-300 text-gray-300"
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Code */}
        <SyntaxHighlighter
          language={selectLanguage}
          style={dracula}
          wrapLongLines={true}
          customStyle={{
            borderRadius: "0.75rem",
            padding: "1rem",
            backgroundColor: "#1e1e1e",
          }}
        >
          {codeSnippets[selectLanguage].trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Sorting;
