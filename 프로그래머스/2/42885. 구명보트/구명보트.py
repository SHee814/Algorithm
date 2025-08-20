def solution(people, limit):
    P = sorted(people)
    i = 0
    j = len(P)-1
    count = 0
    
    while i <= j:
        count += 1
        if (i == j):
            break
        
        if (P[i]+P[j] <= limit):
            i += 1
            j -= 1
        else:
            j -= 1
            
    return count