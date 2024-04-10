const fs = require('fs');
const [A, B, C] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const answer = `${(A+B)%C}\n${((A%C)+(B%C))%C}\n${(A*B)%C}\n${((A%C)*(B%C))%C}`;

console.log(answer);