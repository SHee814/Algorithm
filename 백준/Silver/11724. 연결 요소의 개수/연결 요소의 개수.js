const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(' ').map(Number));
const [N, M] = input[0];
const edges = input.slice(1);
const connections = Array.from(new Array(N), () => []);

for (let [s, e] of edges) {
    connections[s - 1].push(e);
    connections[e - 1].push(s);
}

const visited = new Array(N).fill(false);
let count = 0;

for (let i = 1; i <= N; i++) {
    if (visited[i - 1]) continue;
    
    traverse(i);
    count++;
}

console.log(count);

function traverse(node) {
    visited[node - 1] = true;
    
    const nextNodeList = connections[node - 1];
    
    for (let nextNode of nextNodeList) {
        if (visited[nextNode - 1]) continue;
        
        traverse(nextNode);
    }
}