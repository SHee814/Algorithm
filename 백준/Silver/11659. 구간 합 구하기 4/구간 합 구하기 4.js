const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(' ').map(Number));
const [N, M] = input[0];
const nums = input[1];
const acc = new Array(N).fill(0);
let answer = '';

for (let k = 0; k < N; k++) {
    acc[k] = (acc[k - 1] || 0) + nums[k];
}

for (let t = 2; t < 2 + M; t++) {
    const [i, j] = input[t];
    const result = acc[j - 1] - (acc[i - 2] || 0);
    answer += `${result}\n`;
}

console.log(answer);