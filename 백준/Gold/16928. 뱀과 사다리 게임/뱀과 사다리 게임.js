const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const visited = Array.from(new Array(101), (_, i) => i === 1 ? 0 : Infinity);
const moveMap = new Map(input.slice(1).map(x => x.split(' ').map(Number)));

const queue = [1];
let index = 0;
let breakFlag = false;

while (index < queue.length) {
    const cx = queue[index++];
    
    for (let dx = 1; dx <= 6; dx++) {
        const nx = moveMap.has(cx + dx) ? moveMap.get(cx + dx) : cx + dx;
        
        if (nx === 100) {
            breakFlag = true;
        }
        
        if (visited[nx] > visited[cx] + 1) {
            visited[nx] = visited[cx] + 1;
            
            if (!breakFlag) queue.push(nx);
        }
    }
}

console.log(visited[100]);