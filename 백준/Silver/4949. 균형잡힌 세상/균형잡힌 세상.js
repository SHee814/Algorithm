const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
let idx = 0;
let answer = '';

while (input[idx] !== '.') {
    const str = input[idx];
    const stack = [];
    let flag = 'yes';
    
    for (let s of str) {
        if (s === '(' || s === '[') {
            stack.push(s);
        } else if (s === ')') {
            if (stack.pop() !== '(') {
                flag = 'no';
                break;
            }
        } else if (s === ']') {
            if (stack.pop() !== '[') {
                flag = 'no';
                break;
            }
        }
    }
    
    if (stack.length > 0) flag = 'no';
    
    answer += flag + '\n';
    idx++;
}

console.log(answer);