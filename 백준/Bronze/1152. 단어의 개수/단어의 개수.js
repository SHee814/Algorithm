const fs = require('fs');
const str = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const result = str.filter(w => w !== '');

console.log(result.length);