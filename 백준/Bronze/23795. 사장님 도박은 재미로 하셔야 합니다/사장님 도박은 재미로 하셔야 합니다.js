const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
let index = 0;
let answer = 0;

while (input[index] >= 0) {
    answer += input[index++];
}

console.log(answer);