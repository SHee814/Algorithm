const fs = require('fs');
const [A, B] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const countA = new Map();
const countB = new Map();
let remove = 0;

for (let i of A) {
    if (countA.has(i)) {
        countA.set(i, countA.get(i) + 1);
    } else {
        countA.set(i, 1);
    }
}

for (let j of B) {
    if (countA.has(j)) {
        countA.set(j, countA.get(j) - 1);
    } else {
        remove++;
    }
}

for (let [_, val] of countA) {
    remove += Math.abs(val);
}

console.log(remove);