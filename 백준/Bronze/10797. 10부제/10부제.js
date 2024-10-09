const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const M = input[1].split(' ').map(Number);

console.log(M.filter(m => m === N).length);