const N = +require('fs').readFileSync(0, 'utf-8');
let answer = '';

for (let i = 1; i <= N; i++) {
    if (i === 1) {
        answer += ' '.repeat(N - 1) + `*\n`;
        continue;
    }
    
    if (i === N) {
        answer += '*'.repeat(2 * N - 1) + `\n`; 
        continue;
    }
    
    answer += ' '.repeat(N - i) + '*' + ' '.repeat(2 * i - 3) + `*\n`;
}

console.log(answer);