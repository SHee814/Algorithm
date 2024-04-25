const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const n = +input[0];
const nums = input[1].split(' ').map(Number).sort((a, b) => a - b);
const target = +input[2];
let left = 0;
let right = n - 1;
let count = 0;

while (left < right) {
    const sum = nums[left] + nums[right];
    
    if (sum < target) {
        left++;
    } else if (sum > target) {
        right--;
    } else {
        left++;
        count++;
    }
}

console.log(count);