const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(' ').map(Number));
const [N, M] = input[0];
const room = input.slice(2);
let answer = 0;

function clean(n, m, d) {
    if (room[n][m] === 0) {
        room[n][m] = 2;
        answer++;
    }
    
    const dn = [-1, 0, 1, 0];
    const dm = [0, 1, 0, -1];
    let canMove = false;
    
    for (let i = 0; i < 4; i++) {
        const nn = n + dn[i];
        const nm = m + dm[i];
        
        if (room[nn][nm] === 0) {
            canMove = true;
            break;
        }
    }
    
    if (canMove) {
        const nd = (d - 1 + 4) % 4;
        const nn = n + dn[nd];
        const nm = m + dm[nd];
        
        if (room[nn][nm] === 0) {
            clean(nn, nm, nd);
        } else {
            clean(n, m, nd);
        }
    } else {
        const rd = (d - 2 + 4) % 4;
        const pn = n + dn[rd];
        const pm = m + dm[rd];
        
        if (room[pn][pm] === 1) {
            console.log(answer);
            process.exit();
        }
        
        clean(pn, pm, d);
    }
}

clean(...input[1]);
console.log(answer);