const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const nums = input[1].split(' ').map(Number);
const min = Math.min(...nums);
const max = Math.max(...nums);
const answer = `${min} ${max}`;

console.log(answer);