const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const T = input[0];
const overflowMap = new Map();
let answer = '';

function checkOverflow (x) {
    if (overflowMap.has(x)) {
        return overflowMap.get(x);
    }
    
    let sum = 0;
    
    for (let i = 1; i <= x / 2; i++) {
        if (x % i === 0) {
            sum += i;
        }
    }
    
    overflowMap.set(x, sum > x);
    
    return overflowMap.get(x);
}

for (let i = 1; i <= T; i++) {
    const t = input[i];
    let hasOverflowed = false;
    
    if (!checkOverflow(t)) {
        answer += 'BOJ 2022\n';
        continue;
    }
    
    for (let s = 1; s <= t/2; s++) {
        if (t % s > 0) {
            continue;
        }
        
        if (checkOverflow(s)) {
            hasOverflowed = true;
            answer += 'BOJ 2022\n';
            break;
        }
    }
    
    if (!hasOverflowed) {
        answer += 'Good Bye\n';
    }
}

console.log(answer);