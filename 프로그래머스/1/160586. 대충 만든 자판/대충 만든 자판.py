def solution(keymap, targets):
    shortcut = {}
    
    for km in keymap:
        for i in range(len(km)):
            char = km[i]
            
            if char not in shortcut:
                shortcut[char] = i+1
            else:
                shortcut[char] = min(shortcut[char], i+1)
                
    result = []
    
    for target in targets:
        count = 0
        
        for t in target:
            if t not in shortcut:
                count = -1
                break
            else:
                count += shortcut[t]
            
        result.append(count)
        
    return result