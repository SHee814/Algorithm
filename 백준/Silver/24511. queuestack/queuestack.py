import sys
from collections import deque

input = sys.stdin.read().splitlines()
N = int(input[0])
A = input[1].split()
B = input[2].split()
M = int(input[3])
C = input[4].split()
D = deque([b for i, b in enumerate(B[::-1]) if A[N-1-i] == "0"])
S = []

for c in C:
    D.append(c)
    S.append(D.popleft())

print(' '.join(S))