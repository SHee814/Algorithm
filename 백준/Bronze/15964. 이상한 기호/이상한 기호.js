const [A, B] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').map(BigInt);
console.log((A ** 2n - B ** 2n).toString());