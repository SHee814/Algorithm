const fs = require('fs');
const [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const answer = A / B;

console.log(answer);