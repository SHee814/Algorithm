const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(' ').map(Number));
const countA = new Map();
const countB = new Map();

for (let a of input[1]) {
    countA.set(a, countA.has(a) ? countA.get(a) + 1 : 1);
}

for (let b of input[2]) {
    countB.set(b, countB.has(b) ? countB.get(b) + 1 : 1);
}

let answer = 0;

for (let [a, i] of countA) {
    answer += i;
}

for (let [b, i] of countB) {
    if (countA.has(b)) {
        answer -= countA.get(b);
        answer += Math.max(countA.get(b), i) - Math.min(countA.get(b), i);
    } else {
        answer += i;
    }
}

console.log(answer);