import sys

board = list(map(lambda row: row.rstrip(), sys.stdin.readlines()))
w = max(map(lambda row: len(row), board))
h = len(board)
result = ''

for c in range(0, w):
    for r in range(0, h):
        if (len(board[r]) > c):
            result += board[r][c]

print(result)