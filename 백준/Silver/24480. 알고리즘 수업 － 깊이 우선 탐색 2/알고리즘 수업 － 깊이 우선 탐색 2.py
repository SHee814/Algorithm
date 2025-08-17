import sys

N, M, R = map(int,input().split())
E = [[] for _ in range(N)]
visited = [0 for _ in range(N)]
stack = [R]
count = 1

for line in sys.stdin.readlines():
    s, e = map(int, line.split())
    E[s-1].append(e)
    E[e-1].append(s)

for line in E:
    line.sort()

while len(stack) > 0:
    cn = stack.pop()

    if visited[cn-1] > 0:
        continue
        
    visited[cn-1] = count
    count += 1
    
    for nn in E[cn-1]:
        stack.append(nn)

print('\n'.join(map(str, visited)))