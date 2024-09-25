const fs = require('fs');
const input = fs
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(x => x.split(' ').map(Number));
const [N, M] = input[0];
const A = input[1];
const B = input[2];
const answer = A.reduce((acc, a) => acc + a, 0) + B.reduce((acc, b) => acc + b, 0);

console.log(answer);