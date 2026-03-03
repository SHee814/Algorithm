from collections import deque

N = int(input())
Q = deque([x for x in range(1,N+1)])

while len(Q) > 2:
    Q.popleft()
    Q.append(Q.popleft())
    
print(Q[-1])