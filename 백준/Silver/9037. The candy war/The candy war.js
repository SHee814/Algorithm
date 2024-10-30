const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const T = +input[0];
let t = 1;
let answer = '';

function checkEqual(C) {
    let candy = C[0];
    
    for (let c of C) {
        if (c !== candy) {
            return false;
        }
    }
    
    return true;
}

while (t <= T) {
    const N = +input[t * 2 - 1];
    const C = input[t * 2].split(' ').map(Number).map(c => (c % 2) ? c + 1 : c);
    
    t++;
    
    if (N === 1) {
        answer += '0\n';
        continue;
    }
    
    let cycle = 0;
    
    while (!checkEqual(C)) {
        const distributed = new Array(N).fill(0);
        
        for (let i = 0; i < N; i++) {
            const candy = C[i];
            
            distributed[(i + 1) % N] = candy / 2;
            C[i] = candy / 2;
        }
        
        for (let j = 0; j < N; j++) {
            C[j] += distributed[j];
            
            if (C[j] % 2) {
                C[j]++;
            }
        }
        
        cycle++;
    }
    
    answer += `${cycle}\n`;
}

console.log(answer);