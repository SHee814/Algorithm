def solution(A,B):
    answer = 0
    sA = sorted(A)
    sB = sorted(B, reverse=True)
    for i in range(len(A)):
        a = sA[i]
        b = sB[i]
        answer += a * b
    
    return answer