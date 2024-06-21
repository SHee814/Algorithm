const fs = require('fs');
const [A, B, C] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(BigInt);
const memo = new Map();

console.log(power(B).toString());

function power(x) {
    if (x === 1n) return A % C;
    
    const half = x / 2n;
    let nx;
    
    if (memo.has(half)) {
        nx = memo.get(half);
    } else {
        nx = power(half);
        memo.set(half, nx);
    }
    
    if (x % 2n) {
        return (nx * nx * (A % C)) % C;
    } else {
        return (nx * nx) % C;
    }
}