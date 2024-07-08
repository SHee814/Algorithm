const [M, N] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const isPrimeNumber = new Array(N + 1).fill(1);
let answer = '';

for (let i = 2; i <= N; i++) {
    if (isPrimeNumber[i] === 0) continue;
    
    for (let j = 2; i * j <= N; j++) {
        isPrimeNumber[i * j] = 0;
    }
    
    if (i >= M) answer += `${i}\n`;
}
console.log(answer);