import React from "react";
import Sorting from "../Sorting/Sorting";

const mergeSort = async (arr, setBars, setComparing) => {
  const mergeSortHelper = async (arr, left, right) => {
    if (left < right) {
      const mid = Math.floor((left + right) / 2);

      await mergeSortHelper(arr, left, mid);
      await mergeSortHelper(arr, mid + 1, right);
      await merge(arr, left, mid, right);
    }
  };

  const merge = async (arr, left, mid, right) => {
    let leftArray = arr.slice(left, mid + 1);
    let rightArray = arr.slice(mid + 1, right + 1);

    let i = 0, j = 0, k = left;

    while (i < leftArray.length && j < rightArray.length) {
      setComparing([k]); // Highlight comparison

      if (leftArray[i] <= rightArray[j]) {
        arr[k] = leftArray[i];
        i++;
      } else {
        arr[k] = rightArray[j];
        j++;
      }

      setBars([...arr]);
      await new Promise(resolve => setTimeout(resolve, 300));
      k++;
    }

    while (i < leftArray.length) {
      setComparing([k]);
      arr[k] = leftArray[i];
      setBars([...arr]);
      await new Promise(resolve => setTimeout(resolve, 300));
      i++;
      k++;
    }

    while (j < rightArray.length) {
      setComparing([k]);
      arr[k] = rightArray[j];
      setBars([...arr]);
      await new Promise(resolve => setTimeout(resolve, 300));
      j++;
      k++;
    }
  };

  let sortedArray = [...arr];
  await mergeSortHelper(sortedArray, 0, sortedArray.length - 1);
  setComparing([]);
  return sortedArray;
};

const MergeSort = () => {

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
        complexity: i,
      });
    }
    return data;
  };

  return (
    <Sorting
        title="Merge Sort"
        description="Merge Sort is a divide-and-conquer sorting algorithm that recursively splits the array into halves, sorts each half, and then merges the sorted halves back together."
        working={[
            "Divide the array into two halves recursively until each subarray has only one element.",
            "Merge the subarrays by comparing elements from both halves and placing them in sorted order.",
            "Repeat the merging process until the entire array is merged and sorted.",
        ]}
        generateTimeComplexity={generateTimeComplexity}
        generateSpaceComplexity={generateSpaceComplexity}
        sortingAlgorithm={mergeSort}
    />
  );
};

export default MergeSort;
