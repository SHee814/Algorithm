const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
let answer = '';

function cantor(str) {
    if (str.length === 1) return str;
    
    const devide = str.length / 3;
    
    return cantor(str.slice(0, devide)) + ' '.repeat(devide) + cantor(str.slice(devide * 2));
}

for (let n of input) {
    answer += cantor('-'.repeat(3 ** n)) + '\n';
}

console.log(answer);