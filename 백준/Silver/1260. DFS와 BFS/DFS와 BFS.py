import sys
from collections import deque

N, M, V = map(int, input().split())
E = [[] for _ in range(N)]

for line in sys.stdin.readlines():
    s, e = map(int, line.split())
    E[s-1].append(e)
    E[e-1].append(s)
    
def dfs(sn):
    stack = [sn]
    visited = set()
    result = []
    
    while len(stack) > 0:
        cn = stack.pop()
        
        if cn in visited:
            continue
            
        visited.add(cn)
        result.append(cn)
        
        for nn in E[cn-1]:
            stack.append(nn)
            
    return result

def bfs(sn):
    queue = deque([sn])
    visited = set()
    result = []
    
    while len(queue) > 0:
        cn = queue.popleft()
        
        if cn in visited:
            continue
            
        visited.add(cn)
        result.append(cn)
        
        for nn in E[cn-1]:
            queue.append(nn)
            
    return result

for line in E:
    line.sort(reverse=True)

print(*dfs(V))

for line in E:
    line.sort()

print(*bfs(V))