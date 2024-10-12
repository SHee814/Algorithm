const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const puzzle = input.slice(1).map(row => row.split(' ').map(Number));
let blankLineSum = [0];
let normalLineSum = [0];
let upDiagonalSum = 0;
let downDiagonalSum = 0;
let upDiagHasBlank = false;
let downDiagHasBlank = false;

function close() {
    console.log(-1);
    process.exit();
}

for (let i = 0; i < N; i++) {
    let rowSum = 0;
    let colSum = 0;
    let rowHasBlank = false;
    let colHasBlank = false;
    
    downDiagonalSum += puzzle[i][i];
    upDiagonalSum += puzzle[N - i - 1][i];
    
    if (puzzle[i][i] === 0) {
        downDiagHasBlank = true;
    }
    
    if (puzzle[N - i - 1][i] === 0) {
        upDiagHasBlank = true;
    }
    
    for (let j = 0; j < N; j++) {
        rowSum += puzzle[i][j];
        colSum += puzzle[j][i];
        
        if (puzzle[i][j] === 0) {
            rowHasBlank = true;
        }
        
        if (puzzle[j][i] === 0) {
            colHasBlank = true;
        }
    }
    
    let saveRowSum = rowHasBlank ? blankLineSum : normalLineSum;
    
    if (saveRowSum[0] === 0 || saveRowSum[0] === rowSum) {
        saveRowSum[0] = rowSum;
    } else {
        close();
    }
    
    let saveColSum = colHasBlank ? blankLineSum : normalLineSum;
    
    if (saveColSum[0] === 0 || saveColSum[0] === colSum) {
        saveColSum[0] = colSum;
    } else {
        close();
    }
}

let saveUpDiagSum = upDiagHasBlank ? blankLineSum : normalLineSum;

if (saveUpDiagSum[0] === 0 || saveUpDiagSum[0] === upDiagonalSum) {
    saveUpDiagSum[0] = upDiagonalSum;
} else {
    close();
}

let saveDownDiagSum = downDiagHasBlank ? blankLineSum : normalLineSum;

if (saveDownDiagSum[0] === 0 || saveDownDiagSum[0] === downDiagonalSum) {
    saveDownDiagSum[0] = downDiagonalSum;
} else {
    close();
}

console.log(normalLineSum - blankLineSum);