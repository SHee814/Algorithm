const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ');
const N = +input[0];
const S = input[1];
console.log(S[S.length - 1]);