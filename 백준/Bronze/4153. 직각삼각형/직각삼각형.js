const fs = require('fs');
const cases = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
let answer = '';

for (let t of cases) {
    const [x, y, z] = t.split(' ').map(Number).sort((a, b) => a - b);
    
    if (x + y + z === 0) break;
    
    if (x ** 2 + y ** 2 === z ** 2) {
        answer += `right\n`;
    } else {
        answer += `wrong\n`;
    }
}

console.log(answer);