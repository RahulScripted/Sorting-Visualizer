import React from 'react'
import Sorting from '../Sorting/Sorting'

const CountingSort = () => {
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
    />
  )
}

export default CountingSort