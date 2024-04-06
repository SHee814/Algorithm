const fs = require('fs');
const id = fs.readFileSync('/dev/stdin').toString().trim();
const answer = id + '??!';

console.log(answer);