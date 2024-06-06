const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const K = +input[1];
const L = +input[2 + K];
const apples = input.slice(2, 2 + K).map(a => a.split(' ').map(Number));
const rotates = input.slice(2 + K + 1).map(r => r.split(' '));

function generateKey(x, y) {
    return `${x} ${y}`;
}

class Head {
    constructor(x, y) {
        this.r = x;
        this.c = y;
        this.next = null;
    }
}

class Snake {
    constructor() {
        this.init = new Head(0, 0);
        this.head = this.init;
        this.tail = this.init;
        this.direction = 1;
        this.set = new Set();
        this.set.add(generateKey(0, 0));
    }
    
    front(x, y) {
        const newHead = new Head(x, y);
        this.head.next = newHead;
        this.head = newHead;
        this.set.add(generateKey(x, y));
    }
    
    back() {
        this.set.delete(generateKey(this.tail.r, this.tail.c));
        this.tail = this.tail.next;
    }
    
    move(x, y) {
        this.front(x, y);
        this.back();
    }
    
    eat(x, y) {
        this.front(x, y);
    }
    
    rotate(c) {
        const rotateDirection = c === 'D' ? 1 : -1;
        this.direction = (this.direction + rotateDirection + 4) % 4;
    }
}

const map = Array.from(new Array(N), () => new Array(N).fill('.'));
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
const snake = new Snake();
let rotateIndex = 0;
let time = 0;

for (let [r, c] of apples) {
    map[r - 1][c - 1] = 'A';
}

while (true) {
    const nr = snake.head.r + dr[snake.direction];
    const nc = snake.head.c + dc[snake.direction];
    
    if (nr < 0 || nr >= N
        || nc < 0 || nc >= N
        || snake.set.has(generateKey(nr, nc))) {
        console.log(++time);
        break;
    }
    
    if (map[nr][nc] === 'A') {
        snake.eat(nr, nc);
        map[nr][nc] = '.';
    } else {
        snake.move(nr, nc);
    }
    
    time++;
    
    if (rotateIndex >= L) continue;
    
    const [rotateTime, rotateDirection] = rotates[rotateIndex];
    
    if (time === +rotateTime) {
        snake.rotate(rotateDirection);
        rotateIndex++;
    }
}