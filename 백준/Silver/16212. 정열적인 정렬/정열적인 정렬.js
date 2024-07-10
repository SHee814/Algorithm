const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const nums = input[1].split(' ').map(Number);
const result = nums.sort((a, b) => a - b);
console.log(result.join(' '));