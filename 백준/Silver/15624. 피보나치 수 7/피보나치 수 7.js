const N = +require('fs').readFileSync(0, 'utf-8');
const MOD = 1000000007;
const dp = new Array(N + 1);

for (let i = 0; i <= N; i++) {
    if (i < 2) {
        dp[i] = i;
        continue;
    }
    
    dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
}

console.log(dp[N]);