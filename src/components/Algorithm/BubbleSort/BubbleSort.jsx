import React from 'react'
import Sorting from '../Sorting/Sorting'

const BubbleSort = () => {
  return (
    <Sorting 
        title="Bubble Sort"
        description="Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process continues until the list is sorted."
        working={[
            "Start from the first element and compare it with the next element.",
            "If the first element is greater than the second, swap them.",
            "Move to the next adjacent pair and repeat the process.",
            "Continue comparing and swapping for the entire array. The largest element will bubble to its correct position at the end.",
            "Ignore the last sorted element and repeat for the remaining unsorted part.",
            "Repeat the process until no swaps are needed, meaning the array is sorted."
        ]}
    />
  )
}

export default BubbleSort