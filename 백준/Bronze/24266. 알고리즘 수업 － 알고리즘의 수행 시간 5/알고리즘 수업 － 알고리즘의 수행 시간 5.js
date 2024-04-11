const n = BigInt(require('fs').readFileSync(0, 'utf-8'));

console.log(`${n ** 3n}\n3`);