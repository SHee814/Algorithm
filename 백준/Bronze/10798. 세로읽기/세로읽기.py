import sys

board = []
max_length = 0

for line in sys.stdin:
    s = list(line.rstrip())
    board.append(s)
    max_length = max(max_length, len(s))

result = ''

for i in range(max_length):
    for j in range(5):
        if (i >= len(board[j])):
            continue

        result += board[j][i]

print(result)