import React from "react";
import Sorting from "../Sorting/Sorting";

const bubbleSort = async (arr, setBars, setComparing) => {
  let n = arr.length;
  let sortedArray = [...arr];

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      setComparing([j, j + 1]);

      if (sortedArray[j] > sortedArray[j + 1]) {
        [sortedArray[j], sortedArray[j + 1]] = [
          sortedArray[j + 1],
          sortedArray[j],
        ];
        setBars([...sortedArray]);
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
    }
  }

  setComparing([]);
  return sortedArray;
};

const BubbleSort = () => {
  // For time complexity
  const generateTimeComplexity = () => {
    const data = [];
    for (let i = 1; i <= 20; i++) {
      data.push({
        n: i,
        worstCase: i * i,
        averageCase: i * i,
        bestCase: i,
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
    cpp: 
    `
void bubbleSort(int arr[], int n) {
      for (int i = 0; i < n-1; i++){
            for (int j = 0; j < n-i-1; j++){
                  if (arr[j] > arr[j+1]) swap(arr[j], arr[j+1]);
            }
      }
}
    `,
    java: `
void bubbleSort(int arr[]) {
      int n = arr.length;
      for (int i = 0; i < n-1; i++){
            for (int j = 0; j < n-i-1; j++){
                  if (arr[j] > arr[j+1]) {
                        int temp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp;
                  }
            }
      }
}`,
    python: `
    def bubble_sort(arr):
        n = len(arr)
        for i in range(n):
              for j in range(0, n-i-1):
                    if arr[j] > arr[j+1]:
                        arr[j], arr[j+1] = arr[j+1], arr[j]
    `,
    javascript: `
function bubbleSort(arr) {
      for (let i = 0; i < arr.length - 1; i++) {
              for (let j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    }
              }
      }
      return arr;
}`,
  };

  return (
    <Sorting
      title="Bubble Sort"
      description="Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process continues until the list is sorted."
      working={[
        "Start from the first element and compare it with the next element.",
        "If the first element is greater than the second, swap them.",
        "Move to the next adjacent pair and repeat the process.",
        "Continue comparing and swapping for the entire array.",
        "The largest element will bubble to its correct position at the end.",
        "Ignore the last sorted element and repeat for the remaining part.",
        "Repeat the process until no swaps are needed, meaning the array is sorted.",
      ]}
      generateTimeComplexity={generateTimeComplexity}
      generateSpaceComplexity={generateSpaceComplexity}
      sortingAlgorithm={bubbleSort}
      codeSnippets={codeSnippets}
    />
  );
};

export default BubbleSort;
