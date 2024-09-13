const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(' ').map(Number));
let answer = '';

for (let [A, B] of input) {
    if (A + B === 0) break;
    
    const seqA = new Map();
    let dA = A;
    let indexA = 0;
    
    while (dA > 1 && !seqA.has(dA)) {
        seqA.set(dA, indexA);
        indexA++;
        dA = (dA % 2) ? (3 * dA + 1) : (dA / 2);
    }
    
    if (dA === 1) seqA.set(dA, indexA);
    
    const seqB = [B];
    let dB = B;
    
    while (!seqA.has(dB)) {
        dB = (dB % 2) ? (3 * dB + 1) : (dB / 2);
        seqB.push(dB);
    }
    
    const C = seqB[seqB.length - 1];
    const sA = seqA.get(C);
    const sB = seqB.length - 1;
    
    answer += `${A} needs ${sA} steps, ${B} needs ${sB} steps, they meet at ${C}\n`;
}

console.log(answer);