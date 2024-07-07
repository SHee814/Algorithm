const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const T = +input[0];
let answer = '';

for (let t = 1; t <= T; t++) {
    const result = input[t];
    let acc = 0;
    let score = 0;
    
    for (let i of result) {
        if (i === 'O') {
            score += ++acc;
        } else {
            acc = 0;
        }
    }
    
    answer += `${score}\n`;
}

console.log(answer);