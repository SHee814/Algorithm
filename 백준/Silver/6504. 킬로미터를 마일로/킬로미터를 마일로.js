const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const T = input[0];
const memo = [1, 2];

function kiloToMile(x) {
    while (memo[memo.length - 1] < x) {
        memo.push(memo[memo.length - 2] + memo[memo.length - 1]);
    }
    
    const L = memo.length - (x === memo[memo.length - 1] ? 1 : 2);
    const bx = new Array(L).fill(0);
    let num = x;
    let l = L;
    
    while (num > 0) {
        if (num >= memo[l]) {
            bx[l] = 1;
            num %= memo[l];
        }
        
        l--;
    }
    
    return bx.slice(1);
}

let answer = '';

for (let t = 1; t <= T; t++) {
    const by = kiloToMile(input[t]);
    const mile = by.reduce((acc, x, i) => acc + (x * memo[i]), 0);
    
    answer += mile + '\n';
}

console.log(answer);