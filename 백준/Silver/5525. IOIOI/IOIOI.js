const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const M = +input[1];
const S = input[2];
let count = 0;
let length = 0;
let index = 0;

while (index < M - 2) {
    if (S[index] === 'I' && S[index + 1] === 'O' && S[index + 2] === 'I') {
        length++;
        index += 2;
    } else {
        length = 0;
        index++;
    }
    
    if (length >= N) {
        count++;
    }
}

console.log(count);