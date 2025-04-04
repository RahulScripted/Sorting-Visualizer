import React from 'react'
import Sorting from '../Sorting/Sorting'


const radixSort = async (arr, setBars, setComparing) => {
  const getMax = (arr) => Math.max(...arr);

  const countingSort = async (arr, exp) => {
    let output = new Array(arr.length).fill(0);
    let count = new Array(10).fill(0);

    for (let i = 0; i < arr.length; i++) {
      count[Math.floor(arr[i] / exp) % 10]++;
    }

    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
      let index = Math.floor(arr[i] / exp) % 10;
      output[count[index] - 1] = arr[i];
      count[index]--;
    }

    for (let i = 0; i < arr.length; i++) {
      arr[i] = output[i];
      setBars([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  };

  let max = getMax(arr);
  let sortedArray = [...arr];

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    setComparing([exp]);
    await countingSort(sortedArray, exp);
  }

  setComparing([]);
  return sortedArray;
};


const RadixSort = () => {

  // For space complexity
  const generateTimeComplexity = () => {
    const data = [];
    for (let i = 1; i <= 20; i++) {
      const base = 10;
      const digits = Math.ceil(Math.log10(i + 1));
      const worstCase = parseFloat((digits * (i + base)).toFixed(2)); 
      const averageCase = parseFloat((digits * (i + base)).toFixed(2));
      const bestCase = parseFloat((digits * (i + base)).toFixed(2));

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
      const base = 10;
      data.push({
        n: i,
        complexity: parseFloat((i + base).toFixed(2)),
      });
    }
    return data;
  };

  return (
    <Sorting 
        title="Radix Sort"
        description="Radix Sort is a non-comparative sorting algorithm that sorts numbers digit by digit, starting from the least significant digit to the most significant digit, using a stable sub-sorting algorithm like Counting Sort."
        working={[
            "Find the maximum number in the array to determine the number of digits.",
            "Sort the array digit by digit, starting from the least significant digit.",
            "Use a stable sorting algorithm (like Counting Sort) to sort based on the current digit.",
            "Move to the next more significant digit and repeat the sorting process.",
            "Continue until all digits have been processed, resulting in a sorted array."
        ]}
        generateTimeComplexity={generateTimeComplexity}
        generateSpaceComplexity={generateSpaceComplexity}
        sortingAlgorithm={radixSort}
    />
  )
}

export default RadixSort