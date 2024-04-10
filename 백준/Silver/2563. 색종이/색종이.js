const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const sketchbook = Array.from(Array(100), () => Array(100).fill(0));
let answer = 0;

for (let i = 1; i <= N; i++) {
    const [ix, iy] = input[i].split(' ').map(Number);
    
    for (let x = ix; x < ix + 10; x++) {
        for (let y = iy; y < iy + 10; y++) {
            if (sketchbook[y][x] === 1) continue;
            
            sketchbook[y][x] = 1;
            answer++;
        }
    }
}

console.log(answer);