const n = +require('fs').readFileSync(0, 'utf-8');
let count = 0;

for (let i = 1; i < n; i++) count += i;

console.log(`${count}\n2`);