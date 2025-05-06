import sys

X = int(input())
n = int(input())
total = 0

for line in sys.stdin:
    p, c = map(int, line.rstrip().split())
    total += p * c

print('Yes' if X == total else 'No')