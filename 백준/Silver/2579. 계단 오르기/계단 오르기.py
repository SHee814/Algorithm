import sys

N = int(input())
S = list(map(int, sys.stdin.readlines()))
dp = [[S[0], S[0]]]

for i in range(1, N):
    step = [
        dp[i - 1][1] + S[i],
        (max(dp[i - 2]) if i >= 2 else 0) + S[i]
    ]
    dp.append(step)

print(max(dp[N-1]))