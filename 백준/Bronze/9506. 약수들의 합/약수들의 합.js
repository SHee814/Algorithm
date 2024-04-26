const cases = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
let answer = '';

for (let n of cases) {
    if (n < 0) break;
    
    const factors = [];
    let sum = 0;
    
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i > 0) continue;
        
        factors.push(i);
        sum += i;
    }
    
    if (sum === n) {
        answer += `${n} = ${factors.join(' + ')}\n`;
    } else {
        answer += `${n} is NOT perfect.\n`;
    }
}

console.log(answer);