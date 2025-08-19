def solution(s):
    open = 0
    
    for x in s:
        if x == '(':
            open += 1
            continue
            
        if open == 0:
            return False
        
        open -= 1
        
    return True if open == 0 else False