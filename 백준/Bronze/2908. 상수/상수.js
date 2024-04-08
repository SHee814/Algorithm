const fs = require('fs');
const [A, B] = fs.readFileSync('dev/stdin').toString().trim().split(' ');
const [rA, rB] = [A, B].map(x => x.split('').reverse().join('')).map(Number);
const answer = Math.max(rA, rB);

console.log(answer);