const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(BigInt);
const ps = [];
let sum = 0n;

for (let i = 0; i < N; i++) {
    sum += A[i];
    ps.push(sum);
}

ps.sort((a, b) => Number(b - a));

const answer = String(ps.slice(0, K).reduce((acc, x) => acc + x, 0n));

console.log(answer);