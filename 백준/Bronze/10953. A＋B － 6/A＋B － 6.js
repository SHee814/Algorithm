const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const T = +input[0];
let answer = '';

for (let i = 1; i <= T; i++) {
    const [a, b] = input[i].split(',').map(Number);
    
    answer += a + b + '\n';
 }

console.log(answer);