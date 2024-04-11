const n = BigInt(require('fs').readFileSync(0, 'utf-8'));
let count = 0n;

for (let i = 1n; i <= n - 2n; i += 1n) {
    count += i * ((n - 1n) - i);
}

console.log(`${count}\n3`);