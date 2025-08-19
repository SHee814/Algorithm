def solution(ingredient):
    stack = []
    result = 0
    
    for x in ingredient:
        stack.append(x)
        
        if len(stack) < 4:
            continue
            
        if stack[-4] == 1 and stack[-3] == 2 and stack[-2] == 3 and stack[-1] == 1:
            for _ in range(4):
                stack.pop()
                
            result += 1
                
    return result
    