import sys

N = int(input())
price = [[int(y) for y in x.split()] for x in sys.stdin.readlines()]
dp = [0, 0, 0] * N
dp[0] = price[0]

for i in range(1,N):
    dp[i] = [
        min(dp[i-1][1], dp[i-1][2]) + price[i][0],
        min(dp[i-1][0], dp[i-1][2]) + price[i][1],
        min(dp[i-1][0], dp[i-1][1]) + price[i][2]
    ]

print(min(dp[N-1]))