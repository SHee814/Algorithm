const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const T = input[0];
let answer = '';

for (let t = 1; t <= T; t++) {
    const N = input[t];
    
    answer += `${(N === 1) ? 0 : '1' + '2'.repeat(N - 2) + '1'}\n`;
}

console.log(answer);