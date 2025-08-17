from collections import deque
import sys

M, N, H = map(int,input().split())
box = [[list(map(int, input().split())) for _ in range(N)] for _ in range(H)]
unriped = 0
riped = deque()
day = 0
di = [1, -1, 0, 0, 0, 0]
dj = [0, 0, 0, 0, 1, -1]
dk = [0, 0, 1, -1, 0, 0]

for h in range(H):
    for n in range(N):
        for m in range(M):
            if box[h][n][m] == 0:
                unriped += 1
            if box[h][n][m] == 1:
                riped.append([h, n, m])

if unriped == 0:
    print(0)
    sys.exit()

while unriped > 0 and len(riped) > 0:
    ck, ci, cj = riped.popleft()

    for l in range(6):
        ni = ci + di[l]
        nj = cj + dj[l]
        nk = ck + dk[l]

        if (ni >= 0 and nj >= 0 and nk >= 0
           and ni < N and nj < M and nk < H
           and box[nk][ni][nj] == 0):
            box[nk][ni][nj] = box[ck][ci][cj] + 1
            day = box[nk][ni][nj]
            riped.append([nk, ni, nj])
            unriped -= 1

print(day-1 if unriped == 0 else -1)