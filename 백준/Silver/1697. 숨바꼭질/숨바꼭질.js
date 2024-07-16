const fs = require('fs');
const [N, K] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const MAX = 100000;
const dp = new Array(MAX + 1).fill(-1);

dp[N] = 0;

if (K <= N) {
    console.log(N - K);
    process.exit();
}

const queue = [N];

while (queue.length > 0) {
    const cx = queue.shift();
    const nx_list = [cx - 1, cx + 1, cx * 2];
    
    for (let nx of nx_list) {
        if (nx >= 0 && nx <= MAX && dp[nx] < 0) {
            dp[nx] = dp[cx] + 1;
            queue.push(nx);
        }
    }
    
    if (dp[K] !== -1) break;
}

console.log(dp[K]);