const [N, M] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const dx = Array.from(Array(N), (_, i) => i + 1);
let answer = '';

function dfs(x, sequence) {
    if (sequence.length === M) {
        answer += `${sequence.join(' ')}\n`;
        return;
    }
    
    const maxNum = sequence[sequence.length - 1];
    
    for (let nx of dx) {
        if (nx <= maxNum) continue;
        
        sequence.push(nx);
        dfs(nx, sequence);
        sequence.pop();
    }
}

for (let x of dx) {
    const sequence = [x];
    
    dfs(x, sequence);
}

console.log(answer);