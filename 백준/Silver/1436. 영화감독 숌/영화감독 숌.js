const N = +require('fs').readFileSync(0, 'utf-8');
let series = 0;
let num = 665;

while (series < N) {
    const regex = new RegExp('666');
    
    num++
    
    if (num.toString().match(regex)) series++;
}

console.log(num);