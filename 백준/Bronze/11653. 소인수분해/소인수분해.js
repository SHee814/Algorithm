const N = +require('fs').readFileSync(0, 'utf-8').toString().trim();
const primes = Array.from(Array(N + 1), (_, i) => i);

primes[0] = 0;
primes[1] = 0;

for (let p of primes) {
    if (p < 2) continue;
    
    let i = 2;
    
    while (p * i <= N) {
        primes[p * i] = 0;
        i++;
    }
}

let factors = '';
let n = N;
let i = 2;

while (n > 1) {
    if (primes[i] < 1 || n % i > 0) {
        i++;
        continue;
    }
    
    n /= i;
    factors += `${i}\n`;
}

console.log(factors);