function solution(n) {
    const primeNumber = [2];
    
    for (let i = 3; i <= n; i++) {
        let isPrimeNumber = true;
        
        for (let pn of primeNumber) {
            if (pn > Math.sqrt(i)) break;
            if (i % pn === 0) {
                isPrimeNumber = false;
                break;
            }
        }
        
        if (isPrimeNumber) primeNumber.push(i);
    }
    
    return primeNumber.length;
}