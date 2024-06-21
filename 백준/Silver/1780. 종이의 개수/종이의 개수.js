const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const paper = input.slice(1).map(row => row.split(' ').map(Number));
const count = [0, 0, 0];

cut(paper);
console.log(count.join('\n'));

function cut(piece) {
    if (checkColor(piece)) {
        count[piece[0][0] + 1]++;
        
        return;
    }
    
    const length = piece.length;
    const devide = length / 3;
    
    for (let i = 0; i < 3; i++) {
        const ir = devide * i;
        
        for (let j = 0; j < 3; j++) {
            const ic = devide * j;
            cut(piece.map(row => row.slice(ic, ic + devide)).slice(ir, ir + devide));
        }
    }
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