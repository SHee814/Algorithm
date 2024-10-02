const [A, B] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const win = new Map([[0, 2], [2, 5], [5, 0]]);

if (A === B) {
    console.log('=');
} else if (!win.has(A) && !win.has(B)) {
    console.log('=')
} else if (!win.has(A)) {
    console.log('<');
} else if (!win.has(B)) {
    console.log('>');
} else if (win.get(A) === B) {
    console.log('>');
} else {
    console.log('<');
}