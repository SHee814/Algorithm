/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const results = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        results.push(results[i - 1] + nums[i]);
    }

    return results;
};