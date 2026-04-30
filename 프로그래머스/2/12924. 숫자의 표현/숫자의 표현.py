import math

def solution(n):
    answer = 0
    for m in range(1, math.ceil(n/2)):
        sum = 0
        num = m
        
        while sum < n:
            sum += num
            num += 1
            
        if sum == n:
            answer += 1
            
    return answer+1
        