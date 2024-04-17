const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const queue = [];
let start = 0;
let answer = '';

for (let i = 1; i <= N; i++) {
    const [action, x] = input[i].split(' ');
    const qLength = queue.length - start;
    
    if (action === 'push') {
        queue.push(x);
    } else if (action === 'pop') {
        answer += `${qLength > 0 ? queue[start++] : -1}\n`;
    } else if (action === 'size') {
        answer += `${qLength}\n`;
    } else if (action === 'empty') {
        answer += `${qLength > 0 ? 0 : 1}\n`;   
    } else if (action === 'front') {
        answer += `${qLength > 0 ? queue[start] : -1}\n`;   
    } else if (action === 'back') {
        answer += `${qLength > 0 ? queue[queue.length - 1] : -1}\n`;   
    }
}

console.log(answer);