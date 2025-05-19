from collections import deque

N = int(input())
deq = deque([N + 1 - x for x in range(1, N + 1)])

while len(deq) > 1:
    deq.pop()
    deq.appendleft(deq.pop())

print(deq[0])