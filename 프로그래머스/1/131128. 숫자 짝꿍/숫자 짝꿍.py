def solution(X, Y):
    C = {}
    P = []
    
    for x in X:
        C[x] = 1 + (C[x] if x in C else 0)
        
    for y in Y:
        if y in C and C[y] > 0:
            C[y] -= 1
            P.append(y)
                
    if len(P) == 0:
        return '-1'
    
    if all([x == '0' for x in P]):
        return '0'
    
    return ''.join(sorted(P, reverse=True))