import sys

N, M = map(int, input().split())
baskets = [0 for x in range(N)]

for line in sys.stdin:
    i, j, k = map(int, line.rstrip().split())
    
    for idx in range(i-1, j):
        baskets[idx] = k

print(' '.join(map(str, baskets)))