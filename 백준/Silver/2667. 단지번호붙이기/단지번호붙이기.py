N = int(input())
M = [input() for _ in range(N)]
visited = [[False for _ in range(N)] for _ in range(N)]
count = []
di = [1, 0, -1, 0]
dj = [0, 1, 0, -1]

def dfs(si, sj, house):
    stack = [[si, sj]]
    
    while len(stack) > 0:
        ci, cj = stack.pop()
        
        if visited[ci][cj]:
            continue
            
        visited[ci][cj] = True
        house[0] += 1
        
        for k in range(4):
            ni = ci + di[k]
            nj = cj + dj[k]
            
            if (ni >= 0 and ni < N and nj >= 0 and nj < N
                and not visited[ni][nj] and M[ni][nj] == '1'):
                stack.append([ni, nj])
                
for i in range(N):
    for j in range(N):
        if M[i][j] == '0' or visited[i][j]:
            continue

        house = [0]
        dfs(i, j, house)
        count.append(house[0])

print(len(count))
print('\n'.join(map(str, sorted(count))))