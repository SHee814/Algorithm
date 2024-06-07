const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const words = input.slice(1);
const maxLength = Math.max(...words.map(x => x.length));
let newWord = '';

for (let i = 0; i < maxLength; i++) {
    let sum_code = 0;
    let count = 0;
    
    for (let word of words) {
        if (word[i]) {
            sum_code += word[i].charCodeAt();
            count++;
        }
    }
    
    const avg = parseInt(sum_code / count);
    const newCharacter = String.fromCharCode(avg);
    newWord += newCharacter;
}

console.log(newWord);