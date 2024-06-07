const targets = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
let answer = '';

for (let target of targets) {
    if (target === 0) break;
    let checked = [];
    let left = 1;
    let right = 50;
    
    while (left <= right) {
        const mid = parseInt((left + right) / 2);
        checked.push(mid);
        
        if (mid === target) break;
        
        if (mid < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    answer += `${checked.join(' ')}\n`;
}

console.log(answer);