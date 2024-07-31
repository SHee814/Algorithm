const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const cards = input.slice(1).map(card => card.split(' '));
let time = 1;
let dir = 1;
let answer = '';


for (let [s, t] of cards) {
    if (s === 'HOURGLASS') {
        answer += `${time} NO\n`;
        dir *= (time === +t) ? 1 : -1;
    } else {
        answer += `${time} ${(time === +t) ? 'YES' : 'NO'}\n`;
    }
    
    time += dir;
    
    if (time === 0) time = 12;
    if (time === 13) time = 1;
}

console.log(answer);