const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map(row => row.split('').map(Number));
let max = Math.sqrt(board[0][0]) % 1 === 0 ? board[0][0] : -1;

for (let r = 0; r < N; r++) {
    for (let c = 0; c < M; c++) {
        for (let dr = -N + 1; dr < N; dr++) {
            for (let dc = -M + 1; dc < M; dc++) {
                if (dr === 0 && dc === 0) continue;
                
                let nums = [board[r][c]];
                let nr = r + dr;
                let nc = c + dc;
                
                while (nr >= 0 && nr < N && nc >= 0 && nc < M) {
                    nums.push(nums[nums.length - 1] * 10 + board[nr][nc]);
                    nr += dr;
                    nc += dc;
                }
                
                for (let n of nums) {
                    checkValidMaxSquare(n);
                }
            }
        }
    }
}

function checkValidMaxSquare(n) {
    const n_reverse = +n.toString().split('').reverse().join('');
    
    if (n > max && Math.sqrt(n) % 1 === 0) max = n;
    if (n_reverse > max && Math.sqrt(n_reverse) % 1 === 0) max = n_reverse;
}

console.log(max);