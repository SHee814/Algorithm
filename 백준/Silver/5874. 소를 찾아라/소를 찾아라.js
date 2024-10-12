const S = require('fs').readFileSync(0, 'utf-8').toString().trim();
let X = [];
let Y = [];

for (let i = 0; i < S.length - 1; i++) {
    if (S[i] === '(' && S[i + 1] === '(') {
        X.push(i);
    }
    
    if (S[i] === ')' && S[i + 1] === ')') {
        Y.push(i);
    }
}

let answer = 0;

for (let x of X) {
    for (let y of Y) {
        if (x < y) answer++;
    }
}

console.log(answer);