const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const coords = input.slice(1).map(r => r.split(' ').map(Number));
let top = coords[0][1];
let bottom = coords[0][1];
let left = coords[0][0];
let right = coords[0][0];

for (let [x, y] of coords) {
    top = Math.max(top, y);
    bottom = Math.min(bottom, y);
    left = Math.min(left, x);
    right = Math.max(right, x);
}

console.log((top - bottom) * (right - left));