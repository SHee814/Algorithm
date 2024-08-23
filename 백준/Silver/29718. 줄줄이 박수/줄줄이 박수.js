const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(r => r.split(' ').map(Number));
const [N, M] = input[0];
const seats = input.slice(1, N + 1);
const A = [input[N + 1]];
const claps = [];

for (let c = 0; c < M; c++) {
    let sum = 0;
    
    for (let r = 0; r < N; r++) {
        sum += seats[r][c];
    }
    
    claps.push(sum);
}

let head = 0;
let tail = 0;
let sum = 0;
let max = 0;

while (tail < M) {
    if (tail - head + 1 > A) {
        sum -= claps[head++]
    };
    
    sum += claps[tail++];
    max = Math.max(max, sum);
}

console.log(max);