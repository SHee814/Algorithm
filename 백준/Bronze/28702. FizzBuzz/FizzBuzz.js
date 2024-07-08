const [A, B, C] = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
let answer;

if (!isNaN(+A)) {
    answer = printFizzBuzz(+A + 3);
} else if (!isNaN(+B)) {
    answer = printFizzBuzz(+B + 2);
} else {
    answer = printFizzBuzz(+C + 1);
}

console.log(answer);

function printFizzBuzz(x) {
    let result = '';
    
    if (x % 3 === 0) result += 'Fizz';
    if (x % 5 === 0) result += 'Buzz';
    
    return result.length > 0 ? result : x;
}