const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const T = input[0];
const max = Math.max(...input.slice(1));
const P = [0, 1, 1, 1, 2];
let answer = '';

for (let i = 5; i <= max; i++) {
    P.push(P[i - 3] + P[i - 4] + P[i - 5]);
}

for (let t = 1; t <= T; t++) {
    const n = input[t];
    
    answer += `${P[n]}\n`;
}

console.log(answer);