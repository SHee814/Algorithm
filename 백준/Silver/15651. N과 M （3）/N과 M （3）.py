N, M = map(int, input().split())

def dfs(x, seq):
    seq.append(x)
    
    if len(seq) == M:
        print(*seq)
        
    for v in range(1, N+1):
        if (len(seq) < M):
            dfs(v, seq)
        
    seq.pop()
    
for i in range(1, N+1):
    dfs(i, [])