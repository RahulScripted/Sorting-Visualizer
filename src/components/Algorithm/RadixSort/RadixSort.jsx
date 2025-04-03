import React from 'react'
import Sorting from '../Sorting/Sorting'

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
    />
  )
}

export default RadixSort