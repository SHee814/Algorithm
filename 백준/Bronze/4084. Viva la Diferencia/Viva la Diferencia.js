const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
let answer = '';

for (let i = 0; i < input.length - 1; i++) {
    let [a, b, c, d] = input[i].split(' ').map(Number);
    let count = 0;
    
    while (!isAllSame(a, b, c, d)) {
        let na = Math.abs(a - b);
        let nb = Math.abs(b - c);
        let nc = Math.abs(c - d);
        let nd = Math.abs(d - a);
        
        [a, b, c, d] = [na, nb, nc, nd];
        count++;
    }
    
    answer += `${count}\n`;
}

console.log(answer);

function isAllSame(a, b, c, d) {
    return a === b && b === c && c === d && d === a;
}