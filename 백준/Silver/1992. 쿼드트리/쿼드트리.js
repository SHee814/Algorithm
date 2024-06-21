const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const video = input.slice(1).map(row => row.split(''));
const compressed = compress(video);

console.log(compressed);

function compress(piece) {
    if (checkColor(piece)) {
        return piece[0][0];
    }
    
    const half = parseInt(piece.length / 2);
    
    const top_left = compress(piece.map(row => row.slice(0, half)).slice(0, half));
    const top_right = compress(piece.map(row => row.slice(half)).slice(0, half));
    const bottom_left = compress(piece.map(row => row.slice(0, half)).slice(half));
    const bottom_right = compress(piece.map(row => row.slice(half)).slice(half));
    
    return `(${top_left}${top_right}${bottom_left}${bottom_right})`;
}

function checkColor(piece) {
    const length = piece.length;
    
    if (length === 1) return true;
    
    const ref = piece[0][0];
    
    for (let r = 0; r < length; r++) {
        for (let c = 0; c < length; c++) {
            if (ref !== piece[r][c]) return false;
        }
    }
    
    return true;
}