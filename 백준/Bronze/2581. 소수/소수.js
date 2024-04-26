const [M, N] = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const primes = Array.from(Array(N), (_, i) => i + 1);

primes[0] = 0;

for (let pn of primes) {
    if (pn < 1) continue;
    
    let i = 2;
    
    while (pn * i <= N) {
        primes[pn * i - 1] = 0;
        i++;
    }
}

let min;
let sum = 0;

for (let i = M; i <= N; i++) {
    const n = primes[i - 1];
    
    if (!min) min = n;
    
    sum += n;
}

console.log(sum > 0 ? `${sum}\n${min}` : -1);