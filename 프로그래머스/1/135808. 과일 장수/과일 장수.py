def solution(k, m, score):
    S = sorted(score, reverse=True)
    P = 0
    idx = 0
    
    while idx <= len(S) - m:
        P += min(S[idx:idx+m]) * m
        idx = idx + m
        
    return P