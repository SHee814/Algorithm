const fs = require('fs');
const [A, B, V] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);

console.log(Math.ceil((V - A) / (A - B)) + 1);