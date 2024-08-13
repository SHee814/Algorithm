const S = require('fs').readFileSync(0, 'utf-8').toString();
let continuous = '';
let index = 0;
let answer = 0;

while (index < S.length) {
    do {
        continuous += S[index];
        index++;
    } while (index < S.length && +S[index] === +S[index - 1] + 1)
    
    if (continuous.length === 3) answer++;
    if (index < S.length) continuous = '';
}

console.log(answer);