import sys
from collections import deque

N = int(input())
Q = deque([])

for line in sys.stdin.read().splitlines():
    cmd = line.split()
    
    match cmd[0]:
        case 'push':
            Q.append(cmd[1])
        case 'pop':
            print(Q.popleft() if Q else -1)
        case 'size':
            print(len(Q))
        case 'empty':
            print(int(not Q))
        case 'front':
            print(Q[0] if Q else -1)
        case 'back':
            print(Q[-1] if Q else -1)
