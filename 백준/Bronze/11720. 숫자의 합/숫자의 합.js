const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
const nums = input[1].split('').map(Number);
const answer = nums.reduce((acc, x) => acc + x);

console.log(answer);