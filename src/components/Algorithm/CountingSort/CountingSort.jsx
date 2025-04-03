import React from 'react'
import Sorting from '../Sorting/Sorting'

const countingSort = async (arr, setBars, setComparing) => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let range = max - min + 1;
  let count = Array(range).fill(0);
  let output = Array(arr.length).fill(0);

  // Count occurrences
  for (let num of arr) {
    count[num - min]++;
  }

  // Cumulative sum
  for (let i = 1; i < range; i++) {
    count[i] += count[i - 1];
  }

  // Build sorted output
  for (let i = arr.length - 1; i >= 0; i--) {
    let num = arr[i];
    output[count[num - min] - 1] = num;
    count[num - min]--;
    setBars([...output]);
    await new Promise(resolve => setTimeout(resolve, 300));
  }

  setComparing([]);
  return output;
};

const CountingSort = () => {

  // For time complexity
  const generateTimeComplexity = () => {
    const data = [];
    for (let i = 1; i <= 20; i++) {
      data.push({
        n: i,
        worstCase: i + 10,
        averageCase: i + 10,
        bestCase: i + 10,
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
        complexity: i + 10, 
      });
    }
    return data;
  };

  return (
    <Sorting 
        title="Counting Sort"
        description="Counting Sort is a non-comparative sorting algorithm that sorts an array by counting the occurrences of each unique element and placing them in the correct order."
        working={[
            "Find the maximum value in the array to determine the range of the count array.",
            "Create a count array to store the frequency of each element.",
            "Modify the count array by adding the previous count to store positions.",
            "Build the output array by placing elements in their correct positions.",
            "Copy the sorted elements back to the original array."
        ]}
        generateTimeComplexity = {generateTimeComplexity}
        generateSpaceComplexity = {generateSpaceComplexity}
        sortingAlgorithm={countingSort}
    />
  )
}

export default CountingSort