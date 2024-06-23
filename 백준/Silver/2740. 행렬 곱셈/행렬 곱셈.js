const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(row => row.split(' ').map(Number));
const [N, M] = input[0];
const K = input[N + 1][1];
const A = input.slice(1, N + 1);
const B = input.slice(N + 2);
const C = Array.from(new Array(N), () => new Array(K).fill(0));

for (let n = 0; n < N; n++) {
    for (let k = 0; k < K; k++) {
        for (let m = 0; m < M; m++) {
            C[n][k] += A[n][m] * B[m][k];
        }
    }
}

console.log(C.map(row => row.join(' ')).join('\n'));