const words = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').sort();
const count = new Map();

for (let word of words) {
    count.set(word, (count.get(word) || 0) + 1);
}

function check(puzzle) {
    const verticalWords = ['', '', ''];
    
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            verticalWords[i] += puzzle[j][i];
        }
    }
    
    const totalWords = [...puzzle, ...verticalWords].sort();
    let flag = true;
    
    for (let k = 0; k < 6; k++) {
        if (totalWords[k] !== words[k]) {
            flag = false;
            break;
        };
    }
    
    return flag;
}

function dfs(puzzle) {
    if (puzzle.length === 3) {
        if (check(puzzle)) {
            console.log(puzzle.join('\n'));
            process.exit();
        } else {
            return;
        }
    }
    
    for (let word of words) {
        if (count.get(word) < 1) continue;
        
        puzzle.push(word);
        count.set(word, count.get(word) - 1);
        dfs(puzzle);
        count.set(word, count.get(word) + 1);
        puzzle.pop();
    }
}

dfs([]);
console.log(0);