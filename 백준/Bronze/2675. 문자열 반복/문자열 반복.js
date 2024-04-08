const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = +input[0];
const results = [];

for (let i = 1; i <= T; i++) {
    const [R, S] = input[i].split(' ');
    const P = S.split('').reduce((acc, s) => acc + s.repeat(+R), '');
    
    results.push(P);
}

console.log(results.join('\n'));