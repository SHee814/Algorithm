import sys

N = int(input())
data = list(set([sys.stdin.readline().strip() for _ in range(N)]))
data.sort(key=lambda x: (len(x), x))

for i in data:
    print(i)
        