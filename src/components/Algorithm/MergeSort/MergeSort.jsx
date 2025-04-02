import React from "react";
import Sorting from "../Sorting/Sorting";

const MergeSort = () => {
  return (
    <Sorting
        title="Merge Sort"
        description="Merge Sort is a divide-and-conquer sorting algorithm that recursively splits the array into halves, sorts each half, and then merges the sorted halves back together."
        working={[
            "Divide the array into two halves recursively until each subarray has only one element.",
            "Merge the subarrays by comparing elements from both halves and placing them in sorted order.",
            "Repeat the merging process until the entire array is merged and sorted.",
        ]}
    />
  );
};

export default MergeSort;
