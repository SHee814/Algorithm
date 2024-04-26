const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const cases = input[1].split(' ').map(Number);
const max = Math.max(...cases);
const primes = Array.from(Array(max), (_, i) => i + 1);

primes[0] = 0;

for (let pn of primes) {
    if (pn < 1) continue;
    
    let i = 2;
    
    while (pn * i <= max) {
        primes[pn * i - 1] = 0;
        i++;
    }
}

const answer = cases.reduce((acc, x) => acc + (primes[x - 1] > 0 ? 1 : 0), 0);

console.log(answer);