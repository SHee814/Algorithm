const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [A, B] = input[0].split(' ').map(Number);
const m = +input[1];
const numInA = input[2].split(' ').map(Number);
let num = 0;

for (let i = 0; i < m; i++) {
    const e = m - 1 - i;
    num += (A ** e) * numInA[i];
}

let numInB = [];

while (num >= B) {
    numInB.push(num % B);
    num = Math.floor(num / B);
}

numInB.push(num);
console.log(numInB.reverse().join(' '));