const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const line = input.slice(1).map(row => row.split(' ').map(Number));
const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];
const coordSet = new Set();

for (let [x, y, d, g] of line) {
    const navi = [d];
    let gen = 0;
    
    while (gen < g) {
        const navi_reversed = navi.slice().reverse();
        const navi_next_gen = navi_reversed.map(x => (x + 1) % 4);
        
        for (let i = 0; i < navi_next_gen.length; i++) {
            navi.push(navi_next_gen[i]);
        }
        
        gen++;
    }
    
    let cx = x;
    let cy = y;
    coordSet.add(generateKey(cx, cy));
    
    for (let i = 0; i < navi.length; i++) {
        const cd = navi[i];
        cx = cx + dx[cd];
        cy = cy + dy[cd];
        coordSet.add(generateKey(cx, cy));
    }
}

const coords = Array.from(coordSet, (x) => x.split(' ').map(Number));
let answer = 0;

for (let [x, y] of coords) {
    if (!coordSet.has(generateKey(x + 1, y))) continue;
    if (!coordSet.has(generateKey(x, y + 1))) continue;
    if (!coordSet.has(generateKey(x + 1, y + 1))) continue;
    
    answer++;
}

console.log(answer);

function generateKey(x, y) {
    return `${x} ${y}`;
}