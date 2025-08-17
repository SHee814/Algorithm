T = int(input())

for _ in range(T):
    M, N, K = map(int, input().split())
    F = [[0 for m in range(M)] for n in range(N)]
    visited = [[False for _ in range(M)] for _ in range(N)]
    di = [0, 1, 0, -1]
    dj = [1, 0, -1, 0]
    count = 0
    
    for k in range(K):
        x, y = map(int, input().split())
        F[y][x] = 1
        
    for i in range(N):
        for j in range(M):
            if F[i][j] == 0 or visited[i][j]:
                continue
                
            count += 1
            stack = [[i, j]]
            
            while len(stack) > 0:
                ci, cj = stack.pop()
                visited[ci][cj] = True
                
                for k in range(4):
                    ni = ci + di[k]
                    nj = cj + dj[k]

                    if (ni >= 0 and nj >= 0 and ni < N and nj < M
                        and not visited[ni][nj] and F[ni][nj] == 1):
                        stack.append([ni, nj])
                        
    print(count)