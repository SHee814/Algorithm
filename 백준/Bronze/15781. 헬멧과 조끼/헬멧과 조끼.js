const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const H = input[1].split(' ').map(Number);
const A = input[2].split(' ').map(Number);
const maxH = Math.max(...H);
const maxA = Math.max(...A);

console.log(maxH + maxA);