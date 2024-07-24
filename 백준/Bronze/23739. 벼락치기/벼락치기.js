const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const N = input[0];
const chapters = input.slice(1);
let completed = 0;
let index = 0;

while (index < N) {
    let time = 30;
    
    while (chapters[index] <= time) {
        time -= chapters[index++];
        completed++;
    }
    
    if (time === 0) continue;
    
    if (chapters[index] / 2 <= time) {
        completed++;
    }
    
    index++;
}

console.log(completed);