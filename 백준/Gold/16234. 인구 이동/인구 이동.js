const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, L, R] = input[0].split(' ').map(Number);
const map = input.slice(1).map(x => x.split(' ').map(Number));
let answer = 0;

while (true) {
    const visited = Array.from(new Array(N), () => new Array(N).fill(false));
    let noMove = true;
    
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            const union = [];
            
            if (visited[i][j]) continue;
                        
            visited[i][j] = true;
            union.push([i, j]);
            unite(i, j);
            
            if (union.length > 1) noMove = false;
            
            const totalPop = union.reduce((acc, [x, y]) => acc + map[x][y], 0);
            const avgPop = parseInt(totalPop / union.length);
            
            for (let [x, y] of union) {
                map[x][y] = avgPop;
            }
            
            function unite(x, y) {
                const dx = [-1, 0, 1, 0];
                const dy = [0, 1, 0, -1];
                
                for (let i = 0; i < 4; i++) {
                    const nx = x + dx[i];
                    const ny = y + dy[i];
                    
                    if (nx < 0 || nx >= N || ny < 0 || ny >= N || visited[nx][ny]) continue;
                    
                    const diff = Math.abs(map[x][y] - map[nx][ny]);
                    
                    if (diff >= L && diff <= R) {
                        visited[nx][ny] = true;
                        union.push([nx, ny]);
                        unite(nx, ny);
                    }
                }
            }
        }
    }
    
    if (noMove) break;
    
    answer++;
}

console.log(answer);