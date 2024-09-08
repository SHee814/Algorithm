const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').join('');

function ClockNumber(x) {
    const card = x.toString().split('').map(Number);
    let min = x;
    
    for (let i = 0; i < 4; i++) {
        let num = 0;
        
        for (let j = 0; j < 4; j++) {
            num += card[(i + j) % 4] * (10 ** (3 - j));
        }
        
        min = Math.min(num, min);
    }
    
    return min;
}

const target = ClockNumber(+input);
const clockNumberSet = new Set();

let num = 1111;

while (num < target) {
    const clockNumber = ClockNumber(num++);

    if (clockNumber < 1000) continue;
    
    if (!clockNumberSet.has(num)) {
        clockNumberSet.add(clockNumber);
    }
}

console.log(clockNumberSet.size + 1);