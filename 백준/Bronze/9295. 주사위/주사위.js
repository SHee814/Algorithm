const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
let answer = '';

for (let i = 1; i <= N; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    
    answer += `Case ${i}: ${a + b}\n`;
}

console.log(answer);