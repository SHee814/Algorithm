const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const links = input.slice(1).map(row => row.split(' ').map(Number));

for (let m = 0; m < N; m++) {
    for (let s = 0; s < N; s++) {
        for (let e = 0; e < N; e++) {
            if (links[s][e]) {
                continue;
            }
            
            if (s === m) {
                links[s][e] = links[m][e];
            } else if (m === e) {
                links[s][e] = links[s][m];
            } else {
                links[s][e] = links[s][m] && links[m][e];
            }
        }
    }
}

console.log(links.map(row => row.join(' ')).join('\n'));