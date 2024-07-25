const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const ranking = input.slice(1).map(x => x.split(' ').map(Number)).sort((a, b) => b[2] - a[2]);
const winner = [];
const map = new Map();

for (let i = 0; i < N; i++) {
    const [nation, num] = ranking[i];
    
    if (map.get(nation) === 2) continue;
    
    winner.push([nation, num]);
    map.set(nation, (map.get(nation) || 0) + 1);
    
    if (winner.length === 3) break;
}

console.log(winner.map(x => x.join(' ')).join('\n'));