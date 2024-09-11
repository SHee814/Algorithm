const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const words = input[1].split(' ');

for (let i = 1; i < N; i++) {
    if (words[i - 1][0] !== words[i][0]) {
        console.log(0);
        process.exit();
    }
}

console.log(1);