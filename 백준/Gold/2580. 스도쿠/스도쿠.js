const fs = require('fs');
const sudoku = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(line => line.split(' ').map(Number));
const blanks = [];

for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
        if (sudoku[r][c] === 0) {
            blanks.push([r, c]);
        }
    }
}

solve(sudoku.map(row => row.slice()), 0);

function solve(state, index) {
    if (index === blanks.length) {
        console.log(state.map(row => row.join(' ')).join('\n'));
        process.exit();
    }

    const [cr, cc] = blanks[index];
    
    for (let i = 1; i <= 9; i++) {
        if (checkIsValid(state, cr, cc, i)) {
            const newState = state.map(row => row.slice());
            newState[cr][cc] = i;
            solve(newState, index + 1);
        }
    }
}


function checkIsValid(state, r, c, n) {
    for (let i = 0; i < 9; i++) {
        if (state[i][c] === n || state[r][i] === n) {
            return false;
        }
    }

    const ri = parseInt(r / 3) * 3;
    const ci = parseInt(c / 3) * 3;

    for (let i = ri; i < ri + 3; i++) {
        for (let j = ci; j < ci + 3; j++) {
            if (state[i][j] === n) {
                return false;
            }
        }
    }

    return true;
}