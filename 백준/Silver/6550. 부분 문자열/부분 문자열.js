const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(x => x.split(' '));
let answer = '';

for (let [s, t] of input) {
    let indexS = 0;
    let indexT = 0;
    
    while (indexS < s.length && indexT < t.length) {
        if (s[indexS] === t[indexT]) {
            indexS++;
            indexT++;
            continue;
        }
        
        indexT++;
    }
    
    answer += (indexS === s.length) ? 'Yes' : 'No';
    answer += '\n';
}

console.log(answer);