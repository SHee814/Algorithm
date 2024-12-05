const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const nicknames = input.slice(1).map(n => n.split(' '));

for (let i = 0; i < N; i++) {
    nicknames[i][0] = 'god';
}

const answer = nicknames.map(n => n.join('')).join('\n');

console.log(answer);