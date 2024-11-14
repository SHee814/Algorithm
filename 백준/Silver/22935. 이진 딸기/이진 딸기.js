const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const N = +input[0];
let answer = '';

for (let i = 1; i <= N; i++) {
    let n = input[i] % 28;
    
    if (n === 0) {
        n = 2;
    } else if (n > 15) {
        n = 30 - n;
    }
    
    n = n.toString(2).padStart(4, '0');
    
    const x = n.split('').map(k => k === '0' ? 'V' : '딸기').join('');
    
    answer += `${x}\n`;
}

console.log(answer);