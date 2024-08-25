const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(r => r.split(' ').map(Number));
const [N, M] = input[0];
const nums = input[1].sort((a, b) => a - b);
let answer = '';

function dfs(seq, visited, level) {
    if (level === M) {
        answer += seq.join(' ') + '\n';
    }
    
    for (let n of nums) {
        if (visited.has(n)) continue;
        
        const newSeq = seq.slice();
        newSeq.push(n);
        visited.add(n);
        dfs(newSeq, visited, level + 1);
        visited.delete(n);
    }
}

for (let i of nums) {
    const visited = new Set([i]);
    
    dfs([i], visited, 1);
}

console.log(answer);