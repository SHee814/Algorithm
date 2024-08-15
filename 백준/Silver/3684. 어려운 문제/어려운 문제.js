const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const T = input[0];
const X_odd = input.slice(1);
const X_even = [];
const MOD = 10001;

function calculate(p, q, x) {
    return (p * x + q) % MOD;
}

function decideVariables() {
    for (let i = 0; i < 10000; i++) {
        for (let j = 0; j < 10000; j++) {
            let flag = true;
            const limit = (T === 2) ? 1 : 2;
            
            for (let t = 0; t < limit; t++) {
                const xi = X_odd[t];
                const xo = X_odd[t + 1];
                
                if (calculate(i, j, calculate(i, j, xi)) !== xo) {
                    flag = false;
                    break;
                }
            }
            
            if (flag) return [i, j];
        }
    }
}

if (T === 1) {
    console.log(0);
} else {
    const [a, b] = decideVariables();
    
    for (let i = 0; i < T; i++) {
        X_even.push(calculate(a, b, X_odd[i]));
    }
    
    console.log(X_even.join('\n'));
}