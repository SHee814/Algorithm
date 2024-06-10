const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const T = +input[0];
let answer = '';

for (let i = 1; i <= T; i++) {
    const str = input[i];
    let count = 0;
    
    function recursion(left, right) {
        count++;
        
        if (left >= right) return 1;
        else if (str[left] !== str[right]) return 0;
        else return recursion(left + 1, right - 1);
    }
    
    answer += `${recursion(0, str.length - 1)} ${count}\n`;
}

console.log(answer);