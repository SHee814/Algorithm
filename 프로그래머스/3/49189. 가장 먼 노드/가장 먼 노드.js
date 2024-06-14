function solution(n, edge) {
    const connection = Array.from(new Array(n + 1), () => new Set());
    
    for (let [s, e] of edge) {
        connection[s].add(e);
        connection[e].add(s);
    }
    
    const visited = new Map();
    visited.set(1, 0);
    
    const queue = [1];
    let index = 0;
    let maxDist = 0;
    
    while (index < queue.length) {
        const cn = queue[index++];
        
        for (let i = 1; i <= n; i++) {
            if (!connection[cn].has(i)) continue;
            if (visited.has(i)) continue;
            
            queue.push(i);
            
            let dist = visited.get(cn) + 1;
            visited.set(i, dist);
            maxDist = dist;
        }
    }
    
    let count = 0;
    
    for (let [node, dist] of visited) {
        if (dist === maxDist) count++;
    }
    
    return count;
}