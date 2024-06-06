const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const T = +input[0];
let answer = '';

for (let i = 1; i <= T; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    const digit = [a % 10 || 10];
    
    while (true) {
        const newDigit = (digit[digit.length - 1] * a) % 10 || 10;
        
        if (newDigit === digit[0]) break;
        
        digit.push(newDigit);
    }
    
    answer += digit[(b - 1) % digit.length] + '\n';
}

console.log(answer);