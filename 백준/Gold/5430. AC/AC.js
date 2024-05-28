const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const T = +input.shift();
let startIndex = 0;
let answer = '';

while (startIndex < T) {
    const p = input[startIndex * 3].split('');
    const n = +input[startIndex * 3 + 1];
    const nums = JSON.parse(input[startIndex * 3 + 2]);
    let flag = true;
    let head = 0;
    let tail = nums.length - 1;
    let isReversed = false;
    
    for (let action of p) {
        if (action === 'R') {
            isReversed = !isReversed;
            continue;
        }
        
        if (tail < head) {
            flag = false;
            break;
        }
        
        if (isReversed) {
            tail--;
        } else {
            head++;
        }
    }
    
    if (isReversed) {
        nums.reverse();
        [head, tail] = [nums.length - tail - 1, nums.length - head - 1];
    };
    
    answer += (flag ? `[${nums.slice(head, tail + 1)}]` : 'error') + '\n';
    startIndex++;
}

console.log(answer);