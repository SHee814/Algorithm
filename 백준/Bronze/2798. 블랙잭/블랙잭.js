const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const cards = input[1].split(' ').map(Number);
let sum = 0;

for (let i = 0; i < cards.length - 2; i++) {
    for (let j = i + 1; j < cards.length - 1; j++) {
        for (let k = j + 1; k < cards.length; k++) {
            if (cards[i] + cards[j] + cards[k] > M) continue;
            if ((cards[i] + cards[j] + cards[k]) > sum) {
                sum = cards[i] + cards[j] + cards[k];
            }
        }
    }
}

console.log(sum);