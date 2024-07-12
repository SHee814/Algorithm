const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const maze = input.slice(1).map(row => row.split('').map(x => +x === 1 ? 0 : -1));

maze[0][0] = 1;

const queue = [[0, 0]];
let index = 0;
const dn = [1, 0, -1, 0];
const dm = [0, 1, 0, -1];

while (index < queue.length) {
    const [cn, cm] = queue[index++];
    
    for (let i = 0; i < 4; i++) {
        const nn = cn + dn[i];
        const nm = cm + dm[i];
        
        if (nn < 0 || nn >= N) continue;
        if (nm < 0 || nm >= M) continue;
        if (maze[nn][nm] !== 0) continue;
        
        maze[nn][nm] = maze[cn][cm] + 1;
        
        if (nn === N - 1 && nm === M - 1) {
            console.log(maze[nn][nm]);
            process.exit();
        }
        
        queue.push([nn, nm]);
    }
}