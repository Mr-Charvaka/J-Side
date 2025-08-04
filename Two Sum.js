function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return []; // if no solution found
}

// Default test case
const nums = [2, 7, 11, 15];
const target = 9;

// Call and print result
const result = twoSum(nums, target);
console.log("Output:", result); // Expected: [0, 1]
