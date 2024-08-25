const [x, y, w, h] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
console.log(Math.min(Math.min(x, Math.abs(w - x)), Math.min(y, Math.abs(h - y))));