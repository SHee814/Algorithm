const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const A = input[1].split(' ').map(Number).sort((a, b) => a - b);
const B = input[2].split(' ').map(Number).sort((a, b) => b - a);
const answer = A.reduce((acc, a, i) => acc + (a * B[i]), 0);

console.log(answer);