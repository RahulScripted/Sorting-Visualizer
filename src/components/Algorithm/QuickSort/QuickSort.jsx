import React from 'react'
import Sorting from '../Sorting/Sorting'

const QuickSort = () => {
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
    />
  )
}

export default QuickSort