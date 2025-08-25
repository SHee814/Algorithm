N, M = map(int, input().split())
visited = set()

def dfs(x, seq):
    visited.add(x)
    seq.append(x)
    
    if len(seq) == M:
        print(*seq)
        
    for v in range(x+1, N+1):
        if v not in visited:
            dfs(v, seq)

    visited.remove(x)
    seq.pop()
            
for i in range(1, N+1):
    dfs(i, [])
