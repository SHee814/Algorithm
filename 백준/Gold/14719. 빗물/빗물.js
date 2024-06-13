const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(row => row.split(' ').map(Number));
const [H, W] = input[0];
const heights = input[1];
const blocks = Array.from(new Array(H), () => []);

for (let h = 0; h < H; h++) {
    for (let w = 0; w < W; w++) {
        if (h < heights[w]) blocks[h].push(w);
    }
}

let sum = 0;

for (let h = 0; h < H; h++) {
    const row = blocks[h];
    for (let i = 0; i < row.length - 1; i++) {
        sum += row[i + 1] - row[i] - 1;
    }
}

console.log(sum);