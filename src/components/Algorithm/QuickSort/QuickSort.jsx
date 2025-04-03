import React from 'react'
import Sorting from '../Sorting/Sorting'

const QuickSort = () => {

  // For time complexity
  const generateTimeComplexity = () => {
    const data = [];
    for (let i = 1; i <= 20; i++) {
      const worstCase = parseFloat((i * i).toFixed(2));
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
        complexity: parseFloat((Math.log2(i)).toFixed(2)),
      });
    }
    return data;
  };

  return (
    <Sorting 
        title="Quick Sort"
        description="Quick Sort is a divide-and-conquer sorting algorithm that selects a pivot element and partitions the array such that elements smaller than the pivot move to the left, and elements greater than the pivot move to the right. The process is then recursively applied to the subarrays."
        working={[
            "Choose a pivot element from the array (commonly the last or first element).",
            "Partition the array so that elements smaller than the pivot move to the left, and elements greater move to the right.",
            "Recursively apply the same process to the left and right subarrays.",
            "Continue until the entire array is sorted."
        ]}
        generateTimeComplexity={generateTimeComplexity}
        generateSpaceComplexity={generateSpaceComplexity}
    />
  )
}

export default QuickSort