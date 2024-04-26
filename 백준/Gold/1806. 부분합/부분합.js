const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(' ').map(Number));
const [N, S] = input[0];
const nums = input[1];
let head = 0;
let sum = 0;
let len = Infinity;

for (let tail = 0; tail < N; tail++) {
    sum += nums[tail];
    
    while (sum >= S) {
        len = Math.min(len, tail - head + 1);
        sum -= nums[head++];
    }
}

console.log(len === Infinity ? 0 : len);