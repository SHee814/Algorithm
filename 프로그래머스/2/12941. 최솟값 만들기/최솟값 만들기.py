def solution(A,B):
    sA = sorted(A)
    sB = sorted(B, reverse=True)
    result = sum([a * b for a, b in zip(sA, sB)])
    return result