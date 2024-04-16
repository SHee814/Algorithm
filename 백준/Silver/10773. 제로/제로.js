const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const K = input[0];
const stack = [];
let sum = 0;

for (let i = 1; i <= K; i++) {
    if (input[i] > 0) {
        stack.push(input[i]);
        sum += input[i];
    } else {
        sum -= stack.pop();
    }
}

console.log(sum);