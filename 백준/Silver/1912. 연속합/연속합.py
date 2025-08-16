N = int(input())
S = list(map(int, input().split()))
dp = [[-float('inf')] * 2] * len(S)
dp[0] = [S[0], S[0]]

for i in range(1,len(S)):
    dp[i] = [max(dp[i-1][0], dp[i-1][1]) + S[i], S[i]]
    
print(max(map(max, dp)))