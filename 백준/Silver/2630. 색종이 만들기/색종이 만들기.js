const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const paper = input.slice(1).map(row => row.split(' ').map(Number));
let white = 0;
let blue = 0;

cut(paper);
console.log(`${white}\n${blue}`);

function cut(piece) {
    if (checkColor(piece)) {
        if (piece[0][0] === 0) {
            white++;
        } else {
            blue++;
        }
        
        return;
    }
    
    const length = piece.length;
    const half = parseInt(length / 2);
    
    cut(piece.map(row => row.slice(0, half)).slice(0, half));
    cut(piece.map(row => row.slice(half)).slice(0, half));
    cut(piece.map(row => row.slice(0, half)).slice(half));
    cut(piece.map(row => row.slice(half)).slice(half));
}

function checkColor(piece) {
    if (piece.length === 1) return true;
    
    const ref = piece[0][0];
    const length = piece.length;
    
    for (let r = 0; r < length; r++) {
        for (let c = 0; c < length; c++) {
            if (piece[r][c] !== ref) return false;        
        }
    }
    
    return true;
}