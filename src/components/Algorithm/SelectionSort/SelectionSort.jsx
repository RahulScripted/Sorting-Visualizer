import React from 'react'
import Sorting from '../Sorting/Sorting'

const SelectionSort = () => {
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
    />
  )
}

export default SelectionSort