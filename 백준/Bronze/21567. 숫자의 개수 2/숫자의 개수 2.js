const [A, B, C] = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(BigInt);
let k = A * B * C;
const count = new Array(10).fill(0);

while (k >= 1) {
    const i = k % 10n;
    
    k = k / 10n;
    count[i]++;
}

console.log(count.join('\n'));

