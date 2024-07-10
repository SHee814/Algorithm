const target = require('fs').readFileSync(0, 'utf-8').toString().trim();
let word = '';
let count = 0;

for (let t of target) {
    if (word.length === 0) {
        word += t;
        count++;
        continue;
    }
    
    if (word[word.length - 1].charCodeAt() >= t.charCodeAt()) count++;
    
    word += t;
}

console.log(count);