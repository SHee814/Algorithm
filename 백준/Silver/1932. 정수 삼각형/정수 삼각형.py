import sys

N = int(input())
T = [[int(y) for y in x.split()] for x in sys.stdin.readlines()]
dp = []

for i in range(N):
    if i < 1:
        dp.append(T[0])
        continue
        
    line = []

    for j in range(i+1):
        left = dp[i-1][j-1] if j != 0 else 0
        right = dp[i-1][j] if j < i else 0
        line.append(max(left, right) + T[i][j])

    dp.append(line)

print(max(dp[N-1]))