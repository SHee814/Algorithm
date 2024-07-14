const N = +require('fs').readFileSync(0, 'utf-8').toString();
const dp = [0, 1, 3];
const MOD = 10007

for (let i = 3; i <= N; i++) {
    dp.push((dp[i - 2] * 2 + dp[i - 1]) % MOD);
}

console.log(dp[N] % MOD);