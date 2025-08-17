def solution(numbers):
    N = len(numbers)
    M = 0
    
    for i in range(N-1):
        for j in range(i+1,N):
            M = max(M, numbers[i] * numbers[j])
    
    return(M)