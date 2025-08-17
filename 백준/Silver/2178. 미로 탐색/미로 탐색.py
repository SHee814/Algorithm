from collections import deque

N, M = map(int, input().split())
visited = [[0 for _ in range(M)] for _ in range(N)]
maze = [input() for _ in range(N)]
queue = deque([[0, 0]])
di = [1, 0, -1, 0]
dj = [0, 1, 0, -1]
visited[0][0] = 1
repeat_flag = True

while repeat_flag and len(queue) > 0:
    ci, cj = queue.popleft()
    
    for k in range(4):
        ni = ci + di[k]
        nj = cj + dj[k]

        if (ni >= 0 and nj >= 0 and ni < N and nj < M
           and visited[ni][nj] == 0 and maze[ni][nj] == '1'):
            visited[ni][nj] = visited[ci][cj] + 1
            queue.append([ni, nj])
            
            if ni == N-1 and nj == M-1:
                repeat_flag = False

print(visited[N-1][M-1])