/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    const binary = num.toString(2);

    return binary.length + binary.split('').reduce((acc, x) => acc + +x, 0) - 1;
};