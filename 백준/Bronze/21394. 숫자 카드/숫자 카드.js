const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const T = +input[0];
let answer = '';

for (let t = 1; t <= T; t++) {
    const X = input[t].split(' ').map(Number);
    const cards = [];
    
    X[8] += X[5];
    X[5] = 0;
    
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < X[i]; j++) {
            cards.push(i + 1);
        }
    }
    
    cards.sort((a, b) => a - b);
    
    const sequence = new Array(cards.length);
    let left = 0;
    let right = sequence.length - 1;
    
    while (left <= right) {
        sequence[left++] = cards.pop();
        
        if (cards.length > 0) sequence[right--] = cards.pop();
    }
    
    answer += `${sequence.join(' ')}\n`;
}

console.log(answer);