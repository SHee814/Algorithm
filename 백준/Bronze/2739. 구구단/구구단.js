const N = +require('fs').readFileSync('/dev/stdin');
let answer = '';

for (let i = 1; i < 10; i++) {
    answer += `${N} * ${i} = ${N * i}\n`;
}

console.log(answer);