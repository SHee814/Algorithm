const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const T = +input[0];
let answer = '';

for (let t = 1; t <= T; t++) {
    const [n, k] = input[t].split(' ').map(Number);
    
    answer += `${Math.ceil(n / k)}\n`;
}

console.log(answer);