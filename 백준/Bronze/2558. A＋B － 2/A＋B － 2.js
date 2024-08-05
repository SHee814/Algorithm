const [A, B] = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
console.log(A + B);