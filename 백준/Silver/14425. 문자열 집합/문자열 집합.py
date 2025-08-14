import sys

N, M = map(int, input().split())
S = set([sys.stdin.readline().rstrip() for _ in range(N)])
count = 0

for _ in range(M):
    x = sys.stdin.readline().rstrip()
    count += 1 if x in S else 0

print(count)