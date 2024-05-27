const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

function checkPalindrome(str) {
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] === str[j]) continue;
        
        return false;
    }
    
    return true;
}

let answer = '';

for (let i = 0; i < input.length - 1; i++) {
    answer += `${checkPalindrome(input[i]) ? 'yes' : 'no'}\n`;
}

console.log(answer);