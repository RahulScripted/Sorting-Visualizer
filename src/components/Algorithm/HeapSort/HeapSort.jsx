import React from 'react'
import Sorting from '../Sorting/Sorting'

const HeapSort = () => {

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
        complexity: 1,
      });
    }
    return data;
  };

  return (
    <Sorting 
        title="Heap Sort"
        description="Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure to build a max heap and repeatedly extract the largest element to sort the array."
        working={[
            "Build a max heap from the input array.",
            "Extract the largest element (root of the heap) and place it at the end of the array.",
            "Reduce the heap size and heapify the root to maintain the heap property.",
            "Repeat the process until all elements are sorted."
        ]}
        generateTimeComplexity = {generateTimeComplexity}
        generateSpaceComplexity = {generateSpaceComplexity}
    />
  )
}

export default HeapSort