const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const X = +input[0];
const N = +input[1];
const total = input.slice(2)
    .map(x => x.split(' ').map(Number))
    .reduce((acc, [a, b]) => a * b + acc, 0);

console.log(X === total ? 'Yes' : 'No');