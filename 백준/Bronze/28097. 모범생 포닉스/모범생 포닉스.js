const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const T = input[1].split(' ').map(Number);
const result = T.reduce((acc, t) => acc + t, 0) + ((N - 1) * 8);
console.log(`${parseInt(result / 24)} ${result % 24}`);