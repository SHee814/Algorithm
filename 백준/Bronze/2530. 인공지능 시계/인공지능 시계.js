const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [h, m, s] = input[0].split(' ').map(Number);
const t = +input[1];
const dh = parseInt(t / 3600);
const dm = parseInt((t % 3600) / 60);
const ds = t % 60;
const ts = s + ds;
const tm = m + dm + parseInt(ts / 60);
const th = h + dh + parseInt(tm / 60);

console.log(`${th % 24} ${tm % 60} ${ts % 60}`);