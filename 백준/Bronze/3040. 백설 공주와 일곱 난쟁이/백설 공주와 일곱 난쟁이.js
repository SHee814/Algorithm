const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const N = input.length;
const total = input.reduce((acc, x) => acc + x, 0);
const diff = total - 100;
let answer = '';

for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
        if (input[i] + input[j] === diff) {
            for (let k = 0; k < N; k++) {
                if (k === i || k === j) continue;
                
                answer += `${input[k]}\n`;
            }
            
            console.log(answer);
            process.exit();
        }
    }
}