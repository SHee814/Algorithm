const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(' ').map(Number));
const [N, M, V] = input[0];
const links = input.slice(1);
const connections = Array.from(new Array(N), () => []);

for (let [s, e] of links) {
    connections[s - 1].push(e);
    connections[e - 1].push(s);
}

connections.forEach(nodes => nodes.sort((a, b) => a - b));

let dfs = [];
let bfs = [];

traverseDFS(V, new Set());
traverseBFS(V);

console.log(`${dfs.join(' ')}\n${bfs.join(' ')}`);

function traverseDFS(node, visited) {
    dfs.push(node);
    visited.add(node);
    
    const nextNodeList = connections[node - 1];
    
    for (let nextNode of nextNodeList) {
        if (visited.has(nextNode)) continue;
        
        traverseDFS(nextNode, visited);
    }
}

function traverseBFS(node) {
    const queue = [node];
    const visited = new Set();
    let index = 0;
    
    visited.add(node);
    
    while (index < queue.length) {
        const currentNode = queue[index++];
        const nextNodeList = connections[currentNode - 1];
        bfs.push(currentNode);
        
        for (let nextNode of nextNodeList) {
            if (visited.has(nextNode)) continue;
            
            visited.add(nextNode);
            queue.push(nextNode);
        }
    }
}