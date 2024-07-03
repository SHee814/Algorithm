const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
let min = Infinity;
let sum = 0;

for (let n of input) {
    if (n % 2) {
        sum += n;
        min = Math.min(min, n);
    }
}

console.log(sum === 0 ? -1 : `${sum}\n${min}`);