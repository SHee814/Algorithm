const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const nums = input.slice(1).sort((a, b) => {
    if (a.length !== b.length) {
        return a.length - b.length;
    } else {
        let sumA = 0;
        let sumB = 0;
        
        for (let sa of a) {
            sumA += isNaN(+sa) ? 0 : +sa;
        }
        
        for (let sb of b) {
            sumB += isNaN(+sb) ? 0 : +sb;
        }
        
        if (sumA !== sumB) {
            return sumA - sumB;
        }
    }
    
    if (a <= b) {
        return -1;
    } else {
        return 1;
    }
});

console.log(nums.join('\n'));