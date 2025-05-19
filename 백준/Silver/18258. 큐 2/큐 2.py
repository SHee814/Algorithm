from collections import deque
import sys

N = int(input())
deq = deque()

for _ in range(N):
    line = sys.stdin.readline().split()
    
    if line[0] == 'push':
        deq.append(line[1])
    elif line[0] == 'pop':
        print(deq.popleft() if len(deq) > 0 else -1)
    elif line[0] == 'size':
        print(len(deq))
    elif line[0] == 'empty':
        print(1 if len(deq) == 0 else 0)
    elif line[0] == 'front':
        print(deq[0] if len(deq) > 0 else -1)
    elif line[0] == 'back':
        print(deq[-1] if len(deq) > 0 else -1)
    
    