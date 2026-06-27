def solution(s):
    result = ''
    
    for i in range(len(s)):
        t = s[i]
        
        if i == 0 or s[i-1] == ' ':
            t = s[i].upper()
        else:
            t = s[i].lower()
            
        result += t
        
    return result
        