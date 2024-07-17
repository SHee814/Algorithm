const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const T = +input[0];
let answer = '';

for (let t = 1; t <= T; t++) {
    const n = +input[t * 2 - 1];
    const parking = input[t * 2].split(' ').map(Number).sort((a, b) => a - b);
    
    answer += `${(parking[n - 1] - parking[0]) * 2}\n`;
}

console.log(answer);