const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(row => row.split(' ').map(Number));
const [n, b] = input[0];
let P = 0;
let Q = 0;

function euclide(p, q) {
    return (p % q === 0) ? q : euclide(q, p % q);
}

for (let i = 1; i <= n; i++) {
    Q += input[i][0];
    P += input[i][1] - b;
}

if (Q === 0) {
    console.log('EZPZ');
    process.exit();
}

const sign = P * Q >= 0;
const p = Math.abs(P);
const q = Math.abs(Q);
const gcd = euclide(p, q);
const a = (q / gcd === 1) ? `${(p / q)}` : `${p / gcd}/${q / gcd}`;

console.log(sign ? a : '-' + a);