const fs = require('fs');
const nums = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = nums.map(x => x % 42);
const answer = (new Set(result)).size;

console.log(answer);