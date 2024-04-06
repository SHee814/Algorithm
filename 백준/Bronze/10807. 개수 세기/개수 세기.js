const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const nums = input[1].split(' ');
const v = input[2];
let count = 0;
const answer = nums.reduce((acc, e) => e === v ? acc + 1 : acc, 0);

console.log(answer);