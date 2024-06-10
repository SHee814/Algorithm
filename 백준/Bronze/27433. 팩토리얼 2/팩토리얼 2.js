const N = +require('fs').readFileSync(0, 'utf-8').toString().trim();

function factorial(n) {
    if (n === 0) return 1;
    
    return factorial(n - 1) * n;
}

console.log(factorial(N));