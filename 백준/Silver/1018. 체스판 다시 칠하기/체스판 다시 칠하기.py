import sys

N, M = map(int, input().split())
board = [[1 if x == 'W' else 0 for x in row.rstrip()] for row in sys.stdin.readlines()]
mv = N * M

def validation(r, c):
    count = 0
    
    for i in range(8):
        for j in range(8):
            if (i+j) % 2 != board[i+r][j+c]:
                count += 1
                
    return count

for n in range(N-7):
    for m in range(M-7):
        v = validation(n, m)
        mv = min(v, 64-v, mv)
        
print(mv)