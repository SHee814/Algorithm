const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const A = input[1].split(' ').map(BigInt);

function GCD(a, b) {
    if (a % b === 0n) {
        return b;
    }
    
    return GCD(b, a % b);
}

const p = A.reduce((acc, x) => acc * x, 1n);
const q = A.map(x => p / x).reduce((acc, x) => acc + x, 0n);
const gcd = GCD(p, q);

console.log(`${String(p / gcd)}/${String(q / gcd)}`);