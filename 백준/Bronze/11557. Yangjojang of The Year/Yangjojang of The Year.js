const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const T = +input[0];
let caseIndex = 1;
let answer = '';

while (caseIndex < input.length) {
    const N = +input[caseIndex];
    let maxValue = 0;
    let maxUniv;
    
    for (let i = caseIndex + 1; i <= caseIndex + N; i++) {
        const [univ, value] = input[i].split(' ');
        
        if (+value > maxValue) {
            maxValue = value;
            maxUniv = univ;
        }
    }

    answer += `${maxUniv}\n`;
    caseIndex += N + 1;
}

console.log(answer);