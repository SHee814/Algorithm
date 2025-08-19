def solution(arr1, arr2):
    p = len(arr1)
    q = len(arr1[0])
    r = len(arr2[0])
    result = []
    
    for i in range(p):
        row = [0 for _ in range(r)]
        
        for j in range(q):
            for k in range(r):
                row[k] += arr1[i][j] * arr2[j][k]
                
            
        result.append(row)
        
    return result