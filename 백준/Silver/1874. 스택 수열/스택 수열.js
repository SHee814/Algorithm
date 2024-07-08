const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const N = +input[0];
const sequence = input.slice(1);
const stack = []
let index_sequence = 0;
let answer = '';

for (let i = 1; i <= N; i++) {
    stack.push(i);
    answer += `+\n`;
    
    while (stack.length > 0 && stack[stack.length - 1] === sequence[index_sequence]) {
        stack.pop();
        answer += `-\n`;
        index_sequence++;
    }
}

console.log((index_sequence === N) ? answer : 'NO');