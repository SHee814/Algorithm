const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = +input[0];
let answer = '';

for (let i = 1; i <= T; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    
    answer += `${A + B}\n`;
}

console.log(answer);