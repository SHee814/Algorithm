const N = +require('fs').readFileSync(0, 'utf-8').toString().trim();
const memo = new Array(N + 1);

function fibonacci(n) {
    if (n < 2) return n;
    if (!memo[n]) memo[n] = fibonacci(n - 2) + fibonacci(n - 1);
    
    return memo[n];
}

console.log(fibonacci(N));