import React from 'react'
import Sorting from '../Sorting/Sorting'


const insertionSort = async (arr, setBars, setComparing) => {
  let sortedArray = [...arr];

  for (let i = 1; i < sortedArray.length; i++) {
    let key = sortedArray[i];
    let j = i - 1;

    while (j >= 0 && sortedArray[j] > key) {
      setComparing([j, j + 1]);
      sortedArray[j + 1] = sortedArray[j];
      setBars([...sortedArray]);
      await new Promise(resolve => setTimeout(resolve, 300));
      j--;
    }

    sortedArray[j + 1] = key;
    setBars([...sortedArray]);
    await new Promise(resolve => setTimeout(resolve, 300));
  }

  setComparing([]);
  return sortedArray;
};


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
        sortingAlgorithm={insertionSort}
    />
  )
}

export default InsertionSort