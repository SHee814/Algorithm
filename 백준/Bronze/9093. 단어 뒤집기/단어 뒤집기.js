const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const T = +input[0];
let answer = '';

for (let i = 1; i <= T; i++) {
    answer += `${input[i].split(' ').map(word => word.split('').reverse().join('')).join(' ')}\n`;
}

console.log(answer);