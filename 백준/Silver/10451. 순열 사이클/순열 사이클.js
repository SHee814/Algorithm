const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const T = +input[0];
let index = 1;
let answer = '';

while (index <= T * 2) {
    const n = +input[index++];
    const sq = input[index++].split(' ').map(Number);
    const arr = [sq.slice().sort((a, b) => a - b), sq];
    const visited = new Set();
    let count = 0;
    
    function cycle(x) {
        const nx = arr[1][x - 1];
        
        if (visited.has(nx)) return;
        
        visited.add(nx);
        cycle(nx);
    }
    
    for (let i = 0; i < n; i++) {
        if (visited.has(arr[0][i])) continue;
        
        count++;
        visited.add(arr[0][i]);
        cycle(arr[0][i]);
    }
    
    answer += `${count}\n`;
}

console.log(answer);