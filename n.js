function mergeSort(arr) {
    // Base case: single element is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Find the middle index
    const mid = Math.floor(arr.length / 2);

    // Split array into left and right halves
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort both halves and then merge
    return merge(mergeSort(left), mergeSort(right));
}

// Helper function to merge two sorted arrays
function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    // Compare elements from both arrays and push smaller one
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements (if any)
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage
let numbers = [38, 27, 43, 3, 9, 82, 10];
console.log("Sorted array:", mergeSort(numbers));
