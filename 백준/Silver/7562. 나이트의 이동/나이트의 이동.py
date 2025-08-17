from collections import deque

T = int(input())

for _ in range(T):
    N = int(input())
    ii, ij = map(int,input().split())
    ti, tj = map(int,input().split())
    board = [[0 for _ in range(N)] for _ in range(N)]
    board[ii][ij] = 1
    di = [1, 1, -1, -1, 2, 2, -2, -2]
    dj = [2, -2, 2, -2, 1, -1, 1, -1]
    Q = deque([[ii, ij]])

    while board[ti][tj] == 0 and len(Q) > 0:
        ci, cj = Q.popleft()

        for k in range(8):
            ni = ci + di[k]
            nj = cj + dj[k]

            while (ni >= 0 and nj >= 0 and ni < N and nj < N
                  and board[ni][nj] == 0):
                board[ni][nj] = board[ci][cj] + 1
                Q.append([ni, nj])

    print(board[ti][tj] - 1)