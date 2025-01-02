const T = require('fs').readFileSync(0, 'utf-8').toString().trim().split(':').map(Number);
let count = 0;

for (let i = 0; i < 3; i++) {
    const t = T[i];
    
    if (t > 59) {
        count = 0;
        break;
    }
    
    if (t >= 1 && t <= 12) {
        count++;
    }
}

console.log(2 * count);