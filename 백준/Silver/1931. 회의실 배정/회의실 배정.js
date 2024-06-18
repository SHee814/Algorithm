const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = input[0];
const schedules = input.slice(1).map(x => x.split(' ').map(Number)).sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);
let lastEndTime = 0;
let answer = 0;

for (let [start, end] of schedules) {
    if (start < lastEndTime) continue;
    
    lastEndTime = end;
    answer++;
}

console.log(answer);