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


  const codeSnippets = {
    cpp: `
void merge(int arr[], int l, int m, int r) {
            int n1 = m - l + 1;
            int n2 = r - m;
            int L[n1], R[n2];
            
            for (int i = 0; i < n1; i++){
                  L[i] = arr[l + i];
            }
            
            for (int j = 0; j < n2; j++){
                  R[j] = arr[m + 1 + j];
            }
            
            int i = 0, j = 0, k = l;
            while (i < n1 && j < n2) {
                  if (L[i] <= R[j]) arr[k++] = L[i++];
                  else arr[k++] = R[j++];
            }
            
            while (i < n1) arr[k++] = L[i++];
            while (j < n2) arr[k++] = R[j++];
}  
    
    
void mergeSort(int arr[], int l, int r) {
        if (l < r) {
            int m = l + (r - l) / 2;
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
}
      
    `,
    java: `
      void mergeSort(int[] arr, int l, int r) {
          if (l < r) {
                int m = l + (r - l) / 2;
                mergeSort(arr, l, m);
                mergeSort(arr, m + 1, r);
                merge(arr, l, m, r);
          }
}


void merge(int[] arr, int l, int m, int r) {
            int n1 = m - l + 1;
            int n2 = r - m;
            int[] L = new int[n1];
            int[] R = new int[n2];
            
            for (int i = 0; i < n1; i++){
                  L[i] = arr[l + i];
            }
              
            
            for (int j = 0; j < n2; j++){
                  R[j] = arr[m + 1 + j];
            }
              
            
            
            int i = 0, j = 0, k = l;
            while (i < n1 && j < n2) {
                  if (L[i] <= R[j]) arr[k++] = L[i++];
                  else arr[k++] = R[j++];
            }
            
            
            while (i < n1) arr[k++] = L[i++];
            while (j < n2) arr[k++] = R[j++];
}
    `,
    python: `
      def merge_sort(arr):
          if len(arr) > 1:
              mid = len(arr) // 2
              L = arr[:mid]
              R = arr[mid:]
              merge_sort(L)
              merge_sort(R)


            i = j = k = 0
            while i < len(L) and j < len(R):
                if L[i] < R[j]:
                      arr[k] = L[i]
                      i += 1
                else:
                      arr[k] = R[j]
                      j += 1
                k += 1


            while i < len(L):
                arr[k] = L[i]
                i += 1
                k += 1


            while j < len(R):
              arr[k] = R[j]
              j += 1
              k += 1
    `,
    javascript: `
function mergeSort(arr) {
          if (arr.length <= 1) return arr;
          const mid = Math.floor(arr.length / 2);
          const left = mergeSort(arr.slice(0, mid));
          const right = mergeSort(arr.slice(mid));
          return merge(left, right);
}

function merge(left, right) {
          let result = [], i = 0, j = 0;
          while (i < left.length && j < right.length) {
            if (left[i] < right[j]) result.push(left[i++]);
            else result.push(right[j++]);
          }
          return result.concat(left.slice(i)).concat(right.slice(j));
}
    `,
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
        codeSnippets={codeSnippets}
    />
  );
};

export default MergeSort;
