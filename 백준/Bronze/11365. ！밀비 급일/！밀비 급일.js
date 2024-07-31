const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
let answer = '';
let index = 0;

while (index < input.length - 1) {
    answer += `${input[index++].split('').reverse().join('')}\n`;
}

console.log(answer);