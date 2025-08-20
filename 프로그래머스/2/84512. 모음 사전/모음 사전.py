def solution(word):
    X = ['A', 'E', 'I', 'O', 'U']
    V = [[False] * 5 for _ in range(5)]
    count = 0
    result = 0
    
    def dfs(s):
        nonlocal count, result
        count += 1
        
        if result > 0:
            return
        
        if s == word:
            result = count
            return
        
        if len(s) == 5:
            return

        for i in range(5):
            if (V[len(s)][i]):
                continue
                
            V[len(s)][i] = True
            dfs(s+X[i])
            V[len(s)][i] = False
    
    for i in range(5):
        V[0][i] = True
        dfs(X[i])
        V[0][i] = False
    
    return result