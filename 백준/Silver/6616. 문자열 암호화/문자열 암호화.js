const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
let ti = 0;
let answer = '';

function encode(str, N) {
    const len = str.length;
    const result = new Array(len);
    let x = 0;
    
    for (let i = 0; i < len; i++) {
        while (result[x] !== undefined) {
            x++;
        }
        
        const c = str[i];
        
        result[x] = c;
        x = (x + N >= len) ? 0 : x + N;
    }
    
    return result.join('');
}

while (input[ti] > 0) {
    const N = +input[ti];
    const str = input[ti + 1].split(' ').join('').toUpperCase();
    
    answer += `${encode(str, N)}\n`;
    
    ti += 2;
}

console.log(answer);