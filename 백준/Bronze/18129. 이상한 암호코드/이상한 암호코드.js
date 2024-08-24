const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ');
const S = input[0].toUpperCase();
const K = +input[1];
const set = new Set();
let count = 1;
let char = S[0];
let index = 1;
let answer = '';

while (index < S.length) {
    while (S[index] === char) {
        index++;

        if (!set.has(char)) count++;
    }
    
    if (count > 0) answer += Number(count >= K);
    
    set.add(char);
    char = S[index];
    count = 0;
}

console.log(answer);