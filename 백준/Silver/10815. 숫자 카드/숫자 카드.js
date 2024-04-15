const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const M = +input[2];
const cards = input[1].split(' ').map(Number);
const nums = input[3].split(' ').map(Number);
const cardMap = new Map();
const answer = [];

for (let card of cards) {
    if (cardMap.has(card)) continue;
    
    cardMap.set(card, 1);
}

for (let n of nums) {
    answer.push(cardMap.has(n) ? 1 : 0);
}

console.log(answer.join(' '));