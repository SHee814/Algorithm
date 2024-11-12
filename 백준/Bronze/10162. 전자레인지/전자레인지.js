let T = +require('fs').readFileSync(0, 'utf-8');
const buttons = [300, 60, 10];
const count = [0, 0, 0];
let i = 0;

while (T > 0) {
    if (T < 10) {
        console.log(-1);
        process.exit();
    }
    
    const button = buttons[i];
    
    count[i] = Math.floor(T / button);
    T %= button;
    i++;
}

console.log(count.join(' '));