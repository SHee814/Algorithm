import sys
from collections import deque

N = int(input())
deq = deque()

for line in sys.stdin:
    cmd = line.rstrip().split()
    
    if cmd[0] == '1':
        deq.appendleft(cmd[1])
    elif cmd[0] == '2':
        deq.append(cmd[1])
    elif cmd[0] == '3':
        print(deq.popleft() if len(deq) > 0 else -1)
    elif cmd[0] == '4':
        print(deq.pop() if len(deq) > 0 else -1)
    elif cmd[0] == '5':
        print(len(deq))
    elif cmd[0] == '6':
        print(1 if len(deq) == 0 else 0)
    elif cmd[0] == '7':
        print(deq[0] if len(deq) > 0 else -1)
    elif cmd[0] == '8':
        print(deq[-1] if len(deq) > 0 else -1)
    