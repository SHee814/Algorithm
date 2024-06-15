function solution(n, wires) {
    const connection = Array.from(new Array(n + 1), () => []);
    let result = Infinity;
    
    for (let [s, e] of wires) {
        connection[s].push(e);
        connection[e].push(s);
    }
    
    for (let cutting of wires) {
        const visited = new Set();
        
        getTreeDepth(1, visited, cutting);
        
        const diff = Math.abs((n - visited.size) - visited.size);
        result = Math.min(diff, result);
    }
    
    return result;    
    
    function getTreeDepth(current, visited, cutting) {
        visited.add(current);
        
        for (let next of connection[current]) {
            if (current === cutting[0] && next === cutting[1]) continue;
            if (current === cutting[1] && next === cutting[0]) continue;
            if (visited.has(next)) continue;
            
            getTreeDepth(next, visited, cutting);
        }
    }
}