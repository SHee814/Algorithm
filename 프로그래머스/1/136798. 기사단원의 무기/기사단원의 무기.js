function solution(number, limit, power) {
    let result = 0;
    
    function getDivisor(n) {
        let count = 0;
        const sqrt = Math.sqrt(n);
        
        for (let i = 1; i <= sqrt; i++) {
            if (n % i === 0) {
                count += sqrt === i ? 1 : 2;
            }
        }
        
        return count;
    }
    
    for (let i = 1; i <= number; i++) {
        const divisor = getDivisor(i);
        const attack = divisor > limit ? power : divisor;
        
        result += attack;
    }
    
    return result;
}