import sys

board = [[1 for i in range(100)] for j in range(100)]
N = int(input())
result = 0

for line in sys.stdin:
    x, y = map(int, line.split())
    for i in range(x - 1, x + 9):
        for j in range(y - 1, y + 9):
            result += board[i][j]
            board[i][j] = 0

print(result)