const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const stack = [];
let answer = '';

for (let i = 1; i <= N; i++) {
    const [action, x] = input[i].split(' ');
    
    if (action === '1') {
        stack.push(x);
    } else if (action === '2') {
        answer += `${stack.length > 0 ? stack.pop() : -1}\n`;
    } else if (action === '3') {
        answer += `${stack.length}\n`;
    } else if (action === '4') {
        answer += `${stack.length === 0 ? 1 : 0}\n`;
    } else if (action === '5') {
        answer += `${stack.length === 0 ? -1 : stack[stack.length - 1]}\n`;
    }
}

console.log(answer);