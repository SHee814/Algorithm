const N = +require('fs').readFileSync(0, 'utf-8').toString();
let count = [0, 0];

function fib(n) {
    if (n === 1 || n === 2) {
        count[0]++;
        return 1;
    } 
    
    return fib(n - 1) + fib(n - 2);
}

const f = [0];

function fibonacci(n) {
    f[1] = 1;
    f[2] = 2;
    
    for (let i = 3; i <= n; i++) {
        f[i] = f[i - 1] + f[ - 2];
        count[1]++;
    }
    
    return f[n];
}

fib(N);
fibonacci(N);
console.log(count.join(' '));