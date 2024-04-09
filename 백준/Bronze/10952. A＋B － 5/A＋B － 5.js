const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(x => x.split(' ').map(Number));
let answer = '';

for (let [a, b] of input) {
    if (a + b === 0) break;
    
    answer += `${a + b}\n`;
}

console.log(answer);