const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);
const N = +input[1];
let w = Math.sqrt(Math.abs((c - d) / a)) + b;
let answer = 0;

for (let n = 2; n < N + 2; n++) {
    const [u, v] = input[n].split(' ').map(Number);
    
    if (c < u) {
        continue;
    }
    
    if (u === d && v === w) {
        answer++;
        continue;
    }
    
    const x = Math.sqrt(Math.abs((c - u) / a)) + b;
    
    if (x === v) answer++;
}

console.log(answer);