import sys

N, M = map(int, input().split())
baskets = [i + 1 for i in range(N)]

for line in sys.stdin:
    i, j = map(int, line.rstrip().split())
    part = baskets[i-1:j]
    part.reverse()
    
    for bi, pi in zip(range(i-1, j), range(len(part))):
        baskets[bi] = part[pi]

print(' '.join(map(str, baskets)))