const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
let answer = '';
let index = 0;

while (input[index] !== '0') {
    const N = +input[index];
    const print = input[index + 1].split(',').map(x => x.split('-').map(Number));
    const printed = new Array(N + 1).fill(false);
    let count = 0;
    
    for (let [s, e] of print) {
        if (s <= 0 || s > N || s > e) continue;
        if (!e) {
            if (printed[s]) continue;
            
            printed[s] = true;
            count++;
            continue;
        }
    
        for (let i = s; i <= e; i++) {
            if (printed[i]) continue;
            if (i <= 0 || i > N) continue;
        
            printed[i] = true;
            count++;
        }
    }
    
    answer += `${count}\n`;
    index += 2;
}

console.log(answer);