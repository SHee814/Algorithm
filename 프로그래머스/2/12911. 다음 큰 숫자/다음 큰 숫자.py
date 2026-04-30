def solution(n):
    cnt_n = format(n, 'b').count('1')
    x = n+1
    
    while True:
        cnt_x = format(x, 'b').count('1')
        
        if cnt_n == cnt_x:
            return x
        
        x += 1