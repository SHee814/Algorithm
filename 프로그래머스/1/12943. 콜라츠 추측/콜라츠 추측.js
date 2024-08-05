function solution(num) {
    let n = num;
    let count = 0;
    
    if (n === 1) return 0;
    
    do {
        if (n % 2) {
            n = n * 3 + 1;
        } else {
            n /= 2;
        }
        
        count++;
    } while (n > 1 && n !== num);
    
    return (n === num || count > 500) ? -1 : count;
}