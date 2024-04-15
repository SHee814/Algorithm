const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const M = +input[2];
const cards = input[1].split(' ').map(Number);
const nums = input[3].split(' ').map(Number);
const cardSet = new Set(cards);
const answer = [];

for (let n of nums) {
    answer.push(cardSet.has(n) ? 1 : 0);
}

console.log(answer.join(' '));