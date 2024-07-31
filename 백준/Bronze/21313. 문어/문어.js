const N = +require('fs').readFileSync(0, 'utf-8');
const sequence = new Array(N);

for (let i = 0; i < N; i++) {
    sequence[i] = (i % 2) ? 2 : 1;
}

if (sequence[0] === sequence[N - 1]) {
    sequence[N - 1] = 3;
}

console.log(sequence.join(' '));