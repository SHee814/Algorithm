const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const n = +input[0];
const logs = input.slice(1).map(x => x.split(' '));
const set = new Set();

for (let log of logs) {
    const [name, action] = log;
    
    if (action === 'enter') {
        set.add(name);
    } else {
        set.delete(name);
    }
}

const answer = Array.from(set).sort().reverse();

console.log(answer.join('\n'));