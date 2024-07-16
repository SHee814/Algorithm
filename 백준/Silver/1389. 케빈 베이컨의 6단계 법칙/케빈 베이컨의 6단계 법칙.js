const fs = require('fs');
const input = fs
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(x => x.split(' ').map(Number));
const [N, M] = input[0];
const relationship = Array.from(new Array(N), () => []);
let minStageSum = Infinity;
let targetUser = Infinity;

for (let [a, b] of input.slice(1)) {
    relationship[a - 1].push(b);
    relationship[b - 1].push(a);
}

for (let n = 1; n <= N; n++) {
    const memo = new Array(N).fill(-1);
    const queue = [n];
    let index = 0;
    memo[n - 1] = 0;
    
    while (index < queue.length) {
        const current = queue[index++];
        const friends = relationship[current - 1];
        
        for (let f of friends) {
            if (memo[f - 1] >= 0) continue;
            
            memo[f - 1] = memo[current - 1] + 1;
            queue.push(f);
        }
    }
    
    const stageSum = memo.reduce((acc, x) => acc + x, 0);
    
    if (stageSum === minStageSum) {
        targetUser = Math.min(targetUser, n);
    }
    
    if (stageSum < minStageSum) {
        minStageSum = stageSum;
        targetUser = n;
    }
}

console.log(targetUser);