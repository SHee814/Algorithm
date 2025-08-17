from collections import deque

N, M = map(int, input().split())
O = {}
board = [0 for _ in range(100)]
Q = deque([0])

for line in range(N+M):
    s, e = map(int, input().split())
    O[s-1] = e-1

while board[99] == 0 and len(Q) > 0:
    cx = Q.popleft()

    for dx in range(1, 7):
        nx = cx + dx

        if nx < 100 and board[nx] == 0:
            board[nx] = board[cx] + 1

            if nx in O:
                while nx in O:
                    nnx = O[nx]
    
                    if (board[nnx] != 0):
                        break
                        
                    board[nnx] = board[nx]
                    nx = nnx
                    Q.append(nx)
            else:
                Q.append(nx)

print(board[99])