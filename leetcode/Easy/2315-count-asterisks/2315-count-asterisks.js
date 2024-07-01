/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let isGrouped = false;
    let count = 0;

    for (let i of s) {
        if (i === '|') isGrouped = !isGrouped;
        if (!isGrouped && i === '*') count++;
    }

    return count;
};