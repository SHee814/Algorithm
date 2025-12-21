import sys

A, B, C = map(int, sys.stdin.readlines())

if A + B + C != 180:
    print("Error")
elif A == B and B == C and C == A:
    print("Equilateral")
elif A != B and B != C and C != A:
    print("Scalene")
else:
    print("Isosceles")