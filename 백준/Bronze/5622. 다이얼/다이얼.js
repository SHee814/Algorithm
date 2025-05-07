const fs = require('fs');
const chars = fs.readFileSync('/dev/stdin').toString().trim().split('');
const dials = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
const timeTaken = [];

chars.forEach(char => {
    dials.forEach((dial, i) => {
        if (dial.search(char) >= 0) {
            timeTaken.push(i + 2 + 1);
            return;
        }
    });
});

const answer = timeTaken.reduce((acc, e) => acc + e);

console.log(answer);
