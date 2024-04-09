const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(x => x.split(' ').map(Number));
let answer = '';

for (let [a, b] of input) {
    answer += `${a + b}\n`;
}

console.log(answer);