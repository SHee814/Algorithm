const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = +input[0];
const result = [];

for (let s = 1; s <= T; s++) {
    const str = input[s];
    const length = str.length;
    
    result.push(`${str[0]}${str[length - 1]}`);
}

console.log(result.join('\n'));