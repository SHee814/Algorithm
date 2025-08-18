def solution(s):
    def split_string(string):
        result = string[:]
        head = result[0]
        count = [1, 0]
        
        for i in range(1, len(result)):
            if (head == result[i]):
                count[0] += 1
            else:
                count[1] += 1
                
            if count[0] == count[1]:
                return [result[:i], result[i+1:]]
            
        return [result, '']

    count = 0
    
    while len(s) > 0:
        _, ns = split_string(s)
        count += 1
        s = ns
        
    return count
