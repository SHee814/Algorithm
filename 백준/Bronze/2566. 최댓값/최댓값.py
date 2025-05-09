import sys

board = []

for line in sys.stdin:
    row = list(map(int, line.rstrip().split()))
    board.append(row)

max_value = -1
x = 0
y = 0

for i in range(9):
    for j in range(9):
        current_value = board[i][j]
        
        if max_value < current_value:
            max_value = current_value
            x = i
            y = j

print(max_value)
print(f'{x+1} {y+1}')
        