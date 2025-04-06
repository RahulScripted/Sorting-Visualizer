import React from 'react'
import Sorting from '../Sorting/Sorting'

const quickSort = async (arr, setBars, setComparing) => {
  const quickSortHelper = async (arr, low, high) => {
    if (low < high) {
      let pivotIndex = await partition(arr, low, high);
      await quickSortHelper(arr, low, pivotIndex - 1);
      await quickSortHelper(arr, pivotIndex + 1, high);
    }
  };

  const partition = async (arr, low, high) => {
    let pivot = arr[high]; // Choosing the last element as pivot
    let i = low - 1;

    for (let j = low; j < high; j++) {
      setComparing([j, high]); // Highlight comparison
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        setBars([...arr]);
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Move pivot to the correct position
    setBars([...arr]);
    await new Promise(resolve => setTimeout(resolve, 300));

    return i + 1;
  };

  let sortedArray = [...arr];
  await quickSortHelper(sortedArray, 0, sortedArray.length - 1);
  setComparing([]);
  return sortedArray;
};

const QuickSort = () => {

  // For time complexity
  const generateTimeComplexity = () => {
    const data = [];
    for (let i = 1; i <= 20; i++) {
      const worstCase = parseFloat((i * i).toFixed(2));
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
        complexity: parseFloat((Math.log2(i)).toFixed(2)),
      });
    }
    return data;
  };

  const codeSnippets = {
    cpp: `
int partition(int arr[], int low, int high) {
        int pivot = arr[high];
        int i = (low - 1);
        for (int j = low; j <= high - 1; j++) {
              if (arr[j] < pivot) {
                    i++;
                    std::swap(arr[i], arr[j]);
              }
        }
        swap(arr[i + 1], arr[high]);
        return (i + 1);
}


void quickSort(int arr[], int low, int high) {
        if (low < high) {
              int pi = partition(arr, low, high);
              quickSort(arr, low, pi - 1);
              quickSort(arr, pi + 1, high);
        }
}
    `,
    java: `
int partition(int arr[], int low, int high) {
        int pivot = arr[high];
        int i = (low - 1);
        for (int j = low; j < high; j++) {
              if (arr[j] < pivot) {
                    i++;
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
              }
        }
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
}

void quickSort(int arr[], int low, int high) {
      if (low < high) {
          int pi = partition(arr, low, high);
          quickSort(arr, low, pi - 1);
          quickSort(arr, pi + 1, high);
      }
}
    `,
    python: `
def quick_sort(arr):
        if len(arr) <= 1:
          return arr
        
        pivot = arr[-1]
        left = [x for x in arr[:-1] if x < pivot]
        right = [x for x in arr[:-1] if x >= pivot]
        return quick_sort(left) + [pivot] + quick_sort(right)
    `,
    javascript: `
function quickSort(arr) {
        if (arr.length <= 1) return arr;
        let pivot = arr[arr.length - 1];
        let left = [];
        let right = [];

        for (let i = 0; i < arr.length - 1; i++) {
              if (arr[i] < pivot) left.push(arr[i]);
              else right.push(arr[i]);
        }
        return [...quickSort(left), pivot, ...quickSort(right)];
}
    `,
  };

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
        generateTimeComplexity={generateTimeComplexity}
        generateSpaceComplexity={generateSpaceComplexity}
        sortingAlgorithm={quickSort}
        codeSnippets={codeSnippets}
    />
  )
}

export default QuickSort