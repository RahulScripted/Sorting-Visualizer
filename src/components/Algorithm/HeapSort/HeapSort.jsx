import React from 'react'
import Sorting from '../Sorting/Sorting'

const HeapSort = () => {
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
    />
  )
}

export default HeapSort