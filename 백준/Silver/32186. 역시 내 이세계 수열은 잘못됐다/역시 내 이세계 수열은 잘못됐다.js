const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const op = new Array(Math.floor(N / 2));

for (let i = 0; i < N/2; i++) {
    const max = Math.max(A[N - i - 1], A[i]);
    const min = Math.min(A[N - i - 1], A[i]);
    const diff = max - min;
    const D = Math.floor(diff / K);
    
    op[i] = Math.min(
        D + (diff % K),
        (D + 1) + ((D + 1) * K - diff)
    );
}

const answer = op.reduce((acc, x) => acc + x, 0);

console.log(answer);