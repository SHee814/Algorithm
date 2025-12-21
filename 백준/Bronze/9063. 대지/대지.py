import sys

N = int(input())
M = [list(map(int,row.split())) for row in sys.stdin.readlines()]
min_x = 10000
min_y = 10000
max_x = -10000
max_y = -10000
for x,y in M:
    min_x = min(x, min_x)
    min_y = min(y, min_y)
    max_x = max(x, max_x)
    max_y = max(y, max_y)
    
W = max_x - min_x
H = max_y - min_y
print(W * H)