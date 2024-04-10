const word = require('fs').readFileSync('/dev/stdin').toString().trim();
const check = Number(word === word.split('').reverse().join(''));

console.log(check);