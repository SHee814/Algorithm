def solution(land):
    dp = [land[0]]
    
    for i in range(1, len(land)):
        dp.append([
            max(dp[i-1][1], dp[i-1][2], dp[i-1][3]) + land[i][0],
            max(dp[i-1][0], dp[i-1][2], dp[i-1][3]) + land[i][1],
            max(dp[i-1][0], dp[i-1][1], dp[i-1][3]) + land[i][2],
            max(dp[i-1][0], dp[i-1][1], dp[i-1][2]) + land[i][3],
        ])
        
    return max(dp[-1])