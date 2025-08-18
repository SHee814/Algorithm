def solution(sequence, k):
    N = len(sequence)
    result = []
    ss = sequence[0]
    sx = 0
    ex = 0
    
    while sx < N:
        while ex < N-1 and ss < k:
            ex += 1
            ss += sequence[ex]

        if ss == k:
            result.append([sx, ex])

        ss -= sequence[sx]
        sx += 1
    
    return sorted(result, key = lambda x: x[1] - x[0])[0]

        
            
        
            