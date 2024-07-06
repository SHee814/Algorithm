const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = input[0];
const Q = input.slice(1).map(x => x.split(' ').map(Number));
let count = 0;

for (let a = 1; a <= 9; a++) {
    for (let b = 1; b <= 9; b++) {
        for (let c = 1; c <= 9; c++) {
            if (a === b || b === c || c === a) continue;
            if (testingNumber(a * 100 + b * 10 + c)) count++;
        }
    }
}

console.log(count);

function testingNumber(target) {
    for (let [num, s, b] of Q) {
        const num_str = num.toString().split('');
        const target_str = target.toString().split('');
        const set_num = new Set(num_str);
        let ball = 0;
        let strike = 0;
        
        for (let i = 0; i < 3; i++) {
            if (set_num.has(target_str[i])) ball++;
            
            if (num_str[i] === target_str[i]) {
                ball--;
                strike++;
            }
        }
        
        if (s !== strike || b !== ball) return false;
    }
    
    return true;
}