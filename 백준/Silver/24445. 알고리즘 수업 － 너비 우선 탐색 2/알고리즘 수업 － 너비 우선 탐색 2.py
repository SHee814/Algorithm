import sys
from collections import deque

N, M, R = map(int, input().split())
E = [[] for _ in range(N)]
visited = [0] * N
queue = deque([R])
count = 1

for line in sys.stdin.readlines():
    s, e = map(int, line.split())
    E[s-1].append(e)
    E[e-1].append(s)

for line in E:
    line.sort(reverse=True)
    
while len(queue) > 0:
    cn = queue.popleft()
    
    if visited[cn-1] > 0:
        continue
        
    visited[cn-1] = count
    count += 1
    
    for nn in E[cn-1]:
        queue.append(nn)
        
print('\n'.join(map(str, visited)))