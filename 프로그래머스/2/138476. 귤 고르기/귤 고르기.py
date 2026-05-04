def solution(k, tangerine):
    count = {}
    
    for t in tangerine:
        count[t] = count.get(t, 0) + 1
        
    T = sorted([v for v in count.values()], reverse=True)
    size = 0
    
    for i, t in enumerate(T):
        size += t
        
        if size >= k:
            return i+1