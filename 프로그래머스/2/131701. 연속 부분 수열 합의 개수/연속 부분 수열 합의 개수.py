def solution(elements):
    results = set()
    k = len(elements)
    
    for si in range(0, k):
        s = 0
        
        for di in range(0, k-1):
            s += elements[(si+di)%k]
            results.add(s)
            
    results.add(sum(elements))
    
    return len(results)