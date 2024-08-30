const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(' '));
const ranking = input.map(([rt, team]) => [+rt.split(':').join(''), team]).sort((a, b) => a[0] - b[0]);
let score_blue = 0;
let score_red = 0;

const scoreTable = [10, 8, 6, 5, 4, 3, 2, 1];

for (let i = 0; i < 8; i++) {
    const score = scoreTable[i];
    
    if (ranking[i][1] === 'B') {
        score_blue += score;
    } else {
        score_red += score;
    }
}

console.log(score_blue > score_red ? 'Blue' : 'Red');