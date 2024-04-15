const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const M = +input[2];
const cards = input[1].split(' ').map(Number);
const cases = input[3].split(' ').map(Number);
const countMap = new Map();

for (let card of cards) {
    if (countMap.has(card)) {
        countMap.set(card, countMap.get(card) + 1);
    } else {
        countMap.set(card, 1);
    }
}

let answer = [];

for (let c of cases) {
    answer.push(countMap.has(c) ? countMap.get(c) : 0);
}

console.log(answer.join(' '));