function solution(n, m) {
    function euclide(p, q) {
        if (p % q === 0) return q;
        
        return euclide(q, p % q);
    }
    
    const gcd = euclide(n, m);
    const lcm = n * m / gcd;
    
    return [gcd, lcm];
}