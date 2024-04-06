const fs = require('fs');
const nums = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const check = new Array(30).fill(false);
const answer = [];

for (let n of nums) {
    check[n - 1] = true;
}

for (let i = 0; i < 30; i++) {
    if (check[i]) continue;
    
    answer.push(i + 1);
}

console.log(answer.join('\n'));