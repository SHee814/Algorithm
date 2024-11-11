const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const T = +input[0];
let answer = '';

for (let t = 1; t <= T; t++) {
    const [n, m] = input[t].split(' ').map(Number);
    
    if (n === m || m === 0) {
        answer += `${1}\n`;
        continue;
    }
    
    const diff = n - m;
    
    answer += `${diff * m + 1}\n`;
}

console.log(answer);