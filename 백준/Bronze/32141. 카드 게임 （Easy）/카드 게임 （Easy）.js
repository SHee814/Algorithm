const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, H] = input[0].split(' ').map(Number);
const cards = input[1].split(' ').map(Number).sort((a, b) => a - b);
let index = 0;
let sum = 0;

while (index < N && sum < H) {
    sum += cards[index++];
}

console.log((sum < H) ? -1 : index);