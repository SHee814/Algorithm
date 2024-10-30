const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const D = input[0];
const line1 = input[1].split('');
const line2 = input[2].split('')
const board = [line1[0], line2[0], line2[1], line1[1]];
const d = { 'S': 0, 'W': 1, 'N': 2, 'E': 3 }[D];
const converted = board.reduce((acc, _, i) => acc + board[((i - d) + 4) % 4], '');

if (converted === '.P.O') {
    console.log('T');
} else if (converted === 'I.P.') {
    console.log('F');
} else if (converted === 'O.P.') {
    console.log('Lz');
} else {
    console.log('?')
}