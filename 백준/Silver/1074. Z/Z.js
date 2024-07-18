const fs = require('fs');
const [N, r, c] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const dr = [0, 0, 1, 1];
const dc = [0, 1, 0, 1];
let count = 0;

traverseZ(0, 0, 2 ** N);

function traverseZ(ir, ic, length) {
    if (length === 2) {
        for (let i = 0; i < 4; i++) {
            const nr = ir + dr[i];
            const nc = ic + dc[i];
            
            if (r === nr && c === nc) {
                console.log(count);
                process.exit();
            }
            
            count++;
        }
        
        return;
    }
    
    const half = length / 2;
    
    if (r < ir + half && c < ic + half) {
        traverseZ(ir, ic, half);
    } else {
        count += half ** 2;
    }
    
    if (r < ir + half && c < ic + (half * 2)) {
        traverseZ(ir, ic + half, half);
    } else {
        count += half ** 2;
        
    }
    
    if (r < ir + (half * 2) && c < ic + half) {
        traverseZ(ir + half, ic, half);
    } else {
        count += half ** 2;
    }
    
    if (r < ir + (half * 2) && c < ic + (half * 2)) {
        traverseZ(ir + half, ic + half, half);
    } else {
        count += half ** 2;
    }
}