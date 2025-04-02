import React from 'react'
import Sorting from '../Sorting/Sorting'

const RadixSort = () => {
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
    />
  )
}

export default RadixSort