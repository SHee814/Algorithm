const fs = require('fs');
const S = fs.readFileSync('/dev/stdin').toString().trim();
const result = new Array(26);

for (let i = 0; i < 26; i++) {
    result[i] = S.indexOf(String.fromCharCode(i + 97));
}

console.log (result.join(' '));