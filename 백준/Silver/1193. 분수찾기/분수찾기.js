const X = +require('fs').readFileSync(0, 'utf-8').toString();
let line = 1;
let x = 1;
let a = 1;
let b = 1;

while (x < X) {    
    a += line % 2 > 0 ? -1 : +1;
    
    if (a < 1 || a > line) {
        line++;
        a = line % 2 > 0 ? line : 1;
    }
    
    b = line + 1 - a;
    x++;
}

console.log(`${a}/${b}`);