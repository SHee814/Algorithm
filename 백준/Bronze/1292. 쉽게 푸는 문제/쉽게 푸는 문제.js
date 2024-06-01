const [A, B] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const sequence = [];
let num = 1;
let count = num;

while (sequence.length < B) {
    sequence.push(num);
    count--;
    
    if (count === 0) {
        num++;
        count = num;
    }
}

const answer = sequence.slice(A - 1, B).reduce((acc, x) => acc + x, 0);

console.log(answer);