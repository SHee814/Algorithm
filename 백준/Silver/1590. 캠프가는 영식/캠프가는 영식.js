const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(' ').map(Number));
const [N, T] = input[0];
let min = Infinity;

for (let [s, t, c] of input.slice(1)) {
    let ti = s;
    let ci = 1;
    
    while (T > ti && c >= ci) {
        ti += t;
        ci++;
    }
    
    if (ci > c) continue;
    
    const wait = ti - T;
    
    min = Math.min(min, wait);
}

console.log((min === Infinity) ? -1 : min);