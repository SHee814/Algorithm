const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

input.shift();

const deck = [];
let answer = '';

for (let command of input) {
    const [key, value] = command.split(' ');
    const isEmpty = deck.length === 0;
    
    if (key === 'push_front') {
        deck.unshift(value);
    } else if (key === 'push_back') {
        deck.push(value);
    } else if (key === 'pop_front') {
        answer += (isEmpty ? -1 : deck.shift()) + '\n';
    } else if (key === 'pop_back') {
        answer += (isEmpty ? -1 : deck.pop()) + '\n';
    } else if (key === 'size') {
        answer += deck.length + '\n';
    } else if (key === 'empty') {
        answer += Number(isEmpty) + '\n';
    } else if (key === 'front') {
        answer += (isEmpty ? -1 : deck[0]) + '\n';
    } else if (key === 'back') {
        answer += (isEmpty ? -1 : deck[deck.length - 1]) + '\n';
    }
}

console.log(answer);