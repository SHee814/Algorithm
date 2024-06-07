const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const state_origin = input.slice(1).map(x => x.split(' ').map(Number));
let max = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        max = Math.max(max, state_origin[i][j]);        
    }
}

class Board {
    constructor(state) {
        this.state = state.map(row => row.slice());
    }
    
    arrange(line) {
        const line_filtered = line.filter(x => x !== 0);
        
        while (line_filtered.length < N) {
            line_filtered.push(0);
        }
        
        return line_filtered;
    }
    
    slide(line) {
        let line_arranged = this.arrange(line);
        let index = 0;
            
        while (index < N) {
            if (line_arranged[index] === 0) {
                index++;
                continue;
            }
                
            if (line_arranged[index] === line_arranged[index + 1]) {
                line_arranged[index] *= 2;
                line_arranged[index + 1] = 0;
                line_arranged = this.arrange(line_arranged);
                max = Math.max(line_arranged[index], max);
            }
                
            index++;
        }
        
        return line_arranged;
    }
    
    toTop() {
        for (let i = 0; i < N; i++) {
            const column = [];
            
            for (let j = 0; j < N; j++) {
                column.push(this.state[j][i]);
            }
            
            const result = this.slide(column);
            
            for (let j = 0; j < N; j++) {
                this.state[j][i] = result[j];
            }
        }
    }
    
    toRight() {
        for (let i = 0; i < N; i++) {
            const result = this.slide(this.state[i].reverse());
            this.state[i] = result.reverse();
        }
    }
    
    toBottom() {
        for (let i = 0; i < N; i++) {
            const column = [];
            
            for (let j = 0; j < N; j++) {
                column.push(this.state[j][i]);
            }
            
            const result = this.slide(column.reverse());
            
            for (let j = 0; j < N; j++) {
                this.state[j][i] = result[N - 1 - j];
            }
        }
    }
    
    toLeft() {
        for (let i = 0; i < N; i++) {
            const result = this.slide(this.state[i]);
            this.state[i] = result;
        }
    }
    
    slideByIndex(x) {
        if (x === 0) {
            this.toTop();
        } else if (x === 1) {
            this.toRight();
        } else if (x === 2) {
            this.toBottom();
        } else {
            this.toLeft();
        }
        
        return this.state;
    }    
}

move(state_origin, 0);
console.log(max);

function move(state, count) {
    if (count === 5) return;
        
    for (let i = 0; i < 4; i++) {
        const currentBoard = new Board(state);
        const state_next = currentBoard.slideByIndex(i);
        
        move(state_next, count + 1);
    }
}