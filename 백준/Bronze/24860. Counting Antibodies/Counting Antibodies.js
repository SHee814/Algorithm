const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const reduced = input.map(row => row.split(' ').map(Number).reduce((acc, x) => acc * x));
const answer = (reduced[0] + reduced[1]) * reduced[2];
console.log(answer);