const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const spliter_str = input[1].split(' ');
const M = +input[2];
const spliter_num = input[3].split(' ');
const K = +input[4];
const merger = input[5].split(' ');
const S = +input[6];
const string = input[7];
const spliter = new Set();

for (let n of spliter_str) {
    spliter.add(n);
}

for (let m of spliter_num) {
    spliter.add(m);
}

for (let k of merger) {
    spliter.delete(k);
}

const result = [];
let word = '';

for (let i = 0; i < S; i++) {
    const s = string[i];
    
    if (s === ' ' || spliter.has(s)) {
        if (word.length === 0) continue;
        
        result.push(word);
        word = '';
        continue;
    }
    
    word += s;
}

if (word.length > 0) {
    result.push(word);
}

console.log(result.join('\n'));