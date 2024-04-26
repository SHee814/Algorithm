const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(' ').map(Number));
let answer = '';

for (let [a, b] of input) {
    if (a + b === 0) break;
    
    if (a % b === 0) {
        answer += `multiple\n`;
    } else if (b % a === 0) {
        answer += `factor\n`;
    } else {
        answer += `neither\n`;
    }
}

console.log(answer);