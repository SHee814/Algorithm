const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const T = input[0];
let answer = ``;

for (let i = 1; i <= T; i++) {
    let t = input[i];
    const result = [];
    
    result.push(parseInt(t / 25));
    t %= 25;
    result.push(parseInt(t / 10));
    t %= 10;
    result.push(parseInt(t / 5));
    t %= 5;
    result.push(t);
    
    answer += `${result.join(' ')}\n`;
}

console.log(answer);