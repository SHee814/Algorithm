const N = +require('fs').readFileSync('/dev/stdin');
let answer = '';

for (let i = 1; i <= N; i++) {
    answer += `${' '.repeat(N - i)}${'*'.repeat(2 * i - 1)}\n`;
}

for (let i = 1; i <= N - 1; i++) {
    answer += `${' '.repeat(i)}${'*'.repeat(2 * (N - i) - 1)}\n`;
}

console.log(answer);