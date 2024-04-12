const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map(n => n.split(''));
let min = 64;

for (let n = 0; n <= N - 8; n++) {
    for (let m = 0; m <= M - 8; m++) {
        let count = 0;
        
        for (let dn = n; dn < n + 8; dn++) {
            for (let dm = m; dm < m + 8; dm++) {
                if ((dn + dm) % 2 > 0 && board[dn][dm] === 'W') {
                    count++;
                } else if ((dn + dm) % 2 === 0 && board[dn][dm] === 'B') {
                    count++;
                }
            }
        }
        
        min = Math.min(min, count, 64 - count);
    }
}

console.log(min);