const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const T = +input[0];
let answer = '';

for (let i = 1; i <= T; i++) {
    const ex = input[i];
    let left = 0;
    let right = 0;
    let x;
    
    for (let k of ex) {
        if (isNaN(+k)) {
            if (x === undefined) {
                left++;
            } else {
                right++;
            }
        } else {
            x = +k;
        }
    }
    
    x = right > 0 ? 1 : x;
    x = left % 2 ? +(!x) : +(x);
    answer += x + '\n';
}

console.log(answer);