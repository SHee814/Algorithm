# 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
# 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
# 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.

A, B, C = map(int, input().split())

if A == B and B == C:
    print(A * 1_000 + 10_000)
elif A != B and B != C and C != A:
    print(max(A, B, C) * 100)
else:
    if A == B or A == C:
        print(A * 100 + 1_000)
    else:
        print(B * 100 + 1_000)