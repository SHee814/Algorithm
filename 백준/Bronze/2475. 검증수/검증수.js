const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const result = input.reduce((acc, x) => acc + (x ** 2), 0);
console.log(result % 10);