def solution(maps):
    N = len(maps)
    M = len(maps[0])
    visited = [[False for _ in range(M)] for _ in range(N)]
    di = [1, 0, -1, 0]
    dj = [0, 1, 0, -1]
    result = []
    
    for i in range(N):
        for j in range(M):
            if visited[i][j] or maps[i][j] == 'X':
                continue
                
            stack = [[i, j]]
            visited[i][j] = True
            food = 0
            
            while len(stack) > 0:
                ci, cj = stack.pop()
                food += int(maps[ci][cj])
                
                for k in range(4):
                    ni = ci + di[k]
                    nj = cj + dj[k]
                    
                    if (ni >= 0 and nj >= 0 and ni < N and nj < M
                        and visited[ni][nj] == False and maps[ni][nj].isdigit()):
                        visited[ni][nj] = True
                        stack.append([ni, nj])
            
            if food > 0:
                result.append(food)

    return sorted(result) if len(result) > 0 else [-1]