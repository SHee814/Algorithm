def solution(n):
    result = 0
    
    while n > 1:
        result += n % 2
        n //= 2
        
    result += n
    return result