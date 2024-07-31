const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
let answer = '';
let index = 0;

while (index < input.length - 1) {
    const code = input[index++];
    let decode = '';
    
    for (let i = 0; i < code.length; i++) {
        decode += code[code.length - 1 - i];
    }
    
    answer += `${decode}\n`;
}

console.log(answer);