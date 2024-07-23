const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const grid = input.slice(1).map(row => row.split(''));
const visited = Array.from({length: N}, () => new Array(N).fill(false));
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
let result = [0, 0];

for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
        if (visited[r][c]) continue;
        
        traverse(r, c);
        result[0]++;   
    }
}

for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
        visited[r][c] = false;
        
        if (grid[r][c] === 'G') grid[r][c] = 'R';
    }
}

for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
        if (visited[r][c]) continue;
        
        traverse(r, c);
        result[1]++;   
    }
}

console.log(result.join(' '));

function traverse(r, c) {
    for (let i = 0; i < 4; i++) {
        const nr = r + dr[i];
        const nc = c + dc[i];
        
        if (nr < 0 || nr >= N) continue;
        if (nc < 0 || nc >= N) continue;
        if (visited[nr][nc]) continue;
        if (grid[r][c] !== grid[nr][nc]) continue;
        
        visited[nr][nc] = true;
        traverse(nr, nc);
    }
}