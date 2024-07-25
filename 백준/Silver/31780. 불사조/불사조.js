const [X, M] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
console.log(X * (M + 1));