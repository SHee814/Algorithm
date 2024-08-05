const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const N = input[0];
const array = input.slice(1);
console.log(array.sort((a, b) => a - b).join('\n'));