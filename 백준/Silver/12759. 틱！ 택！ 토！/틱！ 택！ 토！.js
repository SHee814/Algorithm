const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const coords = input.slice(1).map(coord => coord.split(' ').map(Number));
const board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let player = +input[0];

function tictacto(x, y, player) {
    if (board[x][0] === board[x][1] && board[x][1] === board[x][2]) {
        return player;
    }
    
    if (board[0][y] === board[1][y] && board[1][y] === board[2][y]) {
        return player;
    }
    
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        if (board[1][1] !== 0) return player;
    }
    
    if (x + y === 2 && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        if (board[1][1] !== 0) return player;
    }
    
    return 0;
}

for (let [x, y] of coords) {
    board[x - 1][y - 1] = player;
    
    const winner = tictacto(x - 1, y - 1, player);
    
    if (winner > 0) {
        console.log(winner);
        process.exit();
    }
    
    player = (player === 2) ? 1 : 2;
}

console.log(0);