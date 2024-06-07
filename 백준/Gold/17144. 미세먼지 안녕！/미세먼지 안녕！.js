const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [R, C, T] = input[0].split(' ').map(Number);
const room = input.slice(1).map(row => row.split(' ').map(Number));
const airCleaner = [];
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
let time = 0;

for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
        if (room[r][c] < 0) airCleaner.push([r, c]);
    }
} 

while (time < T) {
    const spreadCount = Array.from(new Array(R), () => new Array(C).fill(0));
    const visited = Array.from(new Array(R), () => new Array(C).fill(false));
    
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (visited[r][c] || room[r][c] < 0) continue;
            
            visited[r][c] = true;
            calculateSpreading(r, c, visited, spreadCount);
        }
    }
    
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (room[r][c] < 0) continue;
            
            const remain = room[r][c] + spreadCount[r][c];
            room[r][c] = remain < 0 ? 0 : remain;
        }
    }
    
    for (let i = 0; i < 2; i++) {
        let wind = 1;
        let [cr, cc] = [airCleaner[i][0], airCleaner[i][1] + 1];
        let dust_overwrite = room[cr][cc];
        room[cr][cc] = 0;
        
        while (room[cr][cc] >= 0) {
            let nr = cr + dr[wind];
            let nc = cc + dc[wind];
            
            if (nr < 0 || nr >= R || nc < 0 || nc >= C) {
                let rotate = i || -1;
                wind = (wind + 4 + rotate) % 4;
                nr = cr + dr[wind];
                nc = cc + dc[wind];
                continue;
            }

            let dust_next = room[nr][nc];
            
            if (dust_next < 0) break;
            
            room[nr][nc] = dust_overwrite;
            dust_overwrite = dust_next;
            [cr, cc] = [nr, nc];
        }
    }
    
    time++;
}

let dust = 0;

for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
        if (room[r][c] > 0) dust += room[r][c];
    }
}

console.log(dust);

function calculateSpreading(r, c, visited, spreadCount) {
    const queue = [[r, c]];
    let index = 0;
    
    while (index < queue.length) {
        const [cr, cc] = queue[index++];
        let validDirection = 0;
        
        for (let i = 0; i < 4; i++) {
            const nr = cr + dr[i];
            const nc = cc + dc[i];
            
            if (nr < 0 || nr >= R) continue;
            if (nc < 0 || nc >= C) continue;
            if (room[nr][nc] < 0) continue;
            
            validDirection++;
            spreadCount[nr][nc] += parseInt(room[cr][cc] / 5);
            
            if (visited[nr][nc]) continue;
            
            queue.push([nr, nc]);
            visited[nr][nc] = true;
        }
        
        spreadCount[cr][cc] -= parseInt(room[cr][cc] / 5) * validDirection;
    }    
}