import sys

N = int(input())
M = int(input())
E = [[] for _ in range(N)]
visited = set()
stack = [1]

for line in sys.stdin.readlines():
    s, e = map(int, line.split())
    E[s-1].append(e)
    E[e-1].append(s)

while len(stack) > 0:
    cn = stack.pop()
    
    if cn in visited:
        continue
    
    visited.add(cn)
    
    for nn in E[cn-1]:
        stack.append(nn)

print(len(visited)-1)