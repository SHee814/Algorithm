const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const bus = input[1].split(' ').map(Number);
const fee = input.slice(2).map(r => r.split(' ').map(Number));
let cost = 0;

for (let i = 1; i < M; i++) {
    cost += fee[bus[i - 1] - 1][bus[i] - 1];
}

console.log(cost);