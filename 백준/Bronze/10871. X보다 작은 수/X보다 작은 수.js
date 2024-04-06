const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, X] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const answer = A.filter(e => e < X).join(' ');

console.log(answer);