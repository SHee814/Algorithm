const n = +require('fs').readFileSync(0, 'utf-8');
const set = new Set();

function dfs(x, level) {
    if (level === n) {
        set.add(x);
        return;
    }
    
    for (let i = 1; i <= 9; i++) {
        dfs(x * i, level + 1);
    }
};

for (let i = 1; i <= 9; i++) {
    dfs(i, 1);
}

console.log(set.size);