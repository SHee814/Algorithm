import sys

T = int(input())
paper = [[False for _ in range(100)] for _ in range(100)]
area = 0

for line in sys.stdin:
    x, y = map(int, line.rstrip().split())
    
    for i in range(10):
        for j in range(10):
            pos = paper[x-1+i][y-1+j]
            
            if not pos:
                area += 1
                paper[x-1+i][y-1+j] = True

print(area)