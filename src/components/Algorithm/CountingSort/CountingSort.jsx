import React from "react";
import Sorting from "../Sorting/Sorting";

const countingSort = async (arr, setBars, setComparing) => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let range = max - min + 1;
  let count = Array(range).fill(0);
  let output = Array(arr.length).fill(0);

  // Count occurrences
  for (let num of arr) {
    count[num - min]++;
  }

  // Cumulative sum
  for (let i = 1; i < range; i++) {
    count[i] += count[i - 1];
  }

  // Build sorted output
  for (let i = arr.length - 1; i >= 0; i--) {
    let num = arr[i];
    output[count[num - min] - 1] = num;
    count[num - min]--;
    setBars([...output]);
    await new Promise((resolve) => setTimeout(resolve, 300));
  }

  setComparing([]);
  return output;
};

const CountingSort = () => {
  // For time complexity
  const generateTimeComplexity = () => {
    const data = [];
    for (let i = 1; i <= 20; i++) {
      data.push({
        n: i,
        worstCase: i + 10,
        averageCase: i + 10,
        bestCase: i + 10,
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
        complexity: i + 10,
      });
    }
    return data;
  };

  const codeSnippets = {
    cpp: `
void countingSort(int arr[], int n) {
        int max = *max_element(arr, arr + n);
        int min = *min_element(arr, arr + n);
        int range = max - min + 1;
        vector<int> count(range, 0), output(n);

        for (int i = 0; i < n; i++){
              count[arr[i] - min]++;
        }

        for (int i = 1; i < range; i++){
              count[i] += count[i - 1];
        }

        for (int i = n - 1; i >= 0; i--) {
              output[count[arr[i] - min] - 1] = arr[i];
              count[arr[i] - min]--;
        }

        for (int i = 0; i < n; i++){
              arr[i] = output[i];
        }
}`,
    java: `
void countingSort(int[] arr) {
        int max = Arrays.stream(arr).max().getAsInt();
        int min = Arrays.stream(arr).min().getAsInt();
        int range = max - min + 1;
        int[] count = new int[range];
        int[] output = new int[arr.length];

        for (int i : arr){
              count[i - min]++;
        }

        for (int i = 1; i < range; i++){
              count[i] += count[i - 1];
        }

        for (int i = arr.length - 1; i >= 0; i--) {
              output[count[arr[i] - min] - 1] = arr[i];
              count[arr[i] - min]--;
        }

        System.arraycopy(output, 0, arr, 0, arr.length);
}`,
    python: `
def counting_sort(arr):
        max_val = max(arr)
        min_val = min(arr)
        range_of_elements = max_val - min_val + 1

        count = [0] * range_of_elements
        output = [0] * len(arr)

        for num in arr:
            count[num - min_val] += 1

        for i in range(1, len(count)):
            count[i] += count[i - 1]

        for num in reversed(arr):
            output[count[num - min_val] - 1] = num
            count[num - min_val] -= 1

        return output
  `,
    javascript: 
    `
function countingSort(arr) {
        let max = Math.max(...arr);
        let min = Math.min(...arr);
        let range = max - min + 1;
        let count = Array(range).fill(0);
        let output = Array(arr.length).fill(0);

        for (let num of arr) {
              count[num - min]++;
        }

        for (let i = 1; i < range; i++) {
              count[i] += count[i - 1];
        }

        for (let i = arr.length - 1; i >= 0; i--) {
              let num = arr[i];
              output[count[num - min] - 1] = num;
              count[num - min]--;
        }

        return output;
    }`,
  };

  return (
    <Sorting
      title="Counting Sort"
      description="Counting Sort is a non-comparative sorting algorithm that sorts an array by counting the occurrences of each unique element and placing them in the correct order."
      working={[
        "Find the maximum value in the array to determine the range of the count array.",
        "Create a count array to store the frequency of each element.",
        "Modify the count array by adding the previous count to store positions.",
        "Build the output array by placing elements in their correct positions.",
        "Copy the sorted elements back to the original array.",
      ]}
      generateTimeComplexity={generateTimeComplexity}
      generateSpaceComplexity={generateSpaceComplexity}
      sortingAlgorithm={countingSort}
      codeSnippets={codeSnippets}
    />
  );
};

export default CountingSort;
