const [N, M] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
console.log(parseInt(Math.min(N, M) / 2));