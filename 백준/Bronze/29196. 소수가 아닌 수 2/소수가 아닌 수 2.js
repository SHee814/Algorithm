const k = require('fs').readFileSync(0, 'utf-8');
const multiply = 10 ** (k.length - 2);

console.log(`YES\n${k * multiply} ${multiply}`);
