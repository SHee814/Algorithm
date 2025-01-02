const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const scores = input.slice(1).map(Number).sort((a, b) => a - b);
const sA = scores.slice(K, N - K);
const sB = scores.slice();

sB.splice(0, K, ...Array(K).fill(scores[K]));
sB.splice(N - K, K, ...Array(K).fill(scores[N - K - 1]));

function round(x) {
    return (Math.round(x * 100) / 100).toFixed(2);
}

console.log(round(sA.reduce((acc, x) => acc + x, 0) / (N - K - K)));
console.log(round(sB.reduce((acc, x) => acc + x, 0) / N));