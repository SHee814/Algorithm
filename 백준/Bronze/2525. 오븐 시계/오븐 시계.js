const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [A, B] = input[0].split(' ').map(Number);
const C = +input[1];
let [fA, fB] = [A, B + C];

if (fB > 59) {
    fA += Math.floor(fB / 60);
    fB %= 60;
}

if (fA > 23) fA -= 24;

console.log(fA, fB);