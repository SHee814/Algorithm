const fs = require('fs');
const [a, b, c, d, e, f] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);

for (let x = -999; x < 1000; x++) {
    let flag = false;
    
    for (let y = -999; y < 1000; y++) {
        if (a * x + b * y === c && d * x + e * y === f) {
            console.log(x, y);
            break;
        }
    }
    
    if (flag) break;
}