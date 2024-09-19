const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const encodeTable = {
    0: '0111111',
    1: '0001010',
    2: '1011101',
    3: '1001111',
    4: '1101010',
    5: '1100111',
    6: '1110111',
    7: '0001011',
    8: '1111111',
    9: '1101011'
}

const decodeTable = {
    '0111111': 0,
    '0001010': 1,
    '1011101': 2,
    '1001111': 3,
    '1101010': 4,
    '1100111': 5,
    '1110111': 6,
    '0001011': 7,
    '1111111': 8,
    '1101011': 9
}

let answer = '';

function decode(x) {
    let result = 0;
    let key = 0;
    let count = 0;
    
    for (let i of x) {
        key = key * 10 + (+i);
        count++;
        
        if (count === 3) {
            result = result * 10 + decodeTable[key.toString(2).padStart(7, '0')];
            key = 0;
            count = 0;
        }
    }
    
    return result;
}

function encode(x) {
    return parseInt(encodeTable[x], 2).toString().padStart(3, '0');
}

for (let line of input) {
    if (line === 'BYE') break;
    
    let a, b;
    let code = '';
    
    for (let i of line) {
        if (i === '+') {
            a = code;
            code = '';
        } else if (i === '=') {
            b = code;
            code = '';
        } else {
            code += i;
        }
    }
    
    const sum = (decode(a) + decode(b)).toString();
    let encodedSum = '';
    
    for (let i of sum) {
        encodedSum += encode(i);
    }
    
    answer += `${a}+${b}=${encodedSum}\n`;
}

console.log(answer);