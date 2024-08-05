const N = +require('fs').readFileSync(0, 'utf-8');
let answer = '';

for (let i = N; i >= 1; i--) {
    answer += i + '\n';
}

console.log(answer);