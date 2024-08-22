const [A, P, C] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
console.log(Math.max(A + C, P));