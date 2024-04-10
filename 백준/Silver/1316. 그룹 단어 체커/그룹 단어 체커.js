const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
let answer = 0;

for (let i = 1; i <= N; i++) {
    const word = input[i];
    const reversed = word.split('').reverse().join('');
    const charSet = Array.from(new Set(word));
    let isGroupWord = true;
    
    for (let char of charSet) {
        const startIdx = word.indexOf(char);
        const endIdx = word.length - 1 - reversed.indexOf(char);
        const count = word.match(new RegExp(char, 'g')).length;
        
        if (count > 1 && startIdx + count <= endIdx) {
            isGroupWord = false;
            break;
        }
    }
    
    if (isGroupWord) answer++;
}

console.log(answer);