const N = +require('fs').readFileSync(0, 'utf-8').toString();
const memo = [1, 1];

for (let n = 2; n <= N; n++) {
    memo.push(memo[n - 2] % 15746 + memo[n - 1] % 15746);
}

console.log(memo[N] % 15746);