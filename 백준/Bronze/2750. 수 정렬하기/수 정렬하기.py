import sys

N = int(input())
result = sorted([int(sys.stdin.readline()) for _ in range(N)])

print('\n'.join(map(str, result)))