const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const result = input[1].split(' ').map(Number);
let acc = 1;
let score = 0;

for (let x of result) {
    if (x === 0) {
        acc = 1;
        continue;
    }
    
    score += acc++;
}

console.log(score);