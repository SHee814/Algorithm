from collections import deque
import sys

M, N = map(int,input().split())
box = [list(map(int, input().split())) for _ in range(N)]
count_unriped = 0
queue_riped = deque()
day = 0
di = [1, 0, -1, 0]
dj = [0, 1, 0, -1]

for i in range(N):
    for j in range(M):
        if box[i][j] == 0:
            count_unriped += 1
        if box[i][j] == 1:
            queue_riped.append([i, j])

if (count_unriped == 0):
    print(0)
    sys.exit()

while count_unriped > 0 and len(queue_riped) > 0:
    ci, cj = queue_riped.popleft()

    for k in range(4):
        ni = ci + di[k]
        nj = cj + dj[k]

        if (ni >= 0 and nj >= 0 and ni < N and nj < M
           and box[ni][nj] == 0):
            day = box[ci][cj] + 1
            box[ni][nj] = day
            count_unriped -= 1
            queue_riped.append([ni, nj])

print(day-1 if count_unriped == 0 else -1)