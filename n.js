function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    // Outer loop runs n-1 times
    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        // Inner loop for pairwise comparison
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        // If no swaps happened, array is already sorted
        if (!swapped) break;
    }

    return arr;
}

// Example usage
let numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(numbers));
