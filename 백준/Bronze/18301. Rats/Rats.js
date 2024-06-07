const [n1, n2, n12] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const answer = parseInt((((n1 + 1) * (n2 + 1)) / (n12 + 1)) - 1);
console.log(answer);