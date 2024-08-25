const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(t => t.split(' ').map(Number));
let answer = '';

function list(n) {
    let num = n;
    let result = 0;
    
    while (num > 0) {
        result += (num % 10) ** 2;
        num = Math.floor(num / 10);
    }
    
    return result;
}

for (let [A, B] of input) {
    if (A + B === 0) break;
    
    let result = Infinity;
    
    const seqA = new Map();
    const seqB = new Map();
    let a = A;
    let b = B;
    
    while (!seqA.has(a)) {
        seqA.set(a, seqA.size + 1);
        a = list(a);
    }
    
    while (!seqB.has(b)) {
        seqB.set(b, seqB.size + 1);
        b = list(b);
    }
    
    for (let [x, i] of seqA) {
        if (!seqB.has(x)) continue;
        
        const length = seqB.get(x) + i;
        result = Math.min(length, result);
    }
    
    answer += `${A} ${B} ${result === Infinity ? 0 : result}\n`;
}

console.log(answer);