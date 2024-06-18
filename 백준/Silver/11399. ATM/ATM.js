const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const P = input[1].split(' ').map(Number).sort((a, b) => a - b);
let acc = 0;
let sum = 0;

for (let p of P) {
    sum += acc + p;
    acc += p;
}

console.log(sum);