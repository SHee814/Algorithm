const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const N = input[0];
const dp = [];
const dp_max = [];
let max = 0;

for (let i = 0; i < N; i++) {
    const x = input[i + 1];
    const continous = dp[i - 1] ? dp[i - 1][1] + x : x;
    const discontinous = dp[i - 2] ? dp_max[i - 2] + x : x;
    
    max = Math.max(continous, discontinous, max);
    dp_max.push(max);
    dp.push([continous, discontinous]);
}

console.log(max);