function solution(X, Y) {
    const mapX = new Map();
    const mapY = new Map();
    
    for (let x of X) {
        mapX.set(x, mapX.has(x) ? mapX.get(x) + 1 : 1);
    }
    
    for (let y of Y) {
        mapY.set(y, mapY.has(y) ? mapY.get(y) + 1 : 1);
    }
    
    const pair = [];
    
    for (let [key, value] of mapX) {
        if (!mapY.has(key)) continue;
        
        const count = Math.min(mapX.get(key), mapY.get(key));

        for(let i = 0; i < count; i++) {
            pair.push(key);
        }
    }
    
    if (pair.length === 0) return "-1";
    
    pair.sort((a, b) => b - a);
    
    if (pair[0] === '0') return '0';
    
    return pair.join('');
}