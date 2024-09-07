const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const S = input[1];
const vowelSet = new Set(['A', 'E', 'I', 'O', 'U']);
const removeIndexSet = new Set();

function generateName() {
    let name = '';
    
    for (let i = 0; i < N; i++) {
        if (!removeIndexSet.has(i)) name += S[i];
    }
    
    return name;
}

function checkName(name) {
    const len = name.length;
    
    if (name[len - 2] !== 'A' || name[len - 3] !== 'A') return false;
    if (vowelSet.has(name[len - 1])) return false;
    
    return true;
}

function dfs(si) {
    if (removeIndexSet.size === N - M) {
        const name = generateName(removeIndexSet);
        
        if (checkName(name)) {
            console.log(`YES\n${name}`);
            process.exit();
        }
        
        return;
    }
    
    for (let i = si; i < N; i++) {
        removeIndexSet.add(i);
        dfs(i + 1);
        removeIndexSet.delete(i);
    }
}

dfs(0);
console.log('NO');