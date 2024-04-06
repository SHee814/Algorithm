/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const result = nums.findIndex(e => e === target);

    return result;
};