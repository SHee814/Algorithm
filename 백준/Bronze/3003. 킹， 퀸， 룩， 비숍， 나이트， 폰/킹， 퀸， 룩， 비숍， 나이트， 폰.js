const fs = require('fs');
const pieces = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const standard = [1, 1, 2, 2, 2, 8];
const diff = Array.from(Array(6), (_, i) => standard[i] - pieces[i]);

console.log(diff.join(' '));