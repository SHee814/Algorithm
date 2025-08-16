import sys

T = int(input())
TC = list(map(int, sys.stdin.readlines()))
dp = [1,1,1,2,2, *[None for _ in range(max(TC)-5)]]

def padovan(n):
    if dp[n-1] is not None:
        return dp[n-1]
    
    dp[n-1] = padovan(n-5) + padovan(n-1)
    return dp[n-1]


for tc in TC:
    print(padovan(tc))
        