const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const max = Math.max(...input.map(e => e.length));
const words = [];

for (let i = 0; i < max; i++) {
    const result = [];
    
    for (let j = 0; j < 5; j++) {
        result.push(input[j][i]);
    }
    
    words.push(result.join(''));
}

console.log(words.join(''));