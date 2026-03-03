import sys
from collections import deque

N = int(input())
D = deque()

for line in sys.stdin.read().splitlines():
    cmd = line.split()
    
    match cmd[0]:
        case '1':
            D.appendleft(cmd[1])
        case '2':
            D.append(cmd[1])
        case '3':
            print(D.popleft() if D else -1)
        case '4':
            print(D.pop() if D else -1)
        case '5':
            print(len(D))
        case '6':
            print(1 if not D else 0)
        case '7':
            print(D[0] if D else -1)
        case '8':
            print(D[-1] if D else -1)