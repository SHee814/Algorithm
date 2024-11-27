const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const T = +input[0];
let idx = 1;
let answer = '';

while (input[idx]) {
    const n = +input[idx];
    const key1 = input[idx + 1].split(' ');
    const key2 = input[idx + 2].split(' ');
    const pw = input[idx + 3].split(' ');
    const indexMap = new Map();
    
    for (let i = 0; i < n; i++) {
        indexMap.set(i, key2.findIndex(x => x === key1[i]));
    }
    
    const origin = Array.from(new Array(n), (_, i) => pw[indexMap.get(i)]);
    
    answer += `${origin.join(' ')}\n`;
    idx += 4;
}

console.log(answer);