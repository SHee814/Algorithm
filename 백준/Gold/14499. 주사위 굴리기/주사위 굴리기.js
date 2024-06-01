const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(line => line.split(' ').map(Number));
const [N, M, x, y, K] = input[0];
const map = input.slice(1, 1 + N);
const orders = input[N + 1];

class Dice {
    constructor() {
        // top, east, bottom, west
        this.row = new Array(4).fill(0);
        // top, north, bottom, south
        this.col = new Array(4).fill(0);
    }
    
    copy(x) {
        this.row[2] = x;
        this.col[2] = x;
    }
    
    // 동쪽은 1, 서쪽은 2, 북쪽은 3, 남쪽은 4
    roll(dir) {
        if (dir <= 2) {
            const move = (dir % 2) ? -1 : 1;
            const newRow = this.row.map((x, i) => this.row[(move + i + 4) % 4]);
            this.row = newRow;
            [this.col[0], this.col[2]] = [this.row[0], this.row[2]];
        } else if (dir > 2) {
            const move = (dir % 2) ? -1 : 1;
            const newCol = this.col.map((x, i) => this.col[(move + i + 4) % 4]);
            this.col = newCol;
            [this.row[0], this.row[2]] = [this.col[0], this.col[2]];
        }
    }
    
    getTop() {
        return this.row[0];
    }
    
    getBottom() {
        return this.row[2];
    }
}

const dice = new Dice();
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];
let [cx, cy] = [x, y];
let answer = '';

for (let order of orders) {
    const [nx, ny] = [cx + dx[order - 1], cy + dy[order - 1]];
    
    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
    
    dice.roll(order);
    
    if (map[nx][ny] === 0) {
        map[nx][ny] = dice.getBottom();
    } else {
        dice.copy(map[nx][ny]);
        map[nx][ny] = 0;
    }
    
    [cx, cy] = [nx, ny];
    answer += `${dice.getTop()}\n`;
}

console.log(answer);