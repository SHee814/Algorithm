const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(row => row.split(' ').map(Number));
const map = new Map();
let answer = '';

for (let [a, b, c] of input) {
    if (a === -1 && b === -1 && c === -1) break;
    
    answer += `w(${a}, ${b}, ${c}) = ${w(a, b, c)}\n`;
}

console.log(answer);

function generateKey(a, b, c) {
    return `${a} ${b} ${c}`;
}

function w(a, b, c) {
    const key = generateKey(a, b, c);
    let result;
    
    if (map.has(key)) return map.get(key);
    if (a <= 0 || b <= 0 || c <= 0) {
        result = 1;
    } else if (a > 20 || b > 20 || c > 20) {
        result = w(20, 20, 20);
    } else if (a < b && b < c) {
        result = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
    } else {
        result = w(a - 1, b, c,) + w (a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1);
    }
    
    map.set(key, result);
    
    return result;
}