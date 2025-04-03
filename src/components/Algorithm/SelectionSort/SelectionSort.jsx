import React from 'react'
import Sorting from '../Sorting/Sorting'

const SelectionSort = () => {

  // For time complexity
  const generateTimeComplexity = () => {
    const data = [];
    for (let i = 1; i <= 20; i++) {
      data.push({
        n: i,
        worstCase: i * i, 
        averageCase: i * i,
        bestCase: i * i,
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
        complexity: 1,
      });
    }
    return data;
  };

  return (
    <Sorting 
        title="Selection Sort"
        description="Selection Sort is a simple sorting algorithm that divides the array into a sorted and an unsorted region. It repeatedly selects the smallest element from the unsorted portion and swaps it with the first unsorted element."
        working={[
            "Find the smallest element in the unsorted portion of the array.",
            "Swap it with the first element of the unsorted portion.",
            "Move the boundary of the sorted portion one step to the right.",
            "Repeat the process for the remaining unsorted portion.",
            "Continue until the entire array is sorted."
        ]}
        generateTimeComplexity={generateTimeComplexity}
        generateSpaceComplexity={generateSpaceComplexity}
    />
  )
}

export default SelectionSort