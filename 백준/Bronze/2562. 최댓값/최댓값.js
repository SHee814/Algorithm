const fs = require('fs');
const nums = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const max = Math.max(...nums);
const index = nums.findIndex(e => e === max) + 1;
const answer = `${max}\n${index}`;

console.log(answer);