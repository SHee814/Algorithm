const N = +require('fs').readFileSync('/dev/stdin');
let answer = '';

for (let i = 1; i <= N; i++) {
    answer += `${` `.repeat(N - i) + '*'.repeat(i)}\n`;
}

console.log(answer);