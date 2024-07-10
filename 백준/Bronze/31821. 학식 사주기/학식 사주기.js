const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const N = input[0];
const menu = input.slice(1, N + 1);
const M = input[N + 1];
let cost = 0;

for (let i = N + 2; i < N + 2 + M; i++) {
    cost += menu[input[i] - 1];
}

console.log(cost);