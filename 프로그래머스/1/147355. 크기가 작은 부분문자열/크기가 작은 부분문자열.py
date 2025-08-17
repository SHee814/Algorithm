def solution(t, p):
    int_p = int(p)
    count = 0
    lt = len(t)
    lp = len(p)
    
    for i in range(lt-(lp-1)):
        n = int(t[i:i+lp])
        count += 1 if n <= int_p else 0
        
    return count