const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const calls = input.slice(1).map(x => x.split(' '));
let cost = 0;

for (let [s, t] of calls) {
    let [h, m] = s.split(':').map(Number);
    let time = t; 
    
    while (t > 0) {
        if (h >= 7 && h < 19) {
            cost += 10;
        } else {
            cost += 5;
        }
        
        h = (h + parseInt((m + 1) / 60)) % 24;
        m = (m + 1) % 60;
        t--;
    }
}

console.log(cost);