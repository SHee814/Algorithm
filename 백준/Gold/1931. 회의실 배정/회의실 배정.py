import sys

N = int(input())
M = [list(map(int, row.split())) for row in sys.stdin.readlines()]
M.sort(key = lambda x: (x[1], x[0]))
t = 0
c = 0

for s, e in M:
    if t <= s:
        c += 1
        t = e
        
print(c)