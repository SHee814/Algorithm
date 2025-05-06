import sys

for line in sys.stdin:
    a, b = map(int, line.rstrip().split())
    print(a + b)