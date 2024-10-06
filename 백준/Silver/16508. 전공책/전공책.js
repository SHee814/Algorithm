const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const T = input[0];
const N = +input[1];
const bookList = input.slice(2).map(book => book.split(' ')).sort((a, b) => +a[0] - +b[0]);
const charCountList = Array.from(new Array(N), () => new Array(26).fill(0));

for (let i = 0; i < N; i++) {
    const title = bookList[i][1];
    const charCount = charCountList[i];
    
    for (let s = 0; s < title.length; s++) {
        charCount[title[s].charCodeAt() - 65]++;
    }
    
    bookList[i][0] = +bookList[i][0];
}

function sumCount(x, y) {
    const z = new Array(26).fill(0);
    
    for (let i = 0; i < 26; i++) {
        z[i] = x[i] + y[i];    
    }
    
    return z;
}

function isTargetCompletable(totalCharCount) {
    const count = totalCharCount.slice();
    
    for (let t of T) {
        const ti = t.charCodeAt() - 65;
        
        if (count[ti] === 0) {
            return false;
        }
        
        count[ti]--;
    }
    
    return true;
}

let minCost = Infinity;

function typography(index, totalCharCount, cost) {
    if (isTargetCompletable(totalCharCount)) {
        minCost = Math.min(minCost, cost);
        return;
    }
    
    for (let i = index; i < N; i++) {
        const charCount = charCountList[i];
        const newCost = cost + bookList[i][0];
        
        if (newCost >= minCost) continue;
        
        typography(i + 1, sumCount(totalCharCount, charCount), newCost);
    }
}

for (let i = 0; i < N; i++) {
    typography(i + 1, charCountList[i], bookList[i][0]);
}

console.log(minCost === Infinity ? -1 : minCost);