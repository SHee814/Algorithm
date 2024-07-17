const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ');
let [y, m, d] = input[0].split('-').map(Number);

d += +input[1] - 1;

while (d > getDaysOfMonth(y, m)) {
    d -= getDaysOfMonth(y, m);
    m++;
    
    if (m > 12) {
        y++;
        m %= 12;
    }
}

console.log(`${y}` + '-' + `${m}`.padStart(2, '0') + '-' + `${d}`.padStart(2, '0'));

function getDaysOfMonth(y, m) {
    if (m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12) {
        return 31;
    } if (m !== 2) {
        return 30;
    } else {
        if (y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0)) return 29;
        return 28;
    }
}