def solution(s):
    closest = {}
    result = []
    
    for i in range(len(s)):
        if s[i] in closest:
            result.append(i - closest[s[i]])
            closest[s[i]] = i
        else:
            closest[s[i]] = i
            result.append(-1)
            
    return result