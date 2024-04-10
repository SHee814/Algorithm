const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
let answer = '';

for (let c = 0; c < 15; c++) {
    for (let r = 0; r < 5; r++) {
        const val = input[r][c];
        
        if (val === ' ' || val === undefined) continue;
        
        answer += val;
    }
}

console.log(answer);