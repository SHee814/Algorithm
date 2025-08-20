def solution(k, dungeons):
    N = len(dungeons)
    visited = [False] * N
    max_v = 0
    
    def dfs(f, count):
        nonlocal max_v
        max_v = max(max_v, count)
        
        for i in range(N):
            if dungeons[i][0] <= f and visited[i] == False:
                visited[i] = True
                dfs(f-dungeons[i][1], count+1)
                visited[i] = False

    for i in range(N):
        visited[i] = True
        dfs(k-dungeons[i][1], 1)
        visited[i] = False
        
    return max_v