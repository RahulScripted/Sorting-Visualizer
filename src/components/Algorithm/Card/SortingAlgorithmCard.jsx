import { ArrowDownUp, BarChart, Filter, Layers, ListOrdered, Shuffle, SortAsc, SortDesc } from "lucide-react";
import React from "react";

const SortingAlgorithmCard = () => {

  // Sorting Algorithm - Data  
  const sortingAlgorithms = [
    { 
        icon: <SortAsc />,
        name: "Bubble Sort", 
        description: "A simple sorting algorithm that repeatedly swaps adjacent elements if they are in the wrong order. Inefficient for large data sets.",
        path: "/bubble-sort", 
    },
    { 
        icon: <SortDesc />,
        name: "Selection Sort", 
        description: "Finds the smallest element in the array and swaps it to the correct position. Inefficient for large lists but easy to understand.",
        path: "/selection-sort", 
    },
    { 
        icon: <ArrowDownUp />,
        name: "Insertion Sort", 
        description: "Sorts an array by picking one element at a time and placing it in its correct position. Efficient for nearly sorted arrays.",
        path: "/insertion-sort", 
    },
    { 
        icon: <Layers />,
        name: "Merge Sort", 
        description: "A divide-and-conquer algorithm that splits the array into halves, sorts each half, and merges them back together efficiently.",
        path: "/merge-sort", 
    },
    { 
        icon: <Shuffle />,
        name: "Quick Sort", 
        description: "Picks a pivot, partitions the array into smaller subarrays, and sorts them recursively. One of the fastest sorting algorithms in practice.",
        path: "/quick-sort", 
    },
    { 
        icon: <BarChart />,
        name: "Heap Sort", 
        description: "Uses a binary heap structure to repeatedly extract the largest element and place it at the end of the array. Efficient for large datasets.",
        path: "/heap-sort", 
    },
    { 
        icon: <ListOrdered />, 
        name: "Radix Sort", 
        description: "Sorts numbers by processing each digit from least to most significant. Works best for sorting numbers or strings.",
        path: "/radix-sort", 
    },
    { 
        icon: <Filter />,
        name: "Counting Sort", 
        description: "Counts the occurrences of each element and places them in order. Works best for small integer ranges but inefficient for large values.",
        path: "/counting-sort", 
    },
  ];

  return (
    <div className="flex flex-col gap-5 md:gap-0 items-center justify-center w-full">
      
      {/* Heading */}
      <h1 className="bg-gradient-to-r from-violet-500 via-violet-300 to-violet-700 text-3xl md:text-5xl bg-clip-text text-transparent h-auto md:h-[100px] font-bold">
        Sorting Algorithm
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 group">
        {sortingAlgorithms.map((item,idx) => (
            <div key={idx} className="flex flex-col gap-2 bg-[#101010] p-5 md:p-7 cursor-pointer hover:scale-105 group-hover:opacity-70 hover:opacity-100 transition-all duration-500 rounded-md hover:shadow-xs hover:shadow-[#888]">

                {/* Container of Icon & Heading */}
                <div className="flex gap-5">
                    {/* Icon */}
                    <div className="text-violet-500">{item.icon}</div>

                    {/* Heading */}
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                </div>

                {/* Paragraph */}
                <p className="text-sm text-gray-300">{item.description}</p>

                {/* Button */}
                <button className="mt-3 cursor-pointer relative overflow-hidden rounded-md bg-gradient-to-r from-violet-300 via-violet-700 to-violet-300 px-5 py-2.5 text-white font-bold transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110">
                    Visualize
                </button>
            </div>
        ))}
      </div>
    </div>
  );
};

export default SortingAlgorithmCard;
