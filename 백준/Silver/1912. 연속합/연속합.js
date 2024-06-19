const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const nums = input[1].split(' ').map(Number);
const acc = [nums[0]];

for (let i = 1; i < N; i++) {
    const n = nums[i];
    acc[i] = Math.max(acc[i - 1] + n, n);
}

console.log(Math.max(...acc));