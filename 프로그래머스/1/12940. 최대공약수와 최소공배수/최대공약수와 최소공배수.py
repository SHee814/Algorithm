def solution(n, m):
    gcd = 1

    for i in range(n, 1, -1):
        if n % i == 0 and m % i == 0:
            gcd = i
            break     
    
    lcm = n * m / gcd
    
    return [gcd, lcm]