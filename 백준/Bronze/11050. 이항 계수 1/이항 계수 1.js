const fs = require('fs');
const [N, K] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const dp = Array.from(new Array(N + 1), (_, i) => new Array(i));

for (let r = 0; r <= N; r++) {
    for (let c = 0; c <= r; c++) {
        if (c === 0 || c === r) {
            dp[r][c] = 1;
        } else {
            dp[r][c] = (dp[r - 1][c - 1] || 0) + dp[r - 1][c];
        }
    }
}

console.log(dp[N][K]);