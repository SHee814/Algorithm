const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const T = +input[0];
const dp = [0, 1, 2, 4];
let answer = '';

for (let t = 1; t <= T; t++) {
    const n = input[t];
    
    answer += `${calculate(n)}\n`;
}

console.log(answer);

function calculate(x) {
    if (dp[x]) return dp[x];
    
    const result = calculate(x - 3) + calculate(x - 2) + calculate(x - 1);
    dp[x] = result;
    
    return dp[x];
}