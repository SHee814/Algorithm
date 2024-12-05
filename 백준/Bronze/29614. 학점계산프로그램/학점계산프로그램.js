const input = require('fs').readFileSync(0, 'utf-8').toString().trim();
let grade = '';
let count = 0;
let index = 0;
let score = 0;

const table = {
    'A+': 4.5, 'A': 4, 'B+': 3.5, 'B': 3,
    'C+': 2.5, 'C': 2, 'D+': 1.5, 'D': 1, 'F': 0
}

while (index < input.length) {
    grade += input[index];
    
    if (input[index + 1] === '+') {
        grade += input[index + 1];
        
        index += 2;
    } else {
        index++;
    }
    
    score += table[grade];
    grade = '';
    count++;
}

console.log(score / count);