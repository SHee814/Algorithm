const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const stack = [];
let answer = '';

for (let i = 1; i <= N; i++) {
    const [action, n] = input[i].split(' ');
    
    if (action === 'push') {
        stack.push(n);
    } else if (action === 'pop') {
        answer += `${stack.pop() || -1}\n`;
    } else if (action === 'size') {
        answer += `${stack.length}\n`;
    } else if (action === 'empty') {
        answer += `${+(stack.length === 0)}\n`;
    } else {
        answer += `${stack[stack.length - 1] || -1}\n`;
    }
}

console.log(answer);