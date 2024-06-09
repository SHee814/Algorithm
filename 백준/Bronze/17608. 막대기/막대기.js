const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const N = +input[0];
const bars = input.slice(1);
let max = 0;
let cnt = 0;

for (let i = N - 1; i >= 0; i--) {
    if (bars[i] > max) {
        max = bars[i];
        cnt++;
    }
}

console.log(cnt);