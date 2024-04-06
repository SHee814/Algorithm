const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
const scores = input[1].split(' ').map(Number);
const max = Math.max(...scores);
const results = scores.map(x => x / max * 100);
const avg = results.reduce((acc, x) => acc + x, 0) / N;

console.log(avg);