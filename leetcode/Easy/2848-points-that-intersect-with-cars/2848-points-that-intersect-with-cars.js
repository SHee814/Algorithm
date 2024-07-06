/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
    let check = new Set();

    for (let [s, e] of nums) {
        for (let i = s; i <= e; i++) {
            if (!check.has(i)) {
                check.add(i);
            }
        }
    }

    return check.size;
};