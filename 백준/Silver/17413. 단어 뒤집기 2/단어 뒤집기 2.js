const S = require('fs').readFileSync(0, 'utf-8').toString().trim();
const strings = [];
let str = '';

function reverseString(str) {
    return str.split('').reverse().join('');
}

for (let i = 0; i < S.length; i++) {
    const char = S[i];
    
    if (char === '<') {
        if (str.length > 0) {
            strings.push(...str.split(' ').map(word => reverseString(word)).join(' '));
            str = '';
        }
        
        str += char;
    } else if (char === '>') {
        str += char;
        strings.push(str);
        str = '';
    } else {
        str += char;
    }
}

if (str.length > 0) strings.push(...str.split(' ').map(word => reverseString(word)).join(' '));

console.log(strings.join(''));