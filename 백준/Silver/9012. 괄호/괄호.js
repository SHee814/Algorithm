const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const T = +input[0];
let answer = '';

for (let t = 1; t <= T; t++) {
    const str = input[t];
    let count = 0;
    let result = 'YES';
    
    for (let s of str) {
        if (s === `(`) {
            count++;
        } else if (s === `)`) {
            if (count > 0) {
                count--;
            } else {
                result = 'NO';
                break;
            }
        }
    }
    
    if (count > 0) result = 'NO';
    
    answer += result + '\n';
}

console.log(answer);