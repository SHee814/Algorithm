import sys

input = sys.stdin.readlines()
N, M = map(int, input[0].split())
A = set(map(lambda x: x.strip(), input[1:N+1]))
B = set(map(lambda x: x.strip(), input[N+1:]))
C = A & B
print(len(C))
print('\n'.join(sorted(map(str, C))))