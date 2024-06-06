const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const sea = input.slice(1).map(x => x.split(' ').map(Number));
let year = 0;

function calculateMelting(r, c, visited, meltValue) {
    const queue = [[r, c]];
    let index = 0;
    
    visited[r][c] = true;
    
    while (index < queue.length) {
        const [cr, cc] = queue[index++];
        
        const dr = [-1, 0, 1, 0];
        const dc = [0, 1, 0, -1];
        let coast = 0;
        
        for (let i = 0; i < 4; i++) {
            const nr = cr + dr[i];
            const nc = cc + dc[i];
            
            if (nr < 0 || nr >= N) continue;
            if (nc < 0 || nc >= M) continue;
            if (sea[nr][nc] === 0) coast++;
            if (sea[nr][nc] === 0) continue;
            if (visited[nr][nc]) continue;
            
            queue.push([nr, nc]);
            visited[nr][nc] = true;
        }
        
        meltValue[cr][cc] = coast;
    }
}

while (true) {
    const meltValue = Array.from(new Array(N), () => new Array(M).fill(0));
    const visited = Array.from(new Array(N), () => new Array(M).fill(false));
    let checked = false;
    
    for (let n = 0; n < N; n++) {
        for (let m = 0; m < M; m++) {
            if (visited[n][m]) continue;
            if (sea[n][m] === 0) continue;
            if (checked) {
                console.log(year);
                process.exit();
            }
            
            calculateMelting(n, m, visited, meltValue);
            checked = true;
        }
    }
    
    if (!checked) {
        console.log(0);
        process.exit();
    }
    
    for (let n = 0; n < N; n++) {
        for (let m = 0; m < M; m++) {
            const diff = sea[n][m] - meltValue[n][m];
            sea[n][m] = diff >= 0 ? diff : 0;
        }
    }
    
    year++;
}