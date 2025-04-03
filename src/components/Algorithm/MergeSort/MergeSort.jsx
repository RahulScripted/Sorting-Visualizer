import React from "react";
import Sorting from "../Sorting/Sorting";

const MergeSort = () => {

  // For time complexity
  const generateTimeComplexity = () => {
    const data = [];
    for (let i = 1; i <= 20; i++) {
      const worstCase = parseFloat((i * Math.log2(i)).toFixed(2));
      const averageCase = parseFloat((i * Math.log2(i)).toFixed(2));
      const bestCase = parseFloat((i * Math.log2(i)).toFixed(2));

      data.push({
        n: i,
        worstCase,
        averageCase,
        bestCase,
      });
    }
    return data;
  };

  
  // For space complexity
  const generateSpaceComplexity = () => {
    const data = [];
    for (let i = 1; i <= 20; i++) {
      data.push({
        n: i,
        complexity: i,
      });
    }
    return data;
  };

  return (
    <Sorting
        title="Merge Sort"
        description="Merge Sort is a divide-and-conquer sorting algorithm that recursively splits the array into halves, sorts each half, and then merges the sorted halves back together."
        working={[
            "Divide the array into two halves recursively until each subarray has only one element.",
            "Merge the subarrays by comparing elements from both halves and placing them in sorted order.",
            "Repeat the merging process until the entire array is merged and sorted.",
        ]}
        generateTimeComplexity={generateTimeComplexity}
        generateSpaceComplexity={generateSpaceComplexity}
    />
  );
};

export default MergeSort;
