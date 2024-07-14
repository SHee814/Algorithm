const N = +require('fs').readFileSync(0, 'utf-8').toString();
const dp = [];
const MOD = 10007;

for (let i = 0; i <= N; i++) {
    if (i <= 2) {
        dp.push(i);
    } else {
        dp.push((dp[i - 2] + dp[i - 1]) % MOD);
    }
}

console.log(dp[N] % MOD);