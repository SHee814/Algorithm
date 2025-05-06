import sys

T = int(input())

for i, line in enumerate(sys.stdin):
    a, b = map(int, line.rstrip().split())
    print(f'Case #{i + 1}: {a + b}')