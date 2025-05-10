import math

A, B, V = map(int, input().split())
H = V - A
C = A - B

print(math.ceil(H / C) + 1)