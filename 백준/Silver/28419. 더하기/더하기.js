const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const A = input[1].split(' ').map(Number);

if (N === 3 && A[0] + A[2] > A[1]) {
    console.log(-1);
    process.exit();
}

let sum_odd = 0;
let sum_even = 0;

for (let i = 0; i < N; i++) {
    if (i % 2) {
        sum_odd += A[i];
    } else {
        sum_even += A[i];
    }
}

console.log(Math.max(sum_odd, sum_even) - Math.min(sum_odd, sum_even));