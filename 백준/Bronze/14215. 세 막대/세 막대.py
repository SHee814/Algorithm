S = list(map(int, input().split()))
S.sort()
a, b, c = S

if a + b <= c:
    print((a + b) * 2 - 1)
else: print(a + b + c)