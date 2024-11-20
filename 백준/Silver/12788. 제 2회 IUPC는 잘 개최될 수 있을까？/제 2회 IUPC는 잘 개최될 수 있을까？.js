const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const [M, K] = input[1].split(' ').map(Number);
const A = input[2].split(' ').map(Number).sort((a, b) => b - a);
let index = 0;
let pen = 0;

while (pen < M * K) {
    pen += A[index++];
    
    if (index === N) break;
}

console.log(pen < M * K ? "STRESS" : index);