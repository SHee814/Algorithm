const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [c, h] = input[0].split(' ').map(Number);
const DAY = 24 * 60 * 60;

function toSecond(h, m, s) {
    return (h * 3600) + (m * 60) + s;
}

const schedules = input.slice(1).map(s => toSecond(...s.split(':').map(Number)));
const timeline = new Array(DAY).fill(0);
let blocked = 0;

for (let sec of schedules) {
    for (let t = sec; t < sec + 40; t++) {
        if (timeline[t]) continue;
    
        timeline[t] = 1;
        blocked++;
    }
}

console.log(DAY - blocked);