const [x, y] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ');
const index = new Date(`2007-${x}-${y}`).getDay();
const indexToName = {
    0: 'SUN',
    1: 'MON',
    2: 'TUE',
    3: 'WED',
    4: 'THU',
    5: 'FRI',
    6: 'SAT'
};

console.log(indexToName[index]);