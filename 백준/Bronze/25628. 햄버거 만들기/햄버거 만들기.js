const [A, B] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const x = Math.floor(A / 2);
console.log(Math.min(x, B));