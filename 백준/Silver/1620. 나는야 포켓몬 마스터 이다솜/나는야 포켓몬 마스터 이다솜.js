const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const lib_no = new Map();
const lib_name = new Map();
let answer = '';

for (let i = 1; i <= N; i++) {
    const pockemon = input[i];
    
    lib_no.set(pockemon, i);
    lib_name.set(i, pockemon);
}

for (let j = N + 1; j < input.length; j++) {
    if (isNaN(+input[j])) {
        answer += lib_no.get(input[j]) + '\n';
    } else {
        answer += lib_name.get(+input[j]) + '\n';
    }
}

console.log(answer);