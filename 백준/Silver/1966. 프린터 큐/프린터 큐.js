const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const T = +input[0];
let answer = '';

for (let t = 1; t <= T; t++) {
    const [N, M] = input[t * 2 - 1].split(' ').map(Number);
    const docs = input[t * 2].split(' ').map(Number);
    const docs_sorted = docs.slice().sort((a, b) => a - b);
    let priority_max = docs_sorted.pop();
    let target = M;
    let count = 0;
    
    while (target >= 0 && docs.length > 0) {
        if (docs[0] < priority_max) {
            docs.push(docs.shift());
            target = (target === 0) ? docs.length - 1 : target - 1;
        } else {
            docs.shift();
            count++;
            target--;
            priority_max = docs_sorted.pop();
        }
    }

    answer += `${count}\n`;
}

console.log(answer);