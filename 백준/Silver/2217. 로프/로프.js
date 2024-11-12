const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const N = input[0];
const R = input.slice(1).sort((a, b) => a - b);
let maxW = 0;

for (let i = 0; i < N; i++) {
    const r = R[i];
    
    maxW = Math.max(maxW, r * (N - i));
}

console.log(maxW);