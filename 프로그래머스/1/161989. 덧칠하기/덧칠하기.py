def solution(n, m, section):
    x = section[0] + m - 1
    count = 1
    idx = 0
    
    while x < section[-1]:        
        while section[idx] <= x:
            idx += 1

        x = section[idx] + m - 1
        count += 1
    
    return count