const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const liqs = input[1].split(' ').map(Number).sort((a, b) => a - b);
let left = 0;
let right = N - 1;
let min = Infinity;
let answer = Array(2);

while (left < right) {
    const sum = liqs[left] + liqs[right];
    
    if (Math.abs(sum) < min) {
        answer[0] = liqs[left];
        answer[1] = liqs[right];
        min = Math.abs(sum);
        
        if (sum === 0) break;
    }
    
    if (sum > 0) right--;
    if (sum < 0) left++;
}

console.log(answer.join(' '));