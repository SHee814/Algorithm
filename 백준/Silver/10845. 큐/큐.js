const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const queue = [];
let answer = '';

for (let i = 1; i <= N; i++) {
    const [action, n] = input[i].split(' ');
    
    if (action === 'push') {
        queue.push(n);
    } else if (action === 'pop') {
        answer += `${queue.shift() || -1}\n`;
    } else if (action === 'size') {
        answer += `${queue.length}\n`;
    } else if (action === 'empty') {
        answer += `${+(queue.length === 0)}\n`;
    } else if (action === 'front') {
        answer += `${queue[0] || -1}\n`;
    } else if (action === 'back') {
        answer += `${queue[queue.length - 1] || -1}\n`;
    }
}

console.log(answer);