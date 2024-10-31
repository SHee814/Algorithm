const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(' ').map(Number));
const [N, M] = input[0];
const gym = input.slice(1, N + 1);
const [H] = input[N + 1];
const sense = Array.from(new Array(N), () => new Array(M).fill(Infinity));
const queue = [[0, 0]];
let index = 0;

sense[0][0] = gym[0][0];

while (index < queue.length) {
    const [cn, cm] = queue[index++];
    const dn = [1, 0];
    const dm = [0, 1];
    
    for (let i = 0; i < 2; i++) {
        const nn = cn + dn[i];
        const nm = cm + dm[i];
        
        if (nn >= N || nm >= M) {
            continue;
        }
        
        if (sense[cn][cm] + gym[nn][nm] < sense[nn][nm]) {
            if (sense[nn][nm] === Infinity) {
                queue.push([nn, nm]);
            }
            
            sense[nn][nm] = sense[cn][cm] + gym[nn][nm];
        }
    }
}

const result = H >= sense[N - 1][M - 1];

console.log(result ? 'YES' : 'NO');

if (result) console.log(sense[N - 1][M - 1]);
