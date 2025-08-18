import math

def solution(n, wires):    
    min_diff = 100
    
    for i in range(len(wires)):
        W = [[] for _ in range(n)]
        
        for j in range(len(wires)):
            if i == j:
                continue
                
            s, e = map(int, wires[j])
            W[s-1].append(e-1)
            W[e-1].append(s-1)
            
        stack = [0]
        visited = set([0])

        while len(stack) > 0:
            cn = stack.pop()

            for nn in W[cn]:
                if nn in visited:
                    continue

                visited.add(nn)
                stack.append(nn)
                    
        lv = len(visited)
        min_diff = min(min_diff, abs(n-(2*lv)))
            
    return min_diff