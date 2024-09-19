const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const A = input[1].split(' ').map(BigInt).reverse();

function sum(a, p, q) {
    return [q, a * q + p];
}

const [P, Q] = A.reduce(([p, q], a) => sum(a, p, q), [0n, 1n]);

function euclide(p, q) {
    if (p % q === 0n) return q;
    
    return euclide(q, p % q);
}

const gcd = euclide(Q - P, Q);

console.log(`${Q - P / gcd} ${Q / gcd}`);