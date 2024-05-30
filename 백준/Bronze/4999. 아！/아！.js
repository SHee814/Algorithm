const [A, B] = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
console.log(A.length >= B.length ? 'go' : 'no');