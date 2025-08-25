N, M = map(int, input().split())
visited = set()

def dfs(x, seq):
    visited.add(x)
    seq.append(x)
    
    if len(seq) == M:
        print(*seq)
    
    for v in range(1, N+1):
        if v in visited:
            continue

        dfs(v, seq)
        
    seq.pop()
    visited.remove(x)
        
for i in range(1, N+1):
    dfs(i, [])
   