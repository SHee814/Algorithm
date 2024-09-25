const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const S = input[1];
let security = 0;
let bigdata = 0;
let word = '';

for (let s of S) {
    word += s;
    
    if (word === 'security') {
        security++;
        word = '';
    }
    
    if (word === 'bigdata') {
        bigdata++;
        word = '';
    }
}

if (security > bigdata) {
    console.log('security!');
} else if (security === bigdata) {
    console.log('bigdata? security!');
} else {
    console.log('bigdata?');
}