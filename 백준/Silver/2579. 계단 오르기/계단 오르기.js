const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const N = input[0];
const stairs = input.slice(1);
const memo = Array.from(new Array(N), () => [0, 0]);

for (let n = 0; n < N; n++) {
    const continuous = (memo[n - 1] !== undefined ? memo[n - 1][1] : 0) + stairs[n];
    const discontinuous = (memo[n - 2] !== undefined ? Math.max(...memo[n - 2]) : 0) + stairs[n];
    memo[n] = [continuous, discontinuous];
}

console.log(Math.max(...memo[N - 1]));