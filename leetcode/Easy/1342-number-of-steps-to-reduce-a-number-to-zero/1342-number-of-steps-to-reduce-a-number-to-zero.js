/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let n = num;
    let count = 0;

    while (n > 0) {
        if (n % 2 > 0) {
            n--;
        } else {
            n /= 2;
        }

        count++;
    }

    return count;
};