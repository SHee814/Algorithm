const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const pattern = input.slice(1, N + 1).map(x => x.split(' ')).map(([a, b]) => [b, a]);
const str = input[N + 1];
const [S, E] = input[N + 2].split(' ').map(Number);
const compressMap = new Map(pattern);
let compressed = '';

for (let i of str) {
    compressed += compressMap.get(i);
}

console.log(compressed.slice(S - 1, E));