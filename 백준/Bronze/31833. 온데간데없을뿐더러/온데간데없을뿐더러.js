const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const A = BigInt(input[1].split(' ').join(''));
const B = BigInt(input[2].split(' ').join(''));
console.log((A < B ? A : B).toString());