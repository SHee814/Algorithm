const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const messages = {
    0: 'Not a pangram',
    1: 'Pangram!',
    2: 'Double pangram!!',
    3: 'Triple pangram!!!'
}
let answer = '';

for (let i = 1; i <= N; i++) {
    const str = input[i];
    let count = new Array(26).fill(0);
    
    for (let char of str) {
        const index = char.toLowerCase().charCodeAt() - 97;
        
        if (index >= 0 && index <= 25) count[index]++;
    }
    
    const min = Math.min(...count);
    answer += `Case ${i}: ${messages[min]}\n`;
}

console.log(answer);