import React from 'react'
import Sorting from '../Sorting/Sorting'


const selectionSort = async (arr, setBars, setComparing) => {
  let sortedArray = [...arr];

  for (let i = 0; i < sortedArray.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < sortedArray.length; j++) {
      setComparing([i, j]);
      await new Promise((resolve) => setTimeout(resolve, 300));

      if (sortedArray[j] < sortedArray[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [sortedArray[i], sortedArray[minIndex]] = [sortedArray[minIndex], sortedArray[i]];
      setBars([...sortedArray]);
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  }

  setComparing([]);
  return sortedArray;
};

const SelectionSort = () => {

  // For time complexity
  const generateTimeComplexity = () => {
    const data = [];
    for (let i = 1; i <= 20; i++) {
      data.push({
        n: i,
        worstCase: i * i, 
        averageCase: i * i,
        bestCase: i * i,
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

  const codeSnippets = {
    cpp: `
void selectionSort(int arr[], int n) {
      for (int i = 0; i < n - 1; i++) {
            int minIdx = i;
            for (int j = i + 1; j < n; j++) {
                  if (arr[j] < arr[minIdx]) minIdx = j;
            }
            swap(arr[i], arr[minIdx]);
      }
}
    `,
    java: `
void selectionSort(int[] arr) {
      int n = arr.length;
      for (int i = 0; i < n - 1; i++) {
            int minIdx = i;
            for (int j = i + 1; j < n; j++) {
                  if (arr[j] < arr[minIdx]) minIdx = j;
            }

            int temp = arr[minIdx];
            arr[minIdx] = arr[i];
            arr[i] = temp;
      }
}
    `,
    python: `
def selection_sort(arr):
      for i in range(len(arr)):
          min_idx = i
          for j in range(i + 1, len(arr)):
              if arr[j] < arr[min_idx]:
                  min_idx = j
          arr[i], arr[min_idx] = arr[min_idx], arr[i]
    `,
    javascript: `
function selectionSort(arr) {
      for (let i = 0; i < arr.length - 1; i++) {
            let minIdx = i;
            for (let j = i + 1; j < arr.length; j++) {
                  if (arr[j] < arr[minIdx]) minIdx = j;
            }
          [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      }
      return arr;
}
    `,
  };

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
        generateTimeComplexity={generateTimeComplexity}
        generateSpaceComplexity={generateSpaceComplexity}
        sortingAlgorithm={selectionSort}
        codeSnippets={codeSnippets}
    />
  )
}

export default SelectionSort