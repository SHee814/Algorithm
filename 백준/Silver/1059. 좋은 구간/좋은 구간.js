const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const L = +input[0];
const S = input[1].split(' ').map(Number).sort((a, b) => a - b);
const n = +input[2];
let min = 0;
let max = S[0];

for (let i = 0; i < L - 1; i++) {
    if (S[i] <= n && n <= S[i + 1]) {
        min = S[i];
        max = S[i + 1];
    }
}

const result = (n - min) * (max - n);

console.log(result > 0 ? result - 1 : 0);