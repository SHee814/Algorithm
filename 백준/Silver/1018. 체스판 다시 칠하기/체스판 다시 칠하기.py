import sys

N, M = map(int, input().split())
board = [line.rstrip() for line in sys.stdin]
min_cnt = 32

for n in range(N - 7):
    for m in range(M - 7):
        cnt = 0
        
        for i in range(8):
            for j in range(8):
                if (i + j) % 2 == 0 and not board[n + i][m + j] == board[n][m]:
                    cnt += 1
                    
                if (i + j) % 2 == 1 and board[n + i][m + j] == board[n][m]:
                    cnt += 1

        min_cnt = min(64 - cnt, cnt, min_cnt)

print(min_cnt)