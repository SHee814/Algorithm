const N = +require('fs').readFileSync(0, 'utf-8');
let answer = '';

for (let i = 0; i < N; i++) {
    answer += `${'@'.repeat(N)}${' '.repeat(3 * N)}${'@'.repeat(N)}\n`;
}

for (let i = 0; i < N; i++) {
    answer += `${'@'.repeat(N)}${' '.repeat(2 * N)}${'@'.repeat(N)}\n`;
}

for (let i = 0; i < N; i++) {
    answer += `${'@'.repeat(3 * N)}\n`;
}

for (let i = 0; i < N; i++) {
    answer += `${'@'.repeat(N)}${' '.repeat(2 * N)}${'@'.repeat(N)}\n`;
}

for (let i = 0; i < N; i++) {
    answer += `${'@'.repeat(N)}${' '.repeat(3 * N)}${'@'.repeat(N)}\n`;
}

console.log(answer);