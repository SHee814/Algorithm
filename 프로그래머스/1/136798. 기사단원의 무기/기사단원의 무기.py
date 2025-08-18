import math

def solution(number, limit, power):
    D = [0]
    
    for x in range(1, number+1):
        count = 0
        
        for i in range(1, int(math.sqrt(x))+1):
            if x % i == 0:
                count += 1 if i * i == x else 2
                
        D.append(count)
        
    P = [D[x] if D[x] <= limit else power for x in range(1, number+1)]
    return sum(P)
    
    
            
