const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const B = input[1].split(' ').map(Number);
const noForwarding = [];

for (let i = 0; i < N; i++) {
    if (B[i] === i + 1) {
        noForwarding.push(i);
    }
}

const count = Math.ceil(noForwarding.length);

while (noForwarding.length >= 2) {
    const p = noForwarding.pop();
    const q = noForwarding.pop();
    
    [B[p], B[q]] = [q + 1, p + 1];
}

if (noForwarding.length > 0) {
    const r = noForwarding.pop();
    
    B[r] = B.findIndex((_, i) => r !== i) + 1;
}

console.log(`${count}\n${B.join(' ')}`);