function solution(maps) {
    const N = maps.length;
    const M = maps[0].length;
    const result = [];
    const visited = Array.from(new Array(N), () => new Array(M).fill(false));
    let sum = 0;
    
    for (let r = 0; r < N; r++) {
        for (let c = 0; c < M; c++) {
            if (visited[r][c]) continue;
            if (maps[r][c] === 'X') continue;
            
            checkIsland(r, c);

            if (sum > 0) result.push(sum);
            
            sum = 0;
        }
    }
    
    return result.length > 0 ? result.sort((a, b) => a - b) : [-1];
    
    function checkIsland(r, c) {
        sum += +maps[r][c];
        visited[r][c] = true;
        
        const dr = [-1, 0, 1, 0];
        const dc = [0, 1, 0, -1];
        
        for (let i = 0; i < 4; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];
            
            if (nr < 0 || nr >= N) continue;
            if (nc < 0 || nc >= M) continue;
            if (maps[nr][nc] === 'X') continue;
            if (visited[nr][nc]) continue;
            
            checkIsland(nr, nc, sum);
        }
    }
}