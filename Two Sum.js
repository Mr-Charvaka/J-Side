const twoSum = function(nums, target) {
    const numMap = {}; 
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in numMap) { // Or numMap.has(complement) for a Map
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }
};