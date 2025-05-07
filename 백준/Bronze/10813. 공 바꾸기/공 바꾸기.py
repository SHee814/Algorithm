import sys

N, M = map(int, input().split())
baskets = [i+1 for i in range(N)]

for line in sys.stdin:
    i, j = map(int, line.rstrip().split())
    [baskets[i-1], baskets[j-1]] = [baskets[j-1], baskets[i-1]]

print(' '.join(map(str, baskets)))