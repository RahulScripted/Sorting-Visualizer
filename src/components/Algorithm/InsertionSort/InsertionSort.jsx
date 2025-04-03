import React from 'react'
import Sorting from '../Sorting/Sorting'

const InsertionSort = () => {

  // For time complexity
  const generateTimeComplexity = () => {
    const data = [];
    for (let i = 1; i <= 20; i++) {
      data.push({
        n: i,
        worstCase: i * i,
        averageCase: i * i,
        bestCase: i,
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
        title="Insertion Sort"
        description="Insertion Sort is a simple sorting algorithm that builds the sorted array one element at a time by picking the next element and inserting it into its correct position relative to the already sorted portion."
        working={[
            "Start with the second element (assuming the first element is already sorted).",
            "Compare the current element with the elements before it.",
            "Shift elements that are greater than the current element one position ahead.",
            "Insert the current element at its correct position.",
            "Repeat the process for all elements until the array is sorted."
        ]}
        generateTimeComplexity = {generateTimeComplexity}
        generateSpaceComplexity = {generateSpaceComplexity}
    />
  )
}

export default InsertionSort