const N = require('fs').readFileSync(0, 'utf-8');
const dp = [[1n, 0n]];

for (let i = 1; i <= N; i++) {
    dp.push([dp[i - 1][1], dp[i - 1][0] + dp[i - 1][1]]);
}

console.log(String(dp[N - 1][0] + dp[N - 1][1]));