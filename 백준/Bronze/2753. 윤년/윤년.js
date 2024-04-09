const year = +require('fs').readFileSync('/dev/stdin');

console.log(Number((year % 4 === 0) && (year % 100 > 0 || year % 400 === 0)));