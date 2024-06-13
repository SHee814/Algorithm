const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(line => line.split(' ').map(Number));
let passengers = 0;
let max = 0;

for (let [o, i] of input) {
    passengers -= o;
    passengers += i;
    max = Math.max(max, passengers);
}

console.log(max);