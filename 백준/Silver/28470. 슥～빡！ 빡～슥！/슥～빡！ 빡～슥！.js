const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);
const K = input[3].split(' ').map(Number);
let adrenalin = 0;

for (let i = 0; i < N; i++) {
    const [a, b, k] = [A[i], B[i], K[i] * 10];
    const attackFirst = Math.floor(a * k / 10) - b;
    const evadeFirst = a - Math.floor(b * k / 10);
    const changed = Math.max(attackFirst, evadeFirst);
    
    adrenalin += changed;
}

console.log(adrenalin);