const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(x => x.split(' ').map(Number));
const [T] = input[0];
let index = 1;
let answer = '';

while (index < input.length) {
    const [M, N, K] = input[index++];
    const cabbage_positions = input.slice(index, index + K);
    const field = Array.from(new Array(N), () => new Array(M).fill(0));
    let count = 0;
    
    for (let [m, n] of cabbage_positions) {
        field[n][m] = 1;
    }
    
    for (let n = 0; n < N; n++) {
        for (let m = 0; m < M; m++) {
            if (field[n][m] === 1) {
                countCabbages(n, m);
                count++;
            }
        }
    }
    
    answer += `${count}\n`;
    index = index + K;
    
    function countCabbages(n, m) {
        field[n][m] = 0;
    
        const dn = [-1, 0, 1, 0];
        const dm = [0, 1, 0, -1];
    
        for (let i = 0; i < 4; i++) {
            const nn = n + dn[i];
            const nm = m + dm[i];
        
            if (nn < 0 || nn >= N) continue;
            if (nm < 0 || nm >= M) continue;
            if (field[nn][nm] === 0) continue;
            
            countCabbages(nn, nm);
        }
    }
}

console.log(answer);