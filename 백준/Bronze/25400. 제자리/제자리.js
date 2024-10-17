const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const A = input[1].split(' ').map(Number);
let remove = 0;
let target = 1;
let index = 0;

while (index < N) {
    if (A[index] === target) {
        target++;
    } else {
        remove++;
    }
    
    index++;
}

console.log(remove);