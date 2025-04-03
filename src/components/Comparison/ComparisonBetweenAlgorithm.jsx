import { Check, X } from "lucide-react";
import React from "react";

const ComparisonBetweenAlgorithm = () => {
  // Sorting algorithm -> data
  const dataOfSortingAlgo = [
    {
      name: "Bubble Sort",
      best: "O(n)",
      avg: "O(n²)",
      worst: "O(n²)",
      space: "O(1)",
      stable: "Yes",
      uses: "Simple educational purposes",
    },
    
    {
      name: "Selection Sort",
      best: "O(n²)",
      avg: "O(n²)",
      worst: "O(n²)",
      space: "O(1)",
      stable: "No",
      uses: "When memory writes are costly",
    },
    {
      name: "Insertion Sort",
      best: "O(n)",
      avg: "O(n²)",
      worst: "O(n²)",
      space: "O(1)",
      stable: "Yes",
      uses: "Small datasets, nearly sorted lists",
    },
    {
      name: "Merge Sort",
      best: "O(n log n)",
      avg: "O(n log n)",
      worst: "O(n log n)",
      space: "O(n)",
      stable: "Yes",
      uses: "Large datasets, linked lists",
    },
    {
      name: "Quick Sort",
      best: "O(n log n)",
      avg: "O(n log n)",
      worst: "O(n²)",
      space: "O(log n)",
      stable: "No",
      uses: "General-purpose sorting",
    },
    {
      name: "Radix Sort",
      best: "O(nk)",
      avg: "O(nk)",
      worst: "O(nk)",
      space: "O(n + k)",
      stable: "Yes",
      uses: "Sorting large numbers",
    },
    {
      name: "Counting Sort",
      best: "O(n + k)",
      avg: "O(n + k)",
      worst: "O(n + k)",
      space: "O(k)",
      stable: "Yes",
      uses: "Small range of integers",
    },
  ];


  return (
    <div className="flex flex-col items-center justify-center w-full gap-5">
      
      {/* Title */}
      <h1 className="bg-gradient-to-r from-violet-500 via-violet-300 to-violet-700 text-3xl text-center md:text-5xl bg-clip-text text-transparent h-auto md:h-[100px] font-bold">
        Comparison
      </h1>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-center border-collapse border border-gray-300">

          {/* Head of the table */}
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Sorting Technique</th>
              <th className="border border-gray-400 px-4 py-2">Time Complexity(Best)</th>
              <th className="border border-gray-400 px-4 py-2">Time Complexity(Average)</th>
              <th className="border border-gray-400 px-4 py-2">Time Complexity(Worst)</th>
              <th className="border border-gray-400 px-4 py-2">Space Complexity</th>
              <th className="border border-gray-400 px-4 py-2">Stable</th>
              <th className="border border-gray-400 px-4 py-2">Use Cases</th>
            </tr>
          </thead>

          {/* Body of the table */}
          <tbody>
            {dataOfSortingAlgo.map((algo,idx) => (
              <tr key={idx} className='border border-gray-300 text-sm md:text-base'>

                {/* Name of the algorithm */}
                <td className='border border-gray-400 px-4 py-2'>{algo.name}</td>

                {/* Time Complexity -> Best */}
                <td className='border border-gray-400 px-4 py-2'>{algo.best}</td>

                {/* Time Complexity -> Average */}
                <td className='border border-gray-400 px-4 py-2'>{algo.avg}</td>

                {/* Time Complexity -> Worst */}
                <td className='border border-gray-400 px-4 py-2'>{algo.worst}</td>

                {/* Space Complexity */}
                <td className='border border-gray-400 px-4 py-2'>{algo.space}</td>

                {/* Stability */}
                <td className=' px-4 py-2 flex items-center justify-center'>
                  {algo.stable === "Yes" ? <Check className="text-green-500 w-5 h-12" /> : <X className="text-red-500 w-5 h-12" />
                  }
                </td>

                {/* Use Cases */}
                <td className='border border-gray-400 px-4 py-2'>{algo.uses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonBetweenAlgorithm;
