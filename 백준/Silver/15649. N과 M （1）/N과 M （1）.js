const [N, M] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const dx = Array.from(Array(N), (_, i) => i + 1);
let answer = '';

function dfs(x, sequence, visited) {
    if (sequence.length === M) {
        answer += `${sequence.join(' ')}\n`;
        return;
    }
    
    for (let nx of dx) {
        if (visited.has(nx)) continue;
        
        sequence.push(nx);
        visited.add(nx);
        dfs(nx, sequence, visited);
        visited.delete(nx);
        sequence.pop();
    }
}

for (let x of dx) {
    const sequence = [x];
    const visited = new Set();
    
    visited.add(x);
    
    dfs(x, sequence, visited);
}

console.log(answer);