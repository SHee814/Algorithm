A, B, C = sorted(map(int, input().split()))

if A + B > C:
    print(A + B + C)
else:
    print(2 * (A + B) - 1)