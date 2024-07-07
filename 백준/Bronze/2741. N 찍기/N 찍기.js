const fs = require('fs');
const N = +fs.readFileSync(0, 'utf-8').toString();
let answer = '';

for (let i = 1; i <= N; i++) {
    answer += `${i}\n`;
}

console.log(answer);