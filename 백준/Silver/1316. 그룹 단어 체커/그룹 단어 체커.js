const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
let answer = 0;

for (let n = 1; n <= N; n++) {
    const word = input[n];
    let isGroupWord = true;
    
    for (let i = 0; i < word.length - 2; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if (word[i] !== word[j]) continue;
            if (j === i + 1) break;
            
            isGroupWord = false;
            break;
        }
        
        if (!isGroupWord) break;
    }
    
    if (isGroupWord) answer++;
}

console.log(answer);