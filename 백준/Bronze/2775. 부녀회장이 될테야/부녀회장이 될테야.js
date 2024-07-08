const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(Number);
const T = input[0];
const dp = Array.from(new Array(15), () => new Array(15));
let answer = '';

for (let t = 1; t <= T; t++) {
    const k = input[t * 2 - 1];
    const n = input[t * 2];
    
    answer += `${howManyResident(k, n)}\n`;
}

console.log(answer);

function howManyResident(k, n) {
    if (k === 0) return n;
    if (n === 1) return 1;
    if (dp[k][n]) return dp[k][n];
    
    const resident = howManyResident(k, n - 1) + howManyResident(k - 1, n);
    dp[k][n] = resident;
    
    return resident;
}