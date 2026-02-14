import sys

input = [map(int, line.split()) for line in sys.stdin.readlines()]
A = set(input[1])
B = set(input[2])
C = A & B
print(len(A) + len(B) - (2 * len(C)))