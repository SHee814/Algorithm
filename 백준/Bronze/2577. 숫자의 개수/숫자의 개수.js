const fs = require('fs');
const [A, B, C] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const M = (A * B * C).toString();
const count = new Array(10).fill(0);

for (let m of M) {
    count[+m]++;    
}

console.log(count.join('\n'));