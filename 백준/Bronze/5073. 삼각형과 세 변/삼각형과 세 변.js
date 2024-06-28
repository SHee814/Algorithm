const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(' ').map(Number));
let answer = '';

for (let cs of input) {
    const [a, b, c] = cs.sort((a, b) => a - b);
    let result;
    
    if (a * b * c === 0) break;
    
    if (a + b <= c) {
        result = 'Invalid';
    } else if (a === b && b === c) {
        result = 'Equilateral';
    } else if (a === b || b === c || c === a) {
        result = 'Isosceles';
    } else {
        result = 'Scalene';
    }
    
    answer += `${result}\n`;
}

console.log(answer);