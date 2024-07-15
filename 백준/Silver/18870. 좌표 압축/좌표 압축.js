const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const coords = input[1].split(' ').map(Number);
const setX = new Set(coords.map(Number));
const arrX = Array.from(setX).sort((a, b) => a - b);
const mapX = new Map(Array.from(arrX, (x, i) => [x, i]));
const result = coords.map(x => mapX.get(x));
console.log(result.join(' '));