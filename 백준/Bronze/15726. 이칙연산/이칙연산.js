const fs = require('fs');
const [A, B, C] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
console.log(Math.max(parseInt(A * B / C), parseInt(A / B * C)));