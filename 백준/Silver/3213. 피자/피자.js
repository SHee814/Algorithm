const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const pieces = input.slice(1)
    .map(p => p.split('/')
    .map(Number)).map(([x, y]) => x / y)
    .sort((a, b) => b - a);
let left = 0;
let right = N - 1;
let answer = 0;

while (left < right) {
    let remain = 1 - pieces[left];

    while (left < right && pieces[right] <= remain) {
        remain -= pieces[right];
        right--;
    }
    
    if (remain < 0) right++;
    
    left++;
    answer++;
}

console.log((left > right) ? answer : answer + 1);