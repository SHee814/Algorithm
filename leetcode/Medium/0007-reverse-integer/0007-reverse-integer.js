/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    
    let result = Math.abs(x).toString().split('').reverse().join('');
    
    result *= x >= 0 ? 1 : -1;

    if (result > 2 ** 31 - 1 || result < -(2 ** 31)) return 0;

    return result;
};