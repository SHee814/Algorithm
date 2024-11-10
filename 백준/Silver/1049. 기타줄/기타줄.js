const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const brands = input.slice(1).map(row => row.split(' ').map(Number));
let minX = Infinity;
let minY = Infinity;

for (let [x, y] of brands) {
    minX = Math.min(x, minX);
    minY = Math.min(y, minY);
}

const A = Math.floor(N / 6) * minX + (N % 6) * minY;
const B = Math.floor((N + 6) / 6) * minX;
const C = N * minY;
console.log(Math.min(A, B, C));