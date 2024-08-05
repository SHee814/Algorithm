const N = +require('fs').readFileSync(0, 'utf-8');

if (N <= 1) {
    console.log(1);
} else {
    let result = 1;
    
    for (let i = 2; i <= N; i++) {
        result *= i;    
    }
    
    console.log(result);
}