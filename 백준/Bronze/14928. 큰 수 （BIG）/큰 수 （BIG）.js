const N = BigInt(require('fs').readFileSync(0, 'utf-8'));
const MOD = 20000303n;
console.log((N % MOD).toString());